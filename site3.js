// --- KİŞİSELLEŞTİRME ALANI ---
// Geri sayım yapılacak tarihi buraya gir. Format: "Ay Gün, Yıl Saat:Dakika:Saniye"
// Örnek: "December 25, 2025 00:00:00"
const countdownDate = new Date("February 14, 2026 00:00:00").getTime();

// Geri sayımı her saniye güncelle
const countdownFunction = setInterval(function() {

    // Şimdiki zamanı al
    const now = new Date().getTime();

    // Aradaki farkı bul
    const distance = countdownDate - now;

    // Zaman hesaplamaları
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Sonuçları HTML elementlerine yazdır
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Eğer geri sayım bittiyse bir yazı göster
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "O özel gün geldi! ❤️";
    }
}, 1000);