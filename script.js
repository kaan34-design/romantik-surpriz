document.addEventListener('DOMContentLoaded', () => {
    // Gerekli HTML elementlerini seçiyoruz
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionContainer = document.getElementById('question-container');
    const messageContainer = document.getElementById('message-container');
    const question = document.getElementById('question');

    let noClickCount = 0; // "Hayır" butonuna tıklama sayacı

    // "Evet" butonuna tıklandığında...
    yesBtn.addEventListener('click', () => {
        // Soru ve butonları gizle
        questionContainer.style.display = 'none';
        
        // Final mesajını göster
        messageContainer.classList.remove('hidden');
    });

    // "Hayır" butonuna tıklandığında...
    noBtn.addEventListener('click', () => {
        noClickCount++; // Sayacı artır

        // "Evet" butonunu her tıklamada büyütmek için ölçeklendirme
        const scale = 1 + noClickCount * 0.8; // Büyüme oranını buradan ayarlayabilirsin
        yesBtn.style.transform = `scale(${scale})`;

        // Toplam 5 kez büyüsün
        if (noClickCount === 5) {
            // Sadece soruyu gizle
            question.style.display = 'none';
            
            // "Hayır" butonunu tamamen ortadan kaldır
            noBtn.style.display = 'none';

            // "Evet" butonunu tüm ekranı kaplayan dev bir butona dönüştür
            yesBtn.classList.add('fullscreen-button');
            yesBtn.innerText = "TEK SEÇENEK BU!"; // Butonun yazısını değiştir
        }
    });
});