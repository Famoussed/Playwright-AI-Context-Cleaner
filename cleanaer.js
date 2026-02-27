(() => {
    // Sayfanın yapısını bozmamak için body'nin bir kopyasını alıyoruz
    const clone = document.body.cloneNode(true);
    
    // 1. Yapay zekanın Playwright için hiç ihtiyacı olmayan tag'leri siliyoruz
    const tagsToRemove = ['script', 'style', 'svg', 'iframe', 'noscript', 'img', 'video', 'canvas', 'path'];
    clone.querySelectorAll(tagsToRemove.join(',')).forEach(el => el.remove());

    // 2. Sadece elementleri bulmamıza yarayan, semantik ve test odaklı öznitelikler (Attributes) kalsın
    const allowedAttrs = ['id', 'name', 'type', 'placeholder', 'for', 'data-testid', 'data-qa', 'aria-label', 'role', 'value'];

    // 3. Sayfadaki tüm elementleri gez ve gereksiz class, style vs. her şeyi temizle
    clone.querySelectorAll('*').forEach(el => {
        Array.from(el.attributes).forEach(attr => {
            if (!allowedAttrs.includes(attr.name.toLowerCase())) {
                el.removeAttribute(attr.name);
            }
        });
        
        // Sadece tasarım için konulmuş, içi boş anlamsız div ve span'leri sil
        if (el.children.length === 0 && el.textContent.trim() === '' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName)) {
            el.remove();
        }
    });

    // Çıktıyı formatla (Fazla boşlukları tek boşluğa indir)
    const result = clone.innerHTML.replace(/\s+/g, ' ').trim();
    
    // Konsolda şık bir şekilde göster
    console.log("%c🤖 AI İçin Temizlenmiş DOM Yapısı:", "color: #00ff00; font-size: 14px; font-weight: bold;");
    console.log(result);
    
    // Çıktıyı doğrudan bilgisayarının panosuna (Clipboard) kopyala
    try {
        copy(result);
        console.log("%c✅ Kod otomatik olarak panoya kopyalandı! Şimdi gidip AI'a (ChatGPT/Claude vb.) yapıştırabilirsin.", "color: #00ff00; font-weight: bold;");
    } catch (e) {
        console.log("👉 Panoya kopyalamak için yukarıdaki çıktıyı sağ tıklayıp kopyala ('Copy string contents').");
    }
})();
