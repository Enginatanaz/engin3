import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase13: CurriculumPhase = {
  id: 13,
  title: 'Faz 13: Profesyonel Grafikler & Dashboard Tasarımı',
  subtitle: 'Çizgi, Sütun, Kombine Grafikler, İkincil Eksen ve Yönetici KPI ları',
  iconName: 'BarChart2',
  description: 'Görsel veri hikayeciliği: Doğru grafik türü seçimi, ikincil eksen kullanımı, veri etiketleri, yanıltıcı görselleştirmelerden kaçınma ve KPI kartları tasarımı.',
  lessons: [
    {
      id: 'f13-l1',
      phaseId: 13,
      unitId: 'u13-1',
      title: 'Çeyreklik Satış Trendi ve Kombine Grafikler',
      shortDesc: 'Satış cirosu ile kâr marjını ikincil eksende birlikte görselleştirme.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['TOPLA / SUM', 'Kombine Grafik'],
      initialWorkbook: createTableSheet(
        's1',
        'Finansal Trend',
        ['Dönem', 'Ciro (₺)', 'Maliyet (₺)', 'Brüt Kâr (₺)', 'Kâr Marjı %'],
        [
          ['2026-Ç1', 120000, 80000, 40000, 0.33],
          ['2026-Ç2', 150000, 95000, 55000, 0.37],
          ['2026-Ç3', 180000, 110000, 70000, 0.39],
          ['2026-Ç4', 210000, 125000, 85000, 0.40],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Grafik Türü Seçimi', description: 'Trendler için çizgi, karşılaştırmalar için sütun grafik seçme prensiplerini kavrama.' },
        { id: 'o2', title: 'İkincil Eksen Mantığı', description: 'Büyük tutarlar (₺) ile küçük yüzdeleri (%) aynı grafik üzerinde iki farklı dikey eksenle gösterme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'İkincil Eksen Neden Zorunludur?',
          explanation: 'Ciro yüz binlerce lira iken kâr marjı %35 tir (0.35). Aynı eksene koyarsanız %35 çizgisi sıfırın dibinde kaybolur. Bu yüzden Kâr Marjı için İkincil Eksen (Secondary Axis) açılır.',
          speechText: 'Yöneticilere sunum yaparken en sık kullanılan grafik türü Kombine Grafiktir. Sütunlar ciroyu gösterirken, çizgi kâr marjını takip eder. Şimdi B6 hücresine toplam yıllık ciroyu hesaplayalım.',
          targetCell: 'B6',
          suggestedFormula: '=TOPLA(B2:B5)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'B6 hücresine tıklayın ve toplam yıllık ciroyu hesaplamak için "=TOPLA(B2:B5)" formülünü girin.',
          targetCell: 'B6',
          hints: [
            'B6 hücresine tıklayın.',
            'B2 den B5 e kadar olan ciroları toplayan formülü yazın: =TOPLA(B2:B5)',
            '=TOPLA(B2:B5)',
          ],
          validation: {
            targetCell: 'B6',
            expectedValue: 660000,
            expectedFormulaKeywords: ['TOPLA', 'SUM', 'B2:B5'],
            errorMessage: 'B6 hücresinde =TOPLA(B2:B5) olmalı ve 660.000 TL bulunmalıdır.',
            successMessage: 'Tebrikler! Yıllık toplam ciro 660.000 TL olarak hesaplandı.',
          },
        },
      ],
      quiz: {
        id: 'q13-1',
        title: 'Grafikler ve Dashboard Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q13-1-1',
            question: 'Zaman içerisindeki eğilim ve trendleri (aylar, yıllar) göstermek için en uygun grafik türü hangisidir?',
            options: [
              { id: 'a', text: 'Çizgi Grafik (Line Chart)' },
              { id: 'b', text: 'Pasta Grafik (Pie Chart)' },
              { id: 'c', text: 'Halka Grafik (Doughnut)' },
              { id: 'd', text: 'Radar Grafik' },
            ],
            correctOptionId: 'a',
            explanation: 'Zamana bağlı değişimleri ve trend akışlarını kesintisiz göstermek için Çizgi grafikler en standart yöntemdir.',
          },
          {
            id: 'q13-1-2',
            question: 'Pasta grafik (Pie Chart) hangi veri yapısı için en uygundur?',
            options: [
              { id: 'a', text: 'Yüzde 100 ü oluşturan birkaç parçanın bütün içindeki oranını göstermek için' },
              { id: 'b', text: '50 farklı ürünün karşılaştırması için' },
              { id: 'c', text: 'Son 10 yılın trendi için' },
              { id: 'd', text: 'Negatif bütçe sapmaları için' },
            ],
            correctOptionId: 'a',
            explanation: 'Pasta grafik toplamı %100 eden az sayıda (en fazla 4-5) parçanın oransal payını göstermek için uygundur; çok dilimde okunamaz hale gelir.',
          },
        ],
      },
    },
    {
      id: 'f13-l2',
      phaseId: 13,
      unitId: 'u13-2',
      title: 'Yönetici Dashboard Mimarisi ve KPI Kartları',
      shortDesc: 'Üst yönetim için tek bakışta durum özeti sunan KPI kartları ve görsel hiyerarşi.',
      level: 'İleri',
      durationMinutes: 15,
      functionsUsed: ['ORTALAMA / AVERAGE', 'MAK / MAX'],
      initialWorkbook: createTableSheet(
        's1',
        'Yönetici KPI Kartları',
        ['Metrik', 'Hedef', 'Gerçekleşen', 'Başarı Oranı', 'Durum'],
        [
          ['Toplam Ciro', 5000000, 5450000, 1.09, 'Hedef Üstü'],
          ['Müşteri Memnuniyeti (CSAT)', 90, 94, 1.04, 'Mükemmel'],
          ['Personel Devir Hızı (Turnover)', 5, 4, 0.80, 'Başarılı'],
          ['Yeni Müşteri Kazanımı (CAC)', 450, 410, 0.91, 'Tasarruf'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Dashboard Tasarım Prensipleri', description: 'Tek sayfada kritik metrikleri (KPI) sade, temiz ve hiyerarşik kartlar halinde sunma.' },
        { id: 'o2', title: 'Görsel Yükü Azaltma', description: 'Gereksiz 3D efektler ve aşırı renklerden kaçınarak kurumsal netlik sağlama.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Yönetici KPI Paneli Mantığı',
          explanation: 'Yöneticiler binlerce satırla vakit kaybetmez; en üstte 3-4 büyük rakam (KPI Kartı) görmek ister: Toplam Ciro, Memnuniyet ve Büyüme Oranı. Altında ise bunları destekleyen trend grafikleri yer alır.',
          speechText: 'Modern iş dünyasında dashboard tasarımı en değerli yetkinliklerden biridir. Karmaşık veriyi sade bir hikayeye dönüştürmeliyiz. Şimdi D6 hücresine ortalama metrik gerçekleşme oranını hesaplayalım.',
          targetCell: 'D6',
          suggestedFormula: '=ORTALAMA(D2:D5)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'D6 hücresine tıklayın ve metriklerin ortalama başarı oranını bulmak için "=ORTALAMA(D2:D5)" formülünü girin.',
          targetCell: 'D6',
          hints: [
            'D6 hücresini seçin.',
            'D2:D5 aralığındaki oranların ortalamasını alan formülü yazın: =ORTALAMA(D2:D5)',
            '=ORTALAMA(D2:D5)',
          ],
          validation: {
            targetCell: 'D6',
            expectedValue: 0.96,
            expectedFormulaKeywords: ['ORTALAMA', 'AVERAGE', 'D2:D5'],
            errorMessage: 'D6 hücresinde =ORTALAMA(D2:D5) olmalı ve 0.96 (%96) çıkmalıdır.',
            successMessage: 'Harika! Ortalama KPI başarı oranı %96 olarak hesaplandı.',
          },
        },
      ],
      quiz: {
        id: 'q13-2',
        title: 'Dashboard Mimarisi Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q13-2-1',
            question: 'Yönetici gösterge panellerinde (Dashboard) 3D (üç boyutlu) grafiklerden neden özellikle kaçınılmalıdır?',
            options: [
              { id: 'a', text: 'Perspektif açısı sütun boylarını ve dilim oranlarını yanıltıcı gösterdiği için' },
              { id: 'b', text: 'Excel in 3D grafik çizememesi' },
              { id: 'c', text: 'Bilgisayarın çökmesine sebep olması' },
              { id: 'd', text: 'Yazıcıların 3D renk basamaması' },
            ],
            correctOptionId: 'a',
            explanation: '3D efektler derinlik yanılsaması yaratarak öndeki dilim veya sütunların arkadakilerden haksız şekilde büyük görünmesine yol açar.',
          },
          {
            id: 'q13-2-2',
            question: 'Bir dashboard tasarlarken en kritik 3-4 KPI kartı sayfanın neresine yerleştirilmelidir?',
            options: [
              { id: 'a', text: 'En üst bölüme (Gözün ilk taradığı alan)' },
              { id: 'b', text: 'En sağ alt köşeye' },
              { id: 'c', text: 'Grafiklerin arkasına' },
              { id: 'd', text: 'Gizli bir sayfaya' },
            ],
            correctOptionId: 'a',
            explanation: 'Gözün doğal F tarama alışkanlığı gereği en önemli özet sayılar sayfanın en üstünde kartlar halinde sunulur.',
          },
        ],
      },
    },
  ],
};
