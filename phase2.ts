import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const phase2: CurriculumPhase = {
  id: 2,
  title: 'Faz 2: Hücre Biçimlendirme & Profesyonel Tablo Tasarımı',
  subtitle: 'Sayı Formatları, Para Birimleri (₺), Yüzdeler ve Kurumsal Görünüm',
  iconName: 'Palette',
  description: 'Yazı tipi, dolgu, kenarlıklar, metni kaydırma, sayı biçimleri, para birimi, muhasebe ve yüzde gösterimleriyle okunabilir raporlar tasarlama.',
  lessons: [
    {
      id: 'f2-l1',
      phaseId: 2,
      unitId: 'u2-1',
      title: 'Kurumsal Sayı Formatları ve Para Birimi Gösterimi',
      shortDesc: 'Sayıları salt metinden ayırarak Para Birimi (₺), Yüzde (%) ve Binlik basamak ayırıcı ile biçimlendirme.',
      level: 'Başlangıç',
      durationMinutes: 12,
      functionsUsed: [],
      initialWorkbook: createTableSheet(
        's1',
        'Finansal Özet',
        ['Maliyet Kalemi', 'Bütçe (Ham)', 'Gerçekleşen', 'Sapma Oranı', 'Kayıt Durumu'],
        [
          ['Personel Maaşları', 450000, 442000, 0.02, 'Onaylandı'],
          ['Ofis Kirası', 85000, 85000, 0.00, 'Onaylandı'],
          ['Pazarlama & Reklam', 120000, 138000, -0.15, 'İncelemede'],
          ['Bulut Altyapısı', 65000, 61500, 0.05, 'Onaylandı'],
          ['Lojistik & Taşıma', 95000, 104500, -0.10, 'İncelemede'],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Sayı Biçimlerini Kavrama', description: 'Ham sayıların değerini değiştirmeden Para Birimi (₺) ve Yüzde (%) görünümü kazandırma.' },
        { id: 'o2', title: 'Veri vs Sunum Ayrımı', description: 'Hücreye elle TL veya % yazmak yerine formatlama uygulamanın hesaplamalara faydasını öğrenme.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Sayı Formatları Neden Hayatidir?',
          explanation: 'Bir hücreye elle "450.000 TL" yazarsanız Excel bunu metin algılar ve TOPLA gibi formüllerde sıfır sayar. Doğru yöntem ham sayıyı (450000) yazıp sayı biçimini "Para Birimi" seçmektir.',
          speechText: 'Finansal tablolarda en sık yapılan hata, sayıların yanına elle TL veya yüzde sembolü yazmaktır. Excel de sayısal hesaplamaların bozulmaması için veriyi saf sayı olarak girip hücre formatıyla zenginleştiririz.',
          targetCell: 'B2',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'B7 hücresine tıklayın ve yeni gider kalemi olan Donanım Bütçesi için 75000 yazıp Enter a basın.',
          targetCell: 'B7',
          hints: [
            'B sütununun 7. satırındaki hücreyi seçin.',
            'Metin veya sembol eklemeden yalnızca 75000 yazın.',
            '75000',
          ],
          validation: {
            targetCell: 'B7',
            expectedValue: 75000,
            errorMessage: 'B7 hücresine 75000 değerini girmelisiniz.',
            successMessage: 'Tebrikler! Donanım bütçesi doğru biçimde eklendi.',
          },
        },
        {
          id: 't-2',
          stepNumber: 2,
          instruction: 'C7 hücresine gerçekleşen harcama olarak 68000 yazıp onaylayın.',
          targetCell: 'C7',
          hints: [
            'C sütununun 7. satırını seçin.',
            '68000 yazıp onaylayın.',
            '68000',
          ],
          validation: {
            targetCell: 'C7',
            expectedValue: 68000,
            errorMessage: 'C7 hücresine 68000 yazmalısınız.',
            successMessage: 'Harika! Finansal tablo verisi tamamlandı.',
          },
        },
      ],
      quiz: {
        id: 'q2-1',
        title: 'Sayı Biçimleri Değerlendirmesi',
        passingScore: 80,
        questions: [
          {
            id: 'q2-1-1',
            question: 'Bir hücreye elle "500 TL" yazıldığında Excel bu hücreyi hangi veri türü olarak algılar?',
            options: [
              { id: 'a', text: 'Sayı (Number)' },
              { id: 'b', text: 'Metin (Text)' },
              { id: 'c', text: 'Para Birimi (Currency)' },
              { id: 'd', text: 'Özel Fonksiyon' },
            ],
            correctOptionId: 'b',
            explanation: 'Sayıların yanına elle harf veya sembol yazıldığında Excel hücreyi metin olarak görür ve matematiksel formüllerde toplayamaz.',
          },
          {
            id: 'q2-1-2',
            question: '0.15 değerini içeren bir hücreye Yüzde (%) stili uygulandığında ekranda nasıl görünür?',
            options: [
              { id: 'a', text: '%0.15' },
              { id: 'b', text: '%15' },
              { id: 'c', text: '150%' },
              { id: 'd', text: '0.15%' },
            ],
            correctOptionId: 'b',
            explanation: 'Excel yüzde biçiminde sayıyı otomatik olarak 100 ile çarpar ve yüzde sembolü ekler: 0.15 -> %15.',
          },
        ],
      },
    },
    {
      id: 'f2-l2',
      phaseId: 2,
      unitId: 'u2-2',
      title: 'Hücre Kenarlıkları, Hizalama ve Tablo Mimarisi',
      shortDesc: 'Okunabilir kurumsal raporlar için başlık kontrastı, kenarlık stilleri ve metin kaydırma kuralları.',
      level: 'Başlangıç',
      durationMinutes: 12,
      functionsUsed: [],
      initialWorkbook: createTableSheet(
        's1',
        'Bölge Satışları',
        ['Şube Kodu', 'Şehir', 'Sorumlu Müdür', 'Hedef (₺)', 'Aylık Satış (₺)'],
        [
          ['IST-01', 'İstanbul Kadıköy', 'Merve Doğan', 500000, 540000],
          ['ANK-01', 'Ankara Çankaya', 'Kemal Sunar', 420000, 410000],
          ['IZM-01', 'İzmir Konak', 'Gülşah Tekin', 380000, 395000],
          ['BUR-01', 'Bursa Nilüfer', 'Cemil Kurt', 310000, 325000],
        ]
      ),
      objectives: [
        { id: 'o1', title: 'Görsel Hiyerarşi Oluşturma', description: 'Başlık satırı, veri gövdesi ve toplam satırı arasındaki görsel ayrımları yönetme.' },
        { id: 'o2', title: 'Hizalama Standartları', description: 'Metinlerin sola, sayıların sağa, kodların merkeze hizalanması kuralını uygulama.' },
      ],
      teachingSteps: [
        {
          id: 'st-1',
          title: 'Profesyonel Tablo Düzeni',
          explanation: 'Raporlarda başlıklar koyu arka plan ve açık yazı rengi ile öne çıkarılır. Kod ve tarihler ortalanır, metinler sola, para ve miktarlar ise basamak hizası için sağa yaslanır.',
          speechText: 'Gözün veriyi hızlı tarayabilmesi için hizalama kuralları kritiktir. Şimdi tablonun 6. satırına yeni açılan Antalya şubesini ekleyelim.',
          targetCell: 'A6',
        },
      ],
      tasks: [
        {
          id: 't-1',
          stepNumber: 1,
          instruction: 'A6 hücresine yeni şube kodu olarak "ANT-01" yazıp Enter tuşuna basın.',
          targetCell: 'A6',
          hints: [
            'A sütunundaki 6. satırı seçin.',
            'ANT-01 yazın.',
            'ANT-01',
          ],
          validation: {
            targetCell: 'A6',
            expectedValue: 'ANT-01',
            errorMessage: 'A6 hücresine "ANT-01" yazmalısınız.',
            successMessage: 'Harika! Şube kodu başarıyla girildi.',
          },
        },
        {
          id: 't-2',
          stepNumber: 2,
          instruction: 'B6 hücresine şube adı olarak "Antalya Muratpaşa" yazıp onaylayın.',
          targetCell: 'B6',
          hints: [
            'B6 hücresini seçin.',
            'Antalya Muratpaşa yazıp Enter a basın.',
            'Antalya Muratpaşa',
          ],
          validation: {
            targetCell: 'B6',
            expectedValue: 'Antalya Muratpaşa',
            errorMessage: 'B6 hücresine "Antalya Muratpaşa" yazmalısınız.',
            successMessage: 'Tebrikler! Şehir bilgisi eklendi.',
          },
        },
      ],
      quiz: {
        id: 'q2-2',
        title: 'Tablo Tasarımı Değerlendirmesi',
        passingScore: 80,
        questions: [
          {
            id: 'q2-2-1',
            question: 'Finansal tablolarda sayısal tutarların sağa yaslanmasının temel teknik sebebi nedir?',
            options: [
              { id: 'a', text: 'Basamakların (birler, onlar, yüzler) dikeyde alt alta hizalanması' },
              { id: 'b', text: 'Yazıcıdan daha az mürekkep harcaması' },
              { id: 'c', text: 'Excel in kural gereği metinleri engellemesi' },
              { id: 'd', text: 'Yalnızca görsel bir alışkanlık olması' },
            ],
            correctOptionId: 'a',
            explanation: 'Sayılar sağa hizalandığında basamaklar tam alt alta gelir ve hangi sayının daha büyük olduğu bakışta anlaşılır.',
          },
          {
            id: 'q2-2-2',
            question: 'Uzun bir metnin hücre sınırını aşarak yan hücreye taşmasını önlemek ve hücre içinde alt satıra geçmesini sağlamak için hangi özellik kullanılır?',
            options: [
              { id: 'a', text: 'Hücreleri Birleştir' },
              { id: 'b', text: 'Metni Kaydır (Wrap Text)' },
              { id: 'c', text: 'Dolgu Rengi Değiştir' },
              { id: 'd', text: 'Koşullu Biçimlendirme' },
            ],
            correctOptionId: 'b',
            explanation: 'Metni Kaydır (Wrap Text), sütun genişliğini değiştirmeden metnin hücre yüksekliğini artırarak alt satırlara sığmasını sağlar.',
          },
        ],
      },
    },
  ],
};
