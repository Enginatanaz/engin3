import { CurriculumPhase, WorkbookData } from '../types/excel';

// Helper to quickly build standard sheets
function createTableSheet(
  sheetId: string,
  sheetName: string,
  headers: string[],
  rows: (string | number)[][],
  columnWidths?: Record<string, number>
): WorkbookData {
  const cells: Record<string, any> = {};

  // Headers in row 1
  headers.forEach((h, colIdx) => {
    const colLetter = String.fromCharCode(65 + colIdx);
    const addr = `${colLetter}1`;
    cells[addr] = {
      raw: h,
      computed: h,
      format: {
        bold: true,
        bgColor: '#047857', // emerald 700
        textColor: '#FFFFFF',
        align: 'center',
        border: 'all',
      },
    };
  });

  // Data in rows 2..
  rows.forEach((row, rowIdx) => {
    const rowNum = rowIdx + 2;
    row.forEach((val, colIdx) => {
      const colLetter = String.fromCharCode(65 + colIdx);
      const addr = `${colLetter}${rowNum}`;
      const isNum = typeof val === 'number';
      cells[addr] = {
        raw: String(val),
        computed: val,
        format: {
          align: isNum ? 'right' : 'left',
          border: 'all',
          numberFormat: isNum && val > 1000 ? 'currency' : 'general',
        },
      };
    });
  });

  return {
    activeSheetId: sheetId,
    sheets: [
      {
        id: sheetId,
        name: sheetName,
        cells,
        columnWidths: columnWidths || { A: 140, B: 130, C: 120, D: 140, E: 120 },
      },
    ],
  };
}

export const CURRICULUM_PHASES: CurriculumPhase[] = [
  // ----------------------------------------------------
  // FAZ 1
  // ----------------------------------------------------
  {
    id: 1,
    title: 'Faz 1: Excel Arayüzü & Temel İşlemler',
    subtitle: 'Çalışma Sayfaları, Izgara Navigasyonu ve Veri Girişi',
    iconName: 'LayoutGrid',
    description: 'Excel arayüzü, formül çubuğu, hücre adlandırma, sütun-satır yapısı ve temel veri biçimlendirme kuralları.',
    lessons: [
      {
        id: 'f1-l1',
        phaseId: 1,
        unitId: 'u1-1',
        title: 'Excel Hücre Mimarisi ve İlk Tablo Oluşturma',
        shortDesc: 'Hücre adresleme, veri giriş tipleri ve satır/sütun hizalamaları.',
        level: 'Başlangıç',
        durationMinutes: 10,
        functionsUsed: [],
        initialWorkbook: createTableSheet(
          's1',
          'Ürün Envanteri',
          ['Ürün Kodu', 'Ürün Adı', 'Kategori', 'Birim Fiyat', 'Stok Adedi'],
          [
            ['URN-101', 'Kablosuz Mouse', 'Aksesuar', 450, 85],
            ['URN-102', 'Mekanik Klavye', 'Aksesuar', 1250, 40],
            ['URN-103', '27 inç 2K Monitör', 'Donanım', 6800, 15],
            ['URN-104', 'USB-C Çoklayıcı', 'Aksesuar', 380, 120],
            ['URN-105', 'Ergonomik Koltuk', 'Mobilya', 4900, 8],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Hücre Adreslerini Anlama', description: 'Sütun harfi ve satır numarasının kesişimiyle oluşan B2, D5 gibi hücre referanslarını kavrama.' },
          { id: 'o2', title: 'Hücreye Veri Girme', description: 'Metin, sayı ve tarih tiplerinin varsayılan hizalama mantığını anlama.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Hücre Kavramı ve Formül Çubuğu',
            explanation: 'Excel’de her kutucuk bir hücredir. Sol üstteki İsim Kutusunda o an aktif olan hücrenin adresi (örneğin A1 veya D2) görünür. Formül çubuğu ise hücrenin içindeki ham veriyi gösterir.',
            speechText: 'Excel dünyasına hoş geldiniz. Çalışma alanımızdaki her kutucuk bir hücredir. Şu anda ekranın üst kısmında formül çubuğunu ve solundaki isim kutusunu görüyorsunuz. Şimdi D2 hücresine tıklayın.',
            targetCell: 'D2',
          },
          {
            id: 'st-2',
            title: 'Sayı ve Metin Ayrımı',
            explanation: 'Excel metinleri sola, sayısal değerleri ise otomatik olarak sağa hizalar. D sütunundaki birim fiyatlar sayı olduğu için sağa yaslıdır.',
            speechText: 'Dikkat ederseniz ürün adları sola, birim fiyatlar ise sağa yaslanmıştır. Excel bir verinin sayısal hesaplamalara uygun olup olmadığını bu hizalamadan anlar.',
            targetCell: 'B2',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'A7 hücresine tıklayın ve yeni ürün kodu olarak "URN-106" yazıp Enter tuşuna basın.',
            targetCell: 'A7',
            hints: ['A sütununun 7. satırındaki hücreyi seçin.', 'İçerisine URN-106 yazın.', 'Klavyeden Enter tuşuna basarak onaylayın.'],
            validation: {
              targetCell: 'A7',
              expectedValue: 'URN-106',
              errorMessage: 'A7 hücresine tam olarak "URN-106" yazmalısınız.',
              successMessage: 'Harika! Yeni ürün kodunu başarıyla girdiniz.',
            },
          },
          {
            id: 't-2',
            stepNumber: 2,
            instruction: 'D7 hücresine yeni ürünün birim fiyatı olarak 850 yazıp onaylayın.',
            targetCell: 'D7',
            hints: ['D sütununda 7. satırdaki hedef hücreyi (D7) seçin.', 'Yeni ürünün birim fiyatı olarak 850 sayısal değerini girin.', '850'],
            validation: {
              targetCell: 'D7',
              expectedValue: 850,
              errorMessage: 'D7 hücresine 850 değerini girmelisiniz.',
              successMessage: 'Tebrikler! Birim fiyat 850 olarak girildi.',
            },
          },
        ],
        quiz: {
          id: 'q1',
          title: 'Hücre Mimarisi Değerlendirmesi',
          passingScore: 80,
          questions: [
            {
              id: 'q1-1',
              question: 'Excel’de C sütunu ile 4. satırın kesişimindeki hücrenin adresi nedir?',
              options: [
                { id: 'a', text: '4C' },
                { id: 'b', text: 'C4' },
                { id: 'c', text: 'C:4' },
                { id: 'd', text: '$C4$' },
              ],
              correctOptionId: 'b',
              explanation: 'Excel standart adreslemede önce sütun harfi sonra satır numarası gelir: C4.',
            },
            {
              id: 'q1-2',
              question: 'Bir hücreye girilen değer sağa hizalanmışsa Excel bu veriyi genellikle ne olarak tanımıştır?',
              options: [
                { id: 'a', text: 'Sayısal Değer' },
                { id: 'b', text: 'Metin Değeri' },
                { id: 'c', text: 'Mantıksal Hata' },
                { id: 'd', text: 'Formül Başlığı' },
              ],
              correctOptionId: 'a',
              explanation: 'Excel varsayılan olarak sayı, tarih ve saat değerlerini sağa; düz metinleri ise sola hizalar.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 2
  // ----------------------------------------------------
  {
    id: 2,
    title: 'Faz 2: Formül Mantığı & Mutlak Başvuru ($)',
    subtitle: 'Göreli (A1) ve Mutlak ($A$1) Hücre Referansları',
    iconName: 'DollarSign',
    description: 'Excel’in temel formül mimarisi, çarpma, bölme, yüzde hesapları ve dolar ($) işaretinin formül kopyalamadaki hayati rolü.',
    lessons: [
      {
        id: 'f2-l1',
        phaseId: 2,
        unitId: 'u2-1',
        title: 'Mutlak Hücre Başvurusu ve KDV Hesabı',
        shortDesc: 'Sabit hücreleri sabitlemek için $A$1 mantığı ve formülü aşağı çoğaltma.',
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
            explanation: 'B1 hücresinde genel KDV oranımız olan %20 bulunmaktadır. C4 hücresine =B4*B1 yazıp aşağı kopyalarsak, bir alt satır =B5*B2 olur. Ancak B2 boştur! Bu yüzden B1 hücresinin 1 numaralı satırını $B$1 şeklinde kilitlemeliyiz.',
            speechText: 'Formülü aşağı kopyaladığımızda bazı hücre adreslerinin değişmesini, bazılarının ise sabit kalmasını isteriz. KDV oranımız B1 hücresinde tek bir yerdedir. Eğer dolar işareti koymazsanız, alt satırlarda formül boş hücrelerle çarpar. Şimdi C4 hücresinde dolar işaretini birlikte kullanalım.',
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
            hints: ['Formüle mutlaka = ile başlayın.', 'B4 yazıp çarpı (*) koyun.', 'KDV hücresini sabitlemek için $B$1 yazın.'],
            validation: {
              targetCell: 'C4',
              expectedValue: 240,
              expectedFormulaKeywords: ['$B$1', 'B4'],
              errorMessage: 'C4 hücresine "=B4*$B$1" yazmalısınız. Hesaplanan değer 240 TL olmalıdır.',
              successMessage: 'Kusursuz! 1200 TL için %20 KDV olan 240 TL başarıyla hesaplandı.',
            },
          },
          {
            id: 't-2',
            stepNumber: 2,
            instruction: 'D4 hücresine tıklayın ve Net Fiyat ile KDV Tutarını toplamak için "=B4+C4" yazın.',
            targetCell: 'D4',
            hints: ['D4 hücresine tıklayın. Net Fiyat (B4) ile KDV Tutarını (C4) toplamanız gerekmektedir.', 'Toplama operatörünü kullanarak B4 ile C4 hücrelerini toplayın: =B4+C4', '=B4+C4'],
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
          id: 'q2',
          title: 'Hücre Referansları Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q2-1',
              question: 'Bir formülde =A$1 yazıldığında formül aşağı kopyalanırsa ne olur?',
              options: [
                { id: 'a', text: 'Hem A hem 1 değişir.' },
                { id: 'b', text: '1 numaralı satır sabit kalır, değişmez.' },
                { id: 'c', text: 'A sütunu kilitlenir fakat satır artar.' },
                { id: 'd', text: '#DEĞER! hatası verir.' },
              ],
              correctOptionId: 'b',
              explanation: 'Dolar işareti ($) hangi karakterin önündeyse o kilitlenir. $1 satırı kilitler.',
            },
            {
              id: 'q2-2',
              question: 'Formülde hem sütunu hem satırı tam kilitlemek için ($A$1) klavyeden en pratik hangi kısayol kullanılır?',
              options: [
                { id: 'a', text: 'F4 tuşu' },
                { id: 'b', text: 'F2 tuşu' },
                { id: 'c', text: 'Ctrl + D' },
                { id: 'd', text: 'Alt + Enter' },
              ],
              correctOptionId: 'a',
              explanation: 'Excel de bir hücre referansını yazdıktan sonra F4 tuşuna basmak göreli, mutlak ($A$1), satır kilitli (A$1) ve sütun kilitli ($A1) modları arasında geçiş yaptırır.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 3
  // ----------------------------------------------------
  {
    id: 3,
    title: 'Faz 3: Temel Fonksiyonlar (TOPLA, ORTALAMA, MAK)',
    subtitle: 'Veri Özetleme ve İstatistiksel Analiz',
    iconName: 'Calculator',
    description: 'TOPLA (SUM), ORTALAMA (AVERAGE), MAK (MAX), MİN (MIN) ve BAĞ_DEĞ_DOLU_SAY (COUNTA) ile kapsamlı özet tablolar.',
    lessons: [
      {
        id: 'f3-l1',
        phaseId: 3,
        unitId: 'u3-1',
        title: 'Çeyreklik Satış Raporu ve İstatistiksel Fonksiyonlar',
        shortDesc: 'Aralık bazlı toplam, ortalama ve ekstrem değer hesaplamaları.',
        level: 'Başlangıç',
        durationMinutes: 12,
        functionsUsed: ['TOPLA (SUM)', 'ORTALAMA (AVERAGE)', 'MAK (MAX)', 'MİN (MIN)'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Temsilci', computed: 'Temsilci', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Bölge', computed: 'Bölge', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: '1. Çeyrek', computed: '1. Çeyrek', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            D1: { raw: '2. Çeyrek', computed: '2. Çeyrek', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'Ahmet Yılmaz', computed: 'Ahmet Yılmaz' },
            B2: { raw: 'Marmara', computed: 'Marmara' },
            C2: { raw: '45000', computed: 45000, format: { numberFormat: 'currency' } },
            D2: { raw: '52000', computed: 52000, format: { numberFormat: 'currency' } },
            A3: { raw: 'Zeynep Kaya', computed: 'Zeynep Kaya' },
            B3: { raw: 'Ege', computed: 'Ege' },
            C3: { raw: '62000', computed: 62000, format: { numberFormat: 'currency' } },
            D3: { raw: '71000', computed: 71000, format: { numberFormat: 'currency' } },
            A4: { raw: 'Murat Demir', computed: 'Murat Demir' },
            B4: { raw: 'İç Anadolu', computed: 'İç Anadolu' },
            C4: { raw: '38000', computed: 38000, format: { numberFormat: 'currency' } },
            D4: { raw: '44000', computed: 44000, format: { numberFormat: 'currency' } },
            A5: { raw: 'Selin Şahin', computed: 'Selin Şahin' },
            B5: { raw: 'Marmara', computed: 'Marmara' },
            C5: { raw: '89000', computed: 89000, format: { numberFormat: 'currency' } },
            D5: { raw: '94000', computed: 94000, format: { numberFormat: 'currency' } },
            A7: { raw: 'Toplam Satış', computed: 'Toplam Satış', format: { bold: true } },
            A8: { raw: 'Ortalama Satış', computed: 'Ortalama Satış', format: { bold: true } },
            A9: { raw: 'En Yüksek Satış', computed: 'En Yüksek Satış', format: { bold: true } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Satış Analizi', cells, columnWidths: { A: 160, B: 130, C: 130, D: 130 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'Hücre Aralığı Mantığı', description: 'C2:C5 gibi iki nokta (:) ile belirtilen aralıkların fonksiyonlara aktarımı.' },
          { id: 'o2', title: 'TOPLA ve ORTALAMA Kullanımı', description: 'Büyük veri bloklarını tek bir formülle özetleme yeteneği kazanmak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Hücreleri Tek Tek Toplamak Yerine Aralık Kullanma',
            explanation: 'Hücreleri =C2+C3+C4+C5 şeklinde toplamak yerine =TOPLA(C2:C5) yazmak profesyonel standarttır. Araya yeni satır eklendiğinde TOPLA aralığı otomatik günceller.',
            speechText: 'Satış tablomuzda 4 temsilcinin ilk çeyrek rakamları var. Tek tek toplamak yerine iki nokta üst üste kullanarak C2 den C5 e kadar olan aralığı TOPLA fonksiyonuna veriyoruz.',
            targetCell: 'C7',
            suggestedFormula: '=TOPLA(C2:C5)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'C7 hücresine tıklayın ve 1. Çeyrek toplamını bulmak için "=TOPLA(C2:C5)" yazın.',
            targetCell: 'C7',
            hints: ['C7 hücresine geçin.', '=TOPLA(C2:C5) yazın.', 'İngilizce Excel kullanıyorsanız =SUM(C2:C5) de geçerlidir.'],
            validation: {
              targetCell: 'C7',
              expectedValue: 234000,
              expectedFormulaKeywords: ['TOPLA', 'SUM'],
              errorMessage: 'C7 hücresinde =TOPLA(C2:C5) olmalı ve sonuç 234.000 TL çıkmalıdır.',
              successMessage: 'Mükemmel! 1. Çeyrek toplamı 234.000 TL olarak hesaplandı.',
            },
          },
          {
            id: 't-2',
            stepNumber: 2,
            instruction: 'C8 hücresine tıklayın ve ortalama satışı bulmak için "=ORTALAMA(C2:C5)" yazın.',
            targetCell: 'C8',
            hints: ['C8 hücresine geçin. 4 çeyreğin aritmetik ortalamasını alacağız.', 'C2 ile C5 arasındaki hücreleri argüman olarak verin: =ORTALAMA(C2:C5)', '=ORTALAMA(C2:C5)'],
            validation: {
              targetCell: 'C8',
              expectedValue: 58500,
              expectedFormulaKeywords: ['ORTALAMA', 'AVERAGE'],
              errorMessage: 'C8 hücresinde =ORTALAMA(C2:C5) formülü yer almalı ve 58.500 TL çıkmalıdır.',
              successMessage: 'Tebrikler! Ortalama başarıyla 58.500 TL olarak bulundu.',
            },
          },
        ],
        quiz: {
          id: 'q3',
          title: 'Temel Fonksiyonlar Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q3-1',
              question: 'B1:B10 aralığındaki en yüksek değeri getiren fonksiyon hangisidir?',
              options: [
                { id: 'a', text: '=YÜKSEK(B1:B10)' },
                { id: 'b', text: '=MAK(B1:B10)' },
                { id: 'c', text: '=BÜYÜK(B1:B10)' },
                { id: 'd', text: '=TOPLA.ENÇOK(B1:B10)' },
              ],
              correctOptionId: 'b',
              explanation: 'Excel Türkçe sürümünde en büyük değer için =MAK() veya İngilizce =MAX() kullanılır.',
            },
            {
              id: 'q3-2',
              question: 'A1:A5 aralığındaki hem sayıları hem metinleri sayıp kaç hücrenin dolu olduğunu gösteren fonksiyon hangisidir?',
              options: [
                { id: 'a', text: '=SAY(A1:A5)' },
                { id: 'b', text: '=BAĞ_DEĞ_DOLU_SAY(A1:A5)' },
                { id: 'c', text: '=TOPLA(A1:A5)' },
                { id: 'd', text: '=DOLU(A1:A5)' },
              ],
              correctOptionId: 'b',
              explanation: '=SAY sadece sayısal hücreleri sayar. Metin ve sayı dahil tüm dolu hücreleri saymak için =BAĞ_DEĞ_DOLU_SAY (COUNTA) kullanılır.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 4
  // ----------------------------------------------------
  {
    id: 4,
    title: 'Faz 4: Mantıksal Fonksiyonlar (EĞER, VE, YADA)',
    subtitle: 'Şartlı Karar Mekanizmaları ve Hata Yönetimi',
    iconName: 'GitBranch',
    description: 'EĞER (IF), VE (AND), YADA (OR) ve EĞERHATA (IFERROR) ile profesyonel karar ağaçları ve prim sistemleri.',
    lessons: [
      {
        id: 'f4-l1',
        phaseId: 4,
        unitId: 'u4-1',
        title: 'EĞER Fonksiyonu ile Satış Primi Hesabı',
        shortDesc: 'Hedefi aşan temsilcilere prim atayan şartlı formül mimarisi.',
        level: 'Orta',
        durationMinutes: 15,
        functionsUsed: ['EĞER (IF)', 'Karşılaştırma Operatörleri >='],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Temsilci', computed: 'Temsilci', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Satış Tutarı', computed: 'Satış Tutarı', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'Hedef', computed: 'Hedef', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            D1: { raw: 'Prim Oranı', computed: 'Prim Oranı', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'Ali Can', computed: 'Ali Can' },
            B2: { raw: '75000', computed: 75000, format: { numberFormat: 'currency' } },
            C2: { raw: '60000', computed: 60000, format: { numberFormat: 'currency' } },
            A3: { raw: 'Merve Arslan', computed: 'Merve Arslan' },
            B3: { raw: '52000', computed: 52000, format: { numberFormat: 'currency' } },
            C3: { raw: '60000', computed: 60000, format: { numberFormat: 'currency' } },
            A4: { raw: 'Kemal Kurt', computed: 'Kemal Kurt' },
            B4: { raw: '88000', computed: 88000, format: { numberFormat: 'currency' } },
            C4: { raw: '60000', computed: 60000, format: { numberFormat: 'currency' } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Prim Listesi', cells, columnWidths: { A: 150, B: 140, C: 130, D: 140 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'EĞER Sözdizimi', description: '=EĞER(mantıksal_sınama; doğruysa_değer; yanlışsa_değer) yapısını öğrenmek.' },
          { id: 'o2', title: 'Metin ve Sayı Çıktısı', description: 'Şarta bağlı olarak sayı veya metin üretebilmek.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Karar Mekanizması Mantığı',
            explanation: 'Bir satış tablosunda 60 bin liranın üzerinde satış yapanlara prim vermek istiyorsun. Her satırı tek tek kontrol etmek yerine bu kararı Excel’e bırakabiliriz. EĞER fonksiyonu üç parçadan oluşur: Şart, Şart sağlanırsa yapılacak işlem ve Sağlanmazsa yapılacak işlem.',
            speechText: 'Bir satış tablosunda 60 bin liranın üzerinde satış yapanlara prim vermek istiyorsun. Her satırı tek tek kontrol etmek yerine bu kararı Excel e bırakabiliriz. Şimdi D2 hücresinde EĞER fonksiyonunu oluşturalım.',
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
            hints: ['Satışın (B2) hedeften (C2) büyük veya eşit olup olmadığını test edin.', 'EĞER sözdizimi: =EĞER(şart; [doğruysa]; [yanlışsa]). Argümanları noktalı virgül (;) ile ayırın.', '=EĞER(B2>=C2; "%10 Prim"; "%0 Prim")'],
            validation: {
              targetCell: 'D2',
              expectedValue: '%10 Prim',
              expectedFormulaKeywords: ['EĞER', 'IF', 'B2', 'C2'],
              errorMessage: 'D2 hücresinde =EĞER(B2>=C2; "%10 Prim"; "%0 Prim") formülü yer almalıdır.',
              successMessage: 'Harika! 75.000 TL hedefi aştığı için başarıyla %10 Prim sonucunu aldınız.',
            },
          },
        ],
        quiz: {
          id: 'q4',
          title: 'Mantıksal Fonksiyonlar Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q4-1',
              question: 'EĞER fonksiyonunda argümanlar Türk Excel standartlarında hangi işaretle ayrılır?',
              options: [
                { id: 'a', text: 'Noktalı Virgül (;)' },
                { id: 'b', text: 'Virgül (,)' },
                { id: 'c', text: 'İki Nokta (:)' },
                { id: 'd', text: 'Slash (/)' },
              ],
              correctOptionId: 'a',
              explanation: 'Türkçe bölgesel ayarlarında ondalık basamak virgül olduğu için formül argümanları noktalı virgül (;) ile ayrılır.',
            },
            {
              id: 'q4-2',
              question: 'Birden çok şartın HEPSİNİN aynı anda doğru olmasını zorunlu kılan fonksiyon hangisidir?',
              options: [
                { id: 'a', text: '=YADA() [OR]' },
                { id: 'b', text: '=VE() [AND]' },
                { id: 'c', text: '=EĞERHATA() [IFERROR]' },
                { id: 'd', text: '=DEĞİL() [NOT]' },
              ],
              correctOptionId: 'b',
              explanation: '=VE() fonksiyonu içerisindeki tüm koşullar DOĞRU ise DOĞRU sonucunu verir.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 5
  // ----------------------------------------------------
  {
    id: 5,
    title: 'Faz 5: Koşullu Hesaplamalar (EĞERSAY, ÇOKETOPLA)',
    subtitle: 'Filtreye ve Kriterlere Dayalı Toplam ve Sayımlar',
    iconName: 'Filter',
    description: 'EĞERSAY (COUNTIF), ÇOKEĞERSAY (COUNTIFS), ETOPLA (SUMIF) ve ÇOKETOPLA (SUMIFS) ile çok kriterli raporlama.',
    lessons: [
      {
        id: 'f5-l1',
        phaseId: 5,
        unitId: 'u5-1',
        title: 'ÇOKETOPLA ile Çok Kriterli Ciro Analizi',
        shortDesc: 'Belirli bölge ve ürün grubundaki satışları şartlı olarak toplama.',
        level: 'Orta',
        durationMinutes: 15,
        functionsUsed: ['ÇOKETOPLA (SUMIFS)', 'EĞERSAY (COUNTIF)'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Bölge', computed: 'Bölge', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Kategori', computed: 'Kategori', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'Ciro', computed: 'Ciro', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'Marmara', computed: 'Marmara' },
            B2: { raw: 'Elektronik', computed: 'Elektronik' },
            C2: { raw: '50000', computed: 50000, format: { numberFormat: 'currency' } },
            A3: { raw: 'Marmara', computed: 'Marmara' },
            B3: { raw: 'Gıda', computed: 'Gıda' },
            C3: { raw: '30000', computed: 30000, format: { numberFormat: 'currency' } },
            A4: { raw: 'Ege', computed: 'Ege' },
            B4: { raw: 'Elektronik', computed: 'Elektronik' },
            C4: { raw: '40000', computed: 40000, format: { numberFormat: 'currency' } },
            A5: { raw: 'Marmara', computed: 'Marmara' },
            B5: { raw: 'Elektronik', computed: 'Elektronik' },
            C5: { raw: '70000', computed: 70000, format: { numberFormat: 'currency' } },
            E1: { raw: 'Sorgulanan Bölge', computed: 'Sorgulanan Bölge', format: { bold: true } },
            F1: { raw: 'Marmara', computed: 'Marmara', format: { bgColor: '#FEF3C7' } },
            E2: { raw: 'Sorgulanan Kategori', computed: 'Sorgulanan Kategori', format: { bold: true } },
            F2: { raw: 'Elektronik', computed: 'Elektronik', format: { bgColor: '#FEF3C7' } },
            E3: { raw: 'Marmara Elektronik Toplamı', computed: 'Marmara Elektronik Toplamı', format: { bold: true } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Kriterli Ciro', cells, columnWidths: { A: 130, B: 130, C: 120, E: 200, F: 130 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'ÇOKETOPLA Mimarisi', description: '=ÇOKETOPLA(toplam_aralığı; ölçüt_aralığı1; ölçüt1; ölçüt_aralığı2; ölçüt2) sırasını ezberlemeden kavramak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'ÇOKETOPLA ile ETOPLA Farkı',
            explanation: 'ETOPLA fonksiyonunda toplam aralığı en sonda yazılırken, birden fazla kriteri destekleyen ÇOKETOPLA fonksiyonunda toplanacak sayısal sütun EN BAŞTA yazılır.',
            speechText: 'ÇOKETOPLA fonksiyonunda en önemli kural toplanacak değerler sütununun en başta yazılmasıdır. Burada C2 C5 aralığını toplayacağız, şartlarımız ise Bölgenin Marmara ve Kategorinin Elektronik olmasıdır.',
            targetCell: 'F3',
            suggestedFormula: '=ÇOKETOPLA(C2:C5; A2:A5; "Marmara"; B2:B5; "Elektronik")',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'F3 hücresine tıklayın ve Marmara bölgesindeki Elektronik satışlarını toplamak için formülü yazın: =ÇOKETOPLA(C2:C5; A2:A5; "Marmara"; B2:B5; "Elektronik")',
            targetCell: 'F3',
            hints: ['ÇOKETOPLA fonksiyonunda ilk argüman toplanacak ciro aralığı (C2:C5) dir.', 'Ardından bölge aralığı ve kriteri (A2:A5; "Marmara") ile kategori kriteri (B2:B5; "Elektronik") eklenir.', '=ÇOKETOPLA(C2:C5; A2:A5; "Marmara"; B2:B5; "Elektronik")'],
            validation: {
              targetCell: 'F3',
              expectedValue: 120000,
              expectedFormulaKeywords: ['ÇOKETOPLA', 'SUMIFS', 'C2:C5'],
              errorMessage: 'F3 hücresinde sonuç 120.000 TL olmalıdır. (50.000 + 70.000)',
              successMessage: 'Kutlarım! İki farklı şarta uyan toplam ciro 120.000 TL olarak hatasız hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q5',
          title: 'Koşullu Hesaplama Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q5-1',
              question: 'ÇOKETOPLA (SUMIFS) fonksiyonunda toplanacak sayısal aralık kaçıncı argümandır?',
              options: [
                { id: 'a', text: 'En sonuncu argüman' },
                { id: 'b', text: 'İlk (1.) argüman' },
                { id: 'c', text: '2. argüman' },
                { id: 'd', text: 'Fark etmez' },
              ],
              correctOptionId: 'b',
              explanation: 'ÇOKETOPLA fonksiyonunda toplanacak aralık daima ilk argümandır. (ETOPLA da ise en sondadır).',
            },
            {
              id: 'q5-2',
              question: 'A1:A100 aralığında kaç adet "Tamamlandı" ifadesi olduğunu saymak için hangisi kullanılır?',
              options: [
                { id: 'a', text: '=EĞERSAY(A1:A100; "Tamamlandı")' },
                { id: 'b', text: '=TOPLA(A1:A100; "Tamamlandı")' },
                { id: 'c', text: '=SAY(A1:A100)' },
                { id: 'd', text: '=BAĞ_DEĞ_DOLU_SAY(A1:A100)' },
              ],
              correctOptionId: 'a',
              explanation: 'Belirli bir koşulu sağlayan hücrelerin sayısını bulmak için =EĞERSAY (COUNTIF) kullanılır.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 6
  // ----------------------------------------------------
  {
    id: 6,
    title: 'Faz 6: Metin Fonksiyonları & Veri Temizliği',
    subtitle: 'SOLDAN, SAĞDAN, METİNBİRLEŞTİR ve KIRP',
    iconName: 'Type',
    description: 'Bozuk metinleri ayıklama, gereksiz boşlukları silme, büyük/küçük harf dönüştürme ve dinamik metin birleştirme.',
    lessons: [
      {
        id: 'f6-l1',
        phaseId: 6,
        unitId: 'u6-1',
        title: 'Müşteri İsim ve Kod Verilerini Ayrıştırma',
        shortDesc: 'SOLDAN, SAĞDAN ve METİNBİRLEŞTİR ile kurumsal veri standartlaştırma.',
        level: 'Orta',
        durationMinutes: 12,
        functionsUsed: ['SOLDAN (LEFT)', 'SAĞDAN (RIGHT)', 'METİNBİRLEŞTİR (TEXTJOIN)'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Ad', computed: 'Ad', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Soyad', computed: 'Soyad', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'Tam Ad', computed: 'Tam Ad', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'Ahmet', computed: 'Ahmet' },
            B2: { raw: 'Yılmaz', computed: 'Yılmaz' },
            A3: { raw: 'Ayşe', computed: 'Ayşe' },
            B3: { raw: 'Demir', computed: 'Demir' },
            E1: { raw: 'Ürün Kodu', computed: 'Ürün Kodu', format: { bold: true } },
            E2: { raw: 'TR-2026-IST', computed: 'TR-2026-IST' },
            F1: { raw: 'Ülke Kodu', computed: 'Ülke Kodu', format: { bold: true } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Metin İşlemleri', cells, columnWidths: { A: 130, B: 130, C: 180, E: 140, F: 120 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'Metin Birleştirme', description: '& operatörü ve METİNBİRLEŞTİR fonksiyonlarını kullanarak isim ve soyismi birleştirmek.' },
          { id: 'o2', title: 'Metin Parçalama', description: 'SOLDAN ve SAĞDAN fonksiyonlarıyla kod dizgilerinden parça çıkarmak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Hücreleri Boşluk Bırakarak Birleştirme',
            explanation: 'İki metin hücresini araya boşluk koyarak birleştirmek için =A2 & " " & B2 veya =METİNBİRLEŞTİR(" "; DOĞRU; A2:B2) formülü kullanılır.',
            speechText: 'Metinleri birleştirirken en sık yapılan hata araya boşluk koymayı unutmaktır. A2 ile B2 arasına tırnak içinde bir boşluk karakteri ekleyerek birleştirelim.',
            targetCell: 'C2',
            suggestedFormula: '=A2 & " " & B2',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'C2 hücresine tıklayın ve Ad ile Soyadı aralarında bir boşlukla birleştirmek için "=A2 & " " & B2" yazın.',
            targetCell: 'C2',
            hints: ['C2 hücresini seçin. Ad (A2) ve Soyadı (B2) aralarına bir boşluk karakteri koyarak birleştirin.', 'Metin birleştirme operatörü (&) ile tırnak içinde boşluk kullanın: =A2 & " " & B2', '=A2 & " " & B2'],
            validation: {
              targetCell: 'C2',
              expectedValue: 'Ahmet Yılmaz',
              errorMessage: 'C2 hücresinde tam olarak "Ahmet Yılmaz" üretilmelidir.',
              successMessage: 'Harika! İsim ve soyisim başarıyla birleştirildi.',
            },
          },
          {
            id: 't-2',
            stepNumber: 2,
            instruction: 'F2 hücresine tıklayın ve E2 deki "TR-2026-IST" kodunun ilk 2 harfini almak için "=SOLDAN(E2; 2)" formülünü girin.',
            targetCell: 'F2',
            hints: ['F2 hücresini seçin. E2 deki kodun solundaki ilk 2 karakteri almanız gerekir.', 'SOLDAN (veya LEFT) fonksiyonuna metin adresi (E2) ve karakter sayısı olarak 2 verin.', '=SOLDAN(E2; 2)'],
            validation: {
              targetCell: 'F2',
              expectedValue: 'TR',
              expectedFormulaKeywords: ['SOLDAN', 'LEFT', 'E2'],
              errorMessage: 'F2 hücresinde =SOLDAN(E2; 2) olmalı ve "TR" üretilmelidir.',
              successMessage: 'Tebrikler! Ülke kodu TR başarıyla ayıklandı.',
            },
          },
        ],
        quiz: {
          id: 'q6',
          title: 'Metin Fonksiyonları Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q6-1',
              question: 'Bir metindeki sözcükler arasındaki birden fazla gereksiz boşluğu silip tek boşluğa indiren fonksiyon hangisidir?',
              options: [
                { id: 'a', text: '=SİL()' },
                { id: 'b', text: '=KIRP() [TRIM]' },
                { id: 'c', text: '=TEMİZLE()' },
                { id: 'd', text: '=PARÇAAL()' },
              ],
              correctOptionId: 'b',
              explanation: '=KIRP() (TRIM) metin başındaki, sonundaki ve kelimeler arasındaki fazla boşlukları temizler.',
            },
            {
              id: 'q6-2',
              question: 'Bir metnin toplam karakter sayısını (boşluklar dahil) hangi fonksiyon verir?',
              options: [
                { id: 'a', text: '=SAY()' },
                { id: 'b', text: '=UZUNLUK() [LEN]' },
                { id: 'c', text: '=METİNSAY()' },
                { id: 'd', text: '=BOYUT()' },
              ],
              correctOptionId: 'b',
              explanation: '=UZUNLUK(hücre) metnin kaç karakterden oluştuğunu sayısal olarak verir.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 7
  // ----------------------------------------------------
  {
    id: 7,
    title: 'Faz 7: Tarih, Saat ve İş Günü Hesaplamaları',
    subtitle: 'BUGÜN, TARİH, TAMİŞGÜNÜ ve Yaş/Vade Analizi',
    iconName: 'Calendar',
    description: 'Excel’in tarihleri sayı olarak saklama mantığı, iş günü hesapları, gecikme günleri ve vade planlaması.',
    lessons: [
      {
        id: 'f7-l1',
        phaseId: 7,
        unitId: 'u7-1',
        title: 'BUGÜN ve TAMİŞGÜNÜ ile Proje Takibi',
        shortDesc: 'Dinamik güncel tarih ve hafta sonlarını düşerek net çalışma gününü bulma.',
        level: 'Orta',
        durationMinutes: 10,
        functionsUsed: ['BUGÜN (TODAY)', 'TAMİŞGÜNÜ (NETWORKDAYS)'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Proje', computed: 'Proje', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Başlangıç', computed: 'Başlangıç', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'İş Günü Süresi', computed: 'İş Günü Süresi', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'ERP Entegrasyonu', computed: 'ERP Entegrasyonu' },
            B2: { raw: '01.10.2026', computed: '01.10.2026' },
            A4: { raw: 'Rapor Tarihi', computed: 'Rapor Tarihi', format: { bold: true } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Proje Takvimi', cells, columnWidths: { A: 160, B: 130, C: 140 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'Dinamik Tarih Fonksiyonu', description: '=BUGÜN() fonksiyonunun dosya her açıldığında sistem saatine göre güncellenmesini öğrenmek.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'BUGÜN Fonksiyonunun Dinamik Gücü',
            explanation: 'BUGÜN() fonksiyonu parantez içine hiçbir argüman almaz. Dosya her açıldığında bilgisayarın bugünkü takvim gününü otomatik üretir.',
            speechText: 'Raporlarımızın güncelliğini korumak için elle tarih yazmak yerine BUGÜN fonksiyonunu kullanırız. Şimdi B4 hücresine bugünün tarihini dinamik olarak getirelim.',
            targetCell: 'B4',
            suggestedFormula: '=BUGÜN()',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'B4 hücresine tıklayın ve "=BUGÜN()" yazıp Enter tuşuna basın.',
            targetCell: 'B4',
            hints: ['B4 hücresini seçin. Sistemin güncel tarihini dinamik olarak getiren fonksiyonu yazacağız.', 'Bu fonksiyon parametre almaz, parantez açıp kapatmanız yeterlidir: =BUGÜN()', '=BUGÜN()'],
            validation: {
              targetCell: 'B4',
              expectedFormulaKeywords: ['BUGÜN', 'TODAY'],
              errorMessage: 'B4 hücresine =BUGÜN() yazmalısınız.',
              successMessage: 'Tebrikler! Güncel sistem tarihi başarıyla getirildi.',
            },
          },
        ],
        quiz: {
          id: 'q7',
          title: 'Tarih ve Saat Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q7-1',
              question: 'İki tarih arasındaki resmi tatilleri ve hafta sonlarını düşerek gerçek çalışma günü sayısını hangi fonksiyon hesaplar?',
              options: [
                { id: 'a', text: '=GÜNSAY()' },
                { id: 'b', text: '=TAMİŞGÜNÜ() [NETWORKDAYS]' },
                { id: 'c', text: '=İŞGÜNÜ()' },
                { id: 'd', text: '=BUGÜN()' },
              ],
              correctOptionId: 'b',
              explanation: '=TAMİŞGÜNÜ(başlangıç_tarihi; bitiş_tarihi) hafta sonlarını otomatik olarak çıkartarak net çalışma günü sayısını hesaplar.',
            },
            {
              id: 'q7-2',
              question: 'Excel de bir tarihin sayısal arka plan değeri nedir?',
              options: [
                { id: 'a', text: '1 Ocak 1900 den itibaren geçen gün sayısı' },
                { id: 'b', text: 'Rastgele üretilmiş bir metin kodu' },
                { id: 'c', text: 'Yıl ile ayın çarpımı' },
                { id: 'd', text: 'Yalnızca milisaniye' },
              ],
              correctOptionId: 'a',
              explanation: 'Excel tarihleri 1 Ocak 1900 ü 1 kabul eden ardışık seri numaraları olarak saklar. Bu sayede tarihler arasında çıkarma veya toplama yapılabilir.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 8
  // ----------------------------------------------------
  {
    id: 8,
    title: 'Faz 8: Arama Fonksiyonları (DÜŞEYARA, İNDİS & KAÇINCI)',
    subtitle: 'Klasik Referans Eşleştirme ve Tablo Birleştirme',
    iconName: 'Search',
    description: 'İş hayatının vazgeçilmezi DÜŞEYARA (VLOOKUP), sağdan sola arama kısıtı ve İNDİS (INDEX) & KAÇINCI (MATCH) ikilisi.',
    lessons: [
      {
        id: 'f8-l1',
        phaseId: 8,
        unitId: 'u8-1',
        title: 'DÜŞEYARA ile Fiyat ve Ürün Bilgisi Çekme',
        shortDesc: 'Arama tablosundan birebir eşleşme (YANLIŞ/0) ile değer getirme.',
        level: 'Orta',
        durationMinutes: 15,
        functionsUsed: ['DÜŞEYARA (VLOOKUP)'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Barkod', computed: 'Barkod', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
            B1: { raw: 'Ürün Adı', computed: 'Ürün Adı', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
            C1: { raw: 'Fiyat', computed: 'Fiyat', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
            A2: { raw: '1001', computed: '1001' },
            B2: { raw: 'Laptop i7', computed: 'Laptop i7' },
            C2: { raw: '32000', computed: 32000, format: { numberFormat: 'currency' } },
            A3: { raw: '1002', computed: '1002' },
            B3: { raw: 'Akıllı Saat', computed: 'Akıllı Saat' },
            C3: { raw: '4500', computed: 4500, format: { numberFormat: 'currency' } },
            A4: { raw: '1003', computed: '1003' },
            B4: { raw: 'Kablosuz Kulaklık', computed: 'Kablosuz Kulaklık' },
            C4: { raw: '1800', computed: 1800, format: { numberFormat: 'currency' } },
            E1: { raw: 'Aranan Barkod', computed: 'Aranan Barkod', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            F1: { raw: 'Bulunan Fiyat', computed: 'Bulunan Fiyat', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            E2: { raw: '1002', computed: '1002', format: { bgColor: '#FEF3C7', align: 'center' } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Fiyat Arama', cells, columnWidths: { A: 100, B: 150, C: 120, E: 130, F: 130 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'DÜŞEYARA 4 Argüman Kuralı', description: '=DÜŞEYARA(aranan_değer; tablo_aralığı; sütun_indis_sayısı; aralık_bak) mantığını kavramak.' },
          { id: 'o2', title: 'Tam Eşleşme (YANLIŞ)', description: '4. argümana YANLIŞ veya 0 vererek birebir eşleşme güvencesi sağlamak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'DÜŞEYARA Nasıl Çalışır?',
            explanation: 'DÜŞEYARA, aranan değeri (E2) tablonun (A2:C4) en sol sütununda arar. Bulduğunda sağa doğru sayarak belirttiğimiz sütundaki (Fiyat için 3. sütun) değeri getirir.',
            speechText: 'DÜŞEYARA fonksiyonunda dört soruya cevap veririz: Neyi arıyoruz? Nerede arıyoruz? Kaçıncı sütundaki değeri getirelim? ve Tam eşleşme mi yapalım? Şimdi F2 hücresinde 1002 barkodlu ürünün fiyatını bulalım.',
            targetCell: 'F2',
            suggestedFormula: '=DÜŞEYARA(E2; A2:C4; 3; YANLIŞ)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'F2 hücresine tıklayın ve 1002 nolu barkodun fiyatını çekmek için formülü yazın: =DÜŞEYARA(E2; A2:C4; 3; YANLIŞ)',
            targetCell: 'F2',
            hints: ['F2 hücresini seçin. E2 barkodunu A2:C4 ürün kataloğunda arayıp 3. sütundaki birim fiyatı getireceğiz.', 'DÜŞEYARA fonksiyonuna aranan (E2), tablo (A2:C4), sütun (3) ve tam eşleşme için YANLIŞ (0) verin.', '=DÜŞEYARA(E2; A2:C4; 3; YANLIŞ)'],
            validation: {
              targetCell: 'F2',
              expectedValue: 4500,
              expectedFormulaKeywords: ['DÜŞEYARA', 'VLOOKUP', 'E2'],
              errorMessage: 'F2 hücresinde =DÜŞEYARA(E2; A2:C4; 3; YANLIŞ) olmalı ve 4500 TL çıkmalıdır.',
              successMessage: 'Tebrikler! 1002 nolu ürünün fiyatı 4.500 TL olarak hatasız çekildi.',
            },
          },
        ],
        quiz: {
          id: 'q8',
          title: 'DÜŞEYARA ve Arama Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q8-1',
              question: 'DÜŞEYARA fonksiyonunda aranan değer, arama tablosunun neresinde bulunmalıdır?',
              options: [
                { id: 'a', text: 'En solundaki (1.) sütunda' },
                { id: 'b', text: 'En sağındaki sütunda' },
                { id: 'c', text: 'Fark etmez, herhangi bir yerde' },
                { id: 'd', text: 'Yalnızca ilk satırda' },
              ],
              correctOptionId: 'a',
              explanation: 'DÜŞEYARA kısıtı gereği aranan veri her zaman seçilen aralığın en solundaki ilk sütunda bulunmak zorundadır.',
            },
            {
              id: 'q8-2',
              question: 'DÜŞEYARA da 4. argümana YANLIŞ (FALSE veya 0) yazılmazsa varsayılan olarak ne olur?',
              options: [
                { id: 'a', text: 'Tam eşleşme yapar' },
                { id: 'b', text: 'Yaklaşık eşleşme yapar ve sıralı olmayan tablolarda yanlış sonuç verebilir' },
                { id: 'c', text: 'Hücreyi siler' },
                { id: 'd', text: 'Hiçbir şey hesaplamaz' },
              ],
              correctOptionId: 'b',
              explanation: 'Varsayılan değer DOĞRU (Yaklaşık eşleşme) dur. Birebir tam eşleşme için mutlaka YANLIŞ veya 0 yazılmalıdır.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 9
  // ----------------------------------------------------
  {
    id: 9,
    title: 'Faz 9: Dinamik Diziler ve ÇAPRAZARA (XLOOKUP)',
    subtitle: 'Modern Excel Devrimi: ÇAPRAZARA, FİLTRE ve BENZERSİZ',
    iconName: 'Zap',
    description: 'DÜŞEYARA’nın tüm kısıtlarını ortadan kaldıran ÇAPRAZARA (XLOOKUP), formül taşması (Spill) ve dinamik filtreleme.',
    lessons: [
      {
        id: 'f9-l1',
        phaseId: 9,
        unitId: 'u9-1',
        title: 'ÇAPRAZARA ile Çift Yönlü Güvenli Arama',
        shortDesc: 'Sütun sayısı sayma zorunluluğu olmayan modern arama fonksiyonu.',
        level: 'İleri',
        durationMinutes: 15,
        functionsUsed: ['ÇAPRAZARA (XLOOKUP)'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Departman', computed: 'Departman', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Sicil No', computed: 'Sicil No', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'Personel', computed: 'Personel', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'Pazarlama', computed: 'Pazarlama' },
            B2: { raw: 'SC-88', computed: 'SC-88' },
            C2: { raw: 'Ece Güven', computed: 'Ece Güven' },
            A3: { raw: 'Finans', computed: 'Finans' },
            B3: { raw: 'SC-92', computed: 'SC-92' },
            C3: { raw: 'Berk Yıldız', computed: 'Berk Yıldız' },
            E1: { raw: 'Aranan Sicil', computed: 'Aranan Sicil', format: { bold: true } },
            F1: { raw: 'Bulunan Departman', computed: 'Bulunan Departman', format: { bold: true } },
            E2: { raw: 'SC-92', computed: 'SC-92', format: { bgColor: '#FEF3C7', align: 'center' } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'ÇAPRAZARA', cells, columnWidths: { A: 130, B: 110, C: 140, E: 130, F: 160 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'ÇAPRAZARA Sağdan Sola Arama', description: 'DÜŞEYARA’nın yapamadığı soldaki sütunları getirme yeteneği.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'ÇAPRAZARA Neden DÜŞEYARA dan Üstündür?',
            explanation: 'DÜŞEYARA sadece aranan sütunun sağındaki verileri çekebilir. ÇAPRAZARA ise aranan dizi (B2:B3) ile döndürülecek diziyi (A2:A3) bağımsız olarak seçmenize izin verir, soldaki veriyi de zahmetsizce çeker.',
            speechText: 'DÜŞEYARA yıllarca harika iş gördü fakat sütun eklediğinizde bozulurdu ve sola doğru arayamazdı. ÇAPRAZARA ise doğrudan aranan ve döndürülen aralıkları alır. Şimdi F2 hücresinde ÇAPRAZARA yı uygulayalım.',
            targetCell: 'F2',
            suggestedFormula: '=ÇAPRAZARA(E2; B2:B3; A2:A3)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'F2 hücresine tıklayın ve SC-92 sicil nolu personelin solundaki Departmanını çekmek için formülü yazın: =ÇAPRAZARA(E2; B2:B3; A2:A3)',
            targetCell: 'F2',
            hints: ['F2 hücresine tıklayın. E2 sicil kodunu B sütununda arayıp solundaki A sütunundan Departmanı çekeceğiz.', 'ÇAPRAZARA sırasıyla aranan (E2), arama dizisi (B2:B3) ve döndürülecek sonuç dizisi (A2:A3) alır.', '=ÇAPRAZARA(E2; B2:B3; A2:A3)'],
            validation: {
              targetCell: 'F2',
              expectedValue: 'Finans',
              expectedFormulaKeywords: ['ÇAPRAZARA', 'XLOOKUP', 'E2'],
              errorMessage: 'F2 hücresinde =ÇAPRAZARA(E2; B2:B3; A2:A3) formülü ile "Finans" bulunmalıdır.',
              successMessage: 'Kutlarım! ÇAPRAZARA ile soldaki departman sütununu başarıyla getirdiniz.',
            },
          },
        ],
        quiz: {
          id: 'q9',
          title: 'ÇAPRAZARA Değerlendirmesi',
          passingScore: 80,
          questions: [
            {
              id: 'q9-1',
              question: 'ÇAPRAZARA da bulunamayan kayıtlar için alternatif mesaj göstermek üzere hangi argüman kullanılır?',
              options: [
                { id: 'a', text: '4. argüman [bulunamıyorsa]' },
                { id: 'b', text: 'Mutlaka EĞERHATA içine yazılmalıdır' },
                { id: 'c', text: 'Böyle bir özellik yoktur' },
                { id: 'd', text: '1. argüman' },
              ],
              correctOptionId: 'a',
              explanation: 'ÇAPRAZARA(aranan; aranan_dizi; döndürülen_dizi; [bulunamıyorsa]) formülünde 4. argüman doğrudan hata durumunda gösterilecek mesajı belirler.',
            },
            {
              id: 'q9-2',
              question: 'ÇAPRAZARA da varsayılan eşleşme türü nedir?',
              options: [
                { id: 'a', text: 'Tam Eşleşme (Exact Match)' },
                { id: 'b', text: 'Yaklaşık Eşleşme' },
                { id: 'c', text: 'Joker Karakter Eşleşmesi' },
                { id: 'd', text: 'Büyük Harf Eşleşmesi' },
              ],
              correctOptionId: 'a',
              explanation: 'DÜŞEYARA nın aksine ÇAPRAZARA da varsayılan ayar tam eşleşmedir; ekstra sıfır yazmak zorunda kalmazsınız.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 10
  // ----------------------------------------------------
  {
    id: 10,
    title: 'Faz 10: Veri Yönetimi & Koşullu Biçimlendirme',
    subtitle: 'Sıralama, Filtreleme, Tablo Nesneleri ve Veri Çubukları',
    iconName: 'Table',
    description: 'Resmi Excel tabloları, otomatik toplam satırı, dinamik aralıklar ve veri çubuklarıyla görselleştirme.',
    lessons: [
      {
        id: 'f10-l1',
        phaseId: 10,
        unitId: 'u10-1',
        title: 'Koşullu Biçimlendirme ve Veri Doğrulama',
        shortDesc: 'Hücrelere açılır liste ekleme ve kritik eşiklerin otomatik renklendirilmesi.',
        level: 'Orta',
        durationMinutes: 12,
        functionsUsed: ['Veri Doğrulama Listesi', 'Koşullu Renklendirme', 'EĞER ile Eşik Kontrolü'],
        initialWorkbook: createTableSheet(
          's1',
          'Sipariş Durumu',
          ['Sipariş No', 'Müşteri', 'Tutar', 'Ciro Seviyesi'],
          [
            ['SIP-401', 'Alfa Teknoloji', 45000, 'Normal'],
            ['SIP-402', 'Beta Lojistik', 18000, 'Normal'],
            ['SIP-403', 'Gama Danışmanlık', 62000, ''],
            ['SIP-404', 'Delta Sağlık', 9500, 'Normal'],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Koşullu Eşik Tanımlama', description: '50.000 TL üzerindeki işlemleri formülle dinamik tespit edip "VIP Ciro" olarak sınıflandırmak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Veri Yönetimi ve Otomatik Seviyelendirme',
            explanation: 'Büyük tablolarda satırları tek tek incelemek yerine 50 bin liranın üzerindeki tutarları koşullu olarak tespit ederiz. Şimdi Gama Danışmanlık için D4 hücresine eşik formülünü yazalım.',
            speechText: 'Veri yönetiminde en kritik adımlardan biri tutarlara göre kategorilendirme yapmaktır. Şimdi D4 hücresinde 50 bin liranın üzerindeki satışları VIP Ciro olarak işaretleyelim.',
            targetCell: 'D4',
            suggestedFormula: '=EĞER(C4>50000; "VIP Ciro"; "Normal")',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D4 hücresine tıklayın ve C4 teki tutar 50.000 TL den büyükse "VIP Ciro", değilse "Normal" yazacak formülü girin: =EĞER(C4>50000; "VIP Ciro"; "Normal")',
            targetCell: 'D4',
            hints: ['D4 hücresini seçin. C4 teki cironun 50.000 TL eşiğini aşıp aşmadığını test edin.', 'Şart olarak C4>50000 yazın; doğruysa "VIP Ciro", yanlışsa "Normal" yazdırın.', '=EĞER(C4>50000; "VIP Ciro"; "Normal")'],
            validation: {
              targetCell: 'D4',
              expectedValue: 'VIP Ciro',
              expectedFormulaKeywords: ['EĞER', 'IF', 'C4', '50000'],
              errorMessage: 'D4 hücresinde =EĞER(C4>50000; "VIP Ciro"; "Normal") formülü ile VIP Ciro bulunmalıdır.',
              successMessage: 'Harika! 62.000 TL tutarındaki işlem başarıyla VIP Ciro olarak seviyelendirildi.',
            },
          },
        ],
        quiz: {
          id: 'q10',
          title: 'Veri Yönetimi ve Koşullu Biçimlendirme Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q10-1',
              question: 'Bir aralığı resmi Excel Tablosuna (ListObject) dönüştürmenin klavye kısayolu nedir?',
              options: [
                { id: 'a', text: 'Ctrl + T (veya Ctrl + L)' },
                { id: 'b', text: 'Ctrl + P' },
                { id: 'c', text: 'Alt + F4' },
                { id: 'd', text: 'Ctrl + Z' },
              ],
              correctOptionId: 'a',
              explanation: 'Excel de bir veri bloğunu resmi tabloya dönüştürmek için Ctrl + T kısayolu kullanılır.',
            },
            {
              id: 'q10-2',
              question: 'Koşullu Biçimlendirmede (Conditional Formatting) hangisi yapılabilir?',
              options: [
                { id: 'a', text: 'Hücre değerine göre otomatik dolgu rengi, veri çubukları ve renk ölçekleri atamak' },
                { id: 'b', text: 'Yalnızca dosyayı silmek' },
                { id: 'c', text: 'Bilgisayarı yeniden başlatmak' },
                { id: 'd', text: 'Yalnızca satır silmek' },
              ],
              correctOptionId: 'a',
              explanation: 'Koşullu biçimlendirme; değer büyüklüğüne göre simge kümeleri, veri çubukları ve renk vurguları uygular.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 11
  // ----------------------------------------------------
  {
    id: 11,
    title: 'Faz 11: PivotTable (Özet Tablo) & PivotChart',
    subtitle: 'Milyonlarca Satırı Saniyeler İçinde Özetleme ve Gruplama',
    iconName: 'PieChart',
    description: 'Satırlar, Sütunlar, Değerler ve Filtreler alanları, dilimleyiciler (Slicers) ve hesaplanmış alanlar.',
    lessons: [
      {
        id: 'f11-l1',
        phaseId: 11,
        unitId: 'u11-1',
        title: 'Bölge ve Kategori Bazlı PivotTable Oluşturma',
        shortDesc: 'Ham satış verilerini matris formatında çapraz özetleme.',
        level: 'Orta',
        durationMinutes: 15,
        functionsUsed: ['PivotTable Çapraz Özet', 'ÇOKETOPLA'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Bölge', computed: 'Bölge', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Kategori', computed: 'Kategori', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'Satış', computed: 'Satış', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'Marmara', computed: 'Marmara' },
            B2: { raw: 'Elektronik', computed: 'Elektronik' },
            C2: { raw: '150000', computed: 150000, format: { numberFormat: 'currency' } },
            A3: { raw: 'Ege', computed: 'Ege' },
            B3: { raw: 'Gıda', computed: 'Gıda' },
            C3: { raw: '90000', computed: 90000, format: { numberFormat: 'currency' } },
            A4: { raw: 'Marmara', computed: 'Marmara' },
            B4: { raw: 'Gıda', computed: 'Gıda' },
            C4: { raw: '110000', computed: 110000, format: { numberFormat: 'currency' } },
            A5: { raw: 'Ege', computed: 'Ege' },
            B5: { raw: 'Elektronik', computed: 'Elektronik' },
            C5: { raw: '130000', computed: 130000, format: { numberFormat: 'currency' } },
            // Özet Matris Alanı
            E1: { raw: 'Pivot Matris', computed: 'Pivot Matris', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
            F1: { raw: 'Marmara Elektronik', computed: 'Marmara Elektronik', format: { bold: true } },
            E2: { raw: 'Toplam Ciro', computed: 'Toplam Ciro', format: { bold: true } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Pivot Verisi', cells, columnWidths: { A: 120, B: 120, C: 120, E: 160, F: 160 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'PivotTable Mimarisi', description: 'Ham veriden çok boyutlu özet matris çıkarmak ve Satırlar/Sütunlar kesişimini hesaplamak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'PivotTable Çapraz Özetleme Mantığı',
            explanation: 'PivotTable satırlara Bölgeleri, sütunlara Kategorileri alarak kesişimdeki Değerleri toplar. Şimdi F2 hücresinde Marmara Elektronik kesişim toplamını bulalım.',
            speechText: 'PivotTable da dört temel alan vardır: Satırlar, Sütunlar, Değerler ve Filtreler. Şimdi F2 hücresinde Marmara bölgesindeki Elektronik satışlarının toplamını hesaplayalım.',
            targetCell: 'F2',
            suggestedFormula: '=ÇOKETOPLA(C2:C5; A2:A5; "Marmara"; B2:B5; "Elektronik")',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'F2 hücresine tıklayın ve Marmara bölgesindeki Elektronik satışlarının toplamını bulmak için formülü girin: =ÇOKETOPLA(C2:C5; A2:A5; "Marmara"; B2:B5; "Elektronik")',
            targetCell: 'F2',
            hints: ['F2 hücresine tıklayın. Marmara bölgesindeki Elektronik satışlarının toplamını hesaplayacağız.', 'ÇOKETOPLA ile C2:C5 tutarını A2:A5 "Marmara" ve B2:B5 "Elektronik" kriterleriyle filtreleyin.', '=ÇOKETOPLA(C2:C5; A2:A5; "Marmara"; B2:B5; "Elektronik")'],
            validation: {
              targetCell: 'F2',
              expectedValue: 150000,
              expectedFormulaKeywords: ['ÇOKETOPLA', 'SUMIFS'],
              errorMessage: 'F2 hücresinde Marmara Elektronik toplamı 150.000 TL olmalıdır.',
              successMessage: 'Kutlarım! Pivot matris kesişimi 150.000 TL olarak doğrulandı.',
            },
          },
        ],
        quiz: {
          id: 'q11',
          title: 'PivotTable ve Özet Raporlama Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q11-1',
              question: 'PivotTable Alan Listesinde (Field List) bulunan 4 temel bölge hangileridir?',
              options: [
                { id: 'a', text: 'Filtreler, Sütunlar, Satırlar, Değerler' },
                { id: 'b', text: 'Yazı Tipi, Paragraf, Sayfa, Başlık' },
                { id: 'c', text: 'Grafik, Resim, Şekil, Simge' },
                { id: 'd', text: 'Makro, VBA, Form, Modül' },
              ],
              correctOptionId: 'a',
              explanation: 'PivotTable dört ana panelden oluşur: Filters (Filtreler), Columns (Sütunlar), Rows (Satırlar) ve Values (Değerler).',
            },
            {
              id: 'q11-2',
              question: 'Kaynak tablodaki veriler değiştiğinde PivotTable ı güncellemek için ne yapılır?',
              options: [
                { id: 'a', text: 'Sağ tıklayıp Yenile (Refresh) seçilir' },
                { id: 'b', text: 'Excel kapatılıp yeniden kurulur' },
                { id: 'c', text: 'Tüm tablo silinip baştan yapılır' },
                { id: 'd', text: 'Yenilenemez' },
              ],
              correctOptionId: 'a',
              explanation: 'PivotTable kaynak veri değiştiğinde otomatik değişmez; sağ tıklanıp "Yenile" (veya Alt+F5) denmesi gerekir.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 12
  // ----------------------------------------------------
  {
    id: 12,
    title: 'Faz 12: Profesyonel Grafikler & Dashboard',
    subtitle: 'Yönetici Raporları, Sütun, Çizgi ve Pasta Grafikleri',
    iconName: 'BarChart2',
    description: 'Veri görselleştirme ilkeleri, karma grafikler, KPI kartları ve yöneticiye sunulacak dashboard standartları.',
    lessons: [
      {
        id: 'f12-l1',
        phaseId: 12,
        unitId: 'u12-1',
        title: 'Çeyreklik Satış Trendi Grafiği',
        shortDesc: 'Doğru grafik türü seçimi ve görsel okunabilirlik optimizasyonu.',
        level: 'İleri',
        durationMinutes: 15,
        functionsUsed: ['Grafik Oluşturma Motoru'],
        initialWorkbook: createTableSheet(
          's1',
          'Trend Verisi',
          ['Ay', 'Hedef', 'Gerçekleşen'],
          [
            ['Ocak', 100000, 115000],
            ['Şubat', 110000, 108000],
            ['Mart', 120000, 135000],
            ['Nisan', 130000, 142000],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Grafik Entegrasyonu', description: 'Veri aralığından anında etkileşimli grafik çizdirmek.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Grafik Seçim Stratejisi',
            explanation: 'Zaman içindeki değişimi göstermek için çizgi veya sütun grafik, parça-bütün ilişkisi için ise pasta grafik tercih edilmelidir.',
            speechText: 'Verileri yönetime sunarken grafikler en etkili iletişim aracıdır. Ay bazlı hedef ve gerçekleşen satışları karşılaştırmak için sütun grafik idealdir.',
            targetCell: 'C2',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'C6 hücresine gerçekleşen toplam satışı bulmak için "=TOPLA(C2:C5)" yazın.',
            targetCell: 'C6',
            hints: ['C6 hücresine tıklayın. C2 den C5 e kadar olan 4 çeyreklik satış tutarlarını toplayın.', 'TOPLA fonksiyonu ile aralığı belirtin: =TOPLA(C2:C5)', '=TOPLA(C2:C5)'],
            validation: {
              targetCell: 'C6',
              expectedValue: 500000,
              errorMessage: 'C6 hücresinde toplam gerçekleşen 500.000 TL olmalıdır.',
              successMessage: 'Tebrikler! 4 aylık toplam satış 500.000 TL olarak tespit edildi.',
            },
          },
        ],
        quiz: {
          id: 'q12',
          title: 'Grafikler ve Dashboard Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q12-1',
              question: 'Zaman içerisindeki eğilim ve trendleri (aylar, yıllar) göstermek için en uygun grafik türü hangisidir?',
              options: [
                { id: 'a', text: 'Çizgi Grafik (Line Chart)' },
                { id: 'b', text: 'Pasta Grafik' },
                { id: 'c', text: 'Radar Grafik' },
                { id: 'd', text: 'Ağaç Haritası' },
              ],
              correctOptionId: 'a',
              explanation: 'Zamana bağlı sürekli veri akışını ve trendleri en iyi Çizgi (Line) grafikleri gösterir.',
            },
            {
              id: 'q12-2',
              question: 'Pasta grafik (Pie Chart) hangi veri yapısı için en uygundur?',
              options: [
                { id: 'a', text: 'Yüzde 100 ü oluşturan birkaç parçanın bütün içindeki oranını göstermek için' },
                { id: 'b', text: '50 farklı ürünün 10 yıllık fiyat trendini göstermek için' },
                { id: 'c', text: 'Sayısal formül hesaplamak için' },
                { id: 'd', text: 'Yalnızca negatif değerler için' },
              ],
              correctOptionId: 'a',
              explanation: 'Pasta grafikler toplamı %100 olan az sayıdaki kategorinin payını göstermek için kullanılır.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 13
  // ----------------------------------------------------
  {
    id: 13,
    title: 'Faz 13: What-If Analizi & Hedef Ara (Goal Seek)',
    subtitle: 'Senaryo Yöneticisi, Veri Tabloları ve Çözücü',
    iconName: 'HelpCircle',
    description: 'İstenen kâr hedefine ulaşmak için birim fiyat veya maliyetin ne olması gerektiğini tersten hesaplama.',
    lessons: [
      {
        id: 'f13-l1',
        phaseId: 13,
        unitId: 'u13-1',
        title: 'Hedef Ara ile Başabaş Noktası Analizi',
        shortDesc: 'Hedeflenen kâr için gereken minimum satış adedini bulma.',
        level: 'İleri',
        durationMinutes: 15,
        functionsUsed: ['Hedef Ara Mantığı', 'Finansal Formül Modeli'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Parametre', computed: 'Parametre', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Değer', computed: 'Değer', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'Birim Fiyat', computed: 'Birim Fiyat' },
            B2: { raw: '150', computed: 150, format: { numberFormat: 'currency' } },
            A3: { raw: 'Birim Maliyet', computed: 'Birim Maliyet' },
            B3: { raw: '90', computed: 90, format: { numberFormat: 'currency' } },
            A4: { raw: 'Satış Adedi', computed: 'Satış Adedi' },
            B4: { raw: '1000', computed: 1000 },
            A5: { raw: 'Sabit Giderler', computed: 'Sabit Giderler' },
            B5: { raw: '30000', computed: 30000, format: { numberFormat: 'currency' } },
            A6: { raw: 'Net Kâr', computed: 'Net Kâr', format: { bold: true } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Kâr Simülasyonu', cells, columnWidths: { A: 160, B: 130 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'Finansal Model Kurma', description: 'Net kâr formülü = (Fiyat - Maliyet) * Adet - Sabit Gider yapısını oluşturmak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Tersten Hesaplama Mantığı',
            explanation: 'Hedef Ara, sonuç hücresini (Net Kâr) istediğimiz bir değere (örneğin 50.000 TL) eşitlemek için girdi hücresini (Satış Adedi) otomatik olarak bulur.',
            speechText: 'Normalde girdilerden sonuca gideriz. Hedef Ara ise sonucu belirleyip girdinin ne olması gerektiğini tersten hesaplar. Önce B6 hücresine kâr formülümüzü yazalım.',
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
            hints: ['B6 hücresini seçin. Birim Fiyattan (B2) Birim Maliyeti (B3) çıkarıp Adet (B4) ile çarpın ve Sabit Gideri (B5) düşün.', 'İşlem sırası için birim kârı paranteze alın: =(B2-B3)*B4-B5', '=(B2-B3)*B4-B5'],
            validation: {
              targetCell: 'B6',
              expectedValue: 30000,
              errorMessage: 'B6 hücresinde =(B2-B3)*B4-B5 olmalı ve 30.000 TL çıkmalıdır.',
              successMessage: 'Kusursuz! 1.000 adet satış için net kâr 30.000 TL olarak hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q13',
          title: 'What-If ve Hedef Ara Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q13-1',
              question: 'Hedef Ara (Goal Seek) aracının temel çalışma prensibi nedir?',
              options: [
                { id: 'a', text: 'İstenen sonuç değerine ulaşmak için girdi hücresinin ne olması gerektiğini tersten hesaplamak' },
                { id: 'b', text: 'Rastgele sayılar üretmek' },
                { id: 'c', text: 'Grafik rengini değiştirmek' },
                { id: 'd', text: 'Yalnızca hücreleri birleştirmek' },
              ],
              correctOptionId: 'a',
              explanation: 'Hedef Ara; sonuç hücresini hedeflenen değere ayarlamak için değiştirilecek girdi hücresini otomatik bulur.',
            },
            {
              id: 'q13-2',
              question: 'Birden çok değişken ve kısıtlama (örn. bütçe <= 50.000, kapasite >= 100) içeren optimizasyon problemlerinde hangi gelişmiş Excel eklentisi kullanılır?',
              options: [
                { id: 'a', text: 'Çözücü (Solver)' },
                { id: 'b', text: 'Sözlük' },
                { id: 'c', text: 'İmla Denetimi' },
                { id: 'd', text: 'Yazıcı Yöneticisi' },
              ],
              correctOptionId: 'a',
              explanation: 'Doğrusal programlama ve çoklu kısıtlı optimizasyonlar için Solver (Çözücü) eklentisi kullanılır.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 14
  // ----------------------------------------------------
  {
    id: 14,
    title: 'Faz 14: Power Query & Veri Dönüştürme',
    subtitle: 'ETL Süreçleri, Dosya Birleştirme ve Otomatik Temizleme',
    iconName: 'Database',
    description: 'Farklı kaynaklardan gelen verileri kod yazmadan temizleme, sütun bölme, unpivot ve otomatik yenileme.',
    lessons: [
      {
        id: 'f14-l1',
        phaseId: 14,
        unitId: 'u14-1',
        title: 'Veri Dönüştürme ve Sütun Ayrıştırma Mantığı',
        shortDesc: 'Karmaşık metin dizgilerini otomatik olarak sütunlara ayırma ilkeleri.',
        level: 'İleri',
        durationMinutes: 15,
        functionsUsed: ['Power Query ETL', 'PARÇAAL (MID)'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Sipariş Kayıt Kodu', computed: 'Sipariş Kayıt Kodu', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Tutar', computed: 'Tutar', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'Ayıklanan Şehir', computed: 'Ayıklanan Şehir', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
            A2: { raw: '2026-TR-IST-001', computed: '2026-TR-IST-001' },
            B2: { raw: '12500', computed: 12500, format: { numberFormat: 'currency' } },
            A3: { raw: '2026-TR-ANK-002', computed: '2026-TR-ANK-002' },
            B3: { raw: '24000', computed: 24000, format: { numberFormat: 'currency' } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'ETL Dönüşüm', cells, columnWidths: { A: 170, B: 120, C: 150 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'ETL Kavramı', description: 'Extract, Transform, Load aşamalarını ve karmaşık kodlardan şehir kodunu PARÇAAL formülüyle ayıklamak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Sütun Ayrıştırma ve Temizleme',
            explanation: 'Power Query de metin sütunlarını ayırıcıya göre böleriz. Excel formül motorunda ise bu işlem =PARÇAAL(A2; 9; 3) ile yapılır (9. karakterden itibaren 3 harf: IST).',
            speechText: 'Veri temizliğinde sütun bölme en sık yapılan işlemdir. Şimdi C2 hücresinde 2026-TR-IST-001 kodunun içindeki IST şehir kodunu ayıklayalım.',
            targetCell: 'C2',
            suggestedFormula: '=PARÇAAL(A2; 9; 3)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'C2 hücresine tıklayın ve A2 deki koddan şehir kısmını (IST) çıkarmak için formülü girin: =PARÇAAL(A2; 9; 3)',
            targetCell: 'C2',
            hints: ['C2 hücresine tıklayın. A2 işlem kodunun 9. karakterinden itibaren 3 harfli şehir kodunu ayıklayın.', 'PARÇAAL fonksiyonu metin (A2), başlangıç konumu (9) ve karakter sayısı (3) alır.', '=PARÇAAL(A2; 9; 3)'],
            validation: {
              targetCell: 'C2',
              expectedValue: 'IST',
              expectedFormulaKeywords: ['PARÇAAL', 'MID', 'A2'],
              errorMessage: 'C2 hücresinde =PARÇAAL(A2; 9; 3) formülü ile "IST" elde edilmelidir.',
              successMessage: 'Kutlarım! Şehir kodu IST başarıyla ayıklandı.',
            },
          },
        ],
        quiz: {
          id: 'q14',
          title: 'Power Query ve ETL Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q14-1',
              question: 'Power Query nin arka planda kaydettiği dönüşüm adımlarının dili nedir?',
              options: [
                { id: 'a', text: 'M Dili (Power Query Formula Language)' },
                { id: 'b', text: 'HTML' },
                { id: 'c', text: 'Python' },
                { id: 'd', text: 'JavaScript' },
              ],
              correctOptionId: 'a',
              explanation: 'Power Query uygulanan tüm veri adımlarını M Dili (M Language) ile kod olarak saklar.',
            },
            {
              id: 'q14-2',
              question: 'Power Query de her ay yeni veri geldiğinde yapılan tüm temizlik adımlarını tekrar çalıştırmak için ne yapılır?',
              options: [
                { id: 'a', text: 'Tek bir tuşla "Yenile" (Refresh) butonuna basılır' },
                { id: 'b', text: 'Tüm adımlar baştan elle tek tek tekrarlanır' },
                { id: 'c', text: 'Dosya silinip baştan indirilir' },
                { id: 'd', text: 'Makro kaydedilir' },
              ],
              correctOptionId: 'a',
              explanation: 'Power Query nin en büyük gücü; uygulanan adımların kaydedilmesi ve "Yenile" tuşuyla otomatik tekrarlanmasıdır.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 15
  // ----------------------------------------------------
  {
    id: 15,
    title: 'Faz 15: Veri Modeli, Power Pivot ve DAX',
    subtitle: 'İlişkisel Veritabanları ve CALCULATE Fonksiyonu',
    iconName: 'Layers',
    description: 'Birden fazla tabloyu DÜŞEYARA kullanmadan bire-çok (1:N) ilişkilerle bağlama ve DAX ölçüleri oluşturma.',
    lessons: [
      {
        id: 'f15-l1',
        phaseId: 15,
        unitId: 'u15-1',
        title: 'İlişkisel Tablo Mimarisi ve DAX Ölçüleri',
        shortDesc: 'Müşteri ve Satış tablolarını MüşteriID anahtarıyla birbirine bağlama.',
        level: 'Uzman',
        durationMinutes: 15,
        functionsUsed: ['Veri Modeli İlişkileri', 'ETOPLA ile Ölçü Hesaplama'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'İşlemID', computed: 'İşlemID', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'MüşteriID', computed: 'MüşteriID', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'ÜrünID', computed: 'ÜrünID', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            D1: { raw: 'Tutar', computed: 'Tutar', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'TX-1', computed: 'TX-1' },
            B2: { raw: 'M-101', computed: 'M-101' },
            C2: { raw: 'U-50', computed: 'U-50' },
            D2: { raw: '8000', computed: 8000, format: { numberFormat: 'currency' } },
            A3: { raw: 'TX-2', computed: 'TX-2' },
            B3: { raw: 'M-102', computed: 'M-102' },
            C3: { raw: 'U-51', computed: 'U-51' },
            D3: { raw: '15000', computed: 15000, format: { numberFormat: 'currency' } },
            A4: { raw: 'TX-3', computed: 'TX-3' },
            B4: { raw: 'M-101', computed: 'M-101' },
            C4: { raw: 'U-52', computed: 'U-52' },
            D4: { raw: '12000', computed: 12000, format: { numberFormat: 'currency' } },
            F1: { raw: 'M-101 Toplam Harcama', computed: 'M-101 Toplam Harcama', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'İlişkisel Satış', cells, columnWidths: { A: 110, B: 110, C: 110, D: 120, F: 180 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'Veri Modeli İlişkisi', description: 'Yıldız şeması mantığı ve M-101 müşterisinin toplam harcamasını DAX/ETOPLA ile hesaplamak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'DÜŞEYARA Yükünden Kurtulma',
            explanation: 'Klasik Excel de tabloları birleştirmek için binlerce DÜŞEYARA yazmak dosyayı yavaşlatır. Veri modelinde tablolar arka planda bir kez bağlanır. Şimdi F2 hücresinde M-101 müşterisinin toplam işlem tutarını hesaplayalım.',
            speechText: 'Power Pivot ve Veri Modeli sayesinde devasa tabloları formüllerle kasmadan doğrudan ilişkisel olarak birbirine bağlayabiliriz. Şimdi F2 hücresinde M-101 müşterisinin toplam cirosunu bulalım.',
            targetCell: 'F2',
            suggestedFormula: '=ETOPLA(B2:B4; "M-101"; D2:D4)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'F2 hücresine tıklayın ve M-101 müşterisinin toplam harcamasını hesaplamak için formülü girin: =ETOPLA(B2:B4; "M-101"; D2:D4)',
            targetCell: 'F2',
            hints: ['F2 hücresine tıklayın. B2:B4 müşteri ID sütununda "M-101" kodunu arayıp D2:D4 tutarlarını toplayacağız.', 'ETOPLA sözdizimi: =ETOPLA(kriter_aralığı; kriter; toplam_aralığı)', '=ETOPLA(B2:B4; "M-101"; D2:D4)'],
            validation: {
              targetCell: 'F2',
              expectedValue: 20000,
              expectedFormulaKeywords: ['ETOPLA', 'SUMIF', 'M-101'],
              errorMessage: 'F2 hücresinde =ETOPLA(B2:B4; "M-101"; D2:D4) ile 20.000 TL bulunmalıdır. (8.000 + 12.000)',
              successMessage: 'Harika! M-101 müşterisinin toplam hacmi 20.000 TL olarak doğrulandı.',
            },
          },
        ],
        quiz: {
          id: 'q15',
          title: 'Power Pivot ve DAX Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q15-1',
              question: 'DAX (Data Analysis Expressions) dilinde filtre bağlamını (Filter Context) değiştirmek için kullanılan en temel fonksiyon hangisidir?',
              options: [
                { id: 'a', text: 'CALCULATE()' },
                { id: 'b', text: 'SUM()' },
                { id: 'c', text: 'COUNT()' },
                { id: 'd', text: 'VLOOKUP()' },
              ],
              correctOptionId: 'a',
              explanation: 'CALCULATE; DAX ın en güçlü fonksiyonudur ve hesaplamanın filtre bağlamını dinamik olarak değiştirir.',
            },
            {
              id: 'q15-2',
              question: 'İlişkisel Veri Modelinde Fact (Olay/İşlem) tablosu ile Dimension (Boyut) tablosu arasındaki standart ilişki türü nedir?',
              options: [
                { id: 'a', text: 'Bire-Çok (1 to Many / 1:N)' },
                { id: 'b', text: 'Çoka-Çok rastgele' },
                { id: 'c', text: 'İlişki kurulamaz' },
                { id: 'd', text: 'Sadece metin eşleşmesi' },
              ],
              correctOptionId: 'a',
              explanation: 'Boyut tablosunda her müşteri veya ürün bir kez geçer (1), işlem tablosunda ise defalarca sipariş olabilir (N). Bu 1:N ilişkisidir.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 16
  // ----------------------------------------------------
  {
    id: 16,
    title: 'Faz 16: Makrolar ve VBA Temelleri',
    subtitle: 'Rutin Görevleri Otomatikleştiren Kod Blokları',
    iconName: 'Cpu',
    description: 'Makro kaydedici, VBA editörü, döngüler, buton atama ve dosya kaydetme formatları (.xlsm).',
    lessons: [
      {
        id: 'f16-l1',
        phaseId: 16,
        unitId: 'u16-1',
        title: 'Makro Kaydedici ile Rapor Formatlama',
        shortDesc: 'Tekrarlayan biçimlendirme ve hesaplama adımlarını tek butona bağlama.',
        level: 'Uzman',
        durationMinutes: 15,
        functionsUsed: ['VBA Otomasyon Mantığı'],
        initialWorkbook: createTableSheet(
          's1',
          'Otomasyon Listesi',
          ['Personel', 'Maaş', 'Prim', 'Net Kazanç'],
          [
            ['Canan Er', 42000, 8000, ''],
            ['Okan Tekin', 38000, 6000, 44000],
            ['Gülşen Ak', 45000, 9500, 54500],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Makro Mantığı', description: 'Kullanıcı eylemlerini arka planda VBA koduna dönüştürme felsefesini öğrenmek.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Rutin İşleri Otomatiğe Bağlama',
            explanation: 'Her hafta gelen ham veriyi renklendirmek, formül eklemek ve çıktı almak yerine makro kaydederek tek tıkla tamamlayabiliriz. Şimdi D2 hücresine Canan Er için Maaş + Prim formülünü yazalım.',
            speechText: 'Makrolar rutin görevleri devralarak sizi veri analizi ve stratejik kararlara odaklar. Şimdi D2 hücresinde formülümüzü oluşturalım.',
            targetCell: 'D2',
            suggestedFormula: '=B2+C2',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D2 hücresine tıklayın ve Canan Er in Net Kazancını hesaplamak için "=B2+C2" formülünü girin.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin. Canan Er in Maaş (B2) ve Prim (C2) tutarlarını toplayın.', 'Toplama operatörünü kullanarak iki hücreyi toplayın: =B2+C2', '=B2+C2'],
            validation: {
              targetCell: 'D2',
              expectedValue: 50000,
              errorMessage: 'D2 hücresinde =B2+C2 olmalı ve 50.000 TL bulunmalıdır.',
              successMessage: 'Tebrikler! Net kazanç 50.000 TL olarak hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q16',
          title: 'Makrolar ve VBA Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q16-1',
              question: 'İçerisinde makro (VBA kodu) barındıran bir Excel çalışma kitabı hangi dosya uzantısıyla kaydedilmelidir?',
              options: [
                { id: 'a', text: '.xlsm (Excel Macro-Enabled Workbook)' },
                { id: 'b', text: '.xlsx' },
                { id: 'c', text: '.txt' },
                { id: 'd', text: '.pdf' },
              ],
              correctOptionId: 'a',
              explanation: 'Standart .xlsx formatı güvenlik gereği makroları siler. Makroların saklanması için .xlsm formatında kaydedilmelidir.',
            },
            {
              id: 'q16-2',
              question: 'Excel de VBA editörünü (Visual Basic Editor) açmak için kullanılan kısayol tuşu nedir?',
              options: [
                { id: 'a', text: 'Alt + F11' },
                { id: 'b', text: 'Ctrl + Alt + Del' },
                { id: 'c', text: 'F1' },
                { id: 'd', text: 'Ctrl + P' },
              ],
              correctOptionId: 'a',
              explanation: 'Alt + F11 tuş kombinasyonu Excel de VBA Geliştirici Kod Editörünü açar.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 17
  // ----------------------------------------------------
  {
    id: 17,
    title: 'Faz 17: Performans, Hata Ayıklama & Dosya Yönetimi',
    subtitle: '#DEĞER!, #BAŞVURU!, Döngüsel Başvuru ve Formül Denetleme',
    iconName: 'ShieldAlert',
    description: 'Excel dosyalarının şişmesini önleme, formül denetleme okları, etkileyenleri/etkilenenleri izleme ve hata yönetimi.',
    lessons: [
      {
        id: 'f17-l1',
        phaseId: 17,
        unitId: 'u17-1',
        title: 'Formül Hatalarını Yakalama ve EĞERHATA',
        shortDesc: '#SIFIR/0! ve #DEĞER! hatalarını profesyonelce maskeleme ve çözme.',
        level: 'İleri',
        durationMinutes: 12,
        functionsUsed: ['EĞERHATA (IFERROR)'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Şube', computed: 'Şube', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Ciro', computed: 'Ciro', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'Müşteri Sayısı', computed: 'Müşteri Sayısı', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            D1: { raw: 'Kişi Başı Ciro', computed: 'Kişi Başı Ciro', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'Kadıköy', computed: 'Kadıköy' },
            B2: { raw: '120000', computed: 120000 },
            C2: { raw: '400', computed: 400 },
            A3: { raw: 'Beşiktaş (Yeni)', computed: 'Beşiktaş (Yeni)' },
            B3: { raw: '0', computed: 0 },
            C3: { raw: '0', computed: 0 },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Hata Ayıklama', cells, columnWidths: { A: 150, B: 120, C: 130, D: 160 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'Hata Yönetimi', description: 'Sıfıra bölme hatasını yakalayıp kullanıcıya temiz bir mesaj sunmak.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'EĞERHATA Fonksiyonunun Rolü',
            explanation: 'Beşiktaş şubesinde müşteri sayısı 0 dır. Eğer B3/C3 yaparsak Excel #SIFIR/0! hatası verir. Bu hatayı engellemek için =EĞERHATA(B3/C3; 0) formülü kullanılır.',
            speechText: 'Raporlarda çirkin hata kodları görünmesi profesyonel durmaz. EĞERHATA fonksiyonu işlemi dener, hata çıkarsa sizin belirlediğiniz bir alternatif değeri gösterir.',
            targetCell: 'D3',
            suggestedFormula: '=EĞERHATA(B3/C3; 0)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D3 hücresine tıklayın ve sıfıra bölme hatasını engellemek için formülü yazın: =EĞERHATA(B3/C3; 0)',
            targetCell: 'D3',
            hints: ['D3 hücresine geçin. Sıfıra bölme hatası (#SAYI/0!) oluştuğunda tabloyu temiz tutmak için EĞERHATA kullanın.', 'EĞERHATA ilk parametrede işlemi (B3/C3), ikinci parametrede hata durumundaki değeri (0) alır.', '=EĞERHATA(B3/C3; 0)'],
            validation: {
              targetCell: 'D3',
              expectedValue: 0,
              expectedFormulaKeywords: ['EĞERHATA', 'IFERROR', 'B3/C3'],
              errorMessage: 'D3 hücresinde =EĞERHATA(B3/C3; 0) olmalı ve hata yerine 0 üretilmelidir.',
              successMessage: 'Mükemmel! Sıfıra bölme hatası profesyonelce bertaraf edildi.',
            },
          },
        ],
        quiz: {
          id: 'q17',
          title: 'Hata Ayıklama ve Denetleme Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q17-1',
              question: 'Bir hücrede #BAŞVURU! (#REF!) hatası neden ortaya çıkar?',
              options: [
                { id: 'a', text: 'Formülün başvurduğu satır veya sütun silindiğinde' },
                { id: 'b', text: 'Sayılar çok büyük olduğunda' },
                { id: 'c', text: 'Yalnızca internet kesildiğinde' },
                { id: 'd', text: 'Tarih formatı bozulduğunda' },
              ],
              correctOptionId: 'a',
              explanation: 'Formülün referans verdiği bir hücre, satır veya sütun silindiğinde Excel başvuruyu kaybeder ve #BAŞVURU! (#REF!) hatası verir.',
            },
            {
              id: 'q17-2',
              question: 'Bir formülün hesaplandığı hücre kendi adresine atıfta bulunuyorsa (örneğin A1 hücresine =A1+10 yazıldıysa) ne hatası oluşur?',
              options: [
                { id: 'a', text: 'Döngüsel Başvuru (Circular Reference)' },
                { id: 'b', text: '#YOK' },
                { id: 'c', text: 'Yazıcı Hatası' },
                { id: 'd', text: 'Biçim Hatası' },
              ],
              correctOptionId: 'a',
              explanation: 'Bir formül doğrudan veya dolaylı olarak kendi hücresine başvuruyorsa Döngüsel Başvuru uyarısı çıkar ve sonsuz döngü engellenir.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 18
  // ----------------------------------------------------
  {
    id: 18,
    title: 'Faz 18: Gerçek İş Projeleri & Bitirme Sınavı',
    subtitle: 'Kapsamlı Kurumsal Bütçe ve Sertifikasyon Değerlendirmesi',
    iconName: 'Award',
    description: 'Tüm fonksiyonların ve analitik becerilerin test edildiği gerçek dünya bitirme projesi.',
    lessons: [
      {
        id: 'f18-l1',
        phaseId: 18,
        unitId: 'u18-1',
        title: 'Büyük Bütçe Konsolidasyon Projesi',
        shortDesc: 'DÜŞEYARA, ÇOKETOPLA ve EĞER ile eksiksiz bütçe denetim modeli.',
        level: 'Uzman',
        durationMinutes: 20,
        functionsUsed: ['TOPLA', 'ÇOKETOPLA', 'EĞER', 'DÜŞEYARA'],
        initialWorkbook: (() => {
          const cells: Record<string, any> = {
            A1: { raw: 'Departman', computed: 'Departman', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            B1: { raw: 'Bütçe', computed: 'Bütçe', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            C1: { raw: 'Harcama', computed: 'Harcama', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            D1: { raw: 'Fark', computed: 'Fark', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            E1: { raw: 'Durum', computed: 'Durum', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
            A2: { raw: 'Pazarlama', computed: 'Pazarlama' },
            B2: { raw: '200000', computed: 200000, format: { numberFormat: 'currency' } },
            C2: { raw: '185000', computed: 185000, format: { numberFormat: 'currency' } },
            A3: { raw: 'Yazılım', computed: 'Yazılım' },
            B3: { raw: '350000', computed: 350000, format: { numberFormat: 'currency' } },
            C3: { raw: '370000', computed: 370000, format: { numberFormat: 'currency' } },
          };
          return {
            activeSheetId: 's1',
            sheets: [{ id: 's1', name: 'Bütçe Kontrol', cells, columnWidths: { A: 140, B: 130, C: 130, D: 120, E: 140 } }],
          };
        })(),
        objectives: [
          { id: 'o1', title: 'Bitirme Projesi Bütünlüğü', description: 'Fark hesabı ve EĞER koşuluyla bütçe aşım uyarısı üretmek.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Kurumsal Bütçe Analizi',
            explanation: 'Bütçe ile harcama arasındaki farkı hesaplayacağız. Eğer Harcama Bütçeyi aşmışsa (C3 > B3) "Bütçe Aşıldı", aşmamışsa "Uygun" uyarısı verdireceğiz.',
            speechText: 'Excel Akademi nin zirve projesindesiniz. Şimdi D2 hücresinde Bütçe eksi Harcama farkını, E2 hücresinde ise şartlı durum uyarısını oluşturalım.',
            targetCell: 'D2',
            suggestedFormula: '=B2-C2',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D2 hücresine tıklayın ve Pazarlama bütçe farkını hesaplamak için "=B2-C2" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresine tıklayın. Pazarlama departmanı Bütçesinden (B2) Harcamayı (C2) çıkarın.', 'Çıkarma operatörünü (-) kullanarak formülü yazın: =B2-C2', '=B2-C2'],
            validation: {
              targetCell: 'D2',
              expectedValue: 15000,
              errorMessage: 'D2 hücresinde 15.000 TL olmalıdır.',
              successMessage: 'Tebrikler! Pazarlama departmanı için 15.000 TL pozitif bütçe farkı bulundu.',
            },
          },
          {
            id: 't-2',
            stepNumber: 2,
            instruction: 'E2 hücresine tıklayın ve harcama bütçeden küçük veya eşitse "Uygun", büyükse "Aşım" yazan formülü girin: =EĞER(C2<=B2; "Uygun"; "Aşım")',
            targetCell: 'E2',
            hints: ['E2 hücresini seçin. Harcamanın (C2) bütçeden (B2) küçük veya eşit olup olmadığını test edin.', 'EĞER formülünde şart C2<=B2, doğruysa "Uygun", yanlışsa "Aşım" yazdırın.', '=EĞER(C2<=B2; "Uygun"; "Aşım")'],
            validation: {
              targetCell: 'E2',
              expectedValue: 'Uygun',
              expectedFormulaKeywords: ['EĞER', 'IF', 'C2', 'B2'],
              errorMessage: 'E2 hücresinde formül "Uygun" sonucunu vermelidir.',
              successMessage: 'Kutlarım! Bitirme projesinin kritik görevini başarıyla tamamladınız!',
            },
          },
        ],
        quiz: {
          id: 'q18',
          title: 'Excel Akademi AI Bitirme Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q18-1',
              question: 'Aşağıdaki formüllerden hangisi bir hücre aralığındaki değerleri koşula bağlı toplamada en esnek yöntemdir?',
              options: [
                { id: 'a', text: '=ÇOKETOPLA()' },
                { id: 'b', text: '=EĞERSAY()' },
                { id: 'c', text: '=TOPLA()' },
                { id: 'd', text: '=ORTALAMA()' },
              ],
              correctOptionId: 'a',
              explanation: 'ÇOKETOPLA birden fazla farklı kriteri aynı anda değerlendirebilen en güçlü şartlı toplama fonksiyonudur.',
            },
            {
              id: 'q18-2',
              question: 'ÇAPRAZARA (XLOOKUP) fonksiyonunun DÜŞEYARA ya göre en büyük avantajı nedir?',
              options: [
                { id: 'a', text: 'Aranan sütunun solundaki veriyi de getirebilmesi ve tam eşleşmenin varsayılan olması.' },
                { id: 'b', text: 'Sadece sayıları toplayabilmesi.' },
                { id: 'c', text: 'Yalnızca ilk satırı araması.' },
                { id: 'd', text: 'Excel 2003 sürümlerinde çalışması.' },
              ],
              correctOptionId: 'a',
              explanation: 'ÇAPRAZARA iki yönlü (sağa ve sola) arama yapabilir ve tam eşleşme için YANLIŞ/0 yazma zorunluluğunu ortadan kaldırır.',
            },
          ],
        },
      },
    ],
  },
];
