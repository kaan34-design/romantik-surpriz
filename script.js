document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');
    const message = document.getElementById('message');
    const buttonsDiv = document.querySelector('.buttons');

    let noClickCount = 0; // "Hayır" tıklama sayacını tutar

    // "Evet" butonuna basıldığında
    yesBtn.addEventListener('click', () => {
        question.classList.add('hidden'); // Soruyu gizle
        buttonsDiv.classList.add('hidden'); // Butonları gizle
        message.innerText = "Ben de seni seviyorum Selinay bebeğim! ❤️"; // Mesajı göster
        message.classList.remove('hidden'); // Mesajı görünür yap
        document.body.style.backgroundColor = '#d4edda'; // Arka planı mutlu bir yeşil yap (isteğe bağlı)
        const catLeft = document.querySelector('.cat-left');
        const catRight = document.querySelector('.cat-right');
        catLeft.style.animation = 'heartBeat 1s infinite alternate';
        catRight.style.animation = 'heartBeat 1s infinite alternate 0.3s'; // Kedileri canlandır
    });

    // "Hayır" butonuna basıldığında
    noBtn.addEventListener('click', () => {
        noClickCount++; // Sayacı artır

        if (noClickCount <= 5) { // İlk 5 tıklamada evet butonu büyüsün
            let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
            yesBtn.style.fontSize = (currentSize * 1.2) + 'px'; // %20 büyüt
            yesBtn.style.padding = (parseFloat(window.getComputedStyle(yesBtn).paddingTop) * 1.2) + 'px ' + (parseFloat(window.getComputedStyle(yesBtn).paddingLeft) * 1.2) + 'px';
            
            // "Hayır" butonunu rastgele bir yere taşı
            const containerRect = document.querySelector('.container').getBoundingClientRect();
            const noBtnRect = noBtn.getBoundingClientRect();

            let newLeft, newTop;
            const maxAttempts = 50; // Sonsuz döngüden kaçınmak için
            let attempts = 0;

            do {
                newLeft = Math.random() * (containerRect.width - noBtnRect.width);
                newTop = Math.random() * (containerRect.height - noBtnRect.height);
                attempts++;
            } while (attempts < maxAttempts && 
                     // Yeni konumun Yes butonuna çakışmadığından emin ol
                     (newLeft < yesBtn.offsetLeft + yesBtn.offsetWidth && 
                      newLeft + noBtnRect.width > yesBtn.offsetLeft &&
                      newTop < yesBtn.offsetTop + yesBtn.offsetHeight && 
                      newTop + noBtnRect.height > yesBtn.offsetTop)
                    );

            noBtn.style.position = 'absolute';
            noBtn.style.left = newLeft + 'px';
            noBtn.style.top = newTop + 'px';

            noBtn.innerText = "Emin misin? 😉"; // Hayır butonu metni değişsin
            noBtn.style.backgroundColor = '#ffc0cb'; // Hayır butonu rengi değişsin
        } else {
            // Sonsuz döngü: Hayır'a basıldığında artık sadece evet büyüsün
            let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
            yesBtn.style.fontSize = (currentSize * 1.1) + 'px'; // %10 daha büyüt
            yesBtn.style.padding = (parseFloat(window.getComputedStyle(yesBtn).paddingTop) * 1.1) + 'px '