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
  rank: Rank;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  progress: number;
  xpReward: number;
  difficulty: 1 | 2 | 3 | 4;
}

export interface Lab {
  id: string;
  name: string;
  icon: string;
  level: number;
  progress: number;
  locked: boolean;
  requirement?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  unlockedAt?: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  progress: number;
  techTags: string[];
  difficultyBadge: string;
  category: "SaaS" | "Biotecnología";
  status: "En Progreso" | "Completado" | "Bloqueado" | "No iniciado";
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
  duration: string;
  order: number;
  isCompleted?: boolean;
}

export interface LabStep {
  id: string;
  labId: string;
  title: string;
  description: string;
  code?: string;
  expectedOutput?: string;
  hint?: string;
  isCompleted?: boolean;
}

export interface Deliverable {
  id: string;
  projectId: string;
  title: string;
  description: string;
  estimatedHours: number;
  isCompleted?: boolean;
}

// Mock data arrays

export const MOCK_USERS: UserProfile[] = [
  {
    id: "investigador-nexus-001",
    name: "Investigador Nexus",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVf21JqG8MOVG7Bw-tlRr3F7S_np7B6dP_rI4XHdzpJK3233R9Cfp7tOcXGuMU-bHEu2rrPAktt7uXXx2eJgKVAGODY4v0jlV67aJvl7G3kGItGqxPICnogVeFh-Kl5QCYXuGfRraSDBcr0pkhk70C988LODqd1EFQGTmfbPTy6bDXBJHZ0hUUXNeCn6DPI_h8eR0uBtEnKF_UDav_GGScpko3A_bL9HjEd_TyPgEfHevLexEwKyzW",
    level: 4,
    xp: 1260,
    xpToNextLevel: 740,
    streakDays: 12,
    rank: {
      id: "investigator",
      name: "Investigador",
      order: 4,
      xpRequired: 600,
      icon: "military_tech"
    }
  }
];

export const MOCK_MODULES: Module[] = [
  {
    id: "intro-ml",
    title: "Introduction to Machine Learning",
    description: "Foundation concepts and terminology in ML",
    progress: 80,
    xpReward: 500,
    difficulty: 1
  },
  {
    id: "ml-algorithms",
    title: "Machine Learning Algorithms",
    description: "Supervised, unsupervised, and reinforcement learning",
    progress: 45,
    xpReward: 700,
    difficulty: 2
  },
  {
    id: "data-engineering",
    title: "Machine Learning Data Engineering",
    description: "Data preprocessing and feature engineering",
    progress: 0,
    xpReward: 900,
    difficulty: 3
  },
  {
    id: "ethical-ml",
    title: "Ethical ML & Responsible AI",
    description: "Bias detection, fairness, and responsible development",
    progress: 0,
    xpReward: 600,
    difficulty: 4
  },
  {
    id: "model-deployment",
    title: "Model Deployment & Monitoring",
    description: "Production ML systems and MLOps",
    progress: 0,
    xpReward: 1200,
    difficulty: 2
  }
];

export const MOCK_LABS: Lab[] = [
  {
    id: "python-lab",
    name: "Python Lab",
    icon: "code",
    level: 3,
    progress: 75,
    locked: false
  },
  {
    id: "data-lab",
    name: "Data Lab",
    icon: "bar_chart",
    level: 2,
    progress: 40,
    locked: false
  },
  {
    id: "stats-lab",
    name: "Estadística Lab",
    icon: "query_stats",
    level: 1,
    progress: 20,
    locked: false
  },
  {
    id: "ml-lab",
    name: "ML Lab",
    icon: "account_tree",
    level: 4,
    progress: 0,
    locked: true,
    requirement: "Completar Python Lab Nivel 5"
  },
  {
    id: "deep-learning-lab",
    name: "Deep Learning Center",
    icon: "neurology",
    level: 5,
    progress: 0,
    locked: true,
    requirement: "Completar Estadística Lab Nivel 3"
  },
  {
    id: "ethics-lab",
    name: "Ethics in AI",
    icon: "gavel",
    level: 6,
    progress: 0,
    locked: true,
    requirement: "Alcanzar Nivel 15"
  }
];

export const MOCK_ACHIEVEMENTS: Achievement[] = [
  {
    id: "explorer",
    title: "Explorer de Datos",
    description: "Completaste tu primer análisis exploratorio",
    icon: "explore",
    xpReward: 20,
    unlockedAt: new Date("2026-06-15")
  },
  {
    id: "python-master",
    title: "Maestro de Python",
    description: "Completaste 20 ejercicios de Python",
    icon: "code",
    xpReward: 30,
    unlockedAt: new Date("2026-06-20")
  },
  {
    id: "outlier-detective",
    title: "Detective de Outliers",
    description: "Identificaste outliers en tus datos",
    icon: "troubleshoot",
    xpReward: 25,
    unlockedAt: new Date("2026-06-25")
  },
  {
    id: "quick-learner",
    title: "Aprendiz Rápido",
    description: "Completaste 5 laboratorios en una semana",
    icon: "speed",
    xpReward: 50
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: "saas-churn",
    title: "SaaS Churn Prediction",
    description: "Predicción de abandono de clientes SaaS usando modelos de clasificación y análisis de cohortes.",
    progress: 65,
    techTags: ["Python", "Scikit-learn", "Pandas", "Classification"],
    difficultyBadge: "Intermedio",
    category: "SaaS",
    status: "En Progreso"
  },
  {
    id: "protein-solubility",
    title: "Protein Solubility Analysis",
    description: "Análisis de solubilidad de proteínas con técnicas de bioinformática y ML estructural.",
    progress: 100,
    techTags: ["Python", "BioPython", "RDKit", "Deep Learning"],
    difficultyBadge: "Avanzado",
    category: "Biotecnología",
    status: "Completado"
  },
  {
    id: "customer-ltv",
    title: "Customer Lifetime Value",
    description: "Modelado predictivo del valor de vida del cliente para optimizar retención y revenue.",
    progress: 0,
    techTags: ["Python", "Regression", "Time Series", "SQL"],
    difficultyBadge: "Intermedio",
    category: "SaaS",
    status: "Bloqueado"
  },
  {
    id: "wine-quality",
    title: "Wine Quality Analysis",
    description: "Analizando características químicas para predecir calidad de vinos con modelos ensemble.",
    progress: 0,
    techTags: ["Python", "Random Forest", "XGBoost", "EDA"],
    difficultyBadge: "Principiante",
    category: "Biotecnología",
    status: "No iniciado"
  }
];

export const MOCK_RANKS: Rank[] = [
  {
    id: "novato",
    name: "Novato",
    order: 1,
    xpRequired: 0,
    icon: "verified"
  },
  {
    id: "analista",
    name: "Analista",
    order: 2,
    xpRequired: 100,
    icon: "analytics"
  },
  {
    id: "investigador-junior",
    name: "Investigador Junior",
    order: 3,
    xpRequired: 300,
    icon: "military_tech"
  },
  {
    id: "investigador",
    name: "Investigador",
    order: 4,
    xpRequired: 600,
    icon: "military_tech"
  },
  {
    id: "especialista",
    name: "Especialista",
    order: 5,
    xpRequired: 1000,
    icon: "star"
  },
  {
    id: "ml-engineer",
    name: "ML Engineer",
    order: 6,
    xpRequired: 2000,
    icon: "workspace_premium"
  }
];

export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: "activity-1",
    type: "achievement",
    message: "Completaste la misión 'Media y Mediana'",
    timestamp: new Date("2026-07-11T14:00:00Z")
  },
  {
    id: "activity-2",
    type: "community",
    message: "Elena V. comentó: 'Excelente enfoque en el Lab de Python...'",
    user: "elena.v",
    timestamp: new Date("2026-07-11T12:00:00Z")
  },
  {
    id: "activity-3",
    type: "level",
    message: "Marco R. subió de nivel",
    user: "marco.r",
    timestamp: new Date("2026-07-11T10:00:00Z")
  },
  {
    id: "activity-4",
    type: "lab",
    message: "Completaste el laboratorio 'Python Lab: Estructuras de Datos'",
    timestamp: new Date("2026-07-11T09:00:00Z")
  },
  {
    id: "activity-5",
    type: "lab",
    message: "Obtuviste 95% en 'Data Lab: Limpieza de Datos'",
    timestamp: new Date("2026-07-10T16:00:00Z")
  },
  {
    id: "activity-6",
    type: "achievement",
    message: "Desbloqueaste el logro 'Maestro de Datos'",
    timestamp: new Date("2026-07-10T14:00:00Z")
  }
];

export const MOCK_METRIC_POINTS: MetricPoint[] = [
  { date: "2026-06-01", value: 1200 },
  { date: "2026-06-08", value: 1300 },
  { date: "2026-06-15", value: 1400 },
  { date: "2026-06-22", value: 1500 },
  { date: "2026-06-29", value: 1600 },
  { date: "2026-07-06", value: 1700 },
  { date: "2026-07-11", value: 1260 }
];