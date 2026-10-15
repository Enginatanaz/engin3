import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from './types';

export const PHASES_7_TO_9: CurriculumPhase[] = [
  // ----------------------------------------------------
  // FAZ 7: Tarih ve Zaman Fonksiyonları
  // ----------------------------------------------------
  {
    id: 7,
    title: 'Faz 7: Tarih ve Zaman Fonksiyonları',
    subtitle: 'BUGÜN, ŞİMDİ, GÜN, AY, YIL, TAMİŞGÜNÜ ve Vade Hesapları',
    iconName: 'Calendar',
    description: 'Excel’de tarihlerin seri numarası mantığı, dinamik tarihler, net iş günü hesapları ve proje gecikme analizleri.',
    lessons: [
      {
        id: 'f7-l1',
        phaseId: 7,
        unitId: 'u7-1',
        title: 'Dinamik Tarih Hesaplama: BUGÜN, ŞİMDİ ve Tarih Parçaları',
        shortDesc: 'Canlı tarih üretme, her açılışta güncellenen sistem tarihi ve gün/ay/yıl ayrıştırma.',
        level: 'Orta',
        durationMinutes: 12,
        functionsUsed: ['BUGÜN', 'TODAY'],
        initialWorkbook: createTableSheet(
          's1',
          'Vade Takip Listesi',
          ['Müşteri', 'Fatura Tarihi', 'Vade Günü', 'Günün Tarihi'],
          [
            ['Atlas Lojistik', '01.09.2026', 30, ''],
            ['Kuzey Teknoloji', '15.09.2026', 45, ''],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Dinamik Tarih Fonksiyonu', description: 'Parametresiz çalışan =BUGÜN() fonksiyonunun dosyayı her açtığınızda bilgisayar saatine göre güncellendiğini öğrenme.' },
          { id: 'o2', title: 'Tarihlerle Matematik', description: 'Excel’de 1 günün tam sayı 1’e eşit olduğunu ve tarihlere doğrudan gün eklenebildiğini kavrama.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Canlı Tarih Üretme: BUGÜN()',
            explanation: '=BUGÜN() fonksiyonu parantez içine hiçbir argüman almaz. Dosyayı kaydettiğinizde ve yarın açtığınızda otomatik olarak yarının tarihini gösterir.',
            speechText: 'Raporlarınızın her zaman güncel kalması için tarihleri elle yazmak yerine BUGÜN fonksiyonunu kullanırız. Parantezlerinin içini boş bırakmayı unutmayın.',
            targetCell: 'D2',
            suggestedFormula: '=BUGÜN()',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D2 hücresine tıklayın ve güncel sistem tarihini dinamik olarak üreten =BUGÜN() formülünü yazıp Enter tuşuna basın.',
            targetCell: 'D2',
            hints: [
              'Dinamik tarih fonksiyonu: =BUGÜN()',
              'Parantez içine hiçbir şey yazmayın.',
              'D2 hücresine =BUGÜN() yazıp onaylayın.',
            ],
            validation: {
              targetCell: 'D2',
              expectedFormulaKeywords: ['BUGÜN', 'TODAY'],
              successMessage: 'Tebrikler! Günün tarihi dinamik olarak üretildi.',
            },
          },
        ],
        quiz: {
          id: 'q-f7-l1',
          title: 'Tarih Fonksiyonları Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'Excel tarihleri arka planda nasıl saklar?',
              options: [
                { id: 'opt1', text: 'Salt metin (string) olarak' },
                { id: 'opt2', text: '1 Ocak 1900’den itibaren geçen gün sayısı olan ardışık tam sayılar olarak' },
                { id: 'opt3', text: 'Resim dosyası olarak' },
                { id: 'opt4', text: 'Yalnızca saat olarak' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Excel’de her tarih aslında bir sayıdır (örneğin 1 Ocak 1900 = 1). Bu sayede tarihler birbirinden çıkarılarak gün farkı bulunabilir.',
            },
            {
              id: 'q2',
              question: '=BUGÜN() ile =ŞİMDİ() fonksiyonları arasındaki temel fark nedir?',
              options: [
                { id: 'opt1', text: 'Hiçbir fark yoktur' },
                { id: 'opt2', text: 'BUGÜN yalnızca tarihi verirken, ŞİMDİ hem tarihi hem de anlık saat/dakikayı verir' },
                { id: 'opt3', text: 'BUGÜN geriye dönük çalışır' },
                { id: 'opt4', text: 'ŞİMDİ yalnızca İngilizce Excel’de vardır' },
              ],
              correctOptionId: 'opt2',
              explanation: 'ŞİMDİ() (NOW) saati ve dakikayı ondalık kısım olarak tarihe ekler.',
            },
          ],
        },
      },
      {
        id: 'f7-l2',
        phaseId: 7,
        unitId: 'u7-2',
        title: 'İş Günü ve Vade Takibi: TAMİŞGÜNÜ (NETWORKDAYS)',
        shortDesc: 'Cumartesi-Pazar ve resmi tatilleri otomatik düşerek net proje eforu hesaplama.',
        level: 'Orta',
        durationMinutes: 14,
        functionsUsed: ['TAMİŞGÜNÜ', 'NETWORKDAYS'],
        initialWorkbook: createTableSheet(
          's1',
          'Proje Süreleri',
          ['Proje Adı', 'Başlangıç Tarihi', 'Bitiş Tarihi', 'Net Çalışma Günü'],
          [
            ['ERP Dönüşümü', '01.10.2026', '15.10.2026', 0],
            ['Mobil Uygulama', '10.10.2026', '30.10.2026', 0],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Hafta Sonlarını Otomatik Hariç Tutma', description: 'Takvim günleri yerine hafta sonlarını otomatik atlayarak gerçek iş günü sayısını hesaplama.' },
          { id: 'o2', title: 'Proje Yönetimi ve SLA Ölçümü', description: 'Müşteriye verilen taahhüt sürelerinin ve teslim tarihlerinin profesyonelce denetlenmesi.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Takvim Günü vs Net İş Günü',
            explanation: 'Bitiş tarihinden başlangıç tarihini çıkardığınızda takvim gününü bulursunuz. Fakat şirketler hafta sonu çalışmaz. =TAMİŞGÜNÜ(B2; C2) fonksiyonu Cumartesi ve Pazarları otomatik çıkararak net çalışma gününü verir.',
            speechText: 'Proje yönetiminde en büyük yanılgı takvim gününü çalışma günü sanmaktır. TAMİŞGÜNÜ fonksiyonu iki tarih arasındaki hafta sonlarını hesaplamadan atar ve net iş gününü sunar.',
            targetCell: 'D2',
            suggestedFormula: '=TAMİŞGÜNÜ(B2; C2)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D2 hücresine tıklayın ve ERP Dönüşümü projesinin net çalışma gününü hesaplayan =TAMİŞGÜNÜ(B2; C2) formülünü yazıp onaylayın.',
            targetCell: 'D2',
            hints: [
              'Başlangıç tarihi: B2',
              'Bitiş tarihi: C2',
              '=TAMİŞGÜNÜ(B2; C2) yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'D2',
              expectedFormulaKeywords: ['TAMİŞGÜNÜ', 'NETWORKDAYS'],
              expectedValue: 11,
              successMessage: 'Harika! 1-15 Ekim arasındaki 4 hafta sonu günü düşülerek net 11 iş günü hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q-f7-l2',
          title: 'TAMİŞGÜNÜ Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'TAMİŞGÜNÜ fonksiyonu varsayılan olarak hangi günleri hafta sonu tatili sayar?',
              options: [
                { id: 'opt1', text: 'Yalnızca Pazar gününü' },
                { id: 'opt2', text: 'Cumartesi ve Pazar günlerini' },
                { id: 'opt3', text: 'Cuma ve Cumartesi günlerini' },
                { id: 'opt4', text: 'Hafta sonlarını düşmez' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Standart TAMİŞGÜNÜ fonksiyonu uluslararası norm olan Cumartesi ve Pazar günlerini tatil kabul eder.',
            },
            {
              id: 'q2',
              question: 'Şirketiniz yalnızca Pazar günleri tatil yapıyorsa hangi fonksiyon tercih edilmelidir?',
              options: [
                { id: 'opt1', text: 'TAMİŞGÜNÜ.ULUSL (NETWORKDAYS.INTL)' },
                { id: 'opt2', text: 'BUGÜN' },
                { id: 'opt3', text: 'GÜN' },
                { id: 'opt4', text: 'TOPLA' },
              ],
              correctOptionId: 'opt1',
              explanation: 'TAMİŞGÜNÜ.ULUSL (Uluslararası) fonksiyonu hangi günlerin hafta sonu tatili olduğunu özelleştirmenize olanak tanır.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 8: Koşullu Hesaplama Fonksiyonları
  // ----------------------------------------------------
  {
    id: 8,
    title: 'Faz 8: Koşullu Hesaplama Fonksiyonları',
    subtitle: 'ETOPLA, ÇOKETOPLA, EĞERSAY, ÇOKEĞERSAY ve AVERAGEIFS',
    iconName: 'PieChart',
    description: 'Büyük veri kümelerinde tekli ve çoklu ölçütlere göre dinamik toplam, sayım ve ortalama alma operasyonları.',
    lessons: [
      {
        id: 'f8-l1',
        phaseId: 8,
        unitId: 'u8-1',
        title: 'Tek Ölçütlü Hesaplamalar: ETOPLA (SUMIF) ve EĞERSAY (COUNTIF)',
        shortDesc: 'Belirli bir müşteriye, şehre veya kategoriye ait toplamları filtreleme yapmadan bulma.',
        level: 'Orta',
        durationMinutes: 14,
        functionsUsed: ['ETOPLA', 'SUMIF'],
        initialWorkbook: createTableSheet(
          's1',
          'İşlem Kayıtları',
          ['Sipariş No', 'Müşteri ID', 'Kategori', 'Tutar'],
          [
            ['ORD-1', 'M-101', 'Elektronik', 12000],
            ['ORD-2', 'M-102', 'Mobilya', 8500],
            ['ORD-3', 'M-101', 'Aksesuar', 8000],
            ['ORD-4', 'M-103', 'Elektronik', 15000],
            ['M-101 Toplamı', '', '', 0],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'ETOPLA Sözdizimini Öğrenme', description: '=ETOPLA(ölçüt_aralığı; ölçüt; [toplam_aralığı]) 3 parametreli kurgusunu anlama.' },
          { id: 'o2', title: 'Dinamik Koşullu Toplama', description: 'Tabloda araya yeni satırlar girse bile yalnızca hedeflenen müşterinin harcamalarını anında özetleme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'ETOPLA (SUMIF) ile Şarta Bağlı Toplama',
            explanation: '=ETOPLA(B2:B5; "M-101"; D2:D5). B2:B5 müşteri sütununa bakar, "M-101" olan satırları bulur ve D sütunundaki karşılık gelen tutarları (12.000 + 8.000) toplayarak 20.000 üretir.',
            speechText: 'Filtre uygulayıp satırları gizlemek yerine formülle tek hücrede koşullu toplam almak iş hayatının vazgeçilmezidir. ETOPLA tam olarak bunu yapar.',
            targetCell: 'D6',
            suggestedFormula: '=ETOPLA(B2:B5; "M-101"; D2:D5)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D6 hücresine tıklayın ve M-101 müşterisine ait harcamaların toplamını veren =ETOPLA(B2:B5; "M-101"; D2:D5) formülünü yazıp onaylayın.',
            targetCell: 'D6',
            hints: [
              'Ölçüt aralığı: Müşteri ID’lerin olduğu B2:B5',
              'Ölçüt: "M-101"',
              'Toplam aralığı: Tutarların olduğu D2:D5',
              '=ETOPLA(B2:B5; "M-101"; D2:D5) yazın.',
            ],
            validation: {
              targetCell: 'D6',
              expectedFormulaKeywords: ['ETOPLA', 'SUMIF'],
              expectedValue: 20000,
              successMessage: 'Harika! M-101 müşterisinin toplam 20.000 TL siparişi başarıyla hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q-f8-l1',
          title: 'ETOPLA & EĞERSAY Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'EĞERSAY (COUNTIF) fonksiyonu ETOPLA’dan farklı olarak ne yapar?',
              options: [
                { id: 'opt1', text: 'Tutarları toplar' },
                { id: 'opt2', text: 'Şarta uyan hücrelerin kaç adet olduğunu sayar' },
                { id: 'opt3', text: 'Ortalama alır' },
                { id: 'opt4', text: 'En büyük sayıyı bulur' },
              ],
              correctOptionId: 'opt2',
              explanation: 'EĞERSAY toplama yapmaz, şarta uyan satır sayısını adet olarak bildirir.',
            },
            {
              id: 'q2',
              question: 'ETOPLA fonksiyonunda metin olan bir ölçüt (örn. İstanbul) nasıl yazılmalıdır?',
              options: [
                { id: 'opt1', text: 'Tırnaksız olarak: İstanbul' },
                { id: 'opt2', text: 'Çift tırnak içinde: "İstanbul"' },
                { id: 'opt3', text: 'Parantez içinde: (İstanbul)' },
                { id: 'opt4', text: 'Büyük harfle ISTANBUL' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Excel formüllerinde tüm metinsel koşullar çift tırnak ("...") içinde yazılmalıdır.',
            },
          ],
        },
      },
      {
        id: 'f8-l2',
        phaseId: 8,
        unitId: 'u8-2',
        title: 'Çok Ölçütlü İş Zekası: ÇOKETOPLA (SUMIFS) ve ÇOKEĞERSAY',
        shortDesc: 'Aynı anda hem bölge, hem kategori hem de tarih filtresiyle çok boyutlu raporlama.',
        level: 'İleri',
        durationMinutes: 16,
        functionsUsed: ['ÇOKETOPLA', 'SUMIFS'],
        initialWorkbook: createTableSheet(
          's1',
          'Satış Dağılımı',
          ['Tarih', 'Bölge', 'Kategori', 'Tutar', '', 'Hedef Bölge', 'Hedef Kategori', 'Toplam Ciro'],
          [
            ['01.10.2026', 'Marmara', 'Donanım', 25000, '', 'Marmara', 'Donanım', 0],
            ['02.10.2026', 'Ege', 'Yazılım', 14000, '', '', '', ''],
            ['03.10.2026', 'Marmara', 'Yazılım', 32000, '', '', '', ''],
            ['04.10.2026', 'Marmara', 'Donanım', 18000, '', '', '', ''],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'ÇOKETOPLA’nın Kritik Sözdizimi Farkı', description: 'ETOPLA’da toplam aralığı sonda iken, ÇOKETOPLA’da en başta (1. argüman) olduğunu kavramak.' },
          { id: 'o2', title: 'Çok Boyutlu Şartları Birleştirme', description: 'Bölgesi "Marmara" VE kategorisi "Donanım" olan satışları tek formülle çekebilme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'ÇOKETOPLA’da Toplam Aralığı En Baştadır!',
            explanation: '=ÇOKETOPLA(toplam_aralığı; ölçüt_aralığı1; ölçüt1; ölçüt_aralığı2; ölçüt2...). Yani toplanacak paralar (D2:D5) en başa yazılır, ardından çiftler halinde şartlar gelir.',
            speechText: 'En çok yapılan sınav ve mülakat hatası şudur: ÇOKETOPLA fonksiyonunda toplanacak sütun ETOPLA gibi sonda değil, en baştadır! Buna çok dikkat edin.',
            targetCell: 'H2',
            suggestedFormula: '=ÇOKETOPLA(D2:D5; B2:B5; "Marmara"; C2:C5; "Donanım")',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'H2 hücresine tıklayın ve Marmara bölgesindeki Donanım satışlarını toplayan =ÇOKETOPLA(D2:D5; B2:B5; "Marmara"; C2:C5; "Donanım") formülünü yazıp Enter tuşuna basın.',
            targetCell: 'H2',
            hints: [
              'Toplanacak aralık en başta: D2:D5',
              '1. Şart: B2:B5 aralığında "Marmara"',
              '2. Şart: C2:C5 aralığında "Donanım"',
              '=ÇOKETOPLA(D2:D5; B2:B5; "Marmara"; C2:C5; "Donanım") yazıp onaylayın.',
            ],
            validation: {
              targetCell: 'H2',
              expectedFormulaKeywords: ['ÇOKETOPLA', 'SUMIFS'],
              expectedValue: 43000,
              successMessage: 'Mükemmel! Marmara Donanım satışları (25.000 + 18.000) toplam 43.000 TL olarak doğru hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q-f8-l2',
          title: 'ÇOKETOPLA Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'ÇOKETOPLA (SUMIFS) fonksiyonunun ilk argümanı hangisidir?',
              options: [
                { id: 'opt1', text: '1. Ölçüt aralığı' },
                { id: 'opt2', text: 'Toplam aralığı (toplanacak sayıların bulunduğu sütun)' },
                { id: 'opt3', text: 'Şartın kendisi' },
                { id: 'opt4', text: 'Tarih aralığı' },
              ],
              correctOptionId: 'opt2',
              explanation: 'ÇOKETOPLA’da toplanacak aralık her zaman ilk parametredir. ETOPLA’da ise son parametredir.',
            },
            {
              id: 'q2',
              question: 'ÇOKETOPLA fonksiyonunda kaç farklı koşul çifti tanımlanabilir?',
              options: [
                { id: 'opt1', text: 'Yalnızca 2' },
                { id: 'opt2', text: '127 çifte kadar' },
                { id: 'opt3', text: 'Yalnızca 1' },
                { id: 'opt4', text: 'Sonsuz' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Excel ÇOKETOPLA fonksiyonunda 127 adede kadar ölçüt aralığı ve ölçüt çifti tanımlanmasını destekler.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 9: Sıralama, Filtreleme ve Tablo Yapısı
  // ----------------------------------------------------
  {
    id: 9,
    title: 'Faz 9: Sıralama, Filtreleme ve Tablo Yapısı',
    subtitle: 'Excel Tabloları (Ctrl+T), Yapılandırılmış Başvurular [@Sütun] ve Sıralama',
    iconName: 'Filter',
    description: 'Resmi Excel ListObject tabloları, otomatik genişleyen aralıklar, toplam satırı ve gelişmiş filtreleme stratejileri.',
    lessons: [
      {
        id: 'f9-l1',
        phaseId: 9,
        unitId: 'u9-1',
        title: 'Excel Tabloları (Ctrl+T) ve Yapılandırılmış Başvurular',
        shortDesc: 'Ctrl+T kısayolu, zebra desenli satırlar, dinamik veri ekleme ve otomatik formül çoğaltma.',
        level: 'Orta',
        durationMinutes: 14,
        functionsUsed: ['TOPLA', 'SUM'],
        initialWorkbook: createTableSheet(
          's1',
          'Sipariş Tablosu',
          ['Sipariş ID', 'Müşteri', 'Şehir', 'Tutar'],
          [
            ['SP-101', 'Tekno Market', 'İstanbul', 14500],
            ['SP-102', 'Mega Dağıtım', 'İzmir', 9800],
            ['SP-103', 'Hızlı Kargo', 'Ankara', 12300],
            ['Toplam', '', '', 0],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Normal Hücreleri Tabloya Dönüştürme', description: 'Ctrl+T kısayolu ile sıradan bir aralığı akıllı Excel Tablosuna (ListObject) çevirme avantajlarını kavrama.' },
          { id: 'o2', title: 'Toplam Satırı Entegrasyonu', description: 'Alt satıra formül yazmadan tek tıkla otomatik toplam satırı ekleme disiplini.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Neden Sıradan Aralık Yerine Tablo?',
            explanation: 'Sıradan bir tabloda alta yeni satır eklerseniz formüller onu kapsamaz ve manuel genişletmeniz gerekir. Ctrl+T ile tablo yaparsanız yeni satırlar otomatik olarak formüllere, grafiklere ve PivotTable’lara anında dahil olur.',
            speechText: 'Profesyonel bir Excel kullanıcısının ilk kuralı ham veriyi Ctrl+T ile resmi bir tabloya dönüştürmektir. Bu sayede verileriniz dinamik bir canlı veritabanına dönüşür.',
            targetCell: 'D5',
            suggestedFormula: '=TOPLA(D2:D4)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D5 hücresine tıklayın ve sipariş tutarlarını toplayan =TOPLA(D2:D4) formülünü yazıp onaylayın.',
            targetCell: 'D5',
            hints: [
              'Toplanacak tutarlar D2:D4 aralığındadır.',
              'Formül: =TOPLA(D2:D4)',
              'D5 hücresine yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'D5',
              expectedFormulaKeywords: ['TOPLA', 'SUM'],
              expectedValue: 36600,
              successMessage: 'Tebrikler! 3 siparişin toplamı olan 36.600 TL başarıyla hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q-f9-l1',
          title: 'Excel Tabloları Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'Excel’de seçili bir veri aralığını resmi bir Tabloya (Table) dönüştüren klavye kısayolu nedir?',
              options: [
                { id: 'opt1', text: 'Ctrl + T (veya Ctrl + L)' },
                { id: 'opt2', text: 'Ctrl + Shift + F' },
                { id: 'opt3', text: 'Alt + F4' },
                { id: 'opt4', text: 'Ctrl + P' },
              ],
              correctOptionId: 'opt1',
              explanation: 'Ctrl + T (Table) ve Ctrl + L (List) Excel’de seçili alanı resmi tabloya dönüştürür.',
            },
            {
              id: 'q2',
              question: 'Excel tablolarında formüllerde görülen [@BirimFiyat] gibi ifadelere ne ad verilir?',
              options: [
                { id: 'opt1', text: 'Hata kodu' },
                { id: 'opt2', text: 'Yapılandırılmış Başvuru (Structured Reference)' },
                { id: 'opt3', text: 'Makro komutu' },
                { id: 'opt4', text: 'Hücre kilidi' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Tablolarda C2 gibi donuk adresler yerine [@SütunAdı] gibi anlaşılır Yapılandırılmış Başvurular kullanılır.',
            },
          ],
        },
      },
      {
        id: 'f9-l2',
        phaseId: 9,
        unitId: 'u9-2',
        title: 'Çok Düzeyli Özel Sıralama ve Dinamik Filtreleme',
        shortDesc: 'Birden çok sütuna göre sıralama, metin filtreleri ve benzersiz kayıt ayıklama.',
        level: 'Orta',
        durationMinutes: 14,
        functionsUsed: ['BAĞ_DEĞ_DOLU_SAY', 'COUNTA'],
        initialWorkbook: createTableSheet(
          's1',
          'Çalışan Listesi',
          ['Personel ID', 'Departman', 'Unvan', 'Maaş'],
          [
            ['P-1', 'Finans', 'Uzman', 42000],
            ['P-2', 'Pazarlama', 'Yönetici', 65000],
            ['P-3', 'Finans', 'Direktör', 90000],
            ['P-4', 'Ar-Ge', 'Kıdemli Mühendis', 78000],
            ['Toplam Çalışan', '', '', 0],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Çok Düzeyli Sıralama Mantığı', description: 'Önce Departmana göre alfabetik, ardından aynı departman içinde Maaşa göre büyükten küçüğe sıralama kurgusunu anlama.' },
          { id: 'o2', title: 'Veri Bütünlüğünü Koruma', description: 'Sıralama yaparken tek sütunu değil tüm tablo satırlarını birlikte hareket ettirme disiplini.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Çok Kriterli Sıralama (Multi-level Sort)',
            explanation: 'Büyük listelerde tek bir sütuna göre sıralamak yetmez. Örneğin önce departmanları A’dan Z’ye dizeriz, sonra her departmanın kendi içinde en yüksek maaş alanı en üste çıkarırız.',
            speechText: 'Veri analizinde doğru sıralama raporun okunabilirliğini katlar. Özel sıralama penceresinden Düzey Ekle butonunu kullanarak istediğiniz kadar alt kriter belirleyebilirsiniz.',
            targetCell: 'D6',
            suggestedFormula: '=BAĞ_DEĞ_DOLU_SAY(A2:A5)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D6 hücresine tıklayın ve A sütunundaki 4 personeli sayarak toplam çalışan adedini veren =BAĞ_DEĞ_DOLU_SAY(A2:A5) formülünü yazıp Enter tuşuna basın.',
            targetCell: 'D6',
            hints: [
              'Personel ID’leri A2:A5 aralığındadır.',
              'Formül: =BAĞ_DEĞ_DOLU_SAY(A2:A5)',
              'D6 hücresine yazıp onaylayın.',
            ],
            validation: {
              targetCell: 'D6',
              expectedFormulaKeywords: ['BAĞ_DEĞ_DOLU_SAY', 'COUNTA'],
              expectedValue: 4,
              successMessage: 'Tebrikler! Toplam 4 personel doğru şekilde sayıldı.',
            },
          },
        ],
        quiz: {
          id: 'q-f9-l2',
          title: 'Sıralama ve Filtreleme Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'Yalnızca tek bir sütun seçilip "Sırala" dendiğinde Excel’in "Seçimi Genişlet" uyarısı vermesinin sebebi nedir?',
              options: [
                { id: 'opt1', text: 'Excel’in çökmesini engellemek' },
                { id: 'opt2', text: 'Diğer sütunlardaki bilgilerin kayarak isimlerle maaşların birbirine karışmasını önlemek' },
                { id: 'opt3', text: 'Hücrelerin rengini korumak' },
                { id: 'opt4', text: 'Formülleri silmek' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Eğer seçim genişletilmezse sadece seçili sütun sıralanır ve kişilerin adları ile telefon veya maaş bilgileri birbirinden koparak bozulur.',
            },
            {
              id: 'q2',
              question: 'Excel’de filtre düğmelerini (başlıklardaki okları) açıp kapatan kısayol hangisidir?',
              options: [
                { id: 'opt1', text: 'Ctrl + Shift + L' },
                { id: 'opt2', text: 'Ctrl + F' },
                { id: 'opt3', text: 'Alt + F4' },
                { id: 'opt4', text: 'Ctrl + Z' },
              ],
              correctOptionId: 'opt1',
              explanation: 'Ctrl + Shift + L kısayolu başlıklara anında filtreleme okları ekler veya kaldırır.',
            },
          ],
        },
      },
    ],
  },
];
