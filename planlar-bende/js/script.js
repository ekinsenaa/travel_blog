const sehirAdi = document.querySelector("#sehirAdi");
const ulke = document.querySelector("#ulke");
const tarih = document.querySelector("#tarih");
const puan = document.querySelector("#puan");
const mesaj = document.querySelector("#mesaj");
const kaydet = document.querySelector("#kaydet");

kaydet.addEventListener("click", function () {
    if (sehirAdi.value === "") {
        sehirAdi.classList.add("hata");
    } else {
        sehirAdi.classList.remove("hata");
    }

    if (ulke.value === "") {
        ulke.classList.add("hata");
    } else {
        ulke.classList.remove("hata");
    }

    if (tarih.value === "") {
        tarih.classList.add("hata");
    } else {
        tarih.classList.remove("hata");
    }

    if (puan.value === "") {
        puan.classList.add("hata");
    } else {
        puan.classList.remove("hata");
    }

    if (sehirAdi.value !== "" && ulke.value !== "" && tarih.value !== "" && puan.value !== "") {
        console.log(sehirAdi.value, ulke.value, tarih.value, Number(puan.value));
        mesaj.textContent = "Şehir kaydedildi (şimdilik sadece konsolda görünüyor).";
        sehirAdi.value = "";
        ulke.value = "";
        tarih.value = "";
        puan.value = "";
    } else {
        mesaj.textContent = "Lütfen kırmızı alanları doldurun.";
    }
    mesaj.classList.remove("gizli");
});