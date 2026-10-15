import React, { useState } from 'react';
import {
  Play,
  CheckCircle2,
  Lock,
  Award,
  Clock,
  BookOpen,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { CURRICULUM_PHASES } from '../data/curriculum';
import { Lesson, UserProgress } from '../types/excel';
import { isLessonUnlocked } from '../services/storageService';

interface DashboardViewProps {
  progress: UserProgress;
  onSelectLesson: (lesson: Lesson) => void;
  onContinueCurrent: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  progress,
  onSelectLesson,
  onContinueCurrent,
}) => {
  const [expandedPhaseId, setExpandedPhaseId] = useState<number | null>(1);

  // Calculate statistics
  const totalLessons = CURRICULUM_PHASES.reduce((acc, p) => acc + p.lessons.length, 0);
  const completedCount = progress.completedLessonIds.length;
  const progressPercent = Math.round((completedCount / Math.max(1, totalLessons)) * 100);

  // Find active lesson object
  let currentLesson: Lesson = CURRICULUM_PHASES[0].lessons[0];
  for (const phase of CURRICULUM_PHASES) {
    const match = phase.lessons.find((l) => l.id === progress.currentLessonId);
    if (match) {
      currentLesson = match;
      break;
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8 select-none">
      {/* 1. Hero Continue Learning Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-neutral-900 text-white p-8 shadow-sm overflow-hidden border border-emerald-700/30">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Kaldığınız Yerden Devam Edin</span>
          </div>

          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
            {currentLesson.title}
          </h1>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            {currentLesson.shortDesc}
          </p>

          <div className="flex items-center gap-6 pt-2 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              {currentLesson.durationMinutes} Dakika
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              Seviye: {currentLesson.level}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              {currentLesson.functionsUsed.length > 0
                ? currentLesson.functionsUsed.join(', ')
                : 'Arayüz & Hücre Pratiği'}
            </span>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onSelectLesson(currentLesson)}
              className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Play className="w-4 h-4 fill-emerald-950" />
              <span>Öğretmenle Derse Başla</span>
            </button>
          </div>
        </div>

        {/* Decorative background badge */}
        <div className="absolute -right-8 -bottom-10 opacity-10 font-mono text-[140px] font-black select-none pointer-events-none text-white">
          FX
        </div>
      </div>

      {/* 2. Key Metrics Strip */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-semibold uppercase">Tamamlanma Oranı</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 tabular-nums">
            %{progressPercent}
          </div>
          <div className="w-full h-1.5 bg-neutral-100 rounded-full mt-3 overflow-hidden">
            <div
              style={{ width: `${progressPercent}%` }}
              className="h-full bg-emerald-600 rounded-full transition-all"
            />
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-semibold uppercase">Tamamlanan Ders</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 tabular-nums">
            {completedCount} <span className="text-sm font-normal text-neutral-500">/ {totalLessons}</span>
          </div>
          <p className="text-[11px] text-neutral-400 mt-2">18 Fazlı Kurumsal Müfredat</p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-semibold uppercase">Ortalama Sınav Başarısı</span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 tabular-nums">
            %{(() => {
              const scores = Object.values(progress.quizScores);
              if (scores.length === 0) return 85;
              const sum = scores.reduce((a, b) => a + b, 0);
              return Math.round(sum / scores.length);
            })()}
          </div>
          <p className="text-[11px] text-neutral-400 mt-2">Mini Test & Bitirme Sınavları</p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-semibold uppercase">Çalışma Süresi</span>
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 tabular-nums">
            {progress.totalTimeSpentMinutes} <span className="text-sm font-normal text-neutral-500">dakika</span>
          </div>
          <p className="text-[11px] text-neutral-400 mt-2">Etkileşimli Gerçek Excel Pratiği</p>
        </div>
      </div>

      {/* 3. Skill Mastery Radar & Mistake Center Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Mastery */}
        <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-2xs space-y-4">
          <h3 className="text-sm font-bold text-neutral-900">
            Kazanım Bazlı Yetkinlik Durumu
          </h3>
          <div className="space-y-3">
            {Object.entries(progress.skillMastery).map(([skill, val]) => (
              <div key={skill} className="space-y-1">
                <div className="flex justify-between text-xs font-medium text-neutral-700">
                  <span>{skill}</span>
                  <span className="tabular-nums font-mono font-bold text-neutral-900">%{val}</span>
                </div>
                <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${val}%` }}
                    className="h-full bg-emerald-600 rounded-full transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mistake Review Center */}
        <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-2xs space-y-4 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-neutral-900">
              Tekrar Edilmesi Gereken Noktalar & Hata Analizi
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
              {progress.mistakes.length} Kayıt
            </span>
          </div>

          <div className="flex-1 space-y-2.5 overflow-y-auto max-h-64 excel-scrollbar">
            {progress.mistakes.length === 0 ? (
              <div className="p-6 text-center text-neutral-400 text-xs">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2 opacity-80" />
                Henüz kayıtlı bir hata yok! Uygulamalarda hata yaptıkça öğretmeniniz buraya özel tavsiyeler ekleyecektir.
              </div>
            ) : (
              progress.mistakes.slice(0, 4).map((m) => (
                <div
                  key={m.id}
                  className="p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-bold text-amber-900">
                    <span>Hücre: {m.cellAddress}</span>
                    <span className="text-[10px] text-amber-700">{m.errorType}</span>
                  </div>
                  <p className="text-neutral-700 font-mono text-[11px]">Yazılan: {m.userFormula}</p>
                  <p className="text-neutral-600 text-[11px]">{m.advice}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* 4. Full 18-Phase Curriculum Roadmap */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-neutral-900">18 Fazlı Kapsamlı Excel Müfredatı</h2>
            <p className="text-xs text-neutral-500">Temelden ileri seviyeye aşamalı profesyonel müfredat</p>
          </div>
        </div>

        <div className="space-y-3">
          {CURRICULUM_PHASES.map((phase) => {
            const isExpanded = expandedPhaseId === phase.id;
            const phaseCompletedLessons = phase.lessons.filter((l) =>
              progress.completedLessonIds.includes(l.id)
            ).length;

            return (
              <div
                key={phase.id}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-2xs"
              >
                {/* Phase Header */}
                <div
                  onClick={() => setExpandedPhaseId(isExpanded ? null : phase.id)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-xs">
                      {phase.id}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-neutral-900">{phase.title}</h3>
                      <p className="text-xs text-neutral-500">{phase.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold tabular-nums text-neutral-600">
                      {phaseCompletedLessons} / {phase.lessons.length} Ders
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-neutral-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-neutral-400" />
                    )}
                  </div>
                </div>

                {/* Phase Lessons List */}
                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-neutral-100 bg-neutral-50/50 space-y-2">
                    <p className="text-xs text-neutral-600 pt-3 pb-2">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.lessons.map((lesson) => {
                        const isDone = progress.completedLessonIds.includes(lesson.id);
                        const isCurrent = progress.currentLessonId === lesson.id;
                        const unlocked = isLessonUnlocked(lesson.id, progress);

                        return (
                          <div
                            key={lesson.id}
                            className={`flex items-center justify-between p-3.5 rounded-lg border text-xs transition-all ${
                              !unlocked
                                ? 'bg-neutral-100/60 border-neutral-200 opacity-75'
                                : isCurrent
                                ? 'bg-white border-emerald-500 shadow-xs ring-1 ring-emerald-500/30'
                                : 'bg-white border-neutral-200 hover:border-neutral-300'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              ) : !unlocked ? (
                                <Lock className="w-4 h-4 text-neutral-400 shrink-0" />
                              ) : (
                                <div className="w-4 h-4 rounded-full border border-emerald-500 shrink-0" />
                              )}
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className={`font-bold ${unlocked ? 'text-neutral-900' : 'text-neutral-500'}`}>
                                    {lesson.title}
                                  </h4>
                                  {!unlocked && (
                                    <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                                      Önceki dersi tamamlayın
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-neutral-500">{lesson.shortDesc}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 shrink-0">
                              <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] font-semibold">
                                {lesson.level}
                              </span>
                              {unlocked ? (
                                <button
                                  onClick={() => onSelectLesson(lesson)}
                                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs transition-colors cursor-pointer ${
                                    isCurrent
                                      ? 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-2xs'
                                      : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                                  }`}
                                >
                                  <Play className="w-3 h-3 fill-current" />
                                  <span>{isDone ? 'Tekrar Et' : isCurrent ? 'Devam Et' : 'Başla'}</span>
                                </button>
                              ) : (
                                <button
                                  disabled
                                  title="Bu derse başlamak için önceki dersin görevini ve sınavını tamamlamalısınız."
                                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-xs bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200"
                                >
                                  <Lock className="w-3 h-3" />
                                  <span>Kilitli</span>
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
