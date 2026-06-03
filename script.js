const btnDetay = document.getElementById('btn-Detay');
const ekBilgiParagrafi = document.getElementById('ek-bilgi');

const btnEkle = document.getElementById('btn-Ekle');
const yeniYetenekInput = document.getElementById('yeni-yetenek-input');
const yetenekListesi = document.getElementById('yetenek-listesi');



if (btnDetay && ekBilgiParagrafi) {
    btnDetay.addEventListener('click', function() {
        if (ekBilgiParagrafi.classList.contains('gizli')) {
            ekBilgiParagrafi.classList.remove('gizli');
            btnDetay.textContent = "Daha Az Bilgi Göster";
        } else {
            ekBilgiParagrafi.classList.add('gizli');
            btnDetay.textContent = "Daha Fazla Bilgi Göster";
        }
    });
}



if (btnEkle && yeniYetenekInput && yetenekListesi) {
    btnEkle.addEventListener('click', function() {
        const inputDegeri = yeniYetenekInput.value.trim();

        if (inputDegeri === "") {
            alert("Lütfen çalışma planınız için geçerli bir hedef yazın!");
            return;
        }

        const yeniLi = document.createElement('li');


        yeniLi.textContent = inputDegeri;


        yeniLi.style.color = "#0ea5e9";
        yeniLi.style.fontWeight = "600";


        yetenekListesi.appendChild(yeniLi);


        yeniYetenekInput.value = "";
    });
}