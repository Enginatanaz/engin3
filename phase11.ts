import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase11: CurriculumPhase = {
  id: 11,
  title: 'Faz 11: Excel Tabloları & Veri Yönetimi',
  subtitle: 'Resmi Tablo (Ctrl+T), Yapılandırılmış Başvurular ve Veri Doğrulama',
  iconName: 'Table',
  description: 'Aralıkları resmi Excel Tablosuna (ListObject) dönüştürme, yapılandırılmış sütun başvuruları [@Tutar], veri doğrulama (açılır listeler) ve giriş kısıtlamaları.',
  lessons: [
    {
      id: 'f11-l1',
      phaseId: 11,
      unitId: 'u11-1',
      title: 'Yapılandırılmış Excel Tabloları (Ctrl+T) ve Dinamik Aralıklar',
      shortDesc: 'Formüllerin otomatik çoğalması, yeni satırların kendiliğinden dahil olması ve sütun isimleriyle formül yazma.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['TOPLA / SUM', 'Yapılandırılmış Başvurular'],
      initialWorkbook: createTableSheet(
        's1',
        'Satış Tablosu',
        ['Ürün', 'Birim Fiyat', 'Adet', 'Toplam Tutar'],
        [
          ['Akıllı Saat', 3200, 15, 48000],
          ['Bluetooth Hoparlör', 1450, 40, 58000],
          ['Güç Bankası (Powerbank)', 650, 80, 52000],
          ['Kablosuz Şarj Standı', 850, 50, 42000],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Resmi Tablo Avantajları', description: 'Ctrl+T kısayolu ile aralığı resmi tabloya dönüştürmenin filtre ve formül kopyalama faydalarını anlama.' },
        { id: 'o2', title: 'Dinamik Genişleme', description: 'Tablonun altına yeni satır eklendiğinde formül ve biçimlerin otomatik genişlemesini sağlama.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Resmi Excel Tablosu Mantığı',
          explanation: 'Düz hücre aralıkları yerine Ctrl+T ile oluşturulan Tablolar; sütun isimleriyle formül yazmaya izin verir: =[@Birim Fiyat] * [@Adet]. Yeni satır girdiğinizde formülü elle aşağı çekmeniz gerekmez.',
          speechText: 'Profesyonel modellemenin altın kuralı her zaman resmi Excel Tablosu kullanmaktır. Şimdi D6 hücresine toplam satış cirosunu hesaplayalım.',
          targetCell: 'D6',
          suggestedFormula: '=TOPLA(D2:D5)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'D6 hücresine tıklayın ve toplam tutarları hesaplamak için "=TOPLA(D2:D5)" formülünü girin.',
          targetCell: 'D6',
          hints: [
            'D6 hücresini seçin.',
            'D2 den D5 e kadar olan toplam tutarları toplayan formülü yazın: =TOPLA(D2:D5)',
            '=TOPLA(D2:D5)',
          ],
          validation: {
            targetCell: 'D6',
            expectedValue: 200000,
            expectedFormulaKeywords: ['TOPLA', 'SUM', 'D2:D5'],
            errorMessage: 'D6 hücresinde =TOPLA(D2:D5) olmalı ve 200.000 TL bulunmalıdır.',
            successMessage: 'Tebrikler! Tablo toplam cirosu 200.000 TL olarak doğrulandı.',
          },
        },
      ],
      quiz: {
        id: 'q11-1',
        title: 'Excel Tabloları Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q11-1-1',
            question: 'Bir hücre aralığını resmi Excel Tablosuna (ListObject) dönüştürmenin standart klavye kısayolu nedir?',
            options: [
              { id: 'a', text: 'Ctrl + T (veya Ctrl + L)' },
              { id: 'b', text: 'Ctrl + Shift + F' },
              { id: 'c', text: 'Alt + F4' },
              { id: 'd', text: 'Ctrl + P' },
            ],
            correctOptionId: 'a',
            explanation: 'Ctrl + T (Table) veya Ctrl + L (List), seçili aralığı otomatik olarak filtreleme düğmeleri ve stilleri olan resmi bir tabloya dönüştürür.',
          },
          {
            id: 'q11-1-2',
            question: 'Resmi bir Excel tablosunda =[@Maaş]*0.2 yazıldığında "@" işareti neyi temsil eder?',
            options: [
              { id: 'a', text: 'Tüm sütunu' },
              { id: 'b', text: 'Formülün yazıldığı aynı satırdaki değeri (Geçerli Satır)' },
              { id: 'c', text: 'En son satırı' },
              { id: 'd', text: 'E-posta adresini' },
            ],
            correctOptionId: 'b',
            explanation: 'Yapılandırılmış tablolarda @ simgesi formülün bulunduğu geçerli satırdaki ilgili sütun değerini temsil eder.',
          },
        ],
      },
    },
    {
      id: 'f11-l2',
      phaseId: 11,
      unitId: 'u11-2',
      title: 'Veri Doğrulama (Data Validation) ile Açılır Liste Kurma',
      shortDesc: 'Hücrelere hatalı veri girişini önlemek için açılır liste (dropdown) ve sayı aralığı kısıtları tanımlama.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['Veri Doğrulama / Data Validation'],
      initialWorkbook: createTableSheet(
        's1',
        'Personel İzin Kayıtları',
        ['Personel Adı', 'Departman', 'İzin Türü', 'Gün Sayısı', 'Onay Durumu'],
        [
          ['Kadir Can', 'Yazılım', 'Yıllık İzin', 5, 'Onaylandı'],
          ['Selin Kaya', 'Pazarlama', 'Mazeret', 2, 'Onaylandı'],
          ['Tuna Demir', 'Finans', 'Yıllık İzin', 10, 'Onaylandı'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Açılır Liste Standartları', description: 'Kullanıcının yanlış departman veya izin türü yazmasını engelleyen açılır listeleri (Liste doğrulaması) tasarlama.' },
        { id: 'o2', title: 'Hata Uyarıları', description: 'Geçersiz veri girildiğinde durdurucu hata mesajları yapılandırma.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Veri Doğrulama Neden Gereklidir?',
          explanation: 'Kullanıcılar "Yazılım" yerine "yazilim" veya "IT" yazarsa DÜŞEYARA ve ÇOKETOPLA formülleri çöker. Veri Doğrulama (Data Validation) menüsüyle hücreye yalnızca izin verilen seçeneklerin girilmesini zorunlu kılarız.',
          speechText: 'Veri kalitesini sağlamanın tek yolu hatalı girişi baştan engellemektir. Veri Doğrulama açılır listesiyle standart girişler sağlarız. Şimdi yeni personel kaydını tablonun 5. satırına ekleyelim.',
          targetCell: 'A5',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'A5 hücresine tıklayın ve yeni izin talep eden personel olarak "Meltem Akın" yazıp Enter a basın.',
          targetCell: 'A5',
          hints: [
            'A sütununun 5. satırını seçin.',
            'Meltem Akın yazın.',
            'Meltem Akın',
          ],
          validation: {
            targetCell: 'A5',
            expectedValue: 'Meltem Akın',
            errorMessage: 'A5 hücresine "Meltem Akın" yazmalısınız.',
            successMessage: 'Harika! Personel adı başarıyla eklendi.',
          },
        },
        {
          id: 't-2',
          stepNumber: 2,
          instruction: 'C5 hücresine izin türü olarak geçerli listedeki "Yıllık İzin" değerini yazıp onaylayın.',
          targetCell: 'C5',
          hints: [
            'C5 hücresini seçin.',
            'Yıllık İzin yazıp Enter a basın.',
            'Yıllık İzin',
          ],
          validation: {
            targetCell: 'C5',
            expectedValue: 'Yıllık İzin',
            errorMessage: 'C5 hücresine "Yıllık İzin" yazmalısınız.',
            successMessage: 'Tebrikler! Doğrulanmış izin türü kaydedildi.',
          },
        },
      ],
      quiz: {
        id: 'q11-2',
        title: 'Veri Doğrulama Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q11-2-1',
            question: 'Veri Doğrulama menüsünde açılır liste oluştururken liste elemanları kaynak kutusuna doğrudan yazılırsa aralarına hangi ayraç konur?',
            options: [
              { id: 'a', text: 'Noktalı virgül (;)' },
              { id: 'b', text: 'Tire (-)' },
              { id: 'c', text: 'Boşluk' },
              { id: 'd', text: 'Slash (/)' },
            ],
            correctOptionId: 'a',
            explanation: 'Türkçe Excel ayarlarında liste elemanları doğrudan girilirken noktalı virgül ile ayrılır: Örneğin: Onaylandı;Beklemede;Reddedildi.',
          },
          {
            id: 'q11-2-2',
            question: 'Bir hücreye 1 ile 100 arasında tam sayı girilmesini zorunlu kılmak için Veri Doğrulama da hangi izin türü seçilir?',
            options: [
              { id: 'a', text: 'Tüm Sayı (Whole Number)' },
              { id: 'b', text: 'Metin Uzunluğu' },
              { id: 'c', text: 'Ondalık' },
              { id: 'd', text: 'Özel Formül' },
            ],
            correctOptionId: 'a',
            explanation: 'Tüm Sayı (Whole Number) seçeneği seçilip en az 1, en çok 100 belirlendiğinde hücreye ondalıklı sayı veya metin girilmesi engellenir.',
          },
        ],
      },
    },
  ],
};
