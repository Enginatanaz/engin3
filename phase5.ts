import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase5: CurriculumPhase = {
  id: 5,
  title: 'Faz 5: Mantıksal Fonksiyonlar & Karar Mekanizmaları',
  subtitle: 'EĞER, VE, YADA, DEĞİL ve Çoklu Koşul Ağaçları',
  iconName: 'GitBranch',
  description: 'Excel de iş kurallarını formüle dökme: EĞER sözdizimi, karşılaştırma operatörleri (>=, <>, =), VE/YADA kombinasyonları ve hata yönetimi.',
  lessons: [
    {
      id: 'f5-l1',
      phaseId: 5,
      unitId: 'u5-1',
      title: 'EĞER Fonksiyonu ile Satış Primi Hesabı',
      shortDesc: 'Şarta bağlı değer üretme, doğru/yanlış dallanmaları ve EĞER sözdizimi.',
      level: 'Başlangıç',
      durationMinutes: 15,
      functionsUsed: ['EĞER / IF'],
      initialWorkbook: createTableSheet(
        's1',
        'Prim Listesi',
        ['Temsilci', 'Gerçekleşen Satış', 'Hedef Satış', 'Prim Durumu'],
        [
          ['Bora Çelik', 145000, 120000, ''],
          ['Cemre Koç', 95000, 100000, ''],
          ['Tarkan Yıldız', 180000, 150000, ''],
          ['Derya Şen', 110000, 110000, ''],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'EĞER Sözdizimini Öğrenme', description: '=EĞER(Mantıksal_Sınama; [Eğer_Doğruysa]; [Eğer_Yanlışsa]) yapısını eksiksiz kurabilmek.' },
        { id: 'o2', title: 'Metin Çıktısı Kuralları', description: 'Formülün üreteceği metin sonuçlarının çift tırnak ("...") içine alınması kuralını kavrama.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Karar Verme Mantığı',
          explanation: 'EĞER fonksiyonu 3 soruya yanıt arar: 1) Şart ne? (B2>=C2), 2) Şart tutarsa ne yazayım? ("%10 Prim"), 3) Şart tutmazsa ne yazayım? ("%0 Prim"). Metinler mutlaka çift tırnak içine alınmalıdır.',
          speechText: 'EĞER fonksiyonu iş dünyasında kararları otomatize eder. Bora Çelik için satış tutarı hedefin üzerindedir. D2 hücresine EĞER formülümüzü uygulayalım.',
          targetCell: 'D2',
          suggestedFormula: '=EĞER(B2>=C2; "%10 Prim"; "%0 Prim")',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'D2 hücresine tıklayın ve satış tutarı hedefe eşit veya büyükse "%10 Prim", değilse "%0 Prim" verecek formülü yazın: =EĞER(B2>=C2; "%10 Prim"; "%0 Prim")',
          targetCell: 'D2',
          hints: [
            'Satışın (B2) hedeften (C2) büyük veya eşit olup olmadığını test edin.',
            'EĞER sözdizimi: =EĞER(şart; [doğruysa]; [yanlışsa]). Argümanları noktalı virgül (;) ile ayırın.',
            '=EĞER(B2>=C2; "%10 Prim"; "%0 Prim")',
          ],
          validation: {
            targetCell: 'D2',
            expectedValue: '%10 Prim',
            expectedFormulaKeywords: ['EĞER', 'IF', 'B2', 'C2'],
            errorMessage: 'D2 hücresinde =EĞER(B2>=C2; "%10 Prim"; "%0 Prim") olmalıdır.',
            successMessage: 'Harika! Satış hedefini geçen temsilciye prim başarıyla atandı.',
          },
        },
      ],
      quiz: {
        id: 'q5-1',
        title: 'Mantıksal Fonksiyonlar Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q5-1-1',
            question: 'EĞER fonksiyonunda argümanlar Türk Excel standartlarında hangi işaretle ayrılır?',
            options: [
              { id: 'a', text: 'Noktalı Virgül (;)' },
              { id: 'b', text: 'Virgül (,)' },
              { id: 'c', text: 'İki Nokta Üst Üste (:)' },
              { id: 'd', text: 'Tire (-)' },
            ],
            correctOptionId: 'a',
            explanation: 'Türkçe bölgesel ayarlarında ondalık ayracı virgül olduğundan, formül parametreleri noktalı virgül (;) ile ayrılır.',
          },
          {
            id: 'q5-1-2',
            question: 'Birden çok şartın HEPSİNİN aynı anda doğru olmasını zorunlu kılan fonksiyon hangisidir?',
            options: [
              { id: 'a', text: '=YADA() [OR]' },
              { id: 'b', text: '=VE() [AND]' },
              { id: 'c', text: '=DEĞİL() [NOT]' },
              { id: 'd', text: '=EĞER()' },
            ],
            correctOptionId: 'b',
            explanation: 'VE (AND) fonksiyonu içindeki tüm şartlar doğru olduğunda DOĞRU üretir; tek bir şart bile yanlışsa YANLIŞ döner.',
          },
        ],
      },
    },
    {
      id: 'f5-l2',
      phaseId: 5,
      unitId: 'u5-2',
      title: 'Çoklu Koşullar: EĞER + VE ile Kredi Onay Sistemi',
      shortDesc: 'Aynı anda birden fazla iş kuralını (Gelir >= 30.000 VE Kredi Skoru >= 1500) sınama.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['EĞER / IF', 'VE / AND', 'YADA / OR'],
      initialWorkbook: createTableSheet(
        's1',
        'Kredi Başvuruları',
        ['Müşteri Adı', 'Aylık Gelir', 'Kredi Skoru', 'Mevcut Borç', 'Kredi Durumu'],
        [
          ['Hakan Demir', 45000, 1650, 5000, ''],
          ['Zeynep Vural', 28000, 1720, 15000, ''],
          ['Oğuz Karaca', 52000, 1420, 2000, ''],
          ['Deniz Şahin', 38000, 1580, 8000, ''],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'İç İçe Mantık Kurma', description: 'EĞER fonksiyonunun içine VE(...) fonksiyonunu yerleştirerek birden çok şartı bağlama.' },
        { id: 'o2', title: 'Kurumsal Risk Denetimi', description: 'Finansal onay ve ret durumlarını tek bir otomatik kurala dönüştürme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'EĞER ile VE Fonksiyonunun Birleşimi',
          explanation: 'Banka kuralı: Kredinin onaylanması için Gelir en az 30.000 TL (B2>=30000) VE Kredi Skoru en az 1500 (C2>=1500) olmalıdır. Formül: =EĞER(VE(B2>=30000; C2>=1500); "Onay"; "Red")',
          speechText: 'Gerçek hayatta kararlar nadiren tek bir şarta bağlıdır. EĞER fonksiyonunun şart kısmına VE yazarak birden fazla şartı parantez içine alırız. Şimdi Hakan Demir için kredi durumunu hesaplayalım.',
          targetCell: 'E2',
          suggestedFormula: '=EĞER(VE(B2>=30000; C2>=1500); "Onay"; "Red")',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'E2 hücresine tıklayın ve Gelir >= 30000 VE Skor >= 1500 ise "Onay", değilse "Red" verecek formülü girin: =EĞER(VE(B2>=30000; C2>=1500); "Onay"; "Red")',
          targetCell: 'E2',
          hints: [
            'E2 hücresini seçin.',
            'EĞER in içine VE ekleyin: =EĞER(VE(B2>=30000; C2>=1500); "Onay"; "Red")',
            '=EĞER(VE(B2>=30000; C2>=1500); "Onay"; "Red")',
          ],
          validation: {
            targetCell: 'E2',
            expectedValue: 'Onay',
            expectedFormulaKeywords: ['EĞER', 'IF', 'VE', 'AND'],
            errorMessage: 'E2 hücresinde =EĞER(VE(B2>=30000; C2>=1500); "Onay"; "Red") formülü ile "Onay" sonucu çıkmalıdır.',
            successMessage: 'Tebrikler! Hem gelir hem skor şartını sağlayan müşteriye Onay verildi.',
          },
        },
      ],
      quiz: {
        id: 'q5-2',
        title: 'Çoklu Koşullar Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q5-2-1',
            question: '=YADA(A1>10; B1>10) formülü hangi durumda DOĞRU üretir?',
            options: [
              { id: 'a', text: 'Yalnızca ikisi de 10 dan büyükse' },
              { id: 'b', text: 'Şartlardan en az biri 10 dan büyükse' },
              { id: 'c', text: 'İkisi de 10 dan küçükse' },
              { id: 'd', text: 'Sadece A1 10 dan büyükse' },
            ],
            correctOptionId: 'b',
            explanation: 'YADA (OR) fonksiyonu, verilen kriterlerden en az biri doğru olduğunda DOĞRU değerini döndürür.',
          },
          {
            id: 'q5-2-2',
            question: 'İkiden fazla şartı sıralı olarak denetlemek için modern Excel de iç içe EĞER yerine hangi fonksiyon tercih edilir?',
            options: [
              { id: 'a', text: '=ÇOKEĞER() [IFS]' },
              { id: 'b', text: '=SIRALA() [SORT]' },
              { id: 'c', text: '=VE() [AND]' },
              { id: 'd', text: '=DÜŞEYARA() [VLOOKUP]' },
            ],
            correctOptionId: 'a',
            explanation: 'ÇOKEĞER (IFS) fonksiyonu, parantez kalabalığı yapmadan sırasıyla şart1; sonuç1; şart2; sonuç2 zincirini çalıştırır.',
          },
        ],
      },
    },
  ],
};
