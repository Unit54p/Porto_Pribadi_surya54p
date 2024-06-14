// Teks yang akan ditampilkan satu per satu
const txt_nama = ["Surya Ario Pratama"];
const txt_caption_halAwal1 = ["hello world!, my name is"];
const txt_caption_halAwal2 = ["i'm web developer"];

// Menginisialisasi indeks teks dan elemen teks
let textIndexJudul = 0;
let charIndexJudul = 0;
let textIndexCaption1 = 0;
let charIndexCaption1 = 0;
let textIndexCaption2 = 0;
let charIndexCaption2 = 0;
const elementJudul = document.getElementById('txt_judul_anim');
const elementCaption1 = document.getElementById('txt_biasa_anim1');
const elementCaption2 = document.getElementById('txt_biasa_anim2');


// Fungsi untuk menampilkan teks satu per satu
function txt_judul_anim() {
  if (textIndexJudul < txt_nama.length) {
    if (charIndexJudul < txt_nama[textIndexJudul].length) {
      elementJudul.textContent += txt_nama[textIndexJudul].charAt(charIndexJudul);
      charIndexJudul++;
      setTimeout(txt_judul_anim, 60); // Waktu penundaan antara setiap karakter (misal: 100ms)
    } else {
      elementJudul.textContent += ''; // Hentikan mengetik
      textIndexJudul++;
      charIndexJudul = 0;
      setTimeout(txt_judul_anim, 1000); // Waktu penundaan setelah satu teks selesai (misal: 1 detik)
    }
  }
}

function txt_biasa_anim1() {
  if (textIndexCaption1 < txt_caption_halAwal1.length) {
    if (charIndexCaption1 < txt_caption_halAwal1[textIndexCaption1].length) {
      elementCaption1.textContent += txt_caption_halAwal1[textIndexCaption1].charAt(charIndexCaption1);
      charIndexCaption1++;
      setTimeout(txt_biasa_anim1, 45); // Waktu penundaan antara setiap karakter (misal: 100ms)
    } else {
      elementCaption1.textContent += ''; // Hentikan mengetik
      textIndexCaption1++;
      charIndexCaption1 = 0;
      setTimeout(txt_biasa_anim1, 1000); // Waktu penundaan setelah satu teks selesai (misal: 1 detik)
    }
  }
}

function txt_biasa_anim2() {
  if (textIndexCaption2 < txt_caption_halAwal2.length) {
    if (charIndexCaption2 < txt_caption_halAwal2[textIndexCaption2].length) {
      elementCaption2.textContent += txt_caption_halAwal2[textIndexCaption2].charAt(charIndexCaption2);
      charIndexCaption2++;
      setTimeout(txt_biasa_anim2, 60); // Waktu penundaan antara setiap karakter (misal: 100ms)
    } else {
      elementCaption2.textContent += ''; // Hentikan mengetik
      textIndexCaption2++;
      charIndexCaption2 = 0;
      setTimeout(txt_biasa_anim2, 1000); // Waktu penundaan setelah satu teks selesai (misal: 1 detik)
    }
  }
}


// Memulai animasi mengetik ketika halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  txt_judul_anim();
  txt_biasa_anim1();
  txt_biasa_anim2();
});
