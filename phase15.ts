import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase15: CurriculumPhase = {
  id: 15,
  title: 'Faz 15: Power Query & Veri Hazırlama (ETL)',
  subtitle: 'Veri Temizleme, Sütun Ayrıştırma, Unpivot ve Tek Tıkla Yenileme',
  iconName: 'Database',
  description: 'Excel in modern ETL (Extract, Transform, Load) motoru: CSV ve klasörlerden veri alma, bozuk satırları temizleme, sütun bölme, unpivot ve tekrarlanabilir adımlar.',
  lessons: [
    {
      id: 'f15-l1',
      phaseId: 15,
      unitId: 'u15-1',
      title: 'Veri Dönüştürme ve Sütun Ayrıştırma Mantığı',
      shortDesc: 'Ham işlem kodlarını şehir, yıl ve işlem numarası sütunlarına ayırma.',
      level: 'İleri',
      durationMinutes: 15,
      functionsUsed: ['PARÇAAL / MID', 'Power Query Dönüşümü'],
      initialWorkbook: createTableSheet(
        's1',
        'Ham Banka Kayıtları',
        ['İşlem Ham Kodu', 'Tutar', 'Şehir Kodu', 'Durum'],
        [
          ['TX-2026-IST-9810', 45000, '', 'Başarılı'],
          ['TX-2026-ANK-4412', 18000, '', 'Başarılı'],
          ['TX-2026-IZM-3310', 27500, '', 'Başarılı'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'ETL Kavramını Anlama', description: 'Veriyi kaynağından alıp temizleyerek analiz edilebilir yapıya kavuşturma.' },
        { id: 'o2', title: 'Sütun Ayrıştırma', description: 'Metin içindeki belirli bir bölümü (IST, ANK, IZM) çekip yeni sütun oluşturma.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Power Query de Sütun Bölme',
          explanation: 'Ham kod TX-2026-IST-9810 dur. 9. karakterden itibaren 3 karakter "IST" dir. Excel formül motorunda bu işlem =PARÇAAL(A2; 9; 3) ile yapılırken Power Query de "Sütunu Böl -> Sınırlayıcıya Göre" adımıyla otomatik uygulanır.',
          speechText: 'Veri analistleri zamanlarının %80 ini veri temizlemeye harcar. Power Query bu adımları bir kez kaydeder ve sonraki her ay tek tıkla tekrarlar. Şimdi C2 hücresine şehir kodunu çekelim.',
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
          hints: [
            'C2 hücresine tıklayın.',
            'A2 işlem kodunun 9. karakterinden itibaren 3 harfli şehir kodunu ayıklayın.',
            '=PARÇAAL(A2; 9; 3)',
          ],
          validation: {
            targetCell: 'C2',
            expectedValue: 'IST',
            expectedFormulaKeywords: ['PARÇAAL', 'MID', 'A2'],
            errorMessage: 'C2 hücresinde =PARÇAAL(A2; 9; 3) olmalı ve "IST" bulunmalıdır.',
            successMessage: 'Tebrikler! Şehir kodu IST başarıyla ayıklandı.',
          },
        },
      ],
      quiz: {
        id: 'q15-1',
        title: 'Power Query ve ETL Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q15-1-1',
            question: 'Power Query nin arka planda kaydettiği dönüşüm adımlarının dili nedir?',
            options: [
              { id: 'a', text: 'M Dili (Power Query Formula Language)' },
              { id: 'b', text: 'SQL' },
              { id: 'c', text: 'Python' },
              { id: 'd', text: 'VBA' },
            ],
            correctOptionId: 'a',
            explanation: 'Power Query arayüzünde yaptığınız tüm temizleme adımları arka planda M Dili (Mashup Language) olarak kodlanır.',
          },
          {
            id: 'q15-1-2',
            question: 'Power Query de her ay yeni veri geldiğinde yapılan tüm temizlik adımlarını tekrar çalıştırmak için ne yapılır?',
            options: [
              { id: 'a', text: 'Tek bir tuşla "Yenile" (Refresh) butonuna basılır' },
              { id: 'b', text: 'Bütün adımlar baştan elle yapılır' },
              { id: 'c', text: 'Excel yeniden kurulur' },
              { id: 'd', text: 'Tüm sütunlar silinir' },
            ],
            correctOptionId: 'a',
            explanation: 'Power Query nin en büyük devrimi adımları kaydetmesidir; kaynak dosya güncellendiğinde "Yenile" demek tüm temizliği saniyede tekrarlar.',
          },
        ],
      },
    },
    {
      id: 'f15-l2',
      phaseId: 15,
      unitId: 'u15-2',
      title: 'Tabloları Birleştirme (Merge) ve Alt Alta Ekleme (Append)',
      shortDesc: 'Farklı şube tablolarını tek bir konsolide raporda birleştirme mantığı.',
      level: 'İleri',
      durationMinutes: 15,
      functionsUsed: ['TOPLA / SUM', 'Konsolidasyon'],
      initialWorkbook: createTableSheet(
        's1',
        'Konsolide Rapor',
        ['Şube', 'Ocak Cirosu', 'Şubat Cirosu', 'Toplam Çeyrek'],
        [
          ['Kadıköy Şubesi', 240000, 260000, 500000],
          ['Beşiktaş Şubesi', 180000, 195000, 375000],
          ['Çankaya Şubesi', 310000, 340000, 650000],
          ['Konak Şubesi', 150000, 165000, 315000],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Append (Alt Alta Ekleme)', description: 'Farklı aylara veya şubelere ait aynı yapıdaki tabloları tek bir ana tabloda birleştirme mantığı.' },
        { id: 'o2', title: 'Merge (Yana Doğru Birleştirme)', description: 'İki tabloyu ortak bir anahtar alanla (SQL JOIN gibi) yan yana bağlama.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Konsolide Tablo Mantığı',
          explanation: 'Power Query de Append işlemi farklı şubelerden gelen Excel tablolarını alt alta ekler. Şimdi D6 hücresine tüm şubelerin konsolide toplam cirosunu toplayalım.',
          speechText: 'Farklı departman veya şubelerden gelen dosyaları birleştirmek eskiden saatler alırdı. Power Query ile tek tıkla konsolide edilir. Şimdi D6 hücresine genel toplamı yazalım.',
          targetCell: 'D6',
          suggestedFormula: '=TOPLA(D2:D5)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'D6 hücresine tıklayın ve tüm şubelerin konsolide toplam cirosunu hesaplamak için "=TOPLA(D2:D5)" formülünü girin.',
          targetCell: 'D6',
          hints: [
            'D6 hücresini seçin.',
            'D2 den D5 e kadar olan çeyrek toplamlarını toplayın: =TOPLA(D2:D5)',
            '=TOPLA(D2:D5)',
          ],
          validation: {
            targetCell: 'D6',
            expectedValue: 1840000,
            expectedFormulaKeywords: ['TOPLA', 'SUM', 'D2:D5'],
            errorMessage: 'D6 hücresinde =TOPLA(D2:D5) olmalı ve 1.840.000 TL bulunmalıdır.',
            successMessage: 'Tebrikler! Konsolide şube toplamı 1.840.000 TL olarak hesaplandı.',
          },
        },
      ],
      quiz: {
        id: 'q15-2',
        title: 'Veri Birleştirme Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q15-2-1',
            question: '12 ayrı ayın Excel tablolarını tek bir uzun veri setinde alt alta birleştirmek için Power Query de hangi komut kullanılır?',
            options: [
              { id: 'a', text: 'Sorguları Ekle (Append Queries)' },
              { id: 'b', text: 'Sorguları Birleştir (Merge Queries)' },
              { id: 'c', text: 'Sütunu Böl' },
              { id: 'd', text: 'Transpoze' },
            ],
            correctOptionId: 'a',
            explanation: 'Append (Sorguları Ekle) aynı sütun başlıklarına sahip tabloları alt alta ekleyerek tek bir büyük tablo yapar.',
          },
          {
            id: 'q15-2-2',
            question: 'Müşteri tablosundaki adres bilgisini Satış tablosundaki MüşteriID ye göre yanına getirmek için hangi komut kullanılır?',
            options: [
              { id: 'a', text: 'Sorguları Birleştir (Merge Queries)' },
              { id: 'b', text: 'Sorguları Ekle (Append Queries)' },
              { id: 'c', text: 'Yinelenenleri Kaldır' },
              { id: 'd', text: 'Sütunları Grupla' },
            ],
            correctOptionId: 'a',
            explanation: 'Merge (Sorguları Birleştir), iki tablo arasında ortak bir anahtar sütun üzerinden VLOOKUP veya SQL JOIN benzeri birleştirme yapar.',
          },
        ],
      },
    },
  ],
};
