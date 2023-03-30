let hamburger=document.getElementById('hamburger'); 
let title=document.getElementById('title'); 
let nav_phone=document.getElementById('nav_phone'); 



hamburger.addEventListener("click", function() {
    if (nav_phone.style.display === "none") {
      nav_phone.style.display = "flex";
      title.classList.add("active"); 
      hamburger.style.filter = "invert()";
    } else {
      nav_phone.style.display = "none";
      title.classList.remove("active"); 
      hamburger.style.filter = "none";
    }
  });
