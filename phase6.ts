import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase6: CurriculumPhase = {
  id: 6,
  title: 'Faz 6: Koşullu Hesaplama & Kriterler',
  subtitle: 'ETOPLA, ÇOKETOPLA, EĞERSAY ve ÇOKEĞERSAY ile Raporlama',
  iconName: 'Filter',
  description: 'Tek ve çok kriterli toplamalar, koşullu sayımlar, metin ve sayısal filtreler, büyüktür/küçüktür kriterleri ve joker karakterler (*).',
  lessons: [
    {
      id: 'f6-l1',
      phaseId: 6,
      unitId: 'u6-1',
      title: 'EĞERSAY ve ÇOKEĞERSAY ile Operasyonel Sayımlar',
      shortDesc: 'Belirli bir kritere uyan satırların sayısını otomatik bulma.',
      level: 'Başlangıç',
      durationMinutes: 12,
      functionsUsed: ['EĞERSAY / COUNTIF', 'ÇOKEĞERSAY / COUNTIFS'],
      initialWorkbook: createTableSheet(
        's1',
        'Destek Talepleri',
        ['Talep No', 'Müşteri', 'Öncelik', 'Kanal', 'Durum'],
        [
          ['TK-101', 'Arçelik', 'Yüksek', 'E-posta', 'Açık'],
          ['TK-102', 'Beko', 'Orta', 'Telefon', 'Tamamlandı'],
          ['TK-103', 'Vestel', 'Yüksek', 'E-posta', 'Tamamlandı'],
          ['TK-104', 'Siemens', 'Düşük', 'Web', 'Tamamlandı'],
          ['TK-105', 'Bosch', 'Yüksek', 'Telefon', 'Açık'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Koşullu Sayım Mantığı', description: 'Tabloda kaç adet "Tamamlandı" veya kaç adet "Yüksek" öncelikli kayıt olduğunu otomatik saydırma.' },
        { id: 'o2', title: 'Metin Kriteri Yazımı', description: 'Kriter argümanını tırnak içinde ("Tamamlandı") yazma disiplinini pekiştirme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'EĞERSAY Fonksiyonu',
          explanation: 'EĞERSAY iki parametre alır: 1) Bakılacak aralık (E2:E6), 2) Aranan ölçüt ("Tamamlandı"). Formül: =EĞERSAY(E2:E6; "Tamamlandı")',
          speechText: 'Operasyon yönetiminde kaç görevin bittiğini veya kaç yüksek öncelikli talep olduğunu EĞERSAY ile tek hamlede sayarız. Şimdi E8 hücresine tamamlanan talep sayısını hesaplayalım.',
          targetCell: 'E8',
          suggestedFormula: '=EĞERSAY(E2:E6; "Tamamlandı")',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'E8 hücresine tıklayın ve durumu "Tamamlandı" olan talepleri saymak için formülü yazın: =EĞERSAY(E2:E6; "Tamamlandı")',
          targetCell: 'E8',
          hints: [
            'E8 hücresini seçin.',
            'Aralık olarak E2:E6, kriter olarak "Tamamlandı" verin: =EĞERSAY(E2:E6; "Tamamlandı")',
            '=EĞERSAY(E2:E6; "Tamamlandı")',
          ],
          validation: {
            targetCell: 'E8',
            expectedValue: 3,
            expectedFormulaKeywords: ['EĞERSAY', 'COUNTIF', 'Tamamlandı'],
            errorMessage: 'E8 hücresinde =EĞERSAY(E2:E6; "Tamamlandı") formülü ile 3 bulunmalıdır.',
            successMessage: 'Tebrikler! 3 adet tamamlanmış talep başarıyla sayıldı.',
          },
        },
      ],
      quiz: {
        id: 'q6-1',
        title: 'Koşullu Sayım Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q6-1-1',
            question: 'A1:A50 aralığında 10.000 den büyük kaç sayı olduğunu saymak için kriter nasıl yazılır?',
            options: [
              { id: 'a', text: '>10000' },
              { id: 'b', text: '">10000"' },
              { id: 'c', text: '>=10000;' },
              { id: 'd', text: '10000+' },
            ],
            correctOptionId: 'b',
            explanation: 'Excel de EĞERSAY ve ETOPLA fonksiyonlarında karşılaştırma operatörleri çift tırnak içinde metin olarak yazılır: ">10000".',
          },
          {
            id: 'q6-1-2',
            question: 'Hem Bölgesi "Marmara" olan HEM DE Durumu "Açık" olan satırları saymak için hangi fonksiyon kullanılır?',
            options: [
              { id: 'a', text: '=EĞERSAY()' },
              { id: 'b', text: '=ÇOKEĞERSAY() [COUNTIFS]' },
              { id: 'c', text: '=BAĞ_DEĞ_SAY()' },
              { id: 'd', text: '=TOPLA()' },
            ],
            correctOptionId: 'b',
            explanation: 'Birden çok aralıkta birden çok şartı aynı anda denetleyip saymak için ÇOKEĞERSAY (COUNTIFS) kullanılır.',
          },
        ],
      },
    },
    {
      id: 'f6-l2',
      phaseId: 6,
      unitId: 'u6-2',
      title: 'ÇOKETOPLA ile Çok Kriterli Ciro Analizi',
      shortDesc: 'Aynı anda hem bölge hem kategori koşulunu sağlayan satışları toplama.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['ETOPLA / SUMIF', 'ÇOKETOPLA / SUMIFS'],
      initialWorkbook: createTableSheet(
        's1',
        'Satış İşlemleri',
        ['Bölge', 'Kategori', 'Tutar', 'Satış Temsilcisi'],
        [
          ['Marmara', 'Elektronik', 45000, 'Ahmet'],
          ['Ege', 'Mobilya', 32000, 'Ayşe'],
          ['Marmara', 'Mobilya', 28000, 'Mehmet'],
          ['Marmara', 'Elektronik', 75000, 'Fatma'],
          ['Ege', 'Elektronik', 60000, 'Ali'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'ÇOKETOPLA Mimarisi', description: 'ÇOKETOPLA da toplanacak aralığın en başta tanımlandığını kavramak.' },
        { id: 'o2', title: 'Çok Kriterli Filtreleme', description: 'Hem Bölge = "Marmara" hem Kategori = "Elektronik" olan satışları toplama.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'ÇOKETOPLA vs ETOPLA Farkı',
          explanation: 'ETOPLA da toplanacak aralık en son yazılırken, ÇOKETOPLA da İLK argümandır: =ÇOKETOPLA(Toplanacak_Aralık; Kriter_Aralığı_1; Kriter_1; Kriter_Aralığı_2; Kriter_2). Bu sıra kuralına dikkat edin.',
          speechText: 'Kurumsal raporlamada en sık kullanılan fonksiyon ÇOKETOPLA dır. Marmara bölgesindeki Elektronik satışlarını bulmak için 45.000 ve 75.000 TL toplanmalı ve 120.000 TL çıkmalıdır.',
          targetCell: 'F3',
          suggestedFormula: '=ÇOKETOPLA(C2:C6; A2:A6; "Marmara"; B2:B6; "Elektronik")',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'F3 hücresine tıklayın ve Marmara bölgesindeki Elektronik satışlarını toplamak için formülü yazın: =ÇOKETOPLA(C2:C6; A2:A6; "Marmara"; B2:B6; "Elektronik")',
          targetCell: 'F3',
          hints: [
            'ÇOKETOPLA fonksiyonunda ilk argüman toplanacak ciro aralığı (C2:C6) dır.',
            'Ardından bölge aralığı ve kriteri (A2:A6; "Marmara") ile kategori kriteri (B2:B6; "Elektronik") eklenir.',
            '=ÇOKETOPLA(C2:C6; A2:A6; "Marmara"; B2:B6; "Elektronik")',
          ],
          validation: {
            targetCell: 'F3',
            expectedValue: 120000,
            expectedFormulaKeywords: ['ÇOKETOPLA', 'SUMIFS', 'C2:C6'],
            errorMessage: 'F3 hücresinde =ÇOKETOPLA(C2:C6; A2:A6; "Marmara"; B2:B6; "Elektronik") ile 120.000 TL bulunmalıdır.',
            successMessage: 'Kusursuz! Marmara Elektronik cirosu 120.000 TL olarak doğrulandı.',
          },
        },
      ],
      quiz: {
        id: 'q6-2',
        title: 'ÇOKETOPLA Değerlendirmesi',
        passingScore: 80,
        questions: [
          {
            id: 'q6-2-1',
            question: 'ÇOKETOPLA (SUMIFS) fonksiyonunda toplanacak sayısal aralık kaçıncı argümandır?',
            options: [
              { id: 'a', text: 'En son argüman' },
              { id: 'b', text: 'İlk (1.) argüman' },
              { id: 'c', text: '2. argüman' },
              { id: 'd', text: 'Fark etmez' },
            ],
            correctOptionId: 'b',
            explanation: 'ETOPLA dan farklı olarak ÇOKETOPLA da toplanacak aralık her zaman 1. argüman olarak başa yazılır.',
          },
          {
            id: 'q6-2-2',
            question: 'ÇOKETOPLA da kriter olarak "İst*" yazılırsa ne anlama gelir?',
            options: [
              { id: 'a', text: 'Yalnızca "İst" ile bitenler' },
              { id: 'b', text: '"İst" ile başlayan tüm metinler (İstanbul, İstinye vb.)' },
              { id: 'c', text: 'Hata verir' },
              { id: 'd', text: 'Tam olarak 4 harfli olanlar' },
            ],
            correctOptionId: 'b',
            explanation: 'Yıldız (*) joker karakteri sıfır veya daha fazla karakteri temsil eder; "İst*" ifadesi İst ile başlayan tüm metinlerle eşleşir.',
          },
        ],
      },
    },
  ],
};
