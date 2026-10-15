import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from './types';

export const PHASES_1_TO_3: CurriculumPhase[] = [
  // ----------------------------------------------------
  // FAZ 1: Excel Arayüzü & Temel İşlemler
  // ----------------------------------------------------
  {
    id: 1,
    title: 'Faz 1: Excel Arayüzü & Temel İşlemler',
    subtitle: 'Çalışma Sayfaları, Izgara Navigasyonu ve Veri Girişi',
    iconName: 'LayoutGrid',
    description: 'Excel arayüzü, formül çubuğu, hücre adlandırma, sütun-satır yapısı ve otomatik seriler.',
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
            hints: [
              'A sütununun 7. satırındaki hücreyi seçin.',
              'İçerisine URN-106 yazın.',
              'Klavyeden URN-106 yazıp Enter tuşuna basarak onaylayın.',
            ],
            validation: {
              targetCell: 'A7',
              expectedValue: 'URN-106',
              successMessage: 'Tebrikler! İlk ürün kodunuzu doğru hücreye başarıyla girdiniz.',
            },
          },
          {
            id: 't-2',
            stepNumber: 2,
            instruction: 'D7 hücresine bu yeni ürünün birim fiyatı olarak 850 sayısını girin.',
            targetCell: 'D7',
            hints: [
              'D sütunu birim fiyatların tutulduğu alandır.',
              '7. satırda D7 hücresine tıklayın.',
              'Hücreye 850 yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'D7',
              expectedValue: 850,
              successMessage: 'Harika! Sayısal veriyi doğru şekilde eklediniz.',
            },
          },
        ],
        quiz: {
          id: 'q-f1-l1',
          title: 'Faz 1: Hücre ve Arayüz Bilgisi Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'Excel’de C sütunu ile 5. satırın kesiştiği hücrenin adresi nedir?',
              options: [
                { id: 'opt1', text: '5C' },
                { id: 'opt2', text: 'C5' },
                { id: 'opt3', text: 'C-5' },
                { id: 'opt4', text: 'R5C3' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Excel standart hücre adlandırmasında önce sütun harfi, ardından satır numarası gelir: C5.',
            },
            {
              id: 'q2',
              question: 'Hücreye girilen bir değer varsayılan olarak sağa yaslanıyorsa bu ne anlama gelir?',
              options: [
                { id: 'opt1', text: 'Veri bir metindir' },
                { id: 'opt2', text: 'Hücrede formül hatası vardır' },
                { id: 'opt3', text: 'Veri Excel tarafından sayı olarak algılanmıştır' },
                { id: 'opt4', text: 'Hücre kilitlidir' },
              ],
              correctOptionId: 'opt3',
              explanation: 'Excel sayısal değerleri, tarihleri ve parasal tutarları varsayılan olarak sağa hizalar.',
            },
          ],
        },
      },
      {
        id: 'f1-l2',
        phaseId: 1,
        unitId: 'u1-2',
        title: 'Otomatik Doldurma (AutoFill) ve Sayfa Yönetimi',
        shortDesc: 'Doldurma tutamacı, ardışık seri oluşturma ve çalışma sayfaları organizasyonu.',
        level: 'Başlangıç',
        durationMinutes: 12,
        functionsUsed: [],
        initialWorkbook: createTableSheet(
          's1',
          'Aylık Hedefler',
          ['Ay', 'Hedef Ziyaretçi', 'Beklenen Gelir'],
          [
            ['Ocak', 12000, 45000],
            ['Şubat', 13500, 52000],
            ['Mart', 15000, 58000],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Seri Mantığını Kavrama', description: 'Excel’in aylar, günler ve sayı dizilerini otomatik algılayıp tamamlama yeteneğini öğrenme.' },
          { id: 'o2', title: 'Doldurma Tutamacı Kullanımı', description: 'Hücrenin sağ alt köşesindeki yeşil kare ile satırları hızla doldurma pratiği yapma.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Doldurma Tutamacı ve Akıllı Seriler',
            explanation: 'Bir hücrenin sağ alt köşesine geldiğinizde fare imleci siyah bir artıya dönüşür. Buna Doldurma Tutamacı (Fill Handle) denir. Ocak, Şubat gibi aylar yazılıyken aşağı çekildiğinde Excel sıradaki ayları otomatik getirir.',
            speechText: 'Excel çok akıllıdır. Ocak, Şubat ve Mart aylarını gördüğünde bir sonraki ayın Nisan olduğunu bilir. Doldurma tutamacıyla bu serileri tek saniyede üretebilirsiniz.',
            targetCell: 'A4',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'A5 hücresine tıklayın ve seriyi devam ettiren sıradaki ay olan "Nisan" yazıp Enter tuşuna basın.',
            targetCell: 'A5',
            hints: [
              'Ocak, Şubat, Mart serisinin sıradaki ayı Nisan’dır.',
              'A5 hücresini seçin.',
              'Hücreye Nisan yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'A5',
              expectedValue: 'Nisan',
              successMessage: 'Harika! Aylık seriyi doğru şekilde devam ettirdiniz.',
            },
          },
          {
            id: 't-2',
            stepNumber: 2,
            instruction: 'B5 hücresine Nisan ayı hedef ziyaretçi sayısı olarak 17000 sayısını girin.',
            targetCell: 'B5',
            hints: [
              'B sütunu hedef ziyaretçi sayılarını içerir.',
              'B5 hücresini seçin.',
              'Hücreye 17000 yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'B5',
              expectedValue: 17000,
              successMessage: 'Tebrikler! Hedef sayısını başarıyla girdiniz.',
            },
          },
        ],
        quiz: {
          id: 'q-f1-l2',
          title: 'Otomatik Doldurma ve Sayfalar Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'Doldurma tutamacı (Fill Handle) seçili hücrenin neresinde yer alır?',
              options: [
                { id: 'opt1', text: 'Sol üst köşesinde' },
                { id: 'opt2', text: 'Sağ alt köşesinde' },
                { id: 'opt3', text: 'Tam ortasında' },
                { id: 'opt4', text: 'Formül çubuğunun yanında' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Seçili hücrenin sağ alt köşesindeki küçük kare imleci doldurma tutamacıdır.',
            },
            {
              id: 'q2',
              question: 'Excel’de ardışık sayı serisi (1, 2, 3...) oluşturmak için en doğru başlangıç adımı nedir?',
              options: [
                { id: 'opt1', text: 'Yalnızca 1 yazıp sağa tıklamak' },
                { id: 'opt2', text: 'İlk iki hücreye 1 ve 2 yazıp ikisini birden seçerek aşağı çekmek' },
                { id: 'opt3', text: 'Formül çubuğuna SERİ yazmak' },
                { id: 'opt4', text: 'Hücreyi silip yeniden açmak' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Excel artış miktarını anlamak için en az iki örneğe ihtiyaç duyar; 1 ve 2 yazıp birlikte sürüklendiğinde 3, 4, 5... şeklinde devam eder.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 2: Temel Formüller ve Dört İşlem
  // ----------------------------------------------------
  {
    id: 2,
    title: 'Faz 2: Temel Formüller ve Dört İşlem',
    subtitle: 'Aritmetik Operatörler, İşlem Önceliği ve Hücre Sabitleme ($)',
    iconName: 'Calculator',
    description: 'Excel formül mantığı, dört işlem operatörleri (+, -, *, /), parantez önceliği ve mutlak/göreli ($) başvuru disiplini.',
    lessons: [
      {
        id: 'f2-l1',
        phaseId: 2,
        unitId: 'u2-1',
        title: 'Aritmetik Operatörler ve Matematiksel İşlem Önceliği',
        shortDesc: 'Formül oluşturma kuralları, parantez kullanımı ve ciro hesabı.',
        level: 'Başlangıç',
        durationMinutes: 12,
        functionsUsed: ['*'],
        initialWorkbook: createTableSheet(
          's1',
          'Sipariş Gelirleri',
          ['Ürün Adı', 'Satış Adedi', 'Birim Fiyat', 'Birim Maliyet', 'Toplam Gelir'],
          [
            ['Kablosuz Kulaklık', 120, 350, 200, 0],
            ['Akıllı Saat', 85, 1200, 750, 0],
            ['Bluetooth Hoparlör', 40, 600, 380, 0],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Formül Başlangıç Kuralı', description: 'Tüm Excel formüllerinin eşittir (=) işaretiyle başladığını ve hücre adresleriyle çalıştığını kavrama.' },
          { id: 'o2', title: 'Çarpma Operatörü ile Tutar Hesaplama', description: 'Hücreleri doğrudan çarparak dinamik toplam gelir üretme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Formül = İşaretiyle Başlar',
            explanation: 'Excel’de hücreye 5*10 yazarsanız bunu metin olarak görür. Başına = koyduğunuzda (=5*10) hesaplama motoru devreye girer ve 50 üretir.',
            speechText: 'Excel’de bir formül yazacağımız zaman ilk yapmamız gereken şey her zaman eşittir işaretine basmaktır. Eşittir, Excel’e bir matematik işlemi yapacağını bildirir.',
            targetCell: 'E2',
            suggestedFormula: '=B2*C2',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'E2 hücresine tıklayın ve Satış Adedi (B2) ile Birim Fiyatı (C2) çarpan =B2*C2 formülünü yazıp Enter tuşuna basın.',
            targetCell: 'E2',
            hints: [
              'E2 hücresini seçin.',
              'Klavyeden = yazdıktan sonra B2*C2 yazın.',
              '=B2*C2 yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'E2',
              expectedFormulaKeywords: ['*'],
              expectedValue: 42000,
              successMessage: 'Mükemmel! 120 adet ile 350 TL çarpılarak 42.000 TL gelir doğru hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q-f2-l1',
          title: 'Operatörler ve Formül Temelleri Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'Excel’de çarpma işlemi için hangi aritmetik operatör kullanılır?',
              options: [
                { id: 'opt1', text: 'x (küçük x harfi)' },
                { id: 'opt2', text: '* (yıldız işareti)' },
                { id: 'opt3', text: '• (nokta simgesi)' },
                { id: 'opt4', text: '^ (şapka simgesi)' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Bilgisayar ve Excel dünyasında çarpma işlemi her zaman yıldız (*) sembolüyle yapılır.',
            },
            {
              id: 'q2',
              question: '=10 + 5 * 2 formülünün Excel’deki sonucu nedir?',
              options: [
                { id: 'opt1', text: '30' },
                { id: 'opt2', text: '20' },
                { id: 'opt3', text: '25' },
                { id: 'opt4', text: '#DEĞER!' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Matematiksel işlem önceliğine göre önce çarpma yapılır: 5 * 2 = 10, ardından 10 + 10 = 20 bulunur.',
            },
          ],
        },
      },
      {
        id: 'f2-l2',
        phaseId: 2,
        unitId: 'u2-2',
        title: 'Hücre Başvuru Tipleri: Göreli ve Mutlak ($) Başvurular',
        shortDesc: 'F4 tuşu, dolar ($) işaretiyle hücre sabitleme ve vergi/indirim matrisleri.',
        level: 'Başlangıç',
        durationMinutes: 15,
        functionsUsed: ['*'],
        initialWorkbook: {
          activeSheetId: 's1',
          sheets: [
            {
              id: 's1',
              name: 'Vergi Hesabı',
              cells: {
                A1: { raw: 'KDV Oranı', computed: 'KDV Oranı', format: { bold: true, bgColor: '#047857', textColor: '#FFFFFF', align: 'left', border: 'all' } },
                B1: { raw: '0.2', computed: 0.2, format: { bold: true, align: 'right', border: 'all', numberFormat: 'percent' } },
                A3: { raw: 'Hizmet Adı', computed: 'Hizmet Adı', format: { bold: true, bgColor: '#047857', textColor: '#FFFFFF', align: 'center', border: 'all' } },
                B3: { raw: 'Ham Tutar', computed: 'Ham Tutar', format: { bold: true, bgColor: '#047857', textColor: '#FFFFFF', align: 'center', border: 'all' } },
                C3: { raw: 'KDV Tutarı', computed: 'KDV Tutarı', format: { bold: true, bgColor: '#047857', textColor: '#FFFFFF', align: 'center', border: 'all' } },
                A4: { raw: 'Bulut Sunucu', computed: 'Bulut Sunucu', format: { align: 'left', border: 'all' } },
                B4: { raw: '5000', computed: 5000, format: { align: 'right', border: 'all', numberFormat: 'currency' } },
                C4: { raw: '', computed: null, format: { align: 'right', border: 'all' } },
                A5: { raw: 'Veritabanı', computed: 'Veritabanı', format: { align: 'left', border: 'all' } },
                B5: { raw: '8000', computed: 8000, format: { align: 'right', border: 'all', numberFormat: 'currency' } },
                C5: { raw: '', computed: null, format: { align: 'right', border: 'all' } },
              },
              columnWidths: { A: 160, B: 130, C: 130 },
            },
          ],
        },
        objectives: [
          { id: 'o1', title: 'Mutlak Başvuru ($) Mantığını Çözme', description: 'Formül aşağı veya yana kopyalandığında sabit bir hücrenin (örn. vergi oranı B1) kaymasını önleme.' },
          { id: 'o2', title: 'F4 Kısayolu ve Hata Önleme', description: '$B$1 ile B1 arasındaki farkı ve #DEĞER! / sıfır sonuçlarının engellenmesini öğrenme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Neden Dolar ($) İşareti?',
            explanation: 'Normalde bir formülü aşağı çektiğinizde satır numaraları (B4, B5, B6...) artar. Fakat KDV oranı tek bir hücrede (B1) duruyorsa formülü çektiğimizde B1 hücresi de B2, B3 diye kayar ve boş hücrelerle çarpar. Bunu önlemek için $B$1 yazarak sabitleriz.',
            speechText: 'Excel’de en çok yapılan hata hücre sabitlemeyi unutmaktır. KDV oranımız tek bir kutucukta, yani B1 hücresinde. Bu hücreyi sabitlemek için sütun ve satırın önüne dolar işareti koyarak $B$1 yaparız.',
            targetCell: 'C4',
            suggestedFormula: '=B4*$B$1',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'C4 hücresine tıklayın ve Ham Tutar (B4) ile sabit KDV Oranını ($B$1) çarpan =B4*$B$1 formülünü yazıp Enter tuşuna basın.',
            targetCell: 'C4',
            hints: [
              'Ham tutar B4 hücresindedir.',
              'KDV oranı B1 hücresindedir ve $ işaretleriyle sabitlenmelidir: $B$1',
              'C4 hücresine =B4*$B$1 yazıp onaylayın.',
            ],
            validation: {
              targetCell: 'C4',
              expectedFormulaKeywords: ['$', '*'],
              expectedValue: 1000,
              successMessage: 'Harika! 5.000 TL için %20 KDV tutarı olan 1.000 TL başarıyla hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q-f2-l2',
          title: 'Hücre Başvuruları Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'Bir hücre başvurusunu hızla mutlak ($) başvuruya dönüştürmek için klavyeden hangi tuşa basılır?',
              options: [
                { id: 'opt1', text: 'F2' },
                { id: 'opt2', text: 'F4' },
                { id: 'opt3', text: 'F9' },
                { id: 'opt4', text: 'Ctrl + S' },
              ],
              correctOptionId: 'opt2',
              explanation: 'F4 tuşuna basıldığında A1 -> $A$1 -> A$1 -> $A1 döngüsüyle sabitleme türü değişir.',
            },
            {
              id: 'q2',
              question: '$A1 şeklinde yazılmış bir karma başvuruda hangi eksen kilitlenmiştir?',
              options: [
                { id: 'opt1', text: 'Yalnızca 1. satır kilitlidir' },
                { id: 'opt2', text: 'Yalnızca A sütunu kilitlidir, satır serbesttir' },
                { id: 'opt3', text: 'Hem A sütunu hem 1. satır kilitlidir' },
                { id: 'opt4', text: 'Hiçbiri kilitli değildir' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Dolar işareti ($) hangi harf veya sayının önündeyse o kilitlenir. $A1 ifadesinde A sütunu sabit, 1 satırı serbesttir.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 3: Temel İstatistiksel Fonksiyonlar
  // ----------------------------------------------------
  {
    id: 3,
    title: 'Faz 3: Temel İstatistiksel Fonksiyonlar',
    subtitle: 'TOPLA, ORTALAMA, MAK, MİN ve Sayım Fonksiyonları',
    iconName: 'BarChart2',
    description: 'Büyük veri aralıklarını özetleme, TOPLA, ORTALAMA, en büyük ve en küçük değerleri tespit etme, dolu hücreleri sayma.',
    lessons: [
      {
        id: 'f3-l1',
        phaseId: 3,
        unitId: 'u3-1',
        title: 'TOPLA (SUM) ve ORTALAMA (AVERAGE) ile Finansal Özet',
        shortDesc: 'Aralık seçimi (: operatörü), hızlı toplama ve genel ortalama hesabı.',
        level: 'Başlangıç',
        durationMinutes: 12,
        functionsUsed: ['TOPLA', 'ORTALAMA'],
        initialWorkbook: createTableSheet(
          's1',
          'Bölgesel Satışlar',
          ['Bölge', 'Aylık Ciro'],
          [
            ['Marmara', 150000],
            ['Ege', 95000],
            ['İç Anadolu', 110000],
            ['Akdeniz', 85000],
            ['Genel Toplam', 0],
            ['Ortalama Ciro', 0],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Aralık Mantığını Kavrama', description: 'B2:B5 gösteriminin B2’den B5’e kadar olan tüm hücreleri kapsadığını anlama.' },
          { id: 'o2', title: 'Temel Fonksiyon Sözdizimi', description: '=TOPLA(Aralık) ve =ORTALAMA(Aralık) fonksiyonlarıyla hatasız hesaplama yapma.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Hücreleri Tek Tek Toplamak Yerine TOPLA Kullanmak',
            explanation: '=B2+B3+B4+B5 yazmak 4 hücre için çalışabilir ama 500 satırlık bir tabloda imkansızdır. =TOPLA(B2:B5) aradaki tüm hücreleri otomatik toplar.',
            speechText: 'Excel’de en sık kullanılan fonksiyon TOPLA fonksiyonudur. İki nokta üst üste işareti başlangıçtan bitişe kadar olan tüm aralığı ifade eder.',
            targetCell: 'B6',
            suggestedFormula: '=TOPLA(B2:B5)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'B6 hücresine tıklayın ve Marmara’dan Akdeniz’e kadar olan 4 bölgenin cirolarını toplayan =TOPLA(B2:B5) formülünü yazıp Enter tuşuna basın.',
            targetCell: 'B6',
            hints: [
              'Toplanacak cirolar B2, B3, B4 ve B5 hücrelerindedir.',
              'Fonksiyon sözdizimi: =TOPLA(B2:B5)',
              'B6 hücresine =TOPLA(B2:B5) yazıp onaylayın.',
            ],
            validation: {
              targetCell: 'B6',
              expectedFormulaKeywords: ['TOPLA', 'SUM'],
              expectedValue: 440000,
              successMessage: 'Tebrikler! 4 bölgenin toplam cirosu olan 440.000 TL başarıyla hesaplandı.',
            },
          },
          {
            id: 't-2',
            stepNumber: 2,
            instruction: 'B7 hücresine tıklayın ve aynı 4 bölgenin ortalama cirosunu veren =ORTALAMA(B2:B5) formülünü yazın.',
            targetCell: 'B7',
            hints: [
              'Ortalama fonksiyonu: =ORTALAMA(Aralık)',
              'Aralık yine B2:B5 olmalıdır (Genel toplam satırını dahil etmeyin!).',
              'B7 hücresine =ORTALAMA(B2:B5) yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'B7',
              expectedFormulaKeywords: ['ORTALAMA', 'AVERAGE'],
              expectedValue: 110000,
              successMessage: 'Mükemmel! Bölge başına ortalama 110.000 TL ciro doğru tespit edildi.',
            },
          },
        ],
        quiz: {
          id: 'q-f3-l1',
          title: 'TOPLA ve ORTALAMA Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: '=TOPLA(A1:A4) formülünde iki nokta (:) işareti neyi temsil eder?',
              options: [
                { id: 'opt1', text: 'Yalnızca A1 ve A4 hücrelerini' },
                { id: 'opt2', text: 'A1 ile A4 arasındaki bölme işlemini' },
                { id: 'opt3', text: 'A1’den A4’e kadar olan tüm bitişik hücre aralığını' },
                { id: 'opt4', text: 'A1 hücresini kilitlemeyi' },
              ],
              correctOptionId: 'opt3',
              explanation: 'İki nokta (:) Excel’de sürekli aralık belirtir. Noktalı virgül (;) ise tekil ayrık hücreleri seçmek için kullanılır.',
            },
            {
              id: 'q2',
              question: 'Bir aralıkta boş bir hücre varsa ORTALAMA fonksiyonu bu hücreyi nasıl değerlendirir?',
              options: [
                { id: 'opt1', text: '#DEĞER! hatası verir' },
                { id: 'opt2', text: 'Boş hücreyi sıfır kabul edip paydaya ekler' },
                { id: 'opt3', text: 'Boş hücreyi tamamen yok sayar ve ortalama hesabına dahil etmez' },
                { id: 'opt4', text: 'Formülü otomatik durdurur' },
              ],
              correctOptionId: 'opt3',
              explanation: 'ORTALAMA fonksiyonu boş hücreleri ve metinleri yok sayar, yalnızca sayı içeren hücrelerin aritmetik ortalamasını alır.',
            },
          ],
        },
      },
      {
        id: 'f3-l2',
        phaseId: 3,
        unitId: 'u3-2',
        title: 'Ekstrem Değerler ve Sayım: MAK, MİN, BAĞ_DEĞ_SAY, BAĞ_DEĞ_DOLU_SAY',
        shortDesc: 'En yüksek/düşük satışlar, sayı sayma ve dolu hücre sayma disiplini.',
        level: 'Başlangıç',
        durationMinutes: 14,
        functionsUsed: ['MAK', 'MİN', 'BAĞ_DEĞ_SAY', 'BAĞ_DEĞ_DOLU_SAY'],
        initialWorkbook: createTableSheet(
          's1',
          'Müşteri Temsilcileri',
          ['Temsilci Adı', 'Görüşme Sayısı', 'Memnuniyet Skoru'],
          [
            ['Ahmet Kaya', 65, 92],
            ['Zeynep Yıldız', 88, 98],
            ['Murat Çelik', 42, 85],
            ['Elif Demir', 95, 99],
            ['En Yüksek Çağrı', 0, 0],
            ['Toplam Temsilci', 0, 0],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Ekstrem Değerleri Bulma', description: 'MAK (MAX) ve MİN (MIN) fonksiyonları ile en yüksek ve en düşük performansları saptama.' },
          { id: 'o2', title: 'Sayım Fonksiyonları Ayrımı', description: 'BAĞ_DEĞ_SAY (COUNT - sadece sayılar) ile BAĞ_DEĞ_DOLU_SAY (COUNTA - metin dahil dolu hücreler) farkını öğrenme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Sayıları Saymak vs Dolu Hücreleri Saymak',
            explanation: 'BAĞ_DEĞ_SAY yalnızca sayı içeren hücreleri sayar. İsimlerin olduğu A sütununda BAĞ_DEĞ_SAY kullanırsanız 0 sonucunu alırsınız! Metinleri ve çalışan isimlerini saymak için BAĞ_DEĞ_DOLU_SAY (COUNTA) kullanılır.',
            speechText: 'En sık karşılaşılan tuzaklardan biri sayım fonksiyonlarıdır. Bir personel listesinde kaç kişi olduğunu bulmak için metin içeren hücreleri sayan BAĞ_DEĞ_DOLU_SAY fonksiyonunu tercih etmeliyiz.',
            targetCell: 'B6',
            suggestedFormula: '=MAK(B2:B5)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'B6 hücresine tıklayın ve görüşme sayıları içindeki en yüksek değeri bulan =MAK(B2:B5) formülünü yazıp onaylayın.',
            targetCell: 'B6',
            hints: [
              'En yüksek değer fonksiyonu =MAK(Aralık)tır.',
              'Görüşme sayıları B2:B5 aralığındadır.',
              'B6 hücresine =MAK(B2:B5) yazın.',
            ],
            validation: {
              targetCell: 'B6',
              expectedFormulaKeywords: ['MAK', 'MAX'],
              expectedValue: 95,
              successMessage: 'Harika! En yüksek görüşme sayısı olan 95 başarıyla tespit edildi.',
            },
          },
          {
            id: 't-2',
            stepNumber: 2,
            instruction: 'B7 hücresine tıklayın ve A sütunundaki 4 temsilci ismini sayarak toplam çalışan sayısını bulan =BAĞ_DEĞ_DOLU_SAY(A2:A5) formülünü yazın.',
            targetCell: 'B7',
            hints: [
              'Metin içeren isimleri saymak için BAĞ_DEĞ_DOLU_SAY kullanılır.',
              'Temsilci isimleri A2:A5 aralığındadır.',
              '=BAĞ_DEĞ_DOLU_SAY(A2:A5) formülünü girin.',
            ],
            validation: {
              targetCell: 'B7',
              expectedFormulaKeywords: ['BAĞ_DEĞ_DOLU_SAY', 'COUNTA'],
              expectedValue: 4,
              successMessage: 'Tebrikler! 4 temsilci doğru şekilde sayıldı.',
            },
          },
        ],
        quiz: {
          id: 'q-f3-l2',
          title: 'Sayım ve Ekstrem Değerler Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'Müşteri isimlerinin yazılı olduğu A2:A20 aralığında kaç kişi olduğunu saymak için hangi fonksiyon kullanılmalıdır?',
              options: [
                { id: 'opt1', text: 'TOPLA(A2:A20)' },
                { id: 'opt2', text: 'BAĞ_DEĞ_SAY(A2:A20)' },
                { id: 'opt3', text: 'BAĞ_DEĞ_DOLU_SAY(A2:A20)' },
                { id: 'opt4', text: 'MAK(A2:A20)' },
              ],
              correctOptionId: 'opt3',
              explanation: 'BAĞ_DEĞ_SAY yalnızca sayıları sayar; metinleri saymak için BAĞ_DEĞ_DOLU_SAY (COUNTA) kullanılmalıdır.',
            },
            {
              id: 'q2',
              question: '=MİN(15; 40; 8; 92) formülünün çıktısı nedir?',
              options: [
                { id: 'opt1', text: '92' },
                { id: 'opt2', text: '8' },
                { id: 'opt3', text: '15' },
                { id: 'opt4', text: '38.75' },
              ],
              correctOptionId: 'opt2',
              explanation: 'MİN fonksiyonu verilen parametreler içindeki en küçük sayıyı (8) döndürür.',
            },
          ],
        },
      },
    ],
  },
];
