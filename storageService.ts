import { UserProgress, MistakeRecord } from '../types/excel';

const STORAGE_KEY = 'excel_akademi_progress_v1';

const DEFAULT_PROGRESS: UserProgress = {
  completedLessonIds: [],
  currentLessonId: 'f1-l1',
  completedTasks: {},
  quizScores: {},
  mistakes: [],
  skillMastery: {
    'Arayüz & Temel İşlemler': 20,
    'Formül & Hücre Başvuruları ($)': 10,
    'Matematik & İstatistik': 15,
    'Mantıksal Fonksiyonlar (EĞER)': 10,
    'Koşullu Hesaplamalar (ÇOKETOPLA)': 5,
    'Arama Fonksiyonları (DÜŞEYARA/ÇAPRAZARA)': 5,
    'Metin & Tarih Fonksiyonları': 10,
    'Veri Analizi & PivotTable': 5,
  },
  totalTimeSpentMinutes: 45,
  lastStudyDate: new Date().toISOString().split('T')[0],
  unlockAllLessons: false,
};

// Ordered list of all 18 lessons in sequential order
export const LESSON_SEQUENCE: string[] = [
  'f1-l1',  // Faz 1
  'f2-l1',  // Faz 2
  'f3-l1',  // Faz 3
  'f4-l1',  // Faz 4
  'f5-l1',  // Faz 5
  'f6-l1',  // Faz 6
  'f7-l1',  // Faz 7
  'f8-l1',  // Faz 8
  'f9-l1',  // Faz 9
  'f10-l1', // Faz 10
  'f11-l1', // Faz 11
  'f12-l1', // Faz 12
  'f13-l1', // Faz 13
  'f14-l1', // Faz 14
  'f15-l1', // Faz 15
  'f16-l1', // Faz 16
  'f17-l1', // Faz 17
  'f18-l1', // Faz 18
];

export function isLessonUnlocked(lessonId: string, progress: UserProgress): boolean {
  if (progress.unlockAllLessons) return true;
  if (lessonId === 'f1-l1') return true;

  const idx = LESSON_SEQUENCE.indexOf(lessonId);
  if (idx <= 0) return true;

  // The immediately previous lesson must be in completedLessonIds
  const prevLessonId = LESSON_SEQUENCE[idx - 1];
  return progress.completedLessonIds.includes(prevLessonId);
}

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      completedTasks: parsed.completedTasks || {},
      unlockAllLessons: !!parsed.unlockAllLessons,
    };
  } catch (e) {
    console.error('Failed to load user progress:', e);
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save user progress:', e);
  }
}

export function markTaskCompleted(lessonId: string, taskIdx: number): UserProgress {
  const current = loadUserProgress();
  const currentLessonTasks = new Set(current.completedTasks[lessonId] || []);
  currentLessonTasks.add(taskIdx);

  const updatedTasks = {
    ...current.completedTasks,
    [lessonId]: Array.from(currentLessonTasks),
  };

  const updated: UserProgress = {
    ...current,
    completedTasks: updatedTasks,
    lastStudyDate: new Date().toISOString().split('T')[0],
  };
  saveUserProgress(updated);
  return updated;
}

export function markLessonCompleted(lessonId: string, categoryName?: string): UserProgress {
  const current = loadUserProgress();
  const completed = new Set(current.completedLessonIds);
  completed.add(lessonId);

  const updatedMastery = { ...current.skillMastery };
  if (categoryName && updatedMastery[categoryName] !== undefined) {
    updatedMastery[categoryName] = Math.min(100, updatedMastery[categoryName] + 15);
  }

  // Auto advance currentLessonId to next lesson if available
  const idx = LESSON_SEQUENCE.indexOf(lessonId);
  let nextLessonId = current.currentLessonId;
  if (idx !== -1 && idx < LESSON_SEQUENCE.length - 1) {
    nextLessonId = LESSON_SEQUENCE[idx + 1];
  }

  const updated: UserProgress = {
    ...current,
    completedLessonIds: Array.from(completed),
    currentLessonId: nextLessonId,
    skillMastery: updatedMastery,
    lastStudyDate: new Date().toISOString().split('T')[0],
  };
  saveUserProgress(updated);
  return updated;
}

export function saveQuizResult(lessonId: string, score: number, categoryName?: string): UserProgress {
  const current = loadUserProgress();
  const updatedScores = { ...current.quizScores, [lessonId]: score };

  const updatedMastery = { ...current.skillMastery };
  if (categoryName && updatedMastery[categoryName] !== undefined) {
    const boost = score >= 80 ? 20 : 10;
    updatedMastery[categoryName] = Math.min(100, updatedMastery[categoryName] + boost);
  }

  const updated: UserProgress = {
    ...current,
    quizScores: updatedScores,
    skillMastery: updatedMastery,
  };
  saveUserProgress(updated);
  return updated;
}

export function toggleUnlockAll(unlock: boolean): UserProgress {
  const current = loadUserProgress();
  const updated: UserProgress = {
    ...current,
    unlockAllLessons: unlock,
  };
  saveUserProgress(updated);
  return updated;
}

export function logMistake(record: Omit<MistakeRecord, 'id' | 'timestamp'>): void {
  const current = loadUserProgress();
  const newRecord: MistakeRecord = {
    ...record,
    id: 'mstk_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    timestamp: Date.now(),
  };

  const updated: UserProgress = {
    ...current,
    mistakes: [newRecord, ...current.mistakes].slice(0, 50),
  };
  saveUserProgress(updated);
}

export function exportProgressJSON(): string {
  const progress = loadUserProgress();
  return JSON.stringify(progress, null, 2);
}

export function importProgressJSON(jsonStr: string): boolean {
  try {
    const parsed = JSON.parse(jsonStr);
    if (parsed && Array.isArray(parsed.completedLessonIds)) {
      saveUserProgress({ ...DEFAULT_PROGRESS, ...parsed });
      return true;
    }
  } catch (e) {
    console.error('Failed to import progress JSON:', e);
  }
  return false;
}

export function resetProgress(): UserProgress {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return DEFAULT_PROGRESS;
}
