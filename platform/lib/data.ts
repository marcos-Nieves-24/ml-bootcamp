/* ------------------------------------------------------------------ */
/*  Data Layer — mock/placeholder data for the ML Bootcamp Platform   */
/*  Replace these with real API/database calls as the platform grows.  */
/* ------------------------------------------------------------------ */

export interface LearningSpace {
  title: string
  description: string
  href: string
  color: string
}

export const learningSpaces: LearningSpace[] = [
  {
    title: "Dashboard",
    description: "Panel de control con métricas de aprendizaje y progreso",
    href: "/dashboard",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Instituto",
    description: "Explora la arquitectura del conocimiento ML y patrones fundamentales",
    href: "/instituto",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Laboratorio",
    description: "Experimenta con notebooks interactivos y código ejecutable",
    href: "/laboratorio",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Taller",
    description: "Proyectos prácticos guiados para aplicar conceptos en contexto real",
    href: "/taller",
    color: "from-orange-500 to-red-500",
  },
]

/* Dashboard */

export interface DashboardCard {
  title: string
  description: string
  icon: string
  color: string
  metric?: string
  progress?: number
  points?: number
  level?: number
}

export const dashboardCards: DashboardCard[] = [
  {
    title: "Experiencia Actual",
    description: "Has completado 3 de 8 módulos del plan de aprendizaje",
    metric: "37.5%",
    icon: "📈",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Misión Actual",
    description: "Completar módulo 'Introducción al Machine Learning' y realizar laboratorio",
    progress: 70,
    icon: "🎯",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Nivel XP",
    description: "Nivel 2 - Aprendiz Activo. 1500 puntos XP ganados",
    points: 1500,
    level: 2,
    icon: "⭐",
    color: "from-orange-500 to-red-500",
  },
]

/* Instituto (Knowledge Map) */

export interface KnowledgeArea {
  title: string
  description: string
  status: "Completado" | "En Progreso" | "Pendiente"
  progress: number
  color: string
}

export const knowledgeMap: KnowledgeArea[] = [
  {
    title: "Fundamentos de ML",
    description: "Conceptos básicos: algoritmos, pipeline, estrategias de entrenamiento",
    status: "Completado",
    progress: 100,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Modelos y Algoritmos",
    description: "Aprendizaje supervisado, no supervisado, reforzamiento y híbrido",
    status: "En Progreso",
    progress: 45,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Ingeniería de Datos",
    description: "Preprocesamiento, feature engineering, manejo de datos a gran escala",
    status: "Pendiente",
    progress: 0,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Ética y Responsabilidad",
    description: "Principios de ML ético, sesgos, privacidad y seguridad",
    status: "Pendiente",
    progress: 0,
    color: "from-orange-500 to-red-500",
  },
]

/* Taller (Workshops) */

export interface Workshop {
  title: string
  description: string
  duration: string
  difficulty: "Principiante" | "Intermedio" | "Avanzado"
  students: number
  color: string
  icon: string
}

export const workshops: Workshop[] = [
  {
    title: "Construcción de Pipeline de Datos ML",
    description: "Construir un pipeline completo: recopilación → limpieza → feature engineering → entrenamiento",
    duration: "4 semanas",
    difficulty: "Intermedio",
    students: 89,
    color: "from-blue-500 to-cyan-500",
    icon: "🔧",
  },
  {
    title: "Implementación de Modelos de Deep Learning",
    description: "Implementar, desplegar y optimizar redes neuronales profundas en producción",
    duration: "6 semanas",
    difficulty: "Avanzado",
    students: 45,
    color: "from-purple-500 to-pink-500",
    icon: "🧠",
  },
  {
    title: "Métricas y Evaluación ML",
    description: "Dominar métricas de evaluación, validación cruzada y optimización de modelos",
    duration: "3 semanas",
    difficulty: "Principiante",
    students: 156,
    color: "from-green-500 to-teal-500",
    icon: "📊",
  },
  {
    title: "ML en la Nube",
    description: "Implementar modelos ML en la nube usando AWS, GCP y Azure",
    duration: "5 semanas",
    difficulty: "Intermedio",
    students: 78,
    color: "from-orange-500 to-red-500",
    icon: "☁️",
  },
]

/* Feature cards (home page) */

export interface FeatureCard {
  title: string
  description: string
  color: string
  icon: string
}

export const featureCards: FeatureCard[] = [
  {
    title: "Aprendizaje Modular",
    description: "Estructura organizada por módulos con progresiones claras.",
    color: "from-green-500 to-teal-500",
    icon: "📚",
  },
  {
    title: "Laboratorio Interactivo",
    description: "Ejecuta notebooks directamente en el navegador sin configuraciones.",
    color: "from-orange-500 to-red-500",
    icon: "🧪",
  },
  {
    title: "Proyectos Prácticos",
    description: "Talleres guiados para aplicar conceptos en proyectos realistas.",
    color: "from-purple-500 to-pink-500",
    icon: "🔧",
  },
]
