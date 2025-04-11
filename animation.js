gsap.registerPlugin(ScrollTrigger);

// 👉 공통 설정 함수
function animateFromRight(selectorList) {
    gsap.utils.toArray(selectorList).forEach((el, i) => {
      gsap.fromTo(el,
        { x: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none resume none" // 👈 내려올 때만 다시 재생
          },
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrub:1,
          delay: i * 0.3,
          ease: "expo.out",
        }
      );
    });
  }

  function animateFromLeft(selectorList) {
    gsap.utils.toArray(selectorList).forEach((el, i) => {
      gsap.fromTo(el,
        { x: -100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none resume none" // 👈 내려올 때만 다시 재생
          },
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrub:1,
          delay: i * 0.3,
          ease: "expo.out",
        }
      );
    });
  }


  // season_product 요소
  animateFromRight([".season2",".season3",".season_product .inner a"]);
  animateFromLeft(['.season1']);

  // reserve 요소
  animateFromRight(['.reserve_coffee']);
  animateFromLeft([".reserve_logo", ".reserve_text", ".reserve .inner a"]);

  // favorite 요소
  animateFromLeft([".favorite_1", ".favorite_2", ".favorite .inner a"]);

  // find_store 요소
  animateFromRight([".store_text1", ".store_text2",".find_store .inner a"]);
  animateFromLeft([".store_pic1", ".store_pic2"]);
