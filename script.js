
// burger menu 

 const hamburger = document.querySelector('.hamburger');
 const navmenu = document.querySelector('.nav-menu');
 hamburger.addEventListener('click', () => {
    hamburger.classList.toggle ("active");
    navmenu.classList.toggle ("active");
 })


 document.getElementById('submitbtn').addEventListener('click', function()
  { alert('your message was sent successfully') 
})


