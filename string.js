/*
indexOf()
mencari dan (jika di temukan) mengambalikan nomor indexs
karakter atau substring yang di cari dalam string, jika
tidak di temukan, di kembalikan -1.
*/
const string = "Nama Aku Zeiyy, Aku hoby membaca, dengar music, dan main voly";
const index = string.indexOf("Zeiyy");
console.log(index); //Output: 9

/*
toLowerCase()
dapat mengambalikan string dengan semua karakternya
menjadi huruf kecil.
*/
const string = "Zeiyy Belajar JavaScript";
const index = string.toLowerCase();
console.log(index); //Output: zeiyy belajar javascript

/*
includes()
digunakan untuk memeriksa apakah sebuah string mengandung
string atau karakter yang di tentukan.
*/
const string = "Belajar Javascript Zeiyy Sangat suka";
const index = string.includes("Zeiyy");
console.log(index); //Output: true

/*
endsWith()
fungsi memeriksa apakah sebuah string di akhiri dengan string atau
dengan karakter di tentukan.
*/
const string = "Belajar Javascript Zeiyy Sangat suka";
const index = string.endsWith("suka");
console.log(index); //Output: true

/*
repeat()
ini mengambalikan string baru dengan jumlah 
salinan tertentu dan string yang ada.
*/
const string = "Oke_Gas ";
const index = string.repeat(3);
console.log(index); //Output: Oke_Gas Oke_Gas Oke_Gas