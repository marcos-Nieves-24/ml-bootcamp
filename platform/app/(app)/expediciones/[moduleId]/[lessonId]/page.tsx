import Link from "next/link"
import { notFound } from "next/navigation"
import StitchCard from "@/app/components/StitchCard"
import StitchBtn from "@/app/components/StitchBtn"
import LessonCompleteButton from "@/app/components/LessonCompleteButton"
import QuizCard from "@/app/components/QuizCard"
import { getModules, getLessons, getLessonProgress } from "@/lib/repositories"
import { auth } from "@/lib/auth"
import { parseQuizMarkdown } from "@/lib/quiz"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import rehypeSanitize, { defaultSchema } from "rehype-sanitize"
import remarkGfm from "remark-gfm"
import { rehypeIframeAllowlist } from "@/lib/remark-iframe-allowlist"

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; lessonId: string }>
}) {
  const { moduleId, lessonId } = await params
  const session = await auth()
  const userId = session?.user?.id

  const modules = await getModules()
  const mod = modules.find((m) => m.moduleId === moduleId)

  if (!mod) notFound()

  const lessons = await getLessons(mod.id, userId)
  const lesson = lessons.find((l) => l.lessonId === lessonId)

  if (!lesson) notFound()

  const isCompleted = userId ? await getLessonProgress(userId, lesson.id) : false
  const quiz = parseQuizMarkdown(lesson.quizContent ?? "")

  const nextLesson = lessons.find((l) => l.order === lesson.order + 1)

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant">
        <Link href="/expediciones" className="hover:text-primary transition-colors">
          Expediciones
        </Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <Link href={`/expediciones/${mod.moduleId}`} className="hover:text-primary transition-colors">
          {mod.title}
        </Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-primary font-bold truncate">{lesson.title}</span>
      </nav>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-on-surface mb-2">{lesson.title}</h1>
        <div className="flex items-center gap-4 text-sm text-on-surface-variant">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">schedule</span>
            {lesson.duration} min
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">menu_book</span>
            Lección {lesson.order}
          </span>
        </div>
      </div>

      {/* Lesson content */}
      <StitchCard className="p-6 md:p-8 glass-card" hover={false}>
        <div className="prose prose-lg max-w-none prose-headings:text-on-surface prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-on-surface-variant prose-p:leading-relaxed prose-strong:text-on-surface prose-code:text-primary prose-code:bg-surface-container prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-surface-container prose-pre:border prose-pre:border-border-muted prose-pre:rounded-xl prose-ul:text-on-surface-variant prose-ol:text-on-surface-variant prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-blockquote:border-l-primary prose-blockquote:text-on-surface-variant">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeRaw,
              rehypeIframeAllowlist,
              [rehypeSanitize, {
                ...defaultSchema,
                tagNames: [...(defaultSchema.tagNames ?? []), "iframe"],
                attributes: {
                  ...defaultSchema.attributes,
                  iframe: [
                    ["src", /^\/(interactives\/|content\/module01_ai\/interactives\/)/],
                    "loading",
                    "title",
                    "allowfullscreen",
                    ["width", /^\d+%?$/],
                    ["height", /^\d+%?$/],
                    "class",
                    "style",
                  ],
                  // Allow style and class on common block/inline elements
                  // so lesson HTML (<div style="...">, <span class="...">, etc.) renders correctly
                  div: ["style", "className"],
                  span: ["style", "className"],
                  p: ["style", "className"],
                  pre: ["style", "className"],
                  code: ["style", "className"],
                  strong: ["style", "className"],
                  em: ["style", "className"],
                  blockquote: ["style", "className"],
                  a: ["style", "className"],
                  ul: ["style", "className"],
                  ol: ["style", "className"],
                  li: ["style", "className"],
                  table: ["style", "className"],
                  th: ["style", "className"],
                  td: ["style", "className"],
                  tr: ["style", "className"],
                  h1: ["style", "className"],
                  h2: ["style", "className"],
                  h3: ["style", "className"],
                  h4: ["style", "className"],
                  h5: ["style", "className"],
                  h6: ["style", "className"],
                },
              }],
            ]}
          >{lesson.content}</Markdown>
        </div>
      </StitchCard>

      {/* Quiz */}
      {quiz && quiz.questions.length > 0 && (
        <StitchCard className="p-6 md:p-8" hover={false}>
          <QuizCard quiz={quiz} />
        </StitchCard>
      )}

      {/* Complete button */}
      {userId && (
        <LessonCompleteButton
          lessonId={lessonId}
          isCompleted={isCompleted}
          moduleId={moduleId}
        />
      )}

      {!userId && (
        <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <span className="material-symbols-outlined text-primary">info</span>
          <p className="text-sm text-on-surface-variant">
            <Link href="/login" className="text-primary font-bold hover:underline">Inicia sesión</Link> para marcar esta lección como completada.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <StitchBtn href={`/expediciones/${moduleId}`} variant="secondary">
          Volver al módulo
        </StitchBtn>
        {nextLesson && (
          <StitchBtn href={`/expediciones/${moduleId}/${nextLesson.lessonId}`}>
            Siguiente lección
          </StitchBtn>
        )}
      </div>
    </div>
  )
}
