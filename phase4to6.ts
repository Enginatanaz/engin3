import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from './types';

export const PHASES_4_TO_6: CurriculumPhase[] = [
  // ----------------------------------------------------
  // FAZ 4: Mantıksal Fonksiyonlar & Karar Mekanizmaları
  // ----------------------------------------------------
  {
    id: 4,
    title: 'Faz 4: Mantıksal Fonksiyonlar & Karar Mekanizmaları',
    subtitle: 'EĞER, VE, YADA, EĞERHATA ve Çoklu Karar Ağaçları',
    iconName: 'GitFork',
    description: 'Koşullu mantık mimarisi, mantıksal sınamalar (>, <, =, <>), VE/YADA kombinasyonları ve EĞERHATA ile temiz raporlama.',
    lessons: [
      {
        id: 'f4-l1',
        phaseId: 4,
        unitId: 'u4-1',
        title: 'Temel EĞER (IF) Fonksiyonu ve Karşılaştırma Mantığı',
        shortDesc: 'Karar ağacı mantığı, eşik değer kontrolleri ve prim/başarı kuralları.',
        level: 'Orta',
        durationMinutes: 14,
        functionsUsed: ['EĞER'],
        initialWorkbook: createTableSheet(
          's1',
          'Sınav Sonuçları',
          ['Öğrenci No', 'Ad Soyad', 'Not Ortalaması', 'Durum'],
          [
            ['ST-101', 'Bora Demir', 78, ''],
            ['ST-102', 'Damla Çetin', 58, ''],
            ['ST-103', 'Hakan Kurt', 92, ''],
            ['ST-104', 'Selin Aydın', 64, ''],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'EĞER Sözdizimini Kavrama', description: '3 temel argüman: Mantıksal Sınama; Doğruysa Değer; Yanlışsa Değer kurgusunu anlama.' },
          { id: 'o2', title: 'Metin Değerleri Tırnak İçine Alma', description: 'Formüllerde metin sonuçların ("Geçti", "Kaldı") çift tırnakla tanımlanmasını öğrenme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'EĞER Fonksiyonunun 3 Parçası',
            explanation: '=EĞER(mantıksal_sınama; doğruysa_değer; yanlışsa_değer). Örneğin: =EĞER(C2>=70; "Geçti"; "Kaldı"). Eğer C2 hücresi 70 veya daha büyükse "Geçti", değilse "Kaldı" yazar.',
            speechText: 'EĞER fonksiyonu Excel’in beynidir. Bir koşul belirlersiniz, koşul tutarsa ilk değeri, tutmazsa ikinci değeri döndürür. Argümanları ayırmak için Türkçe Excel’de mutlaka noktalı virgül kullanmalısınız.',
            targetCell: 'D2',
            suggestedFormula: '=EĞER(C2>=70; "Geçti"; "Kaldı")',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D2 hücresine tıklayın ve Not Ortalaması (C2) 70 ve üzeriyse "Geçti", değilse "Kaldı" yazdıran =EĞER(C2>=70; "Geçti"; "Kaldı") formülünü girin.',
            targetCell: 'D2',
            hints: [
              'Mantıksal sınama: C2>=70',
              'Metinleri çift tırnak içine alın: "Geçti" ve "Kaldı"',
              '=EĞER(C2>=70; "Geçti"; "Kaldı") yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'D2',
              expectedFormulaKeywords: ['EĞER', 'IF'],
              expectedValue: 'Geçti',
              successMessage: 'Tebrikler! 78 notu 70 eşiğini aştığı için sonuç başarıyla "Geçti" olarak hesaplandı.',
            },
          },
        ],
        quiz: {
          id: 'q-f4-l1',
          title: 'EĞER Fonksiyonu Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'EĞER fonksiyonunda argümanlar arasında hangi noktalama işareti kullanılır?',
              options: [
                { id: 'opt1', text: 'Virgül (,)' },
                { id: 'opt2', text: 'Noktalı virgül (;)' },
                { id: 'opt3', text: 'İki nokta üst üste (:)' },
                { id: 'opt4', text: 'Tire (-)' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Türkçe bölgesel ayarlarında Excel fonksiyon argümanlarını ayırmak için noktalı virgül (;) kullanılır.',
            },
            {
              id: 'q2',
              question: '=EĞER(5 > 10; "Evet"; "Hayır") formülü hangi sonucu verir?',
              options: [
                { id: 'opt1', text: 'Evet' },
                { id: 'opt2', text: 'Hayır' },
                { id: 'opt3', text: 'DOĞRU' },
                { id: 'opt4', text: '#DEĞER!' },
              ],
              correctOptionId: 'opt2',
              explanation: '5 > 10 ifadesi YANLIŞ olduğu için yanlışsa_değer parametresi olan "Hayır" döner.',
            },
          ],
        },
      },
      {
        id: 'f4-l2',
        phaseId: 4,
        unitId: 'u4-2',
        title: 'Çoklu Mantıksal Koşullar: EĞER, VE (AND) ve YADA (OR)',
        shortDesc: 'Aynı anda sağlanan koşullar (VE) veya esnek alternatifler (YADA) ile prim kurgusu.',
        level: 'Orta',
        durationMinutes: 16,
        functionsUsed: ['EĞER', 'VE', 'YADA'],
        initialWorkbook: createTableSheet(
          's1',
          'Prim Skalası',
          ['Personel', 'Satış Tutarı', 'Müşteri Memnuniyeti', 'Prim Hak Ediş'],
          [
            ['Caner Öz', 85000, 85, ''],
            ['Selin Taş', 120000, 92, ''],
            ['Kerem Ak', 60000, 78, ''],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'VE Fonksiyonunun Katı Mantığı', description: 'VE(koşul1; koşul2) fonksiyonunun yalnızca TÜM şartlar sağlandığında DOĞRU ürettiğini anlama.' },
          { id: 'o2', title: 'İç İçe Fonksiyon Kurgulama', description: 'EĞER içinde VE fonksiyonunu birleştirerek kurumsal prim kurallarını modelleme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'VE ve YADA ile Şartları Genişletme',
            explanation: 'Tek bir şart yetmiyorsa VE(C2>=80; D2>=80) yazarız. EĞER(VE(B2>=80000; C2>=80); "Prim Var"; "Prim Yok") formülünde kişi hem 80.000 TL satmalı hem de 80 puan almalıdır.',
            speechText: 'Gerçek hayatta prim almak için sadece satış yapmak yetmez; müşteri memnuniyetinin de yüksek olması gerekir. İşte iki şartın ikisini birden aradığımızda VE fonksiyonunu EĞER’in içine gömeriz.',
            targetCell: 'D2',
            suggestedFormula: '=EĞER(VE(B2>=80000; C2>=80); "Prim Hak Etti"; "Yok")',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D2 hücresine tıklayın ve Satış Tutarı (B2) en az 80.000 VE Memnuniyet Skoru (C2) en az 80 ise "Prim Hak Etti", aksi halde "Yok" yazan =EĞER(VE(B2>=80000; C2>=80); "Prim Hak Etti"; "Yok") formülünü girin.',
            targetCell: 'D2',
            hints: [
              'İki koşulu VE(B2>=80000; C2>=80) şeklinde yazın.',
              'Bunu EĞER fonksiyonunun ilk parametresi yapın.',
              '=EĞER(VE(B2>=80000; C2>=80); "Prim Hak Etti"; "Yok") formülünü yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'D2',
              expectedFormulaKeywords: ['EĞER', 'IF', 'VE', 'AND'],
              expectedValue: 'Prim Hak Etti',
              successMessage: 'Mükemmel! Caner her iki kriteri de sağladığı için "Prim Hak Etti" başarıyla belirlendi.',
            },
          },
        ],
        quiz: {
          id: 'q-f4-l2',
          title: 'VE ve YADA Mantığı Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: '=VE(10>5; 20<15) ifadesinin sonucu nedir?',
              options: [
                { id: 'opt1', text: 'DOĞRU' },
                { id: 'opt2', text: 'YANLIŞ' },
                { id: 'opt3', text: '5' },
                { id: 'opt4', text: '#DEĞER!' },
              ],
              correctOptionId: 'opt2',
              explanation: 'VE fonksiyonunda şartlardan biri bile YANLIŞ olursa (20<15 yanlıştır) genel sonuç YANLIŞ olur.',
            },
            {
              id: 'q2',
              question: 'YADA fonksiyonu hangi durumda DOĞRU üretir?',
              options: [
                { id: 'opt1', text: 'Yalnızca tüm şartlar doğru olduğunda' },
                { id: 'opt2', text: 'Şartlardan en az biri doğru olduğunda' },
                { id: 'opt3', text: 'Tüm şartlar yanlış olduğunda' },
                { id: 'opt4', text: 'Hiçbir zaman' },
              ],
              correctOptionId: 'opt2',
              explanation: 'YADA (OR) fonksiyonu esnektir; içindeki şartlardan tek bir tanesi bile doğruysa DOĞRU döndürür.',
            },
          ],
        },
      },
      {
        id: 'f4-l3',
        phaseId: 4,
        unitId: 'u4-3',
        title: 'Profesyonel Hata Yönetimi: EĞERHATA (IFERROR) & ÇOKEĞER',
        shortDesc: '#SAYI/0!, #YOK, #DEĞER! hatalarını maskeleme ve temiz dashboard hazırlığı.',
        level: 'Orta',
        durationMinutes: 15,
        functionsUsed: ['EĞERHATA', 'IFERROR'],
        initialWorkbook: createTableSheet(
          's1',
          'Departman Bütçesi',
          ['Departman', 'Toplam Harcama', 'Personel Sayısı', 'Kişi Başı Maliyet'],
          [
            ['Pazarlama', 45000, 5, 9000],
            ['Ar-Ge', 80000, 0, ''],
            ['İnsan Kaynakları', 30000, 3, 10000],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'Hesaplama Hatalarını Engelleme', description: 'Bir sayıyı sıfıra bölmeye çalışıldığında ortaya çıkan #SAYI/0! hatasını EĞERHATA ile temizleme.' },
          { id: 'o2', title: 'Yönetici Raporu Estetiği', description: 'Raporlarda çirkin hata mesajları yerine 0 veya "Atama Yok" gibi profesyonel mesajlar yazdırma.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'EĞERHATA (IFERROR) ile Güvenlik Çemberi',
            explanation: '=EĞERHATA(işlem; hata_varsa_değer). Ar-Ge departmanında personel sayısı 0 olduğu için =B3/C3 işlemi doğrudan #SAYI/0! hatası patlatır. Bunu =EĞERHATA(B3/C3; 0) içine alarak hatasız 0 gösterebiliriz.',
            speechText: 'Profesyonel bir raporda #SAYI/0! veya #DEĞER! görmek kabul edilemez. EĞERHATA fonksiyonu işlemi dener; hata çıkarsa belirlediğiniz temiz bir değeri sunar.',
            targetCell: 'D3',
            suggestedFormula: '=EĞERHATA(B3/C3; 0)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D3 hücresine tıklayın ve sıfıra bölme hatasını önleyerek hata durumunda 0 döndüren =EĞERHATA(B3/C3; 0) formülünü yazıp onaylayın.',
            targetCell: 'D3',
            hints: [
              'İşlem: B3/C3',
              'Hata alternatifi: 0',
              '=EĞERHATA(B3/C3; 0) yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'D3',
              expectedFormulaKeywords: ['EĞERHATA', 'IFERROR'],
              expectedValue: 0,
              successMessage: 'Mükemmel! #SAYI/0! hatası engellendi ve rapor temiz şekilde 0 değerini gösterdi.',
            },
          },
        ],
        quiz: {
          id: 'q-f4-l3',
          title: 'Hata Yönetimi Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'Bir hücrede bir sayı sıfıra bölünmeye çalışıldığında Excel hangi hata kodunu verir?',
              options: [
                { id: 'opt1', text: '#AD?' },
                { id: 'opt2', text: '#SAYI/0!' },
                { id: 'opt3', text: '#YOK' },
                { id: 'opt4', text: '#BAŞV!' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Matematikte sıfıra bölme tanımsız olduğu için Excel #SAYI/0! (Division by Zero) hatası üretir.',
            },
            {
              id: 'q2',
              question: '=EĞERHATA(100/2; "Hata Var") formülünün sonucu ne olur?',
              options: [
                { id: 'opt1', text: 'Hata Var' },
                { id: 'opt2', text: '50' },
                { id: 'opt3', text: '0' },
                { id: 'opt4', text: '#DEĞER!' },
              ],
              correctOptionId: 'opt2',
              explanation: '100/2 işlemi başarıyla 50 sonucunu ürettiği ve hata olmadığı için alternatif metin devreye girmez; doğrudan 50 döner.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 5: Metin Fonksiyonları ve Veri Temizleme
  // ----------------------------------------------------
  {
    id: 5,
    title: 'Faz 5: Metin Fonksiyonları ve Veri Temizleme',
    subtitle: 'SOLDAN, SAĞDAN, PARÇAAL, METİNBİRLEŞTİR, KIRP ve Formatlama',
    iconName: 'Type',
    description: 'Bozuk metinleri ayıklama, kod ve barkod parçalama, fazlalık boşlukları temizleme ve kurumsal veri standardizasyonu.',
    lessons: [
      {
        id: 'f5-l1',
        phaseId: 5,
        unitId: 'u5-1',
        title: 'Metin Ayrıştırma: SOLDAN, SAĞDAN, PARÇAAL ve UZUNLUK',
        shortDesc: 'Ürün kodlarından departman veya yıl ayrıştırma, karakter sayısı ölçme.',
        level: 'Orta',
        durationMinutes: 14,
        functionsUsed: ['SOLDAN', 'LEFT', 'UZUNLUK', 'LEN'],
        initialWorkbook: createTableSheet(
          's1',
          'Envanter Kodları',
          ['Tam Barkod', 'Ürün Adı', 'Kategori Kodu', 'Barkod Uzunluğu'],
          [
            ['ELK-90412', 'Kablosuz Kulaklık', '', 0],
            ['MOB-31450', 'Çalışma Masası', '', 0],
            ['KRT-88192', 'Dosya Klasörü', '', 0],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'SOLDAN ile Başlangıç Karakterlerini Alma', description: '=SOLDAN(hücre; karakter_sayısı) ile kodun solundaki kategori ön ekini ayıklama.' },
          { id: 'o2', title: 'UZUNLUK ile Karakter Sayımı', description: 'Metnin kaç karakterden oluştuğunu ölçerek eksik veri girişlerini tespit etme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'Metnin Solundan Parça Koparma: SOLDAN',
            explanation: 'ELK-90412 kodunun ilk 3 harfi ("ELK") elektronik kategorisini temsil eder. =SOLDAN(A2; 3) formülü A2 hücresinin en solundan başlayarak tam 3 karakter alır.',
            speechText: 'Kurumsal veritabanlarında barkodlar ve sicil kodları anlamlı bölümlerden oluşur. SOLDAN fonksiyonu ile metnin en solundan dilediğiniz sayıda harfi veya rakamı çekip alabilirsiniz.',
            targetCell: 'C2',
            suggestedFormula: '=SOLDAN(A2; 3)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'C2 hücresine tıklayın ve Tam Barkod’un (A2) ilk 3 harfini alan =SOLDAN(A2; 3) formülünü yazıp onaylayın.',
            targetCell: 'C2',
            hints: [
              'Metin hücresi: A2',
              'Alınacak karakter sayısı: 3',
              '=SOLDAN(A2; 3) yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'C2',
              expectedFormulaKeywords: ['SOLDAN', 'LEFT'],
              expectedValue: 'ELK',
              successMessage: 'Tebrikler! Kategori kodu olan "ELK" başarıyla ayrıştırıldı.',
            },
          },
        ],
        quiz: {
          id: 'q-f5-l1',
          title: 'Metin Parçalama Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: '=SAĞDAN("TR-İSTANBUL"; 4) formülünün sonucu nedir?',
              options: [
                { id: 'opt1', text: 'TR-İ' },
                { id: 'opt2', text: 'NBUL' },
                { id: 'opt3', text: 'STAN' },
                { id: 'opt4', text: 'İSTA' },
              ],
              correctOptionId: 'opt2',
              explanation: 'SAĞDAN fonksiyonu metnin sonundan başlar ve son 4 harf "NBUL"dur.',
            },
            {
              id: 'q2',
              question: 'Bir hücredeki metnin toplam kaç karakterden oluştuğunu veren fonksiyon hangisidir?',
              options: [
                { id: 'opt1', text: 'SAY' },
                { id: 'opt2', text: 'UZUNLUK (LEN)' },
                { id: 'opt3', text: 'BOYUT' },
                { id: 'opt4', text: 'KIRP' },
              ],
              correctOptionId: 'opt2',
              explanation: 'Türkçe Excel’de UZUNLUK, İngilizce Excel’de LEN fonksiyonu karakter sayısını verir.',
            },
          ],
        },
      },
      {
        id: 'f5-l2',
        phaseId: 5,
        unitId: 'u5-2',
        title: 'Metin Standardizasyonu: METİNBİRLEŞTİR, BİRLEŞTİR, KIRP',
        shortDesc: 'Gereksiz boşlukları temizleme (KIRP), büyük/küçük harf düzenleme ve dinamik birleştirme.',
        level: 'Orta',
        durationMinutes: 15,
        functionsUsed: ['BİRLEŞTİR', 'CONCATENATE', 'KIRP', 'TRIM'],
        initialWorkbook: createTableSheet(
          's1',
          'Müşteri Listesi',
          ['Ham Ad', 'Ham Soyad', 'Şehir', 'Temiz Tam Ad'],
          [
            ['  mehmet  ', 'özkan', 'İSTANBUL', ''],
            ['   ayşe ', 'demir', 'ANKARA', ''],
            ['murat', 'yıldız  ', 'İZMİR', ''],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'KIRP (TRIM) ile Gizli Boşlukları Silme', description: 'Metin başındaki ve sonundaki görünmez boşlukların DÜŞEYARA ve eşleşmelerde yarattığı arıza riskini önleme.' },
          { id: 'o2', title: 'Metin Birleştirme', description: 'Ad ve soyadı aralarına boşluk koyarak tek bir hücrede standartlaştırma.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'KIRP (TRIM) Neden Hayatidir?',
            explanation: 'İnternetten veya ERP sistemlerinden gelen verilerde isimlerin başında ve sonunda fazlalık boşluklar bulunur ("  mehmet  "). Bu boşluklar Excel’in arama formüllerini bozar. KIRP fonksiyonu metnin başındaki ve sonundaki tüm gereksiz boşlukları yok eder.',
            speechText: 'Veri analistlerinin en çok başını ağrıtan şey metinlerin arkasına saklanan görünmez boşluklardır. KIRP fonksiyonu bu fazlalıkları tek hamlede temizler.',
            targetCell: 'D2',
            suggestedFormula: '=BİRLEŞTİR(KIRP(A2); " "; B2)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'D2 hücresine tıklayın ve A2’deki boşluklu adı KIRP ile temizleyip araya boşluk koyarak B2’deki soyadla birleştiren =BİRLEŞTİR(KIRP(A2); " "; B2) formülünü yazın.',
            targetCell: 'D2',
            hints: [
              'Temizlenecek ad: KIRP(A2)',
              'Araya konacak boşluk: " "',
              '=BİRLEŞTİR(KIRP(A2); " "; B2) yazıp Enter tuşuna basın.',
            ],
            validation: {
              targetCell: 'D2',
              expectedFormulaKeywords: ['BİRLEŞTİR', 'CONCATENATE', 'KIRP', 'TRIM'],
              expectedValue: 'mehmet özkan',
              successMessage: 'Harika! Boşluklar temizlendi ve ad soyad tek hücrede kusursuz birleştirildi.',
            },
          },
        ],
        quiz: {
          id: 'q-f5-l2',
          title: 'KIRP ve Birleştirme Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'KIRP (TRIM) fonksiyonu kelimeler arasındaki tek bir normal boşluğu siler mi?',
              options: [
                { id: 'opt1', text: 'Evet, tüm boşlukları siler' },
                { id: 'opt2', text: 'Hayır, kelimeler arasındaki tek boşluğu korur, yalnızca baş/son ve mükerrer boşlukları siler' },
                { id: 'opt3', text: 'Yalnızca sayıları siler' },
                { id: 'opt4', text: 'Hata verir' },
              ],
              correctOptionId: 'opt2',
              explanation: 'KIRP çok akıllıdır; kelimeler arasındaki tek boşluğu korur, baş ve sondaki fazlalıkları temizler.',
            },
            {
              id: 'q2',
              question: 'METİNBİRLEŞTİR (TEXTJOIN) fonksiyonunun eski BİRLEŞTİR fonksiyonuna göre en büyük avantajı nedir?',
              options: [
                { id: 'opt1', text: 'Yalnızca sayıları toplaması' },
                { id: 'opt2', text: 'Aralığı (A1:A10) tek seferde alabilmesi ve ortak ayraç ile boş hücreleri atlayabilmesi' },
                { id: 'opt3', text: 'Daha yavaş çalışması' },
                { id: 'opt4', text: 'Yalnızca İngilizce çalışması' },
              ],
              correctOptionId: 'opt2',
              explanation: 'METİNBİRLEŞTİR tek tek hücre seçmek yerine komple bir aralığı alabilir ve boş hücreleri otomatik atlar.',
            },
          ],
        },
      },
    ],
  },

  // ----------------------------------------------------
  // FAZ 6: Arama ve Başvuru Fonksiyonları
  // ----------------------------------------------------
  {
    id: 6,
    title: 'Faz 6: Arama ve Başvuru Fonksiyonları',
    subtitle: 'DÜŞEYARA, ÇAPRAZARA (XLOOKUP), İNDİS & KAÇINCI',
    iconName: 'Search',
    description: 'İki farklı tabloyu anahtar sütun üzerinden birleştirme, tam eşleşme kuralı, sola arama ve iki boyutlu matris aramaları.',
    lessons: [
      {
        id: 'f6-l1',
        phaseId: 6,
        unitId: 'u6-1',
        title: 'Klasik DÜŞEYARA (VLOOKUP) ve Tam Eşleşme Disiplini',
        shortDesc: 'Sütun indisi mantığı, aranacak sütunun en solda olma şartı ve 0/YANLIŞ parametresi.',
        level: 'Orta',
        durationMinutes: 16,
        functionsUsed: ['DÜŞEYARA', 'VLOOKUP'],
        initialWorkbook: createTableSheet(
          's1',
          'Sipariş Eşleştirme',
          ['Müşteri No', 'Şehir', 'Tutar', 'Referans Müşteri', 'Referans Şehir'],
          [
            ['M-101', '', 4500, 'M-101', 'İstanbul'],
            ['M-102', '', 8200, 'M-102', 'İzmir'],
            ['M-103', '', 3100, 'M-103', 'Ankara'],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'DÜŞEYARA’nın 4 Parametresini Çözme', description: 'Aranan Değer; Tablo Dizisi; Sütun İndis Sayısı; Eşleşme Türü (YANLIŞ / 0).' },
          { id: 'o2', title: 'Tam Eşleşme Zorunluluğu', description: 'Son parametreye 0 veya YANLIŞ yazılmadığında yaklaşık eşleşme yapılarak hatalı veri çekilmesini önleme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'DÜŞEYARA ile Farklı Tablodan Veri Çekme',
            explanation: '=DÜŞEYARA(A2; D2:E4; 2; YANLIŞ). A2’deki müşteri kodunu alır, D2:E4 tablosunun en sol sütununda arar, bulduğunda 2. sütundaki şehri getirir.',
            speechText: 'DÜŞEYARA iş dünyasının en popüler fonksiyonudur. Bir kodu alıp başka bir listede arar ve yanındaki bilgiyi çeker. Son parametreye her zaman tam eşleşme için YANLIŞ veya 0 yazmayı unutmayın.',
            targetCell: 'B2',
            suggestedFormula: '=DÜŞEYARA(A2; D2:E4; 2; YANLIŞ)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'B2 hücresine tıklayın ve M-101 müşterisinin şehrini referans tablodan (D2:E4) getiren =DÜŞEYARA(A2; D2:E4; 2; YANLIŞ) formülünü yazıp onaylayın.',
            targetCell: 'B2',
            hints: [
              'Aranan değer: A2',
              'Tablo aralığı: D2:E4',
              'Sütun indisi: 2 (Şehir 2. sütundadır)',
              '=DÜŞEYARA(A2; D2:E4; 2; YANLIŞ) formülünü yazıp onaylayın.',
            ],
            validation: {
              targetCell: 'B2',
              expectedFormulaKeywords: ['DÜŞEYARA', 'VLOOKUP'],
              expectedValue: 'İstanbul',
              successMessage: 'Tebrikler! DÜŞEYARA M-101 kodunu buldu ve İstanbul şehrini doğru şekilde çekti.',
            },
          },
        ],
        quiz: {
          id: 'q-f6-l1',
          title: 'DÜŞEYARA Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'DÜŞEYARA formülünde aranan değer, arama tablosunun neresinde bulunmak zorundadır?',
              options: [
                { id: 'opt1', text: 'Her zaman en sağ sütununda' },
                { id: 'opt2', text: 'Her zaman en sol (ilk) sütununda' },
                { id: 'opt3', text: 'Ortadaki herhangi bir sütunda' },
                { id: 'opt4', text: 'Fark etmez' },
              ],
              correctOptionId: 'opt2',
              explanation: 'DÜŞEYARA’nın en büyük mimari kısıtı budur; aranan değer arama tablosunun mutlaka 1. sütununda yer almalıdır.',
            },
            {
              id: 'q2',
              question: 'DÜŞEYARA’nın son parametresi olan aralık_bak kısmına neden 0 veya YANLIŞ yazılır?',
              options: [
                { id: 'opt1', text: 'Formülü hızlandırmak için' },
                { id: 'opt2', text: 'Tam eşleşme aramak ve yanlış benzer sonuçları önlemek için' },
                { id: 'opt3', text: 'Tabloyu sıralamak için' },
                { id: 'opt4', text: 'Hata vermesini engellemek için' },
              ],
              correctOptionId: 'opt2',
              explanation: '0 veya YANLIŞ birebir tam eşleşme arar. Yazılmazsa Excel varsayılan olarak en yakın değeri getirir ve yanlış sonuç doğurabilir.',
            },
          ],
        },
      },
      {
        id: 'f6-l2',
        phaseId: 6,
        unitId: 'u6-2',
        title: 'Yeni Nesil ÇAPRAZARA (XLOOKUP): Sola Arama ve Entegre Hata Önleme',
        shortDesc: 'Sütun sayısı saymaya son; sola arama, doğrudan sütun seçimi ve bulunamadı mesajı.',
        level: 'İleri',
        durationMinutes: 16,
        functionsUsed: ['ÇAPRAZARA', 'XLOOKUP'],
        initialWorkbook: createTableSheet(
          's1',
          'Personel Arama',
          ['Sorgulanan Sicil', 'Personel Adı', '', 'Personel Adı (Sol)', 'Sicil Kodu (Sağ)', 'Departman'],
          [
            ['SIC-205', '', '', 'Canan Yılmaz', 'SIC-204', 'Finans'],
            ['', '', '', 'Barış Kaya', 'SIC-205', 'Lojistik'],
            ['', '', '', 'Ayşe Demir', 'SIC-206', 'Satış'],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'ÇAPRAZARA’nın Sola Arama Üstünlüğü', description: 'Aranan sütunun sağında veya solunda olmasından bağımsız olarak iki ayrı aralık seçerek arama yapma.' },
          { id: 'o2', title: 'Sütun İndisi Sayma Zahmetini Bitirme', description: 'Tabloya yeni sütun eklendiğinde bozulmayan dayanıklı formül kurgusu oluşturma.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'ÇAPRAZARA (XLOOKUP) Devrimi',
            explanation: '=ÇAPRAZARA(aranan_değer; arama_aralığı; döndürülen_aralık). DÜŞEYARA sola bakamazken ÇAPRAZARA E2:E4 sütunundaki sicili arayıp solundaki D2:D4 sütunundaki personel adını zahmetsizce çeker.',
            speechText: 'Modern Excel’in en güçlü fonksiyonu ÇAPRAZARA’dır. Artık sütun indisi saymak yok, aranan sütunun en solda olma mecburiyeti yok. Sadece neyi nerede aradığınızı ve neyi istediğinizi söylersiniz.',
            targetCell: 'B2',
            suggestedFormula: '=ÇAPRAZARA(A2; E2:E4; D2:D4)',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'B2 hücresine tıklayın ve SIC-205 sicilini E2:E4 aralığında arayıp solundaki D2:D4 aralığından personel adını çeken =ÇAPRAZARA(A2; E2:E4; D2:D4) formülünü yazın.',
            targetCell: 'B2',
            hints: [
              'Aranan değer: A2',
              'Aranan sütun: E2:E4',
              'Döndürülecek sütun: D2:D4',
              '=ÇAPRAZARA(A2; E2:E4; D2:D4) yazıp onaylayın.',
            ],
            validation: {
              targetCell: 'B2',
              expectedFormulaKeywords: ['ÇAPRAZARA', 'XLOOKUP'],
              expectedValue: 'Barış Kaya',
              successMessage: 'Harika! ÇAPRAZARA sola doğru arama yaparak Barış Kaya sonucunu kusursuz şekilde getirdi.',
            },
          },
        ],
        quiz: {
          id: 'q-f6-l2',
          title: 'ÇAPRAZARA Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'ÇAPRAZARA (XLOOKUP) fonksiyonunun DÜŞEYARA’ya göre başlıca avantajları nelerdir?',
              options: [
                { id: 'opt1', text: 'Varsayılan olarak tam eşleşme yapması' },
                { id: 'opt2', text: 'Sola doğru arama yapabilmesi' },
                { id: 'opt3', text: 'Sütun sayısı sayma zorunluluğunun olmaması' },
                { id: 'opt4', text: 'Yukarıdakilerin hepsi' },
              ],
              correctOptionId: 'opt4',
              explanation: 'ÇAPRAZARA tüm bu kronik sorunları çözen modern ve esnek bir arama fonksiyonudur.',
            },
            {
              id: 'q2',
              question: 'ÇAPRAZARA’da aranan değer tabloda bulunamazsa #YOK hatası yerine özel mesaj verdirmek için hangi parametre kullanılır?',
              options: [
                { id: 'opt1', text: '4. parametre olan [eğer_bulunamıyorsa]' },
                { id: 'opt2', text: 'Formülün başına EĞER yazılır' },
                { id: 'opt3', text: 'Sonuna $ eklenir' },
                { id: 'opt4', text: 'ÇAPRAZARA hata önleyemez' },
              ],
              correctOptionId: 'opt1',
              explanation: 'ÇAPRAZARA’nın 4. parametresine "Kayıt Yok" gibi bir değer yazarak EĞERHATA kullanmadan doğrudan hata yönetimi yapılabilir.',
            },
          ],
        },
      },
      {
        id: 'f6-l3',
        phaseId: 6,
        unitId: 'u6-3',
        title: 'Esnek Matris Araması: İNDİS (INDEX) ve KAÇINCI (MATCH)',
        shortDesc: 'İki boyutlu arama, dinamik koordinat eşleştirme ve kurumsal formül dayanıklılığı.',
        level: 'İleri',
        durationMinutes: 16,
        functionsUsed: ['İNDİS', 'INDEX', 'KAÇINCI', 'MATCH'],
        initialWorkbook: createTableSheet(
          's1',
          'Fiyat Matrisi',
          ['Ürün Kodu', 'Ürün Adı', 'Fiyat', '', 'Sorgulanan Kod', 'Fiyat Sonucu'],
          [
            ['URN-10', 'Laptop Çantası', 650, '', 'URN-20', 0],
            ['URN-20', 'HDMI Kablo', 120, '', '', ''],
            ['URN-30', 'Kablosuz Kulaklık', 890, '', '', ''],
          ]
        ),
        objectives: [
          { id: 'o1', title: 'İNDİS ve KAÇINCI İş Birliğini Anlama', description: 'KAÇINCI ile satır numarasını bulma, İNDİS ile o satırdaki değeri çekme mantığını çözme.' },
          { id: 'o2', title: 'Eski Excel Sürümleriyle %100 Uyumluluk', description: 'ÇAPRAZARA’nın bulunmadığı ortamlarda iki yönlü profesyonel arama yapabilme.' },
        ],
        teachingSteps: [
          {
            id: 'st-1',
            title: 'İNDİS ve KAÇINCI Nasıl Birlikte Çalışır?',
            explanation: 'KAÇINCI(E2; A2:A4; 0) ifadesi "URN-20" kodunun A2:A4 içinde kaçıncı sırada olduğunu bulur (2. sırada). İNDİS(C2:C4; 2) ise C2:C4 fiyat listesindeki 2. elemanı (120) çeker.',
            speechText: 'İNDİS ve KAÇINCI Excel’in efsanevi ikilisidir. Biri aradığınız şeyin konumunu bulur, diğeri gidip o konumdaki veriyi getirir.',
            targetCell: 'F2',
            suggestedFormula: '=İNDİS(C2:C4; KAÇINCI(E2; A2:A4; 0))',
          },
        ],
        tasks: [
          {
            id: 't-1',
            stepNumber: 1,
            instruction: 'F2 hücresine tıklayın ve E2’deki kodun fiyatını C2:C4 aralığından çeken =İNDİS(C2:C4; KAÇINCI(E2; A2:A4; 0)) formülünü yazıp Enter tuşuna basın.',
            targetCell: 'F2',
            hints: [
              'İNDİS aralığı fiyatların olduğu C2:C4 aralığıdır.',
              'KAÇINCI fonksiyonu aranan kod (E2) ve kod sütununu (A2:A4; 0) alır.',
              '=İNDİS(C2:C4; KAÇINCI(E2; A2:A4; 0)) formülünü yazıp onaylayın.',
            ],
            validation: {
              targetCell: 'F2',
              expectedFormulaKeywords: ['İNDİS', 'INDEX', 'KAÇINCI', 'MATCH'],
              expectedValue: 120,
              successMessage: 'Tebrikler! İNDİS ve KAÇINCI başarıyla eşleşti ve 120 TL sonucunu üretti.',
            },
          },
        ],
        quiz: {
          id: 'q-f6-l3',
          title: 'İNDİS & KAÇINCI Mini Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1',
              question: 'KAÇINCI (MATCH) fonksiyonunun temel görevi nedir?',
              options: [
                { id: 'opt1', text: 'İki sayıyı toplamak' },
                { id: 'opt2', text: 'Aranan değerin belirtilen aralıktaki sıra numarasını (indisini) döndürmek' },
                { id: 'opt3', text: 'Hücreyi renklendirmek' },
                { id: 'opt4', text: 'Metinleri birleştirmek' },
              ],
              correctOptionId: 'opt2',
              explanation: 'KAÇINCI aranan elemanın listede kaçıncı sırada (1., 2., 5. vb.) olduğunu sayısal olarak bildirir.',
            },
            {
              id: 'q2',
              question: '=İNDİS(A1:A5; 3) formülü hangi hücrenin değerini verir?',
              options: [
                { id: 'opt1', text: 'A1' },
                { id: 'opt2', text: 'A3' },
                { id: 'opt3', text: 'A5' },
                { id: 'opt4', text: '3' },
              ],
              correctOptionId: 'opt2',
              explanation: 'A1:A5 aralığının 3. sırasındaki hücre A3 hücresidir.',
            },
          ],
        },
      },
    ],
  },
];
