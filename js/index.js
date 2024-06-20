// document.getElementById("btn_makasih").innerHTML = "Makasih yaw :3"

function scrollToAbout() {
  // Mengambil posisi dari elemen target
  var targetPosition = document.getElementById("About").offsetTop;

  // Menggeser posisi gulir dengan offset yang diberikan
  window.scrollTo({
    top: targetPosition - 45, // Sesuaikan offset yang diperlukan (misalnya, 100px di sini)
    behavior: "smooth" // Animasi gulir halus
  });
}
  function scrollToContact() {
    var targetPosition = document.getElementById("Contact").offsetTop;

    // Menggeser posisi gulir dengan offset yang diberikan
    window.scrollTo({
      top: targetPosition - 45, // Sesuaikan offset yang diperlukan (misalnya, 100px di sini)
      behavior: "smooth" // Animasi gulir halus
    });
  }
    function scrollToHome() {
      var targetPosition = document.getElementById("Home").offsetTop;

      // Menggeser posisi gulir dengan offset yang diberikan
      window.scrollTo({
        top: targetPosition - 45, // Sesuaikan offset yang diperlukan (misalnya, 100px di sini)
        behavior: "smooth" // Animasi gulir halus
      });
}
// mencari nilai height dan menampilkan hasilnya di konsol
var bodyHeight = document.body.clientHeight;
console.log("Tinggi body pada tingkat zoom 100%: " + bodyHeight + "px");
// mencari nilai width dan menampilkan hasilnya di konsol
var bodyWidth = document.body.clientWidth;
console.log("Lebar body pada tingkat zoom 100%: " + bodyWidth + "px");

function showLike() {
  var likeEffect = document.getElementById('likeEffect');
  likeEffect.style.display = 'block'; // Menampilkan efek
  setTimeout(function () {
    likeEffect.style.display = 'none'; // Menyembunyikan efek setelah animasi selesai
  }, 1000); // Waktu animasi (1 detik)
}

// JavaScript untuk memulai animasi ketik pada teks saat halaman dimuat
window.addEventListener('DOMContentLoaded', (event) => {
  const elements = document.querySelectorAll('.typing-animation');
  elements.forEach((element) => {
    element.style.animationPlayState = 'running'; // Memulai animasi
  });
});
