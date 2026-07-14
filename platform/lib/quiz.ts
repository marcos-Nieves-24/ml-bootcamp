export interface QuizOption {
  label: string
  text: string
}

export interface QuizQuestion {
  number: number
  type: "multiple-choice" | "short-answer" | "coding"
  question: string
  options?: QuizOption[]
  correctAnswer?: string // letter for MC (e.g. "b")
  correctText?: string   // full answer text for SA/Coding
}

export interface QuizData {
  title: string
  questions: QuizQuestion[]
}

/**
 * Parse quiz markdown content into structured data.
 *
 * Expected format:
 *   # Quiz: <Title>
 *   ## Multiple Choice (N questions)
 *   **1. Question?**
 *   a) Option a
 *   b) Option b
 *   ...
 *   ## Short Answer (N questions)
 *   **N. Question?**
 *   ## Coding Question (N questions)
 *   **N.** Question...
 *   ---
 *   ## Answer Key
 *   1. **b)** Answer text
 */
export function parseQuizMarkdown(raw: string): QuizData | null {
  if (!raw) return null

  const lines = raw.split("\n")

  // Extract title
  const titleLine = lines.find(l => /^#\s+Quiz:/i.test(l))
  const title = titleLine?.replace(/^#\s+Quiz:\s*/i, "").trim() || "Quiz"

  const answerKey = new Map<number, { letter?: string; text: string }>()
  let inCodeBlock = false
  let inAnswerKey = false

  // First pass: find answer key
  for (const line of lines) {
    const t = line.trim()
    if (t.startsWith("```")) { inCodeBlock = !inCodeBlock; continue }
    if (inCodeBlock) continue
    if (/^##\s+Answer Key/i.test(t)) { inAnswerKey = true; continue }
    if (!inAnswerKey) continue

    // Parse: "N. **x)** text" or "N. x) text" or "N. text"
    // Strip bold markers first
    const cleaned = t.replace(/\*\*/g, "").trim()
    const numMatch = cleaned.match(/^(\d+)\.\s+(.+)/)
    if (!numMatch) continue

    const num = parseInt(numMatch[1])
    const rest = numMatch[2].trim()

    // Try to extract a single-letter answer at the start: "b) text"
    const letterMatch = rest.match(/^([a-z])\)\s+(.*)/)
    if (letterMatch) {
      answerKey.set(num, { letter: letterMatch[1], text: letterMatch[2].trim() })
    } else {
      answerKey.set(num, { text: rest })
    }
  }

  // Second pass: parse questions
  inCodeBlock = false
  inAnswerKey = false
  let currentSection: "multiple-choice" | "short-answer" | "coding" | null = null
  let currentQuestion: Partial<QuizQuestion> | null = null
  const questions: QuizQuestion[] = []

  for (const line of lines) {
    const t = line.trim()
    if (t.startsWith("```")) { inCodeBlock = !inCodeBlock; continue }
    if (inCodeBlock) continue
    if (/^##\s+Answer Key/i.test(t)) break
    if (/^#\s+Quiz:/i.test(t)) continue
    if (/^---+$/.test(t)) break

    // Detect sections — flush current question BEFORE changing section
    const sectionMatch = t.match(/^##\s+(Multiple Choice|Short Answer|Coding Question)/i)
    if (sectionMatch) {
      if (currentQuestion?.question && currentSection) {
        questions.push(finalizeQuestion(currentQuestion, currentSection, answerKey))
        currentQuestion = null
      }
      const name = sectionMatch[1].toLowerCase()
      if (name.startsWith("multiple")) currentSection = "multiple-choice"
      else if (name.startsWith("short")) currentSection = "short-answer"
      else if (name.startsWith("coding")) currentSection = "coding"
      continue
    }

    // Detect question: **N. Question text**
    // Two formats: "**1. Question?**" or "**1.** Question?"
    let qMatch = t.match(/^\*\*(\d+)\.\s+(.+?)\*\*$/)
    if (!qMatch) qMatch = t.match(/^\*\*(\d+)\.\*\*\s+(.+)/)

    if (qMatch) {
      if (currentQuestion?.question && currentSection) {
        questions.push(finalizeQuestion(currentQuestion, currentSection, answerKey))
      }
      currentQuestion = {
        number: parseInt(qMatch[1]),
        question: qMatch[2].trim(),
        options: [],
      }
      continue
    }

    // Detect option line: x) Option text (only within MC section)
    const optMatch = t.match(/^([a-z])\)\s+(.+)/)
    if (optMatch && currentQuestion && currentSection === "multiple-choice") {
      if (!currentQuestion.options) currentQuestion.options = []
      currentQuestion.options.push({ label: optMatch[1], text: optMatch[2].trim() })
      continue
    }
  }

  // Push last question
  if (currentQuestion?.question && currentSection) {
    questions.push(finalizeQuestion(currentQuestion, currentSection, answerKey))
  }

  return { title, questions }
}

function finalizeQuestion(
  q: Partial<QuizQuestion>,
  section: "multiple-choice" | "short-answer" | "coding",
  answerKey: Map<number, { letter?: string; text: string }>,
): QuizQuestion {
  const key = answerKey.get(q.number ?? 0)
  return {
    number: q.number ?? 0,
    type: section,
    question: q.question ?? "",
    options: section === "multiple-choice" ? (q.options ?? []) : undefined,
    correctAnswer: key?.letter,
    correctText: key?.text,
    // Inline MC answer text from answer key if available
  }
}
