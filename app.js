let num = [10, 15, 20, 30, 25, 56, 64, 72, 36, 100];
let toplam = 0;
let diziUzunluk = num.length;

//SAYILARIN  TOPLAMI
for (let i = 0; i < num.length; i++) {
    sayilarinToplami = num[i];
    toplam = toplam + sayilarinToplami;
}
console.log(toplam);

//SAYILARIN ORTALAMASI
let sayiOrtalamasi = toplam / diziUzunluk;
console.log("Ortalama", sayiOrtalamasi);

//EN BUYUK VE EN KUCUK DEGER BULMA
let buyukSayi = Math.max(10, 15, 20, 30, 25, 56, 64, 72, 36, 100);
console.log("Buyuk", buyukSayi);
////////////////////////////////////////////////////////////////////
let kucukSayi = Math.min(10, 15, 20, 30, 25, 56, 64, 72, 36, 100);
console.log("Kucuk", kucukSayi);

//KARESINI ALMA
for (let i = 0; i < num.length; i++) {
    let numKaresi = num[i] * num[i];
    console.log(numKaresi);
}

//KAREKOK ALMA
for (let i = 0; i < num.length; i++) {
    let sayilarinKoku = num[i];
    console.log(Math.sqrt(sayilarinKoku));
};