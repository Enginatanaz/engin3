import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase8: CurriculumPhase = {
  id: 8,
  title: 'Faz 8: Tarih & Saat Hesaplamaları',
  subtitle: 'BUGÜN, ŞİMDİ, TARİH, TAMİŞGÜNÜ ve Vade Süreleri',
  iconName: 'Calendar',
  description: 'Excel in seri tarih mantığı (1900 sistemi), dinamik sistem tarihi (=BUGÜN()), iş günleri hesaplama (TAMİŞGÜNÜ), tatiller ve teslimat süreleri.',
  lessons: [
    {
      id: 'f8-l1',
      phaseId: 8,
      unitId: 'u8-1',
      title: 'BUGÜN ve TAMİŞGÜNÜ ile Proje Takibi',
      shortDesc: 'Dinamik güncel tarih alma ve hafta sonlarını düşerek net iş günü hesaplama.',
      level: 'Başlangıç',
      durationMinutes: 12,
      functionsUsed: ['BUGÜN / TODAY', 'TAMİŞGÜNÜ / NETWORKDAYS'],
      initialWorkbook: createTableSheet(
        's1',
        'Yazılım Sprint Takvimi',
        ['Sprint Görevi', 'Başlangıç Tarihi', 'Hedef Bitiş', 'Net İş Günü'],
        [
          ['Kullanıcı Giriş Ekranı', '01.10.2026', '31.10.2026', 22],
          ['Ödeme Entegrasyonu', '05.10.2026', '25.10.2026', 15],
          ['Raporlama Modülü', '10.10.2026', '30.10.2026', 15],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Dinamik Tarih Fonksiyonu', description: 'Dosya her açıldığında bilgisayarın bugünkü tarihini getiren =BUGÜN() fonksiyonunu kullanma.' },
        { id: 'o2', title: 'İş Günü Mantığı', description: 'İki tarih arasındaki hafta sonlarını hesaba katmadan gerçek çalışma gününü bulma.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'BUGÜN Fonksiyonunun Dinamik Gücü',
          explanation: 'Tarihi elle 15.10.2026 yazarsanız yarın açtığınızda eski kalır. Ancak =BUGÜN() yazarsanız her gün kendiliğinden güncellenir. Bu fonksiyon parametre almaz.',
          speechText: 'Dinamik raporlarda güncel tarihi çekmek için =BUGÜN() fonksiyonunu kullanırız. Şimdi B5 hücresine güncel sistem tarihini ekleyelim.',
          targetCell: 'B5',
          suggestedFormula: '=BUGÜN()',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'B5 hücresine tıklayın ve "=BUGÜN()" yazıp Enter tuşuna basın.',
          targetCell: 'B5',
          hints: [
            'B5 hücresini seçin. Sistemin güncel tarihini dinamik olarak getiren fonksiyonu yazacağız.',
            'Bu fonksiyon parametre almaz, parantez açıp kapatmanız yeterlidir: =BUGÜN()',
            '=BUGÜN()',
          ],
          validation: {
            targetCell: 'B5',
            expectedFormulaKeywords: ['BUGÜN', 'TODAY'],
            errorMessage: 'B5 hücresine =BUGÜN() yazmalısınız.',
            successMessage: 'Tebrikler! Güncel sistem tarihi başarıyla getirildi.',
          },
        },
      ],
      quiz: {
        id: 'q8-1',
        title: 'Tarih ve Saat Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q8-1-1',
            question: 'İki tarih arasındaki resmi tatilleri ve hafta sonlarını düşerek gerçek çalışma günü sayısını hangi fonksiyon hesaplar?',
            options: [
              { id: 'a', text: '=GÜNSAY()' },
              { id: 'b', text: '=TAMİŞGÜNÜ() [NETWORKDAYS]' },
              { id: 'c', text: '=İŞGÜNÜ()' },
              { id: 'd', text: '=GÜNLER()' },
            ],
            correctOptionId: 'b',
            explanation: 'TAMİŞGÜNÜ (NETWORKDAYS), iki tarih arasındaki Cumartesi ve Pazar günlerini çıkararak net çalışma gününü hesaplar.',
          },
          {
            id: 'q8-1-2',
            question: 'Excel de bir tarihin sayısal arka plan değeri nedir?',
            options: [
              { id: 'a', text: '1 Ocak 1900 den itibaren geçen gün sayısı' },
              { id: 'b', text: 'Tarihin Unix zaman damgası' },
              { id: 'c', text: 'Yılın kaçıncı günü olduğu' },
              { id: 'd', text: 'Düz metin kodlaması' },
            ],
            correctOptionId: 'a',
            explanation: 'Excel tarihleri 1 Ocak 1900 ü 1 kabul eden ardışık tam sayılar olarak saklar; bu sayede tarihler arasında çıkarma yapılabilir.',
          },
        ],
      },
    },
    {
      id: 'f8-l2',
      phaseId: 8,
      unitId: 'u8-2',
      title: 'Tarih Bileşenleri: YIL, AY, GÜN ve Vade Kontrolü',
      shortDesc: 'Tarihleri parçalara ayırma, fatura vadesi ve kıdem hesaplama teknikleri.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['YIL / YEAR', 'AY / MONTH', 'GÜN / DAY', 'TARİH / DATE'],
      initialWorkbook: createTableSheet(
        's1',
        'Fatura Takip',
        ['Fatura No', 'Fatura Tarihi', 'Yıl', 'Ay', 'Vade Durumu'],
        [
          ['FTR-801', '12.04.2026', '', '', 'Ödendi'],
          ['FTR-802', '28.08.2026', '', '', 'Bekliyor'],
          ['FTR-803', '15.11.2025', '', '', 'Gecikmede'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Tarih Ayrıştırma', description: 'Tarih hücresinden YIL ve AY bilgilerini sayısal olarak çekebilme.' },
        { id: 'o2', title: 'Dönemsel Gruplama', description: 'Yıllık ve aylık finansal gruplamalar için temiz tarih anahtarları üretme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'YIL ve AY Fonksiyonları',
          explanation: 'B2 hücresindeki tarihten yılı çekmek için =YIL(B2), ayı çekmek için =AY(B2) yazılır. Bu fonksiyonlar tarihlerin raporlarda yıla göre gruplanmasını sağlar.',
          speechText: 'Fatura ve muhasebe raporlarında tarihleri yıl ve ay bazında ayrıştırmak çok yaygındır. C2 hücresine faturanın yılını çeken formülü yazalım.',
          targetCell: 'C2',
          suggestedFormula: '=YIL(B2)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'C2 hücresine tıklayın ve B2 deki faturanın yılını almak için "=YIL(B2)" formülünü girin.',
          targetCell: 'C2',
          hints: [
            'C2 hücresini seçin.',
            'YIL fonksiyonuna fatura tarihi hücresini (B2) verin: =YIL(B2)',
            '=YIL(B2)',
          ],
          validation: {
            targetCell: 'C2',
            expectedValue: 2026,
            expectedFormulaKeywords: ['YIL', 'YEAR', 'B2'],
            errorMessage: 'C2 hücresinde =YIL(B2) olmalı ve 2026 çıkmalıdır.',
            successMessage: 'Tebrikler! Fatura yılı 2026 olarak başarıyla çekildi.',
          },
        },
      ],
      quiz: {
        id: 'q8-2',
        title: 'Tarih Bileşenleri Değerlendirmesi',
        passingScore: 80,
        questions: [
          {
            id: 'q8-2-1',
            question: '=TARİH(2026; 5; 1) fonksiyonunun ürettiği standart tarih görünümü nedir?',
            options: [
              { id: 'a', text: '01.05.2026' },
              { id: 'b', text: '2026-5-1' },
              { id: 'c', text: 'Mayıs 2026' },
              { id: 'd', text: '#DEĞER!' },
            ],
            correctOptionId: 'a',
            explanation: 'TARİH (DATE) fonksiyonu yıl, ay ve gün parametrelerini birleştirerek standart Excel tarihi oluşturur: 01.05.2026.',
          },
          {
            id: 'q8-2-2',
            question: 'İki tarih arasındaki gün farkını bulmak için en doğrudan yöntem nedir? (Örn: Bitiş B2, Başlangıç A2)',
            options: [
              { id: 'a', text: '=FARK(B2; A2)' },
              { id: 'b', text: '=B2 - A2' },
              { id: 'c', text: '=TOPLA(B2; -A2)' },
              { id: 'd', text: '=GÜN(B2 - A2)' },
            ],
            correctOptionId: 'b',
            explanation: 'Tarihler Excel de ardışık sayılar olduğu için doğrudan =B2 - A2 formülü iki tarih arasındaki takvim günü farkını verir.',
          },
        ],
      },
    },
  ],
};
