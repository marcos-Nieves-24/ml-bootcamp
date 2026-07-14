import { describe, it, expect } from "vitest"
import { parseQuizMarkdown } from "../lib/quiz"

describe("parseQuizMarkdown", () => {
  it("returns null for empty content", () => {
    expect(parseQuizMarkdown("")).toBeNull()
    expect(parseQuizMarkdown(null as unknown as string)).toBeNull()
  })

  it("parses quiz title", () => {
    const raw = `# Quiz: Types of AI\n\n## Multiple Choice (1 question)\n\n**1. Test?**\n\na) Option A\n`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.title).toBe("Types of AI")
  })

  it("parses multiple choice questions with options", () => {
    const raw = `# Quiz: Test\n\n## Multiple Choice (2 questions)\n\n**1. First question?**\n\na) Option A\nb) Option B\n\n**2. Second question?**\n\na) Choice 1\nb) Choice 2\n`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.questions).toHaveLength(2)
    expect(quiz?.questions[0].type).toBe("multiple-choice")
    expect(quiz?.questions[0].options).toHaveLength(2)
    expect(quiz?.questions[0].options?.[0].label).toBe("a")
    expect(quiz?.questions[0].options?.[0].text).toBe("Option A")
    expect(quiz?.questions[1].options).toHaveLength(2)
  })

  it("parses short-answer questions", () => {
    const raw = `# Quiz: Test\n\n## Short Answer (1 question)\n\n**6. Explain something?**\n`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.questions).toHaveLength(1)
    expect(quiz?.questions[0].type).toBe("short-answer")
    expect(quiz?.questions[0].question).toContain("Explain")
  })

  it("parses coding questions", () => {
    const raw = `# Quiz: Test\n\n## Coding Question (1 question)\n\n**8.** Write a function\n`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.questions).toHaveLength(1)
    expect(quiz?.questions[0].type).toBe("coding")
  })

  it("handles mixed question types in correct sections", () => {
    const raw = `# Quiz: Mixed\n\n## Multiple Choice (1 question)\n\n**1. MC?**\n\na) A\nb) B\n\n## Short Answer (1 question)\n\n**2. SA?**\n\n## Coding Question (1 question)\n\n**3.** Code\n`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.questions).toHaveLength(3)
    expect(quiz?.questions[0].type).toBe("multiple-choice")
    expect(quiz?.questions[0].options).toHaveLength(2)
    expect(quiz?.questions[1].type).toBe("short-answer")
    expect(quiz?.questions[2].type).toBe("coding")
  })

  it("parses answer key for MC questions", () => {
    const raw = `# Quiz: Test\n\n## Multiple Choice (2 questions)\n\n**1. First?**\n\na) A\nb) B\n\n**2. Second?**\n\na) X\nb) Y\n\n---\n\n## Answer Key\n\n1. **a)** Option A text\n2. **b)** Option Y text\n`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.questions[0].correctAnswer).toBe("a")
    expect(quiz?.questions[0].correctText).toBe("Option A text")
    expect(quiz?.questions[1].correctAnswer).toBe("b")
    expect(quiz?.questions[1].correctText).toBe("Option Y text")
  })

  it("parses answer key without bold markers", () => {
    const raw = `# Quiz: Test\n\n## Multiple Choice (1 question)\n\n**1. Question?**\n\na) A\nb) B\n\n---\n\n## Answer Key\n\n1. a) Correct answer\n`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.questions[0].correctAnswer).toBe("a")
    expect(quiz?.questions[0].correctText).toBe("Correct answer")
  })

  it("parses answer key for SA questions without letter", () => {
    const raw = `# Quiz: Test\n\n## Short Answer (1 question)\n\n**6. Explain?**\n\n---\n\n## Answer Key\n\n6. This is the explanation\n`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.questions[0].correctAnswer).toBeUndefined()
    expect(quiz?.questions[0].correctText).toBe("This is the explanation")
  })

  it("does not include answer key section questions", () => {
    const raw = `# Quiz: Test\n\n## Multiple Choice (1 question)\n\n**1. Question?**\n\na) A\nb) B\n\n---\n\n## Answer Key\n\n1. **a)** Correct\n\n**99. Not a question**\n`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.questions).toHaveLength(1)
  })

  it("handles real-world quiz format", () => {
    const raw = `# Quiz: Types of AI

## Multiple Choice (5 questions)

**1. Which of the following best describes Narrow AI?**

a) AI that is not very intelligent
b) AI designed to perform a specific task or narrow range of tasks
c) AI that can perform any intellectual task a human can
d) AI that is self-aware

**2. Deep Blue, the chess computer that beat Garry Kasparov, is an example of which functionality type?**

a) Limited Memory
b) Theory of Mind
c) Reactive Machine
d) Self-Aware

## Short Answer (2 questions)

**6. Explain why ChatGPT is considered Narrow AI despite its impressive abilities.**

**7. What is the theory of mind type of AI?**

## Coding Question (1 question)

**8.** Write a function

---

## Answer Key

1. **b)** AI designed to perform a specific task
2. **c)** Reactive Machine
6. ChatGPT is Narrow AI because
7. Theory of Mind AI
`
    const quiz = parseQuizMarkdown(raw)
    expect(quiz?.questions).toHaveLength(5)

    // MC questions
    expect(quiz?.questions[0].type).toBe("multiple-choice")
    expect(quiz?.questions[0].options).toHaveLength(4)
    expect(quiz?.questions[0].correctAnswer).toBe("b")

    expect(quiz?.questions[1].type).toBe("multiple-choice")
    expect(quiz?.questions[1].options).toHaveLength(4)
    expect(quiz?.questions[1].correctAnswer).toBe("c")

    // SA questions
    expect(quiz?.questions[2].type).toBe("short-answer")
    expect(quiz?.questions[2].options).toBeUndefined()
    expect(quiz?.questions[2].correctText).toContain("ChatGPT")

    expect(quiz?.questions[3].type).toBe("short-answer")
    expect(quiz?.questions[3].correctText).toContain("Theory of Mind")

    // Coding
    expect(quiz?.questions[4].type).toBe("coding")
  })
})
