
const closeMenu = document.querySelector('.menu__close'),
      hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay');

      hamburger.addEventListener('click', ()=> {
          menu.classList.add('active');
      });

      closeMenu.addEventListener('click', ()=> {
        menu.classList.remove('active');
    });


    overlay.addEventListener('click', (e)=> {
      if(e.target === overlay) {
        menu.classList.remove('active');
      }
  })



const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

      counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
      });   



new WOW().init();      
      
      
    
      