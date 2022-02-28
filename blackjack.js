const deck = {
        twoClubs:"assets/2C.png",
        twoDiamonds:"assets/2D.png",
        twoHearths:"assets/2H.png",
        twoSpades:"assets/2S.png",
        twoClubs:"assets/2C.png",
        threeDiamonds:"assets/3D.png",
        threeHearths:"assets/3H.png",
        threeSpades:"assets/3S.png",
        threeClubs:"assets/3C.png",
        fourDiamonds:"assets/4D.png",
        fourHearths:"assets/4H.png",
        fourSpades:"assets/4S.png",
        fourClubs:"assets/4C.png",
        fiveDiamonds:"assets/5D.png",
        fiveHearths:"assets/5H.png",
        fiveSpades:"assets/5S.png",
        fiveClubs:"assets/5C.png",
        sixDiamonds:"assets/6D.png",
        sixHearths:"assets/6H.png",
        sixSpades:"assets/6S.png",
        sixClubs:"assets/6C.png",
        sevenDiamonds:"assets/7D.png",
        sevenHearths:"assets/7H.png",
        sevenSpades:"assets/7S.png",
        sevenClubs:"assets/7C.png",
        eigthDiamonds:"assets/8D.png",
        eigthHearths:"assets/8H.png",
        eigthSpades:"assets/8S.png",
        eigthClubs:"assets/8C.png",
        nineDiamonds:"assets/9D.png",
        nineHearths:"assets/9H.png",
        nineSpades:"assets/9S.png",
        nineClubs:"assets/9C.png",
        tenDiamonds:"assets/TD.png",
        tenHearths:"assets/TH.png",
        tenSpades:"assets/TS.png",
        tenClubs:"assets/TC.png",
        jackDiamonds:"assets/JD.png",
        jackHearths:"assets/JH.png",
        jackSpades:"assets/JS.png",
        jackClubs:"assets/JC.png",
        queenDiamonds:"assets/QD.png",
        queenHearths:"assets/QH.png",
        queenSpades:"assets/QS.png",
        queenClubs:"assets/QC.png",
        kingDiamonds:"assets/KD.png",
        kingHearths:"assets/KH.png",
        kingSpades:"assets/KS.png",
        kingClubs:"assets/KC.png",
        aceDiamonds:"assets/AD.png",
        aceHearths:"assets/AH.png",
        aceSpades:"assets/AS.png",
        aceClubs:"assets/AC.png",
        backCardRed:"assets/back-red.png",
        backCardBlack:"assets/back-black.png",
};

const deckArray = Object.keys(deck);

console.table(deckArray)

    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', deck.aceClubs);
    // cardImage.setAttribute("height", "315");
    // cardImage.setAttribute("width", "225");
    document.getElementById('board').appendChild(cardImage);


console.log(deck);