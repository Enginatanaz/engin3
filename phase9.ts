import { CurriculumPhase } from '../../types/excel';

export const phase9: CurriculumPhase = {
  id: 9,
  title: 'Faz 9: Arama & Başvuru Fonksiyonları',
  subtitle: 'DÜŞEYARA, YATAYARA, İNDİS & KAÇINCI ve ÇAPRAZARA (XLOOKUP)',
  iconName: 'Search',
  description: 'Excel in en kritik veri bağlama araçları: DÜŞEYARA 4 argüman kuralı, İNDİS & KAÇINCI ile sola doğru arama ve yeni nesil ÇAPRAZARA.',
  lessons: [
    {
      id: 'f9-l1',
      phaseId: 9,
      unitId: 'u9-1',
      title: 'DÜŞEYARA ile Fiyat ve Ürün Bilgisi Çekme',
      shortDesc: 'DÜŞEYARA 4 argüman kuralı, tam eşleşme (YANLIŞ/0) ve katalog araması.',
      level: 'Orta',
      durationMinutes: 15,
      functionsUsed: ['DÜŞEYARA / VLOOKUP'],
      initialWorkbook: (() => {
        const cells: Record<string, any> = {
          A1: { raw: 'Barkod', computed: 'Barkod', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          B1: { raw: 'Ürün Adı', computed: 'Ürün Adı', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          C1: { raw: 'Fiyat', computed: 'Fiyat', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          A2: { raw: '1001', computed: 1001 },
          B2: { raw: 'Laptop i7', computed: 'Laptop i7' },
          C2: { raw: '28000', computed: 28000, format: { numberFormat: 'currency' } },
          A3: { raw: '1002', computed: 1002 },
          B3: { raw: 'Monitör 4K', computed: 'Monitör 4K' },
          C3: { raw: '4500', computed: 4500, format: { numberFormat: 'currency' } },
          A4: { raw: '1003', computed: 1003 },
          B4: { raw: 'Kablosuz Kulaklık', computed: 'Kablosuz Kulaklık' },
          C4: { raw: '1200', computed: 1200, format: { numberFormat: 'currency' } },
          E1: { raw: 'Sorgulanan Barkod', computed: 'Sorgulanan Barkod', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          F1: { raw: 'Getirilen Fiyat', computed: 'Getirilen Fiyat', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          E2: { raw: '1002', computed: 1002 },
        };
        return {
          activeSheetId: 's1',
          sheets: [{ id: 's1', name: 'Fiyat Arama', cells, columnWidths: { A: 120, B: 150, C: 120, D: 40, E: 150, F: 150 } }],
        };
      })(),
      objectives: [
        { id: 'o1', title: 'DÜŞEYARA 4 Argüman Kuralı', description: 'Aranan değer, Tablo aralığı, Sütun indis sayısı ve Eşleşme türü parametrelerini hatasız girme.' },
        { id: 'o2', title: 'Tam Eşleşme (YANLIŞ)', description: 'Fiyat ve ürün eşleştirmelerinde 4. parametreye mutlaka YANLIŞ (0) yazılması gerektiğini anlama.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'DÜŞEYARA nın 4 Kritik Parametresi',
          explanation: 'DÜŞEYARA tablonun ilk sütununda arama yapar: 1) Ne arıyorsun? (E2), 2) Nerede arıyorsun? (A2:C4), 3) Kaçıncı sütundaki veriyi istiyorsun? (Fiyat 3. sütunda -> 3), 4) Nasıl arıyorsun? (Tam eşleşme için YANLIŞ veya 0).',
          speechText: 'DÜŞEYARA kurumsal hayatın vazgeçilmezidir. Aranan değer mutlaka tablonun ilk sütununda bulunmalıdır. Şimdi 1002 nolu barkodun fiyatını çekmek için F2 hücresine formülümüzü yazalım.',
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
          hints: [
            'F2 hücresini seçin. E2 barkodunu A2:C4 ürün kataloğunda arayıp 3. sütundaki birim fiyatı getireceğiz.',
            'DÜŞEYARA fonksiyonuna aranan (E2), tablo (A2:C4), sütun (3) ve tam eşleşme için YANLIŞ (0) verin.',
            '=DÜŞEYARA(E2; A2:C4; 3; YANLIŞ)',
          ],
          validation: {
            targetCell: 'F2',
            expectedValue: 4500,
            expectedFormulaKeywords: ['DÜŞEYARA', 'VLOOKUP', 'E2'],
            errorMessage: 'F2 hücresinde =DÜŞEYARA(E2; A2:C4; 3; YANLIŞ) olmalı ve 4500 TL bulunmalıdır.',
            successMessage: 'Tebrikler! 1002 nolu barkod için 4.500 TL fiyatı doğru çekildi.',
          },
        },
      ],
      quiz: {
        id: 'q9-1',
        title: 'DÜŞEYARA ve Arama Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q9-1-1',
            question: 'DÜŞEYARA fonksiyonunda aranan değer, arama tablosunun neresinde bulunmalıdır?',
            options: [
              { id: 'a', text: 'En solundaki (1.) sütunda' },
              { id: 'b', text: 'Herhangi bir sütunda' },
              { id: 'c', text: 'En sağdaki sütunda' },
              { id: 'd', text: 'İlk satırda' },
            ],
            correctOptionId: 'a',
            explanation: 'DÜŞEYARA kural olarak aranan değeri her zaman arama aralığının en solundaki ilk sütunda arar.',
          },
          {
            id: 'q9-1-2',
            question: 'DÜŞEYARA da 4. argümana YANLIŞ (FALSE veya 0) yazılmazsa varsayılan olarak ne olur?',
            options: [
              { id: 'a', text: 'Formül çalışmaz' },
              { id: 'b', text: 'Yaklaşık eşleşme yapar ve sıralı olmayan tablolarda yanlış sonuç verebilir' },
              { id: 'c', text: 'Hücreyi siler' },
              { id: 'd', text: 'Daima sıfır döndürür' },
            ],
            correctOptionId: 'b',
            explanation: '4. parametre boş bırakılırsa DOĞRU (Yaklaşık Eşleşme) kabul edilir; tam eşleşme için 0 veya YANLIŞ yazılmalıdır.',
          },
        ],
      },
    },
    {
      id: 'f9-l2',
      phaseId: 9,
      unitId: 'u9-2',
      title: 'İNDİS & KAÇINCI ile Esnek ve Çift Yönlü Arama',
      shortDesc: 'DÜŞEYARA nın solundaki veriyi getirememe kısıtını İNDİS ve KAÇINCI ile aşma.',
      level: 'İleri',
      durationMinutes: 18,
      functionsUsed: ['İNDİS / INDEX', 'KAÇINCI / MATCH'],
      initialWorkbook: (() => {
        const cells: Record<string, any> = {
          A1: { raw: 'Departman', computed: 'Departman', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          B1: { raw: 'Personel ID', computed: 'Personel ID', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          C1: { raw: 'İsim', computed: 'İsim', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          A2: { raw: 'İnsan Kaynakları', computed: 'İnsan Kaynakları' },
          B2: { raw: 'P-101', computed: 'P-101' },
          C2: { raw: 'Canan Er', computed: 'Canan Er' },
          A3: { raw: 'Yazılım & Ar-Ge', computed: 'Yazılım & Ar-Ge' },
          B3: { raw: 'P-102', computed: 'P-102' },
          C3: { raw: 'Okan Tekin', computed: 'Okan Tekin' },
          A4: { raw: 'Finans', computed: 'Finans' },
          B4: { raw: 'P-103', computed: 'P-103' },
          C4: { raw: 'Gülşen Ak', computed: 'Gülşen Ak' },
          E1: { raw: 'Aranan ID', computed: 'Aranan ID', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          F1: { raw: 'Departman (Sola Arama)', computed: 'Departman (Sola Arama)', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          E2: { raw: 'P-102', computed: 'P-102' },
        };
        return {
          activeSheetId: 's1',
          sheets: [{ id: 's1', name: 'İNDİS KAÇINCI', cells, columnWidths: { A: 160, B: 120, C: 140, D: 40, E: 130, F: 180 } }],
        };
      })(),
      objectives: [
        { id: 'o1', title: 'Sola Doğru Arama Yetkinliği', description: 'Aranan değerin solunda kalan sütunları getirebilmek için İNDİS ve KAÇINCI kombinasyonunu kullanma.' },
        { id: 'o2', title: 'Koordinat Arama Mantığı', description: 'KAÇINCI ile satır numarasını dinamik bulup İNDİS e satır argümanı olarak besleme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'İNDİS ve KAÇINCI İş Birliği',
          explanation: 'DÜŞEYARA Personel ID nin solundaki Departman sütununu getiremez. Çözüm: İNDİS(A2:A4; KAÇINCI(E2; B2:B4; 0)). KAÇINCI P-102 nin B2:B4 te 2. sırada olduğunu söyler; İNDİS ise A2:A4 ün 2. elemanı olan "Yazılım & Ar-Ge" yi getirir.',
          speechText: 'İleri Excel mülakatlarının 1 numaralı sorusu İNDİS ve KAÇINCI dır. Sola doğru arama yapabilmenin klasik ve en kararlı yoludur. Şimdi F2 hücresinde bu güçlü ikiliyi kuralım.',
          targetCell: 'F2',
          suggestedFormula: '=İNDİS(A2:A4; KAÇINCI(E2; B2:B4; 0))',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'F2 hücresine tıklayın ve P-102 kodlu personelin Departmanını bulmak için formülü girin: =İNDİS(A2:A4; KAÇINCI(E2; B2:B4; 0))',
          targetCell: 'F2',
          hints: [
            'F2 hücresini seçin.',
            'İNDİS içine getirilecek Departman aralığını (A2:A4), satır için ise KAÇINCI(E2; B2:B4; 0) yazın.',
            '=İNDİS(A2:A4; KAÇINCI(E2; B2:B4; 0))',
          ],
          validation: {
            targetCell: 'F2',
            expectedValue: 'Yazılım & Ar-Ge',
            expectedFormulaKeywords: ['İNDİS', 'INDEX', 'KAÇINCI', 'MATCH'],
            errorMessage: 'F2 hücresinde =İNDİS(A2:A4; KAÇINCI(E2; B2:B4; 0)) olmalı ve "Yazılım & Ar-Ge" bulunmalıdır.',
            successMessage: 'Kusursuz! Sola doğru arama başarıyla gerçekleştirildi.',
          },
        },
      ],
      quiz: {
        id: 'q9-2',
        title: 'İNDİS & KAÇINCI Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q9-2-1',
            question: '=KAÇINCI("P-102"; B2:B4; 0) formülünün görevi nedir?',
            options: [
              { id: 'a', text: 'P-102 nin kaç adet olduğunu sayar' },
              { id: 'b', text: 'P-102 nin B2:B4 aralığındaki sıra numarasını (2) verir' },
              { id: 'c', text: 'Hücreyi P-102 ile değiştirir' },
              { id: 'd', text: 'P-102 yi alfabetik sıralar' },
            ],
            correctOptionId: 'b',
            explanation: 'KAÇINCI (MATCH) aranan değerin belirtilen aralıktaki göreli konumunu (satır veya sütun sırasını) sayı olarak verir.',
          },
          {
            id: 'q9-2-2',
            question: 'İNDİS(A2:A10; 4) formülü ne döndürür?',
            options: [
              { id: 'a', text: 'A2:A10 aralığındaki 4. hücrenin değerini' },
              { id: 'b', text: '4 sayısını' },
              { id: 'c', text: 'A4 hücresini' },
              { id: 'd', text: '#DEĞER! hatası' },
            ],
            correctOptionId: 'a',
            explanation: 'İNDİS fonksiyonu belirtilen aralıktaki n. sıradaki hücrenin içeriğini getirir.',
          },
        ],
      },
    },
    {
      id: 'f9-l3',
      phaseId: 9,
      unitId: 'u9-3',
      title: 'Modern Arama Devrimi: ÇAPRAZARA (XLOOKUP)',
      shortDesc: 'Hem sola hem sağa arama yapabilen, varsayılan tam eşleşmeli yeni nesil fonksiyon.',
      level: 'İleri',
      durationMinutes: 15,
      functionsUsed: ['ÇAPRAZARA / XLOOKUP'],
      initialWorkbook: (() => {
        const cells: Record<string, any> = {
          A1: { raw: 'Departman', computed: 'Departman', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          B1: { raw: 'Sicil No', computed: 'Sicil No', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          C1: { raw: 'İsim', computed: 'İsim', format: { bold: true, bgColor: '#047857', textColor: '#FFF' } },
          A2: { raw: 'Finans', computed: 'Finans' },
          B2: { raw: 'SC-92', computed: 'SC-92' },
          C2: { raw: 'Deniz Kaya', computed: 'Deniz Kaya' },
          A3: { raw: 'Pazarlama', computed: 'Pazarlama' },
          B3: { raw: 'SC-93', computed: 'SC-93' },
          C3: { raw: 'Bora Akın', computed: 'Bora Akın' },
          E1: { raw: 'Aranan Sicil', computed: 'Aranan Sicil', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          F1: { raw: 'Sonuç (ÇAPRAZARA)', computed: 'Sonuç (ÇAPRAZARA)', format: { bold: true, bgColor: '#1E293B', textColor: '#FFF' } },
          E2: { raw: 'SC-92', computed: 'SC-92' },
        };
        return {
          activeSheetId: 's1',
          sheets: [{ id: 's1', name: 'ÇAPRAZARA', cells, columnWidths: { A: 140, B: 120, C: 140, D: 40, E: 130, F: 170 } }],
        };
      })(),
      objectives: [
        { id: 'o1', title: 'ÇAPRAZARA Üstünlükleri', description: 'Sütun sayısı sayma zorunluluğunu kaldıran ve sola arama yapabilen ÇAPRAZARA yı uygulama.' },
        { id: 'o2', title: 'Kayıt Bulunamazsa Güvenliği', description: '4. parametre ile #YOK hatası yerine özel metin ("Bulunamadı") gösterme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'ÇAPRAZARA (XLOOKUP) Mimarisi',
          explanation: 'ÇAPRAZARA 3 temel parametreyle çalışır: 1) Ne arıyorsun? (E2), 2) Nerede arıyorsun? (B2:B3), 3) Neyi getireyim? (A2:A3). Sütun numarası saymaya gerek yoktur ve solundaki sütunu rahatça getirir.',
          speechText: 'Modern Excel in en büyük yeniliği ÇAPRAZARA dır. DÜŞEYARA nın bütün sınırlarını ortadan kaldırır. Şimdi SC-92 sicil nolu personelin solundaki Departmanını tek formülle çekelim.',
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
          hints: [
            'F2 hücresine tıklayın. E2 sicil kodunu B sütununda arayıp solundaki A sütunundan Departmanı çekeceğiz.',
            'ÇAPRAZARA sırasıyla aranan (E2), arama dizisi (B2:B3) ve döndürülecek sonuç dizisi (A2:A3) alır.',
            '=ÇAPRAZARA(E2; B2:B3; A2:A3)',
          ],
          validation: {
            targetCell: 'F2',
            expectedValue: 'Finans',
            expectedFormulaKeywords: ['ÇAPRAZARA', 'XLOOKUP', 'E2'],
            errorMessage: 'F2 hücresinde =ÇAPRAZARA(E2; B2:B3; A2:A3) ile "Finans" bulunmalıdır.',
            successMessage: 'Tebrikler! Modern ÇAPRAZARA ile sola doğru arama başarıyla yapıldı.',
          },
        },
      ],
      quiz: {
        id: 'q9-3',
        title: 'ÇAPRAZARA Değerlendirmesi',
        passingScore: 80,
        questions: [
          {
            id: 'q9-3-1',
            question: 'ÇAPRAZARA da bulunamayan kayıtlar için alternatif mesaj göstermek üzere hangi argüman kullanılır?',
            options: [
              { id: 'a', text: '4. argüman [bulunamıyorsa]' },
              { id: 'b', text: '1. argüman' },
              { id: 'c', text: 'EĞERHATA eklemek zorunludur' },
              { id: 'd', text: 'ÇAPRAZARA da hata yakalanamaz' },
            ],
            correctOptionId: 'a',
            explanation: 'ÇAPRAZARA nın 4. argümanı [bulunamıyorsa] dır; buraya örneğin "Kayıt Yok" yazarak EĞERHATA ya gerek kalmadan temiz sonuç üretilir.',
          },
          {
            id: 'q9-3-2',
            question: 'ÇAPRAZARA da varsayılan eşleşme türü nedir?',
            options: [
              { id: 'a', text: 'Tam Eşleşme (Exact Match)' },
              { id: 'b', text: 'Yaklaşık Eşleşme' },
              { id: 'c', text: 'Joker Eşleşme' },
              { id: 'd', text: 'İkili Arama' },
            ],
            correctOptionId: 'a',
            explanation: 'DÜŞEYARA dan farklı olarak ÇAPRAZARA da varsayılan eşleşme modu Tam Eşleşmedir; 0 veya YANLIŞ yazma zorunluluğu yoktur.',
          },
        ],
      },
    },
  ],
};
