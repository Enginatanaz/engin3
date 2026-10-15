import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase1: CurriculumPhase = {
  id: 1,
  title: 'Faz 1: Excel Çalışma Ortamı & Verimli Kullanım',
  subtitle: 'Çalışma Sayfaları, Izgara Navigasyonu, Veri Tipleri ve Otomatik Doldurma',
  iconName: 'LayoutGrid',
  description: 'Excel arayüzü, Ribbon menüleri, formül çubuğu, hücre adlandırma, sütun-satır mimarisi, veri tipleri, kopyalama ve otomatik seriler.',
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
          speechText: 'Excel dünyasına hoş geldiniz. Çalışma alanımızdaki her kutucuk bir hücredir. Ekranın üst kısmında formül çubuğunu ve solundaki isim kutusunu görüyorsunuz. Şimdi D2 hücresine tıklayın.',
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
            'URN-106',
          ],
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
          hints: [
            'D sütununda 7. satırdaki hedef hücreyi (D7) seçin.',
            'Yeni ürünün birim fiyatı olarak 850 sayısal değerini girin.',
            '850',
          ],
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
    {
      id: 'f1-l2',
      phaseId: 1,
      unitId: 'u1-2',
      title: 'Otomatik Doldurma (AutoFill) ve Akıllı Seriler',
      shortDesc: 'Ardışık sıra numaraları, tarihler, ay serileri ve hızlı doldurma mantığı.',
      level: 'Başlangıç',
      durationMinutes: 12,
      functionsUsed: [],
      initialWorkbook: createTableSheet(
        's1',
        'Satış Temsilcileri',
        ['Sıra No', 'Temsilci Adı', 'Bölge', 'Başlangıç Ayı', 'Hedef Satış'],
        [
          [1, 'Ahmet Yılmaz', 'Marmara', 'Ocak', 120000],
          [2, 'Elif Kaya', 'Ege', 'Şubat', 135000],
          [3, 'Mehmet Demir', 'İç Anadolu', 'Mart', 110000],
          [4, 'Selin Aydın', 'Akdeniz', 'Nisan', 95000],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Seri Mantığını Kavrama', description: 'Excel in 1, 2, 3 gibi sayısal veya Ocak, Şubat gibi takvim serilerini otomatik tamamlama kabiliyeti.' },
        { id: 'o2', title: 'Veri Bütünlüğünü Koruma', description: 'Seri genişletirken biçimlendirmeyi ve formül yapısını bozmadan işlem yapma.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Doldurma Tutamacı ve Seriler',
          explanation: 'Excel sağ alt köşedeki doldurma tutamacıyla (Fill Handle) örüntüleri tanır. 1 ve 2 yi seçip sürüklediğinizde 3, 4, 5 şeklinde devam eder. Ocak yazdığınızda ise otomatik olarak Şubat, Mart, Nisan serisini üretir.',
          speechText: 'Excel akıllı doldurma özelliğiyle saatler sürecek veri girişlerini saniyeler içinde tamamlar. Tablomuzda 4 temsilci kayıtlı. Şimdi 5. satıra yeni temsilci kaydını ekleyelim.',
          targetCell: 'A6',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'A6 hücresine tıklayın ve seriyi devam ettirerek Sıra No olarak 5 yazıp onaylayın.',
          targetCell: 'A6',
          hints: [
            'A sütunundaki 6. satırı seçin.',
            'Önceki sayılar 1, 2, 3, 4 olduğu için ardışık sayı 5 tir.',
            '5',
          ],
          validation: {
            targetCell: 'A6',
            expectedValue: 5,
            errorMessage: 'A6 hücresine 5 yazmalısınız.',
            successMessage: 'Tebrikler! Sıra numarası başarıyla eklendi.',
          },
        },
        {
          id: 't-2',
          stepNumber: 2,
          instruction: 'D6 hücresine tıklayın ve Nisan dan sonraki ay olan "Mayıs" yazıp Enter a basın.',
          targetCell: 'D6',
          hints: [
            'D sütunundaki 6. satırı seçin.',
            'Ocak, Şubat, Mart, Nisan dan sonra gelen ayı yazın.',
            'Mayıs',
          ],
          validation: {
            targetCell: 'D6',
            expectedValue: 'Mayıs',
            errorMessage: 'D6 hücresine "Mayıs" yazmalısınız.',
            successMessage: 'Harika! Takvim serisi doğru tamamlandı.',
          },
        },
      ],
      quiz: {
        id: 'q1-2',
        title: 'Otomatik Doldurma Değerlendirmesi',
        passingScore: 80,
        questions: [
          {
            id: 'q1-2-1',
            question: 'Bir hücrede "Pazartesi" yazarken doldurma tutamacından aşağı çekilirse bir sonraki hücrede ne yazar?',
            options: [
              { id: 'a', text: 'Pazartesi 1' },
              { id: 'b', text: 'Salı' },
              { id: 'c', text: 'Pazar' },
              { id: 'd', text: '#DEĞER!' },
            ],
            correctOptionId: 'b',
            explanation: 'Excel Türkçe gün listesini yerleşik olarak tanır ve Pazartesi den sonra Salı getirir.',
          },
          {
            id: 'q1-2-2',
            question: 'Sadece 10 sayısını içeren bir hücreyi Ctrl tuşuna basılı tutmadan doğrudan sürüklediğinizde varsayılan davranış nedir?',
            options: [
              { id: 'a', text: 'Hücreyi kopyalar (10, 10, 10...)' },
              { id: 'b', text: '11, 12, 13 olarak artırır' },
              { id: 'c', text: 'Hücreyi siler' },
              { id: 'd', text: 'Formüle dönüştürür' },
            ],
            correctOptionId: 'a',
            explanation: 'Tek bir sayı seçilip sürüklendiğinde varsayılan olarak kopyalama yapılır; seri artışı için en az iki ardışık hücre seçilmeli veya Ctrl kullanılmalıdır.',
          },
        ],
      },
    },
  ],
};
