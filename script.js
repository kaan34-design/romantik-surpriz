document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionContainer = document.getElementById('question-container');
    const messageContainer = document.getElementById('message-container');
    const question = document.getElementById('question');

    let noClickCount = 0;

    yesBtn.addEventListener('click', () => {
        questionContainer.style.display = 'none';
        messageContainer.classList.remove('hidden');
    });

    // DOKUNUŞ: Hayır butonuna Terazi burcunun kararsızlığına gönderme yapan esprili yazılar ekledim.
    const noButtonPhrases = [
        "Hayır",
        "Emin misin?",
        "Kararsız kalmak normal...",
        "Ama bu karar kolay 😉",
        "Terazin şaşmasın bence...",
    ];

    noBtn.addEventListener('click', () => {
        noClickCount++;
        
        const scale = 1 + noClickCount * 0.8;
        yesBtn.style.transform = `scale(${scale})`;
        
        // "Hayır" butonunun yazısını her tıklamada değiştir
        if(noClickCount < noButtonPhrases.length){
            noBtn.innerText = noButtonPhrases[noClickCount];
        }

        if (noClickCount === 5) {
            question.style.display = 'none';
            noBtn.style.display = 'none';
            
            yesBtn.classList.add('fullscreen-button');
            // DOKUNUŞ: Son buton yazısını da temaya uygun hale getirdim.
            yesBtn.innerText = "Denge Bulundu! ✨";
        }
    });
});