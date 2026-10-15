import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase10: CurriculumPhase = {
  id: 10,
  title: 'Faz 10: Dinamik Diziler & İleri Formül Teknikleri',
  subtitle: 'FİLTRE, BENZERSİZ, SIRALA ve LET Fonksiyonları',
  iconName: 'Sparkles',
  description: 'Modern Excel in dinamik dizi mimarisi: Taşan aralıklar (#), FİLTRE ile kriter bazlı liste çekme, BENZERSİZ ile tekilleştirme ve LET ile formül optimizasyonu.',
  lessons: [
    {
      id: 'f10-l1',
      phaseId: 10,
      unitId: 'u10-1',
      title: 'Dinamik Dizi Filtreleme: FİLTRE ve BENZERSİZ',
      shortDesc: 'Şarta uyan tüm satırları formülle dinamik listeleme ve tekilleştirme.',
      level: 'İleri',
      durationMinutes: 18,
      functionsUsed: ['FİLTRE / FILTER', 'BENZERSİZ / UNIQUE'],
      initialWorkbook: createTableSheet(
        's1',
        'Bölge Satışları',
        ['Şehir', 'Kategori', 'Tutar', 'Durum'],
        [
          ['İstanbul', 'Elektronik', 75000, 'Onay'],
          ['Ankara', 'Mobilya', 32000, 'Onay'],
          ['İzmir', 'Elektronik', 48000, 'Onay'],
          ['Bursa', 'Gıda', 18000, 'İnceleme'],
          ['Antalya', 'Elektronik', 62000, 'Onay'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'FİLTRE Fonksiyonu Mantığı', description: 'Geleneksel filtreleme yerine formülle dinamik sonuç kümesi üretme: =FİLTRE(Aralık; Kriter).' },
        { id: 'o2', title: 'BENZERSİZ Tekilleştirme', description: 'Tekrarlayan liste elemanlarını tek hamlede benzersiz hale getirme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'FİLTRE (FILTER) Fonksiyonu',
          explanation: 'FİLTRE fonksiyonu şarta uyan tüm kayıtları alt alta otomatik döker. Örneğin Elektronik kategorisindeki şehirleri çekmek için: =FİLTRE(A2:A6; B2:B6="Elektronik").',
          speechText: 'Dinamik diziler Excel e tek bir formülle birden fazla hücreyi doldurma yeteneği kazandırmıştır. Şimdi F2 hücresine FİLTRE formülümüzü uygulayalım.',
          targetCell: 'F2',
          suggestedFormula: '=FİLTRE(A2:A6; B2:B6="Elektronik")',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'F2 hücresine tıklayın ve Elektronik kategorisindeki şehirleri listelemek için formülü girin: =FİLTRE(A2:A6; B2:B6="Elektronik")',
          targetCell: 'F2',
          hints: [
            'F2 hücresini seçin.',
            'FİLTRE içine listelenecek şehir aralığını (A2:A6) ve kriteri (B2:B6="Elektronik") yazın.',
            '=FİLTRE(A2:A6; B2:B6="Elektronik")',
          ],
          validation: {
            targetCell: 'F2',
            expectedValue: 'İstanbul',
            expectedFormulaKeywords: ['FİLTRE', 'FILTER', 'B2:B6', 'Elektronik'],
            errorMessage: 'F2 hücresinde =FİLTRE(A2:A6; B2:B6="Elektronik") olmalı ve İstanbul ile başlamalıdır.',
            successMessage: 'Harika! Dinamik dizi formülüyle ilk eşleşen şehir başarıyla listelendi.',
          },
        },
      ],
      quiz: {
        id: 'q10-1',
        title: 'Dinamik Diziler Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q10-1-1',
            question: 'Dinamik dizi formülünün taşacağı hücrelerin üzerinde başka veri veya metin varsa Excel hangi hatayı verir?',
            options: [
              { id: 'a', text: '#DEĞER!' },
              { id: 'b', text: '#TAŞMA! (#SPILL!)' },
              { id: 'c', text: '#BAŞVURU!' },
              { id: 'd', text: '#YOK' },
            ],
            correctOptionId: 'b',
            explanation: 'Dinamik dizi sonuçları boş alana yayılamazsa (hücre bloke edilmişse) #TAŞMA! (#SPILL!) hatası üretir.',
          },
          {
            id: 'q10-1-2',
            question: 'Tekrarlayan müşteri isimlerini alfabetik sıralı tekil listeye dönüştürmek için hangi iki fonksiyon iç içe yazılır?',
            options: [
              { id: 'a', text: '=SIRALA(BENZERSİZ(A2:A100))' },
              { id: 'b', text: '=TOPLA(FİLTRE(A2:A100))' },
              { id: 'c', text: '=KIRP(DÜŞEYARA(A2:A100))' },
              { id: 'd', text: '=SAY(BENZERSİZ(A2:A100))' },
            ],
            correctOptionId: 'a',
            explanation: 'BENZERSİZ (UNIQUE) tekrarları siler, SIRALA (SORT) ise bu tekil listeyi A dan Z ye dizer.',
          },
        ],
      },
    },
    {
      id: 'f10-l2',
      phaseId: 10,
      unitId: 'u10-2',
      title: 'Formül Sadeleştirme ve Değişken Tanımlama: LET',
      shortDesc: 'Aynı hesaplamayı formül içinde tekrar tekrar yapmamak için LET ile değişken atama.',
      level: 'Uzman',
      durationMinutes: 18,
      functionsUsed: ['LET'],
      initialWorkbook: createTableSheet(
        's1',
        'Komisyon ve Vergi',
        ['İşlem Tutarı', 'Brüt Kâr (Ham)', 'Komisyon Oranı', 'Net Kazanç'],
        [
          [100000, 25000, 0.12, ''],
          [240000, 60000, 0.12, ''],
          [80000, 18000, 0.12, ''],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'LET Fonksiyonu Mantığı', description: 'Uzun ve karmaşık formüllerde ara sonuçlara isim verip işlem hızını ve okunabilirliği artırma.' },
        { id: 'o2', title: 'Performans Optimizasyonu', description: 'Tekrarlanan ağır formül hesaplamalarını tek bir değişkene bağlayarak hesaplama süresini düşürme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'LET ile Değişken Tanımlama',
          explanation: 'LET fonksiyonunda önce değişkene isim veririz, sonra değerini hesaplarız, en son bu ismi kullanırız. Örneğin kar = B2*0.8; formül = kar + 1000. Sözdizimi: =LET(kar; B2*0.8; kar + 1000).',
          speechText: 'İleri Excel projelerinde formüller uzadıkça okunamaz hale gelir. LET fonksiyonu tıpkı bir programlama dili gibi değişken tanımlamamızı sağlar. Şimdi D2 hücresinde komisyonu LET ile hesaplayalım.',
          targetCell: 'D2',
          suggestedFormula: '=LET(komisyon; B2*C2; komisyon*0.8)',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'D2 hücresine tıklayın ve komisyonu B2*C2 olarak tanımlayıp %20 vergi düşen net tutarı (komisyon*0.8) hesaplamak için LET formülünü girin: =LET(komisyon; B2*C2; komisyon*0.8)',
          targetCell: 'D2',
          hints: [
            'D2 hücresini seçin.',
            'LET fonksiyonuna değişken adı olarak komisyon, değer olarak B2*C2 ve sonuç olarak komisyon*0.8 verin.',
            '=LET(komisyon; B2*C2; komisyon*0.8)',
          ],
          validation: {
            targetCell: 'D2',
            expectedValue: 2400,
            expectedFormulaKeywords: ['LET', 'komisyon', 'B2*C2'],
            errorMessage: 'D2 hücresinde =LET(komisyon; B2*C2; komisyon*0.8) olmalı ve 2400 TL çıkmalıdır.',
            successMessage: 'Kusursuz! LET değişkeniyle temiz ve hızlı hesaplama yapıldı.',
          },
        },
      ],
      quiz: {
        id: 'q10-2',
        title: 'LET Fonksiyonu Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q10-2-1',
            question: 'LET fonksiyonu kullanmanın Excel çalışma kitabına sağladığı en büyük iki avantaj nedir?',
            options: [
              { id: 'a', text: 'Okunabilirlik ve hesaplama performansı artışı' },
              { id: 'b', text: 'Yazıcı sayfa sayısını azaltması' },
              { id: 'c', text: 'Sayıları metne çevirmesi' },
              { id: 'd', text: 'Yalnızca görsel renk katması' },
            ],
            correctOptionId: 'a',
            explanation: 'LET değişkenleri ara hesaplamayı tek bir kez yapıp hafızada tutar; böylece ağır formüller defalarca hesaplanmaz ve hız katlanarak artar.',
          },
          {
            id: 'q10-2-2',
            question: '=LET(x; 10; y; 20; x*y) formülünün matematiksel sonucu nedir?',
            options: [
              { id: 'a', text: '30' },
              { id: 'b', text: '200' },
              { id: 'c', text: '10' },
              { id: 'd', text: '#DEĞER!' },
            ],
            correctOptionId: 'b',
            explanation: 'x=10 ve y=20 olarak atanmış, sonuç ifadesinde x*y hesaplandığında 10*20 = 200 elde edilir.',
          },
        ],
      },
    },
  ],
};
