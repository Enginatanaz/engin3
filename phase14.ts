import { CurriculumPhase } from '../../types/excel';

export const phase14: CurriculumPhase = {
  id: 14,
  title: 'Faz 14: Veri Analizi & What-If Analysis',
  subtitle: 'Hedef Ara (Goal Seek), Senaryo Yöneticisi ve Finansal Duyarlılık',
  iconName: 'TrendingUp',
  description: 'Finansal modelleme ve karar destek araçları: İstenen kâra ulaşmak için gerekli satış adedini tersten bulma (Hedef Ara), senaryo analizi ve başabaş noktası.',
  lessons: [
    {
      id: 'f14-l1',
      phaseId: 14,
      unitId: 'u14-1',
      title: 'Hedef Ara ile Başabaş Noktası Analizi',
      shortDesc: 'Hedef kâr rakamına ulaşmak için gerekli satış adedini tersten hesaplama.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['Hedef Ara / Goal Seek', 'Finansal Model'],
      initialWorkbook: (() => {
        const cells: Record<string, any> = {
          A1: { raw: 'Finansal Değişken', computed: 'Finansal Değişken', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          B1: { raw: 'Değer', computed: 'Değer', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          A2: { raw: 'Birim Satış Fiyatı', computed: 'Birim Satış Fiyatı' },
          B2: { raw: '150', computed: 150, format: { numberFormat: 'currency' } },
          A3: { raw: 'Birim Değişken Maliyet', computed: 'Birim Değişken Maliyet' },
          B3: { raw: '70', computed: 70, format: { numberFormat: 'currency' } },
          A4: { raw: 'Satış Adedi', computed: 'Satış Adedi' },
          B4: { raw: '1000', computed: 1000 },
          A5: { raw: 'Sabit Giderler', computed: 'Sabit Giderler' },
          B5: { raw: '50000', computed: 50000, format: { numberFormat: 'currency' } },
          A6: { raw: 'Net Kâr', computed: 'Net Kâr', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          B6: { raw: '', computed: '' },
        };
        return {
          activeSheetId: 's1',
          sheets: [{ id: 's1', name: 'Başabaş Analizi', cells, columnWidths: { A: 200, B: 140 } }],
        };
      })(),
      objectives: [
        { id: 'o1', title: 'Finansal Model Kurma', description: 'Net Kâr = (Fiyat - Maliyet) * Adet - Sabit Gider modelini hatasız bağlama.' },
        { id: 'o2', title: 'Hedef Ara Mantığı', description: 'Kârı sıfır (başabaş) veya 100.000 TL yapmak için adedin ne olması gerektiğini bulma.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Net Kâr Formülü Mimarisi',
          explanation: 'Birim kâr = (B2-B3) yani 150 - 70 = 80 TL dir. 1.000 adet satıldığında brüt kâr 80.000 TL olur. 50.000 TL sabit gider çıkarıldığında Net Kâr 30.000 TL kalır. Formül: =(B2-B3)*B4-B5.',
          speechText: 'What-If analizlerinin temeli doğru matematiksel modeli kurmaktır. Fiyat, maliyet, adet ve giderleri bağlayan net kâr formülümüzü B6 hücresine girelim.',
          targetCell: 'B6',
          suggestedFormula: '=(B2-B3)*B4-B5',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'B6 hücresine tıklayın ve Net Kâr formülünü girin: "=(B2-B3)*B4-B5"',
          targetCell: 'B6',
          hints: [
            'B6 hücresini seçin. Birim Fiyattan (B2) Birim Maliyeti (B3) çıkarıp Adet (B4) ile çarpın ve Sabit Gideri (B5) düşün.',
            'İşlem sırası için birim kârı paranteze alın: =(B2-B3)*B4-B5',
            '=(B2-B3)*B4-B5',
          ],
          validation: {
            targetCell: 'B6',
            expectedValue: 30000,
            expectedFormulaKeywords: ['B2', 'B3', 'B4', 'B5'],
            errorMessage: 'B6 hücresinde =(B2-B3)*B4-B5 olmalı ve 30.000 TL bulunmalıdır.',
            successMessage: 'Harika! 1.000 adet satışta net kâr 30.000 TL olarak hesaplandı.',
          },
        },
      ],
      quiz: {
        id: 'q14-1',
        title: 'What-If ve Hedef Ara Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q14-1-1',
            question: 'Hedef Ara (Goal Seek) aracının temel çalışma prensibi nedir?',
            options: [
              { id: 'a', text: 'İstenen sonuç değerine ulaşmak için girdi hücresinin ne olması gerektiğini tersten hesaplamak' },
              { id: 'b', text: 'Formülleri metne dönüştürmek' },
              { id: 'c', text: 'Tabloya rastgele sayılar doldurmak' },
              { id: 'd', text: 'Verileri alfabetik dizmek' },
            ],
            correctOptionId: 'a',
            explanation: 'Hedef Ara, hedeflediğiniz bir sonuca (örneğin Net Kâr = 0) ulaşmak için değiştirilecek hücrenin (Satış Adedi) alması gereken değeri otomatik hesaplar.',
          },
          {
            id: 'q14-1-2',
            question: 'Birden çok değişken ve kısıtlama (örn. bütçe <= 50.000, kapasite >= 100) içeren optimizasyon problemlerinde hangi gelişmiş Excel eklentisi kullanılır?',
            options: [
              { id: 'a', text: 'Çözücü (Solver)' },
              { id: 'b', text: 'Hedef Ara' },
              { id: 'c', text: 'Otomatik Doldurma' },
              { id: 'd', text: 'Biçim Boyacısı' },
            ],
            correctOptionId: 'a',
            explanation: 'Hedef Ara yalnızca tek bir değişkeni çözebilir; çoklu değişken ve kısıtlamalı optimizasyonlar için Çözücü (Solver) kullanılır.',
          },
        ],
      },
    },
    {
      id: 'f14-l2',
      phaseId: 14,
      unitId: 'u14-2',
      title: 'Senaryo Yöneticisi ile İyimser ve Kötümser Tahminler',
      shortDesc: 'Ekonomik dalgalanmalara göre En İyi, Beklenen ve En Kötü durum bütçe senaryoları kurma.',
      level: 'İleri',
      durationMinutes: 18,
      functionsUsed: ['Senaryo Yöneticisi', 'Finansal Modelleme'],
      initialWorkbook: (() => {
        const cells: Record<string, any> = {
          A1: { raw: 'Senaryo Parametresi', computed: 'Senaryo Parametresi', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          B1: { raw: 'Beklenen Değer', computed: 'Beklenen Değer', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          A2: { raw: 'Enflasyon Oranı', computed: 'Enflasyon Oranı' },
          B2: { raw: '0.35', computed: 0.35, format: { numberFormat: 'percent' } },
          A3: { raw: 'Ham Gelir', computed: 'Ham Gelir' },
          B3: { raw: '1000000', computed: 1000000, format: { numberFormat: 'currency' } },
          A4: { raw: 'Enflasyon Düzeltmeli Gelir', computed: 'Enflasyon Düzeltmeli Gelir', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          B4: { raw: '', computed: '' },
        };
        return {
          activeSheetId: 's1',
          sheets: [{ id: 's1', name: 'Senaryo Yönetimi', cells, columnWidths: { A: 220, B: 150 } }],
        };
      })(),
      objectives: [
        { id: 'o1', title: 'Senaryo Mimarisi', description: 'Değişen ekonomik girdilere göre sonuç hücresinin tepkisini modelleme.' },
        { id: 'o2', title: 'Duyarlılık Raporu', description: 'Yönetim kuruluna 3 farklı olasılığı (İyimser/Kötümser/Baz) tek tabloda sunma.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Enflasyon Düzeltmeli Model',
          explanation: 'Ham geliri enflasyon oranı kadar artırmak için formül: =B3*(1+B2). Enflasyon %35 ise 1.000.000 TL gelir 1.350.000 TL ye ulaşır.',
          speechText: 'Bütçe planlamalarında belirsizlikleri yönetmek için senaryolar kurarız. Şimdi B4 hücresine enflasyon düzeltmeli gelir formülünü yazalım.',
          targetCell: 'B4',
          suggestedFormula: '=B3*(1+B2)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'B4 hücresine tıklayın ve enflasyon düzeltmeli geliri hesaplamak için "=B3*(1+B2)" formülünü girin.',
          targetCell: 'B4',
          hints: [
            'B4 hücresini seçin.',
            'Ham Geliri (B3) 1 artı Enflasyon Oranı (1+B2) ile çarpan formülü yazın: =B3*(1+B2)',
            '=B3*(1+B2)',
          ],
          validation: {
            targetCell: 'B4',
            expectedValue: 1350000,
            expectedFormulaKeywords: ['B3', 'B2', '*'],
            errorMessage: 'B4 hücresinde =B3*(1+B2) olmalı ve 1.350.000 TL bulunmalıdır.',
            successMessage: 'Tebrikler! Enflasyon düzeltmeli bütçe 1.350.000 TL olarak hesaplandı.',
          },
        },
      ],
      quiz: {
        id: 'q14-2',
        title: 'Senaryo Analizi Değerlendirmesi',
        passingScore: 80,
        questions: [
          {
            id: 'q14-2-1',
            question: 'Senaryo Yöneticisi (Scenario Manager) aracının oluşturduğu "Senaryo Özeti" sayfası ne işe yarar?',
            options: [
              { id: 'a', text: 'Tüm senaryoları (İyimser, Kötümser vb.) ve netice hücrelerini yan yana karşılaştırmalı tek bir tabloya döker' },
              { id: 'b', text: 'Excel dosyasını şifreler' },
              { id: 'c', text: 'Grafikleri siler' },
              { id: 'd', text: 'Yalnızca yazdırma kuyruğuna gönderir' },
            ],
            correctOptionId: 'a',
            explanation: 'Senaryo Özeti, tanımlanan tüm girdi varyasyonlarını ve ortaya çıkan kâr/zarar sonuçlarını tek bir yönetici tablosunda konsolide eder.',
          },
          {
            id: 'q14-2-2',
            question: 'Duyarlılık analizinde iki farklı girdinin (örneğin hem Fiyat hem Satış Adedi) kâr üzerindeki etkisini tek bir matriste görmek için ne kullanılır?',
            options: [
              { id: 'a', text: 'İki Değişkenli Veri Tablosu (Data Table)' },
              { id: 'b', text: 'YUVARLA fonksiyonu' },
              { id: 'c', text: 'DÜŞEYARA' },
              { id: 'd', text: 'Metin Birleştirme' },
            ],
            correctOptionId: 'a',
            explanation: 'Excel in Veri Tablosu (Data Table) aracı, iki girdinin olası tüm kombinasyonlarını matris şeklinde simüle eder.',
          },
        ],
      },
    },
  ],
};
