🧠 CleanDOM: Zero-Noise HTML for AI Agents
Yapay zeka modellerinin (GPT-4o, Claude 3.5, Gemini) Playwright veya Selenium kodu yazarken hata yapmasını (hallucination) engellemek için tasarlanmış, DOM temizleme ve optimize etme aracıdır.

🚩 Problem
Modern web sayfaları binlerce satır Tailwind CSS sınıfı, SVG ikonları ve script tag'leri içerir. Bu "gürültülü" veriyi bir LLM'e (Büyük Dil Modeli) gönderdiğinizde:

Token Limitleri: Gereksiz binlerce token harcarsınız.

Karışıklık: AI, karmaşık class isimleri arasında asıl etkileşim kurması gereken button veya input elementini gözden kaçırır.

Kırılgan Kod: AI, anlamsız CSS seçicileri kullanarak kolayca kırılan test kodları üretir.

✨ Çözüm: CleanDOM
Bu script, sayfanın DOM ağacını kopyalar ve AI'ın ihtiyacı olmayan her şeyi (styles, scripts, svgs, unnecessary classes) budar. Geriye sadece Playwright'ın en sevdiği semantic ve test odaklı (id, data-testid, role, aria-label) öznitelikler kalır.

🛠️ Nasıl Kullanılır?
Test etmek istediğiniz web sayfasını açın.

F12 (Geliştirici Araçları) > Console sekmesine gidin.

Bu repodaki clean-dom.js içeriğini yapıştırın ve Enter'a basın.

Temizlenmiş ve optimize edilmiş DOM yapısı otomatik olarak panonuza (clipboard) kopyalanacaktır.

Sonucu ChatGPT/Claude'a yapıştırın ve: "Bu HTML yapısına göre [X] senaryosu için Playwright kodu yaz" deyin.

💡 Geliştiriciler İçin Not
Bu aracı Playwright projenize bir utility fonksiyonu olarak ekleyerek, testleriniz hata aldığında (fail) otomatik olarak temiz DOM'u AI API'sine gönderip "Self-Healing" (Kendi kendini iyileştiren) test süreçleri kurabilirsiniz.
