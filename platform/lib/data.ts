/**
 * Data Layer — mock/placeholder data for the ML Bootcamp Platform
 * Replace these with real API/database calls as the platform grows.
 */

// Types defined in spec
export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  streakDays: number;
  rank: Rank | null;
}

export interface Module {
  id: string;
  title: string;
  description: string | null;
  progress?: number;
  xpReward: number;
  difficulty: string;
}

export interface Lab {
  id: string;
  lessonId: string | null;
  title: string;
  description: string | null;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  // Mock-compatibility fields (from UI, not in DB yet)
  name?: string;
  icon?: string;
  level?: number;
  progress?: number;
  locked?: boolean;
  requirement?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  xpReward: number;
  unlockedAt: Date | undefined;
}

export interface Project {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  // Mock-compatibility fields (from UI, not in DB yet)
  progress?: number;
  techTags?: string[];
  difficultyBadge?: string;
  category?: string;
}

export interface Rank {
  id: string;
  name: string;
  order: number;
  xpRequired: number;
  icon: string;
}

export interface Activity {
  id: string;
  type: string;
  message: string;
  user?: string;
  timestamp: Date;
}

export interface MetricPoint {
  date: string;
  value: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: string;
  duration: number;
  order: number;
  isCompleted?: boolean;
  quizContent?: string | null;
}

export interface LabStep {
  id: string;
  labId: string;
  stepNumber: number;
  title: string | null;
  content: string;
  description?: string;
  code?: string;
  expectedOutput?: string;
  hint?: string;
  isCompleted?: boolean;
}

export interface Deliverable {
  id: string;
  projectId: string;
  title: string;
  content: string;
  description?: string;
  estimatedHours?: number;
  createdAt: Date;
  dueDate?: Date | null;
  isCompleted?: boolean;
}

// Types defined in spec (mock data moved to repositories)

// Note: All MOCK_* arrays have been replaced by repository functions
// Type/interface exports maintained for backward compatibility