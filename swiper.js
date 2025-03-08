var swiper =  new Swiper('.mySwiper', {
  direction: 'horizontal', // 기본값. 수직은 'vertical'
  slidesPerView : 'auto',  // 화면에 보여질 슬라이드의 갯수(숫자도 가능)
  slidesPerGroup : 3, // 그룹으로 묶을 슬라이드의 갯수 (slidePerView와 같으면 좋음)
  spaceBetween: 10,  // 슬라이드 사이의 여백
  centeredSlides: true,  //  첫 슬라이드 시작을 중앙부터
  loop: true,  //  슬라이드 반복 여부
  loopAdditionalSlides: 1,  // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 오류 수정
  loopFillGropWithBlank: true,  // slidePerView를 숫자로 설정한 경우 스와이프 시 숫자(그룹)만큼 넘어감
  speed: 300,  // 슬라이드 속도 조절. 기본값 300
  autoplay: {
    delay: 2000,  // 1000 = 1초
    disableOnInteraction: false,  //  슬라이드를 움직인 후 자동재생 여부
  },
  navigation: {  // navigation 담은 태그
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {  // pagination 호출
    el: '.swiper-pagination',  // pagination을 담은 태그
    clickable: true,  // 클릭가능 여부
    type: 'bullet',  // 기본값
    dynamicBullets: true,  // active 된 불릿이 제일 크게 보이게 함
    type: 'progressbar',  // 슬라이드 순번 막대그래프 표기
    type: 'fracticon',  // 슬라이드 순번 숫자 표기
  },
  scrollbar: {  // swiper 스크롤바 생성
    el: '.swiper-scrollbar',
    hide: 'true',  // 슬라이드를 움직이지 않을 경우 스크롤바 숨기기
  },
  grabCursor: true,  // 커서를 손 모양으로
});