/* notice swiper */

    var swiper1 = new Swiper(".notice .swiper-container", {
    direction: "vertical", // 방향
    slidesPerView : 'auto',  // 화면에 보여질 슬라이드의 갯수(숫자도 가능)
    slidesPerGroup : 1, // 그룹으로 묶을 슬라이드의 갯수 (slidePerView와 같으면 좋음)
    spaceBetween: 10,  // 슬라이드 사이의 여백
    centeredSlides: true,  //  첫 슬라이드 시작을 중앙부터
    loop: true,  //  슬라이드 반복 여부
    loopAdditionalSlides: 1,  // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 오류 수정
    loopFillGropWithBlank: true,  // slidePerView를 숫자로 설정한 경우 스와이프 시 숫자(그룹)만큼 넘어감
    speed: 300,  // 슬라이드 속도 조절. 기본값 300
    autoplay: {
        delay: 3000,  // 1000 = 1초
        disableOnInteraction: true,  //  슬라이드를 움직인 후 자동재생 여부
    }
  });

/* section swiper */
window.addEventListener("load", () => {
  new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    loopedSlides: 5, // 복제 슬라이드를 명시적으로 설정
    loopAdditionalSlides: 5, // 추가 복제 슬라이드 설정
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    loopPreventsSlide: false, // 경고 방지
  });
});



/* footer awards swiper */
var swiper3 = new Swiper(".awards_swiper", {
  slidesPerView: 5, // 한 번에 표시할 슬라이드 수
  spaceBetween: 10, // 슬라이드 간의 간격  
  centeredSlides: true, //슬라이드 가운데 정렬
  loopedSlides: 5,
  loop: true, // 슬라이드 루프(무한 회전) 활성화

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets', // 👉 이거 명시해줘야 의도대로 동작
  }
  ,  
  autoplay: {
    delay: 7000, // 3초마다 자동 재생
    disableOnInteraction: false // 사용자 상호 작용 후에도 자동 재생 유지
  },  
});

const promotion = document.querySelector(".swiper");
const promotionbtn = document.querySelector('.btn');
let isHidePromotion = false;

promotionbtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotion.classList.add('hide');
  }else {
    promotion.classList.remove('hide');
  }
})