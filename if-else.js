async function nilai_siswa(input_nilai){
  if (input_nilai >= 90){
    return "Nilai A";
  } else if (input_nilai >= 80){
    return "Nilai B";
  } else if (input_nilai >= 70){
    return "Nilai C";
  } else {
    return "Nilai D";
  }
}

async function ambil_array(){
  const data = {
    nama: 'Zainudin',
    umur: 20,
    hoby: ['Membaca', 'Dengar musik', 'Main Voly']
  }
  if (data?.hoby.length){
    let hasil = [];
    for (let x = 0; x < data?.hoby.length; x++){
       hasil.push(data.hoby[x]);
    }
    return hasil
  } else {
    return "Array Tidak Ada"
  }
}