document.addEventListener('DOMContentLoaded', function () {
   const menuToggle = document.getElementById('menu-toggle');
   const sidebar = document.getElementById('sidebar');
   const closeButton = document.getElementById('close-btn');
   const mainContent = document.querySelector('main');

   menuToggle.addEventListener('click', () => {
      toggleSidebar();
   });

   closeButton.addEventListener('click', () => {
      toggleSidebar();
   });

   mainContent.addEventListener('click', () => {
      if (sidebar.style.left === '0px') {
         toggleSidebar();
      }
   });

   function toggleSidebar() {
      if (sidebar.style.left === '-250px') {
         sidebar.style.left = '0';
         mainContent.style.marginLeft = '250px'; // Pastikan konten utama geser ke kanan saat navigasi terbuka
      } else {
         sidebar.style.left = '-250px';
         mainContent.style.marginLeft = '0'; // Kembalikan margin utama ke 0 saat navigasi tertutup
      }
   }
});
