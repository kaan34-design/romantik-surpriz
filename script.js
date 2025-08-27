document.addEventListener('DOMContentLoaded', () => {
    // Gerekli HTML elementlerini seçiyoruz
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionContainer = document.getElementById('question-container');
    const messageContainer = document.getElementById('message-container');

    // "Hayır" butonuna kaç kere basıldığını saymak için bir sayaç
    let noClickCount = 0;
    // "Evet" butonunun başlangıç boyutları
    let yesButtonSize = 1;

    // "Evet" butonuna tıklandığında çalışacak fonksiyon
    yesBtn.addEventListener('click', () => {
        // Soru ve butonları gizle
        questionContainer.classList.add('hidden');
        // Son mesajı göster
        messageContainer.classList.remove('hidden');
    });

    // "Hayır" butonuna tıklandığında çalışacak fonksiyon
    noBtn.addEventListener('click', () => {
        noClickCount++; // Sayacı bir artır

        // "Evet" butonunu büyüt
        yesButtonSize += 0.5; // Her tıklamada büyüme miktarını ayarla
        yesBtn.style.transform = `scale(${yesButtonSize})`;
        
        // "Hayır" butonunun metnini değiştirerek onu ikna etmeye çalış
        const phrases = [
            "Emin misin? 🥺",
            "Tekrar düşün...",
            "Kalbimi kırıyorsun 💔",
            "Lütfeeen?",
            "Ama ben seni seviyorum ki...",
            "Son kararın mı? 😢"
        ];
        
        // Her tıklamada farklı bir yazı göster
        // Dizinin sonuna gelince başa dönmesi için % operatörünü kullanıyoruz
        noBtn.innerText = phrases[noClickCount % phrases.length];
    });
});