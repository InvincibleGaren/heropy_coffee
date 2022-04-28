// 검색 영역과 입력창 요소를 가져오기
const searchEL = document.querySelector(".search");
const searchInputEL = searchEL.querySelector('input');

// 검색 영역을 클릭 시 입력창에 focus 이벤트를 발생시킴
searchEL.addEventListener('click', function() {
  searchInputEL.focus();
})

// 입력창에 focus 이벤트가 발생할 placeholder 값을 변경.
// 추가로 검색 영역에 focused 클래스명을 추가
searchInputEL.addEventListener('focus', function(){
  searchEL.classList.add('focused');
  searchInputEL.setAttribute('placeholder', '통합검색');
});

// 입력창에 blur 이벤트가 발생할 placeholder 값을 비움.
// 추가로 검색 영역에 focused 클래스명 삭제.
searchInputEL.addEventListener('blur', function(){
  searchEL.classList.remove('focused');
  searchInputEL.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", function(){
  if(this.window.scrollY > 500){
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display : "none"
    });
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x:0
    });
  }else{
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display : "block"
    });
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x:100
    });
  }
})

toTopEl.addEventListener("click", function() {
  gsap.to(window, .6, {
    scrollTo: 0
  });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7,
    opacity: 1
  });
})

new Swiper(".notice .swiper", {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper(".promotion .swiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetWeen: 10,
  centeredSlides: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true
  },
  navigation:{
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next"
  }
})

const promotionEl = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click", function(){
  if(promotionEl.classList.contains("hide")){
    promotionEl.classList.remove("hide");
  }else{
    promotionEl.classList.add("hide");
  }
})

gsap.to(".floating1", 1.5, {
  delay: 1,
  y: 100,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
})

gsap.to(".floating2", 2, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
})

gsap.to(".floating3", 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
})

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});