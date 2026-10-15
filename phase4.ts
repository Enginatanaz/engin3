import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase4: CurriculumPhase = {
  id: 4,
  title: 'Faz 4: Temel & Matematiksel Fonksiyonlar',
  subtitle: 'TOPLA, ORTALAMA, MİN, MAK, SAY ve YUVARLA Fonksiyonları',
  iconName: 'Calculator',
  description: 'İstatistiksel özetler, aralık toplama, aritmetik ortalama, uç değerler (MİN/MAK), dolu hücre sayımı ve yuvarlama fonksiyonları.',
  lessons: [
    {
      id: 'f4-l1',
      phaseId: 4,
      unitId: 'u4-1',
      title: 'Çeyreklik Satış Raporu ve İstatistiksel Fonksiyonlar',
      shortDesc: 'Aralık mantığı (C2:C5), TOPLA ve ORTALAMA fonksiyonları.',
      level: 'Başlangıç',
      durationMinutes: 15,
      functionsUsed: ['TOPLA / SUM', 'ORTALAMA / AVERAGE', 'MAK / MAX', 'MİN / MIN'],
      initialWorkbook: createTableSheet(
        's1',
        '2026 Çeyreklik Satışlar',
        ['Dönem', 'Bölge', 'Gerçekleşen Ciro', 'Müşteri Sayısı'],
        [
          ['Ç1 - Ocak-Mart', 'Marmara', 68000, 140],
          ['Ç2 - Nisan-Haziran', 'Marmara', 54000, 110],
          ['Ç3 - Temmuz-Eylül', 'Marmara', 72000, 165],
          ['Ç4 - Ekim-Aralık', 'Marmara', 40000, 95],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Hücre Aralığı Mantığı', description: 'İki nokta üst üste (:) simgesinin başlangıç ve bitiş arasındaki tüm hücreleri kapsadığını anlama.' },
        { id: 'o2', title: 'TOPLA ve ORTALAMA Kullanımı', description: 'Toplu verileri tek hamlede toplayıp aritmetik ortalamasını çıkarma.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'TOPLA (SUM) Fonksiyonunun Gücü',
          explanation: 'Hücreleri tek tek =C2+C3+C4+C5 şeklinde toplamak yerine =TOPLA(C2:C5) yazılır. Bu sayede araya yeni satır eklense bile formül otomatik genişler.',
          speechText: 'Veri analizinde en çok kullanılan fonksiyon TOPLA dır. C2 ile C5 arasındaki 4 çeyreklik ciroyu toplamak için iki nokta üst üste işaretini kullanırız.',
          targetCell: 'C7',
          suggestedFormula: '=TOPLA(C2:C5)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'C7 hücresine tıklayın ve toplam ciroyu bulmak için "=TOPLA(C2:C5)" yazın.',
          targetCell: 'C7',
          hints: [
            'C7 hücresine geçin. 1. Çeyrek toplamı için C2 ile C5 arasındaki hücreleri toplayacağız.',
            'TOPLA fonksiyonunun içine iki nokta üst üste (:) ile aralığı yazın: =TOPLA(C2:C5)',
            '=TOPLA(C2:C5)',
          ],
          validation: {
            targetCell: 'C7',
            expectedValue: 234000,
            expectedFormulaKeywords: ['TOPLA', 'SUM', 'C2:C5'],
            errorMessage: 'C7 hücresinde =TOPLA(C2:C5) olmalı ve 234.000 TL bulunmalıdır.',
            successMessage: 'Harika! Yıllık toplam ciro 234.000 TL olarak hesaplandı.',
          },
        },
        {
          id: 't-2',
          stepNumber: 2,
          instruction: 'C8 hücresine tıklayın ve ortalama satışı bulmak için "=ORTALAMA(C2:C5)" yazın.',
          targetCell: 'C8',
          hints: [
            'C8 hücresini seçin. 4 çeyreğin aritmetik ortalamasını hesaplayacağız.',
            'ORTALAMA fonksiyonuna aynı aralığı verin: =ORTALAMA(C2:C5)',
            '=ORTALAMA(C2:C5)',
          ],
          validation: {
            targetCell: 'C8',
            expectedValue: 58500,
            expectedFormulaKeywords: ['ORTALAMA', 'AVERAGE', 'C2:C5'],
            errorMessage: 'C8 hücresinde =ORTALAMA(C2:C5) formülü olmalı ve 58.500 TL bulunmalıdır.',
            successMessage: 'Tebrikler! Çeyreklik ortalama ciro 58.500 TL olarak doğrulandı.',
          },
        },
      ],
      quiz: {
        id: 'q4-1',
        title: 'Temel Fonksiyonlar Testi',
        passingScore: 80,
        questions: [
          {
            id: 'q4-1-1',
            question: 'B1:B10 aralığındaki en yüksek değeri getiren fonksiyon hangisidir?',
            options: [
              { id: 'a', text: '=ENYÜKSEK(B1:B10)' },
              { id: 'b', text: '=MAK(B1:B10)' },
              { id: 'c', text: '=BÜYÜK(B1:B10)' },
              { id: 'd', text: '=ZİRVE(B1:B10)' },
            ],
            correctOptionId: 'b',
            explanation: 'Excel de bir aralıktaki maksimum değeri bulmak için MAK (İngilizce MAX) fonksiyonu kullanılır.',
          },
          {
            id: 'q4-1-2',
            question: 'A1:A5 aralığındaki hem sayıları hem metinleri sayıp kaç hücrenin dolu olduğunu gösteren fonksiyon hangisidir?',
            options: [
              { id: 'a', text: '=SAY(A1:A5)' },
              { id: 'b', text: '=BAĞ_DEĞ_DOLU_SAY(A1:A5)' },
              { id: 'c', text: '=TOPLA(A1:A5)' },
              { id: 'd', text: '=UZUNLUK(A1:A5)' },
            ],
            correctOptionId: 'b',
            explanation: 'SAY (COUNT) sadece sayıları sayar; BAĞ_DEĞ_DOLU_SAY (COUNTA) ise boş olmayan tüm hücreleri (metin, sayı) sayar.',
          },
        ],
      },
    },
    {
      id: 'f4-l2',
      phaseId: 4,
      unitId: 'u4-2',
      title: 'Hassas Yuvarlama (YUVARLA) ve Sayım Fonksiyonları',
      shortDesc: 'Finansal ondalık yuvarlama, tam sayıya indirgeme ve BAĞ_DEĞ_DOLU_SAY.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['YUVARLA / ROUND', 'TAMSAYI / INT', 'SAY / COUNT', 'BAĞ_DEĞ_DOLU_SAY / COUNTA'],
      initialWorkbook: createTableSheet(
        's1',
        'Birim Maliyetler',
        ['Hammadde', 'Ham Maliyet', 'Döviz Çarpanı', 'Net TL Maliyeti', 'Kategori'],
        [
          ['Çelik Profil', 45.867, 1.25, 57.33375, 'Metal'],
          ['Bakır Tel', 12.441, 1.25, 15.55125, 'Metal'],
          ['Plastik Enjeksiyon', 8.926, 1.25, 11.1575, 'Polimer'],
          ['Ambalaj Kutusu', 3.149, 1.25, 3.93625, 'Paketleme'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Ondalık Hassasiyetini Kontrol Etme', description: 'Finans ve faturalama işlemlerinde YUVARLA ile virgülden sonraki basamakları 2 ye sabitleme.' },
        { id: 'o2', title: 'Sayım Fonksiyonları Ayrımı', description: 'Sayı içeren hücreler ile dolu hücreler arasındaki farkı ayırt edebilme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'YUVARLA Fonksiyonunun Mantığı',
          explanation: 'Excel de hücre formatını 2 basamak yapmak gerçek sayıyı değiştirmez; arka planda 57.33375 kalır ve çarpmalarda küsurat farkı üretir. YUVARLA(D2; 2) ise sayıyı matematiksel olarak 57.33 yapar.',
          speechText: 'Muhasebe raporlarında en büyük kabus kuruş farklarıdır. YUVARLA fonksiyonu iki parametre alır: Yuvarlanacak sayı ve basamak sayısı. Şimdi D2 hücresini 2 basamağa yuvarlayalım.',
          targetCell: 'D6',
          suggestedFormula: '=YUVARLA(D2; 2)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'D6 hücresine tıklayın ve D2 hücresindeki değeri 2 ondalık basamağa yuvarlamak için "=YUVARLA(D2; 2)" formülünü girin.',
          targetCell: 'D6',
          hints: [
            'D6 hücresini seçin.',
            'YUVARLA fonksiyonuna yuvarlanacak hücreyi (D2) ve basamak sayısı olarak 2 verin.',
            '=YUVARLA(D2; 2)',
          ],
          validation: {
            targetCell: 'D6',
            expectedValue: 57.33,
            expectedFormulaKeywords: ['YUVARLA', 'ROUND', 'D2', '2'],
            errorMessage: 'D6 hücresinde =YUVARLA(D2; 2) olmalı ve 57.33 çıkmalıdır.',
            successMessage: 'Tebrikler! 57.33375 sayısı 57.33 olarak kesin yuvarlandı.',
          },
        },
      ],
      quiz: {
        id: 'q4-2',
        title: 'Yuvarlama ve Sayım Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q4-2-1',
            question: '=YUVARLA(124.786; 2) formülünün sonucu nedir?',
            options: [
              { id: 'a', text: '124.78' },
              { id: 'b', text: '124.79' },
              { id: 'c', text: '124.8' },
              { id: 'd', text: '125' },
            ],
            correctOptionId: 'b',
            explanation: 'Virgülden sonraki 3. basamak 6 (5 veya daha büyük) olduğu için 2. basamak 8 den 9 a yuvarlanır: 124.79.',
          },
          {
            id: 'q4-2-2',
            question: 'YUVARLA fonksiyonunda basamak sayısına 0 (sıfır) yazılırsa ne olur? Örneğin =YUVARLA(18.6; 0)',
            options: [
              { id: 'a', text: 'Sıfır sonucunu verir' },
              { id: 'b', text: 'En yakın tam sayıya (19) yuvarlar' },
              { id: 'c', text: '#DEĞER! hatası verir' },
              { id: 'd', text: 'Ondalık kısmı silmez' },
            ],
            correctOptionId: 'b',
            explanation: '0 basamak, sayının ondalıksız en yakın tam sayıya yuvarlanması anlamına gelir: 18.6 -> 19.',
          },
        ],
      },
    },
  ],
};
