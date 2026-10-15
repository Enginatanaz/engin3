import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase7: CurriculumPhase = {
  id: 7,
  title: 'Faz 7: Metin Fonksiyonları & Veri Temizleme',
  subtitle: 'SOLDAN, SAĞDAN, PARÇAAL, KIRP, UZUNLUK ve BİRLEŞTİR',
  iconName: 'Type',
  description: 'Bozuk metinleri onarma, isim ve soyad ayrıştırma, gizli ve gereksiz boşlukları silme (KIRP), karakter sayma ve metin birleştirme (&).',
  lessons: [
    {
      id: 'f7-l1',
      phaseId: 7,
      unitId: 'u7-1',
      title: 'Müşteri İsim ve Kod Verilerini Ayrıştırma',
      shortDesc: 'Metin birleştirme (&), SOLDAN ve SAĞDAN ile kod ayrıştırma.',
      level: 'Başlangıç',
      durationMinutes: 12,
      functionsUsed: ['Metin Operatörü &', 'SOLDAN / LEFT', 'SAĞDAN / RIGHT', 'PARÇAAL / MID'],
      initialWorkbook: createTableSheet(
        's1',
        'Müşteri Listesi',
        ['Ad', 'Soyad', 'Tam İsim', 'Şehir', 'Sistem Kodu', 'Ülke'],
        [
          ['Ahmet', 'Yılmaz', '', 'İstanbul', 'TR-2026-IST', ''],
          ['Zeynep', 'Kaya', '', 'Ankara', 'TR-2026-ANK', ''],
          ['Murat', 'Demir', '', 'İzmir', 'TR-2026-IZM', ''],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Metin Birleştirme', description: '& operatörü ile metin hücrelerini araya boşluk koyarak bağlama.' },
        { id: 'o2', title: 'Metin Parçalama', description: 'SOLDAN ile bir kodun başındaki sabit karakterleri çekme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Metinleri Birleştirme Mantığı',
          explanation: 'İki metni birleştirmek için & operatörü kullanılır: =A2 & " " & B2. Araya tırnak içinde boşluk koymazsanız "AhmetYılmaz" şeklinde birleşik çıkar.',
          speechText: 'Veri tabanlarından ad ve soyad genellikle ayrı sütunlarda gelir. & işaretiyle araya boşluk koyarak profesyonel tek bir isim oluştururuz.',
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
          hints: [
            'C2 hücresini seçin. Ad (A2) ve Soyadı (B2) aralarına bir boşluk karakteri koyarak birleştirin.',
            'Metin birleştirme operatörü (&) ile tırnak içinde boşluk kullanın: =A2 & " " & B2',
            '=A2 & " " & B2',
          ],
          validation: {
            targetCell: 'C2',
            expectedValue: 'Ahmet Yılmaz',
            expectedFormulaKeywords: ['&', 'BİRLEŞTİR', 'CONCAT'],
            errorMessage: 'C2 hücresinde =A2 & " " & B2 formülü ile "Ahmet Yılmaz" çıkmalıdır.',
            successMessage: 'Harika! Ad ve soyad başarıyla birleştirildi.',
          },
        },
        {
          id: 't-2',
          stepNumber: 2,
          instruction: 'F2 hücresine tıklayın ve E2 deki "TR-2026-IST" kodunun ilk 2 harfini almak için "=SOLDAN(E2; 2)" formülünü girin.',
          targetCell: 'F2',
          hints: [
            'F2 hücresini seçin. E2 deki kodun solundaki ilk 2 karakteri almanız gerekir.',
            'SOLDAN (veya LEFT) fonksiyonuna metin adresi (E2) ve karakter sayısı olarak 2 verin.',
            '=SOLDAN(E2; 2)',
          ],
          validation: {
            targetCell: 'F2',
            expectedValue: 'TR',
            expectedFormulaKeywords: ['SOLDAN', 'LEFT', 'E2'],
            errorMessage: 'F2 hücresinde =SOLDAN(E2; 2) olmalı ve "TR" bulunmalıdır.',
            successMessage: 'Tebrikler! Ülke kodu TR başarıyla ayıklandı.',
          },
        },
      ],
      quiz: {
        id: 'q7-1',
        title: 'Metin Fonksiyonları Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q7-1-1',
            question: 'Bir metindeki sözcükler arasındaki birden fazla gereksiz boşluğu silip tek boşluğa indiren fonksiyon hangisidir?',
            options: [
              { id: 'a', text: '=SİL()' },
              { id: 'b', text: '=KIRP() [TRIM]' },
              { id: 'c', text: '=TEMİZLE()' },
              { id: 'd', text: '=UZUNLUK()' },
            ],
            correctOptionId: 'b',
            explanation: 'KIRP (TRIM) fonksiyonu metnin başındaki, sonundaki ve sözcükler arasındaki çift boşlukları temizler.',
          },
          {
            id: 'q7-1-2',
            question: 'Bir metnin toplam karakter sayısını (boşluklar dahil) hangi fonksiyon verir?',
            options: [
              { id: 'a', text: '=SAY()' },
              { id: 'b', text: '=UZUNLUK() [LEN]' },
              { id: 'c', text: '=BOYUT()' },
              { id: 'd', text: '=PARÇAAL()' },
            ],
            correctOptionId: 'b',
            explanation: 'UZUNLUK (LEN) fonksiyonu metnin içindeki harf, rakam ve boşluk dahil tüm karakter sayısını verir.',
          },
        ],
      },
    },
    {
      id: 'f7-l2',
      phaseId: 7,
      unitId: 'u7-2',
      title: 'Veri Temizliği: KIRP, BÜYÜKHARF ve PARÇAAL',
      shortDesc: 'Kirli ERP verilerindeki görünmeyen boşlukları temizleme ve kod parçalama.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['KIRP / TRIM', 'BÜYÜKHARF / UPPER', 'PARÇAAL / MID'],
      initialWorkbook: createTableSheet(
        's1',
        'ERP Stok Kodları',
        ['Ham Ürün Kodu', 'Temiz Ürün Kodu', 'Şehir Kodu', 'Depo Rafı'],
        [
          ['  PRD-IST-901  ', '', '', 'A-12'],
          ['  PRD-ANK-450  ', '', '', 'B-04'],
          ['  PRD-IZM-320  ', '', '', 'C-19'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Boşluk Kirliliğini Önleme', description: 'Metinlerin başındaki ve sonundaki görünmeyen boşlukların DÜŞEYARA yı bozmasını engellemek için KIRP kullanma.' },
        { id: 'o2', title: 'Metnin Ortasından Parça Alma', description: 'PARÇAAL ile metnin içindeki belirli bir konumdaki alt metni ayıklama.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'KIRP ile Temiz Veri Üretme',
          explanation: 'Ham ürün kodunda sağda ve solda fazladan boşluklar vardır. Bu boşluklar aramalarda hataya neden olur. B2 hücresine =KIRP(A2) yazarak bu boşlukları tek hamlede sileriz.',
          speechText: 'Veri analistlerinin en çok karşılaştığı sorun, kopyalanan verilerdeki gizli boşluklardır. KIRP fonksiyonu metni çevreleyen tüm fazlalıkları yok eder. Şimdi B2 hücresinde deneyelim.',
          targetCell: 'B2',
          suggestedFormula: '=KIRP(A2)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'B2 hücresine tıklayın ve A2 deki ham metni boşluklardan arındırmak için "=KIRP(A2)" formülünü girin.',
          targetCell: 'B2',
          hints: [
            'B2 hücresini seçin.',
            'KIRP fonksiyonuna temizlenecek metin hücresini (A2) verin.',
            '=KIRP(A2)',
          ],
          validation: {
            targetCell: 'B2',
            expectedValue: 'PRD-IST-901',
            expectedFormulaKeywords: ['KIRP', 'TRIM', 'A2'],
            errorMessage: 'B2 hücresinde =KIRP(A2) olmalı ve "PRD-IST-901" sonucu üretilmelidir.',
            successMessage: 'Tebrikler! Fazla boşluklar temizlendi ve kod standartlaştırıldı.',
          },
        },
      ],
      quiz: {
        id: 'q7-2',
        title: 'Veri Temizleme Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q7-2-1',
            question: '=PARÇAAL("PRD-IST-901"; 5; 3) formülünün sonucu nedir?',
            options: [
              { id: 'a', text: 'PRD' },
              { id: 'b', text: 'IST' },
              { id: 'c', text: '-IS' },
              { id: 'd', text: '901' },
            ],
            correctOptionId: 'b',
            explanation: '5. karakter I harfidir, buradan itibaren 3 karakter alındığında "IST" elde edilir.',
          },
          {
            id: 'q7-2-2',
            question: 'Küçük harflerle yazılmış bir müşteri adını ("mehmet şen") standart baş harfleri büyük formata ("Mehmet Şen") çeviren fonksiyon hangisidir?',
            options: [
              { id: 'a', text: '=BÜYÜKHARF()' },
              { id: 'b', text: '=YAZIM.DÜZENİ() [PROPER]' },
              { id: 'c', text: '=KÜÇÜKHARF()' },
              { id: 'd', text: '=DÜZENLE()' },
            ],
            correctOptionId: 'b',
            explanation: 'YAZIM.DÜZENİ (PROPER), metindeki her sözcüğün ilk harfini büyük, diğer harflerini küçük yapar.',
          },
        ],
      },
    },
  ],
};
