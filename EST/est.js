document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeBtn");
  
    menuIcon.addEventListener("click", () => {
      sidebar.style.width = "250px"; // Open the sidebar
    });
  
    closeBtn.addEventListener("click", () => {
      sidebar.style.width = "0"; // Close the sidebar
    });
  });
  