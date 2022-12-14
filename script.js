let OdevAdresi = fetch("http://api.open-notify.org/astros.json");
let yanitAl = OdevAdresi.then((yanit) => yanit.json());

yanitAl.then((astronotlar) => {
    let rootEleman = document.querySelector("#root");
    let toplamKisi = document.createElement("p");
    toplamKisi.classList.add("toplamkisi");
    toplamKisi.textContent = "Uzay istasyonlarında şuan görev kişi sayısı: " + astronotlar.number;
    rootEleman.appendChild(toplamKisi);

    for (i = 0; i < 10; i++) {
        let astroName = document.createElement("h2");
        astroName.classList.add("astroName");
        let astroCraft = document.createElement("h4");
        let mesaj=document.createElement("h3");
        mesaj.classList.add("mesajsusle");
        mesaj.textContent="İstasyona varma durumu:" + astronotlar.message;
        astroName.textContent = astronotlar.people[i].name;
        astroCraft.textContent = "Bulunduğu istasyon:" + astronotlar.people[i].craft;
        rootEleman.appendChild(astroName);
        rootEleman.appendChild(astroCraft);
        rootEleman.appendChild(mesaj);
    }
});