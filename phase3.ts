import { CurriculumPhase } from '../../types/excel';

export const phase3: CurriculumPhase = {
  id: 3,
  title: 'Faz 3: Formül Mantığı & Referans Sistemi ($)',
  subtitle: 'Göreli, Mutlak ($A$1) ve Karma Referanslarla Formül Çoğaltma',
  iconName: 'DollarSign',
  description: 'Excel de formüllerin çalışma prensibi, işlem önceliği, formül kopyalama, göreli, mutlak ve karma ($) hücre kilitleme sistematiği.',
  lessons: [
    {
      id: 'f3-l1',
      phaseId: 3,
      unitId: 'u3-1',
      title: 'Mutlak Hücre Başvurusu ($) ve KDV Hesabı',
      shortDesc: 'Sabit hücreleri kilitlemek için $A$1 mantığı ve formülü aşağı çoğaltma.',
      level: 'Başlangıç',
      durationMinutes: 12,
      functionsUsed: ['Formül Çarpımı *', 'Mutlak Başvuru $'],
      initialWorkbook: (() => {
        const cells: Record<string, any> = {
          A1: { raw: 'KDV Oranı', computed: 'KDV Oranı', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          B1: { raw: '0.20', computed: 0.2, format: { bold: true, numberFormat: 'percent', align: 'right' } },
          A3: { raw: 'Ürün', computed: 'Ürün', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          B3: { raw: 'Net Fiyat', computed: 'Net Fiyat', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          C3: { raw: 'KDV Tutarı', computed: 'KDV Tutarı', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          D3: { raw: 'Toplam Satış', computed: 'Toplam Satış', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          A4: { raw: 'Yazıcı Toner', computed: 'Yazıcı Toner' },
          B4: { raw: '1200', computed: 1200, format: { numberFormat: 'currency' } },
          A5: { raw: 'Kağıt 500lü', computed: 'Kağıt 500lü' },
          B5: { raw: '250', computed: 250, format: { numberFormat: 'currency' } },
          A6: { raw: 'Laptop Çantası', computed: 'Laptop Çantası' },
          B6: { raw: '800', computed: 800, format: { numberFormat: 'currency' } },
        };
        return {
          activeSheetId: 's1',
          sheets: [{ id: 's1', name: 'KDV Hesabı', cells, columnWidths: { A: 150, B: 120, C: 130, D: 140 } }],
        };
      })(),
      objectives: [
        { id: 'o1', title: 'Göreli vs Mutlak Ayrımı', description: 'Formülü aşağı sürüklerken satır numarasının kaymasını $ işaretiyle engellemek.' },
        { id: 'o2', title: 'Yüzde ve Çarpım İşlemleri', description: 'Net fiyat ile sabit KDV oranını çarparak dinamik KDV tutarı üretmek.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Neden Dolar İşareti Kullanırız?',
          explanation: 'B1 hücresinde genel KDV oranımız olan %20 bulunmaktadır. C4 hücresine =B4*B1 yazıp aşağı kopyalarsak, bir alt satır =B5*B2 olur. Ancak B2 boştur! Bu yüzden B1 hücresini $B$1 şeklinde kilitlemeliyiz.',
          speechText: 'Formülü aşağı kopyaladığımızda bazı hücre adreslerinin değişmesini, bazılarının ise sabit kalmasını isteriz. KDV oranımız B1 hücresinde tek bir yerdedir. Dolar işareti koymazsanız, alt satırlarda formül boş hücrelerle çarpar. Şimdi C4 hücresinde dolar işaretini birlikte kullanalım.',
          targetCell: 'C4',
          suggestedFormula: '=B4*$B$1',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'C4 hücresine tıklayın ve "=B4*$B$1" formülünü yazıp Enter tuşuna basın.',
          targetCell: 'C4',
          hints: [
            'C4 hücresine tıklayın. Formüle mutlaka = ile başlayın ve B4 ile KDV hücresini çarpın.',
            'Formülü aşağı kopyalarken KDV oranının (B1) kaymaması için satır ve sütunu sabitleyin ($B$1).',
            '=B4*$B$1',
          ],
          validation: {
            targetCell: 'C4',
            expectedValue: 240,
            expectedFormulaKeywords: ['$B$1', 'B4', '*'],
            errorMessage: 'C4 hücresine "=B4*$B$1" yazmalısınız. Hesaplanan değer 240 TL olmalıdır.',
            successMessage: 'Kusursuz! 1200 TL için %20 KDV olan 240 TL başarıyla hesaplandı.',
          },
        },
        {
          id: 't-2',
          stepNumber: 2,
          instruction: 'D4 hücresine tıklayın ve Net Fiyat ile KDV Tutarını toplamak için "=B4+C4" yazın.',
          targetCell: 'D4',
          hints: [
            'D4 hücresine tıklayın. Net Fiyat (B4) ile KDV Tutarını (C4) toplamanız gerekmektedir.',
            'Toplama operatörünü kullanarak B4 ile C4 hücrelerini toplayın: =B4+C4',
            '=B4+C4',
          ],
          validation: {
            targetCell: 'D4',
            expectedValue: 1440,
            expectedFormulaKeywords: ['B4', 'C4', '+'],
            errorMessage: 'D4 hücresinde =B4+C4 formülü olmalı ve 1440 TL çıkmalıdır.',
            successMessage: 'Tebrikler! KDV dahil toplam satış fiyatı 1440 TL olarak bulundu.',
          },
        },
      ],
      quiz: {
        id: 'q3-1',
        title: 'Hücre Referansları Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q3-1-1',
            question: 'Bir formülde =A$1 yazıldığında formül aşağı kopyalanırsa ne olur?',
            options: [
              { id: 'a', text: 'Hem sütun hem satır değişir' },
              { id: 'b', text: '1 numaralı satır sabit kalır, değişmez' },
              { id: 'c', text: 'A sütunu değişir, satır artar' },
              { id: 'd', text: 'Excel hata verir' },
            ],
            correctOptionId: 'b',
            explanation: 'Dolar ($) işareti hangi harf veya sayının önündeyse yalnızca o kilitlenir. $1 yazıldığında satır kilitlidir.',
          },
          {
            id: 'q3-1-2',
            question: 'Formülde hem sütunu hem satırı tam kilitlemek için ($A$1) klavyeden en pratik hangi kısayol kullanılır?',
            options: [
              { id: 'a', text: 'F4 tuşu' },
              { id: 'b', text: 'Ctrl + K' },
              { id: 'c', text: 'Shift + Enter' },
              { id: 'd', text: 'Alt + D' },
            ],
            correctOptionId: 'a',
            explanation: 'F4 tuşu formül çubuğundaki hücre adresini sırasıyla $A$1 -> A$1 -> $A1 -> A1 arasında döngüye sokar.',
          },
        ],
      },
    },
    {
      id: 'f3-l2',
      phaseId: 3,
      unitId: 'u3-2',
      title: 'Karma Referanslar ($A1 ve A$1) ile Matris Hesabı',
      shortDesc: 'Yalnızca sütunu veya yalnızca satırı sabitleyerek iki boyutlu çarpım tablosu kurma.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['Karma Referans $A1', 'Karma Referans A$1'],
      initialWorkbook: (() => {
        const cells: Record<string, any> = {
          A2: { raw: 'Birim Fiyat', computed: 'Birim Fiyat', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          B2: { raw: 'Ürün Adı', computed: 'Ürün Adı', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          C2: { raw: 'İskonto %5', computed: 'İskonto %5', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          D2: { raw: 'İskonto %10', computed: 'İskonto %10', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          C3: { raw: '0.05', computed: 0.05, format: { numberFormat: 'percent', align: 'center' } },
          D3: { raw: '0.10', computed: 0.10, format: { numberFormat: 'percent', align: 'center' } },
          A4: { raw: '1000', computed: 1000, format: { numberFormat: 'currency' } },
          B4: { raw: 'Ofis Koltuğu', computed: 'Ofis Koltuğu' },
          A5: { raw: '2500', computed: 2500, format: { numberFormat: 'currency' } },
          B5: { raw: 'Çalışma Masası', computed: 'Çalışma Masası' },
        };
        return {
          activeSheetId: 's1',
          sheets: [{ id: 's1', name: 'İskonto Matrisi', cells, columnWidths: { A: 130, B: 150, C: 130, D: 130 } }],
        };
      })(),
      objectives: [
        { id: 'o1', title: 'Karma Başvuru Mantığı', description: 'Formülü hem sağa hem aşağı çekerken doğru eksenleri kilitleme becerisi ($A4 * C$3).' },
        { id: 'o2', title: 'Tek Formülle Tablo Doldurma', description: 'Yüzlerce hücreyi tek bir doğru karma formülle hesaplama yetkinliği.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'İki Boyutlu Çarpım Matrisi',
          explanation: 'A sütunundaki fiyatları ($A4) C3 satırındaki iskonto oranıyla (C$3) çarpmak istiyoruz. Formülü sağa kopyaladığımızda sütun C den D ye kaymalı, fakat satır 3 sabit kalmalıdır (C$3). A sütunundaki fiyat ise sağa kaymamalı, daima A da kalmalıdır ($A4).',
          speechText: 'Karma referanslar ileri Excel in en güçlü tekniklerinden biridir. $A4 yazarak fiyat sütununu kilitleriz; C$3 yazarak oran satırını kilitleriz. Şimdi C4 hücresine bu formülü yazalım.',
          targetCell: 'C4',
          suggestedFormula: '=$A4*C$3',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'C4 hücresine tıklayın ve "=$A4*C$3" formülünü yazıp Enter a basın.',
          targetCell: 'C4',
          hints: [
            'C4 hücresini seçin.',
            'Fiyat sütununu ($A4) ve iskonto oran satırını (C$3) çarpan formülü yazın: =$A4*C$3',
            '=$A4*C$3',
          ],
          validation: {
            targetCell: 'C4',
            expectedValue: 50,
            expectedFormulaKeywords: ['$A4', 'C$3', '*'],
            errorMessage: 'C4 hücresinde =$A4*C$3 formülü olmalı ve 50 TL çıkmalıdır.',
            successMessage: 'Mükemmel! 1000 TL için %5 iskonto tutarı 50 TL olarak hesaplandı.',
          },
        },
      ],
      quiz: {
        id: 'q3-2',
        title: 'Karma Başvurular Değerlendirmesi',
        passingScore: 80,
        questions: [
          {
            id: 'q3-2-1',
            question: '=$B2 formülü sağdaki sütuna (örneğin C2 ye) kopyalandığında ne olur?',
            options: [
              { id: 'a', text: '=$C2 olur' },
              { id: 'b', text: '=$B2 olarak kalır' },
              { id: 'c', text: '=B$2 olur' },
              { id: 'd', text: '#BAŞVURU! hatası verir' },
            ],
            correctOptionId: 'b',
            explanation: 'B harfinin önündeki dolar işareti ($B) sütunu kilitlediği için formül sağa kopyalansa dahi B sütunu değişmez.',
          },
          {
            id: 'q3-2-2',
            question: '=B$2 formülü bir alt satıra (örneğin B3 e) kopyalandığında ne olur?',
            options: [
              { id: 'a', text: '=B$2 olarak kalır' },
              { id: 'b', text: '=B$3 olur' },
              { id: 'c', text: '=$B2 olur' },
              { id: 'd', text: '#DEĞER! hatası verir' },
            ],
            correctOptionId: 'a',
            explanation: '2 rakamının önündeki dolar ($2) satırı kilitlediği için formül alt satırlara kopyalansa da 2 olarak sabit kalır.',
          },
        ],
      },
    },
  ],
};
