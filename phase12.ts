import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase12: CurriculumPhase = {
  id: 12,
  title: 'Faz 12: PivotTable (Özet Tablo) & PivotChart',
  subtitle: 'Satırlar, Sütunlar, Değerler, Filtreler ve Dilimleyiciler (Slicers)',
  iconName: 'PieChart',
  description: 'Büyük veri kümelerini formül yazmadan saniyeler içinde özetleme: Alan listesi mantığı, değer özetleme (Toplam/Ortalama), tarih gruplama ve dilimleyiciler.',
  lessons: [
    {
      id: 'f12-l1',
      phaseId: 12,
      unitId: 'u12-1',
      title: 'Bölge ve Kategori Bazlı PivotTable Oluşturma',
      shortDesc: 'Özet tablo mimarisi, satır/sütun alanları ve çok boyutlu ciro analizi.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['PivotTable', 'ÇOKETOPLA / SUMIFS'],
      initialWorkbook: createTableSheet(
        's1',
        'Ham Satış Verisi',
        ['Bölge', 'Kategori', 'Tutar', 'Satış Temsilcisi'],
        [
          ['Marmara', 'Elektronik', 60000, 'Ahmet'],
          ['Ege', 'Mobilya', 32000, 'Ayşe'],
          ['Marmara', 'Mobilya', 28000, 'Mehmet'],
          ['Marmara', 'Elektronik', 90000, 'Fatma'],
          ['Ege', 'Elektronik', 60000, 'Ali'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'PivotTable Mimarisi', description: 'Satırlar, Sütunlar, Değerler ve Filtreler olmak üzere 4 temel bölgenin işleyişini kavrama.' },
        { id: 'o2', title: 'Çok Boyutlu Özetleme', description: 'Binlerce satırlık ham veriyi bölge ve kategori matrisine dönüştürme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'PivotTable ile Matris Raporlama',
          explanation: 'PivotTable da Satırlara "Bölge", Sütunlara "Kategori", Değerlere ise "Tutar" alanını sürükleriz. Excel arka planda tüm kesişimleri otomatik olarak ÇOKETOPLA mantığıyla toplar. Marmara bölgesindeki toplam Elektronik satışı 60.000 + 90.000 = 150.000 TL dir.',
          speechText: 'Veri analizinin kalbi PivotTable dır. Karmaşık formüllerle saatler sürecek matris raporları tek bir sürüklemeyle oluştururuz. Şimdi F2 hücresinde Marmara Elektronik kesişimini doğrulayalım.',
          targetCell: 'F2',
          suggestedFormula: '=ÇOKETOPLA(C2:C6; A2:A6; "Marmara"; B2:B6; "Elektronik")',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'F2 hücresine tıklayın ve Marmara bölgesindeki Elektronik satışlarının toplamını bulmak için formülü girin: =ÇOKETOPLA(C2:C6; A2:A6; "Marmara"; B2:B6; "Elektronik")',
          targetCell: 'F2',
          hints: [
            'F2 hücresine tıklayın.',
            'ÇOKETOPLA ile C2:C6 tutarını A2:A6 "Marmara" ve B2:B6 "Elektronik" kriterleriyle filtreleyin.',
            '=ÇOKETOPLA(C2:C6; A2:A6; "Marmara"; B2:B6; "Elektronik")',
          ],
          validation: {
            targetCell: 'F2',
            expectedValue: 150000,
            expectedFormulaKeywords: ['ÇOKETOPLA', 'SUMIFS'],
            errorMessage: 'F2 hücresinde =ÇOKETOPLA(C2:C6; A2:A6; "Marmara"; B2:B6; "Elektronik") ile 150.000 TL bulunmalıdır.',
            successMessage: 'Tebrikler! PivotTable matris kesişim değeri 150.000 TL olarak doğrulandı.',
          },
        },
      ],
      quiz: {
        id: 'q12-1',
        title: 'PivotTable ve Özet Raporlama Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q12-1-1',
            question: 'PivotTable Alan Listesinde (Field List) bulunan 4 temel bölge hangileridir?',
            options: [
              { id: 'a', text: 'Filtreler, Sütunlar, Satırlar, Değerler' },
              { id: 'b', text: 'Başlıklar, Formüller, Hücreler, Sayfalar' },
              { id: 'c', text: 'Giriş, Çıkış, Toplam, Ortalama' },
              { id: 'd', text: 'Metin, Sayı, Tarih, Para Birimi' },
            ],
            correctOptionId: 'a',
            explanation: 'PivotTable 4 çalışma alanından oluşur: Filters (Filtreler), Columns (Sütunlar), Rows (Satırlar) ve Values (Değerler).',
          },
          {
            id: 'q12-1-2',
            question: 'Kaynak tablodaki veriler değiştiğinde PivotTable ın güncel değerleri yansıtması için ne yapılır?',
            options: [
              { id: 'a', text: 'Sağ tıklayıp Yenile (Refresh) seçilir' },
              { id: 'b', text: 'Excel kapatılıp yeniden kurulur' },
              { id: 'c', text: 'Tüm formüller baştan yazılır' },
              { id: 'd', text: 'Sayfa silinip tekrar açılır' },
            ],
            correctOptionId: 'a',
            explanation: 'PivotTable formüller gibi anlık hesaplamaz, önbellekte saklar; veriler güncellendiğinde "Yenile" (Refresh) butonuna basılmalıdır.',
          },
        ],
      },
    },
    {
      id: 'f12-l2',
      phaseId: 12,
      unitId: 'u12-2',
      title: 'Dilimleyiciler (Slicers) ile İnteraktif Rapor Tasarımı',
      shortDesc: 'PivotTable ve PivotChart raporlarına görsel filtreleme düğmeleri (Slicers) ekleme.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['Dilimleyici / Slicer', 'PivotChart'],
      initialWorkbook: createTableSheet(
        's1',
        'Kanal Analizi',
        ['Satış Kanalı', 'İşlem Sayısı', 'Toplam Ciro', 'Ortalama Sepet'],
        [
          ['Web Sitesi', 1420, 850000, 598],
          ['Mobil Uygulama', 2150, 1450000, 674],
          ['Fiziksel Mağaza', 980, 720000, 734],
          ['Pazaryeri (Trendyol/Hepsiburada)', 1850, 1120000, 605],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Dilimleyici Mantığı', description: 'Geleneksel açılır filtreler yerine tek tıkla çalışan şık filtre kartları oluşturma.' },
        { id: 'o2', title: 'Çoklu Grafik Bağlantısı', description: 'Tek bir dilimleyici ile birden fazla özet tabloyu aynı anda filtreleme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Dilimleyicilerin Rolü',
          explanation: 'Dilimleyici (Slicer), kullanıcıların tek bir tıklamayla belirli bir kanalı veya bölgeyi seçmesini sağlar. Tüm bağlı grafikler ve özet tablolar aynı anda filtrelenir.',
          speechText: 'Yönetici sunumlarında en çok sevilen özellik dilimleyicilerdir. Düğmelere basıldığında grafikler canlı olarak hareket eder. Şimdi C6 hücresine tüm kanalların toplam cirosunu hesaplayalım.',
          targetCell: 'C6',
          suggestedFormula: '=TOPLA(C2:C5)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'C6 hücresine tıklayın ve tüm kanalların toplam cirosunu bulmak için "=TOPLA(C2:C5)" formülünü girin.',
          targetCell: 'C6',
          hints: [
            'C6 hücresini seçin.',
            'C2:C5 aralığındaki ciro değerlerini toplayın: =TOPLA(C2:C5)',
            '=TOPLA(C2:C5)',
          ],
          validation: {
            targetCell: 'C6',
            expectedValue: 4140000,
            expectedFormulaKeywords: ['TOPLA', 'SUM', 'C2:C5'],
            errorMessage: 'C6 hücresinde =TOPLA(C2:C5) olmalı ve 4.140.000 TL bulunmalıdır.',
            successMessage: 'Tebrikler! Toplam kanal cirosu 4.140.000 TL olarak hesaplandı.',
          },
        },
      ],
      quiz: {
        id: 'q12-2',
        title: 'Dilimleyiciler ve PivotChart Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q12-2-1',
            question: 'Dilimleyicide birden fazla seçeneği aynı anda seçmek için klavyeden hangi tuşa basılı tutulur?',
            options: [
              { id: 'a', text: 'Ctrl tuşu' },
              { id: 'b', text: 'Alt tuşu' },
              { id: 'c', text: 'Tab tuşu' },
              { id: 'd', text: 'Esc tuşu' },
            ],
            correctOptionId: 'a',
            explanation: 'Ctrl tuşuna basılı tutarak dilimleyici üzerindeki farklı butonlara tıklanırsa çoklu seçim (örneğin hem Web hem Mobil) yapılabilir.',
          },
          {
            id: 'q12-2-2',
            question: 'PivotTable kaynak verisindeki tarih alanlarını ay ve yıl olarak pratikçe filtrelemek için hangi özel araç eklenir?',
            options: [
              { id: 'a', text: 'Zaman Çizelgesi (Timeline)' },
              { id: 'b', text: 'Metin Kutusu' },
              { id: 'c', text: 'Kelime Sayacı' },
              { id: 'd', text: 'Veri Çubuğu' },
            ],
            correctOptionId: 'a',
            explanation: 'Zaman Çizelgesi (Timeline), tarih alanlarını yıl, çeyrek, ay ve gün blokları halinde yatay kaydırma çubuğuyla filtrelemeyi sağlar.',
          },
        ],
      },
    },
  ],
};
