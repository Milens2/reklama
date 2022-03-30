(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show'); /*добавляем/удаляем класс back_to_top-show*/ 
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show'); /*«видимой»/»невидимой*/
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll); /*отслеживает прокрутку документа*/
    goTopBtn.addEventListener('click', backToTop);  /*отслеживает нажатие на кнопку и выполняет действие*/
  })();