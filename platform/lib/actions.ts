'use server'

import { revalidatePath } from 'next/cache'
import { auth } from '@/lib/auth'
import { markLessonComplete } from '@/lib/repositories'

export async function markLessonCompleteAction(lessonId: string) {
  const session = await auth()
  if (!session?.user?.id) {
    throw new Error('Not authenticated')
  }
  await markLessonComplete(session.user.id, lessonId)
  revalidatePath('/expediciones')
}
