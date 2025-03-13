export function aboutUsObserverFunc() {
  const allTheEleAnimLeftRight = document.querySelectorAll(
    ".intersectionAnimationLeftRight"
  );

  let options = {
    // rootMargin: "-20px",
    threshold: 0.2,
  };
  function callback(e) {
    e.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.animation =
          "aboutUsAniLeftToRight 1s ease-in-out forwards";
      }
    });
  }
  const observer = new IntersectionObserver(callback, options);
  allTheEleAnimLeftRight.forEach((ele) => {
    observer.observe(ele);
  });

  const allTheEleAnimRightLeft = document.querySelectorAll(
    ".intersectionAnimationRightLeft"
  );

  function callback2(e) {
    e.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.animation =
          "aboutUsAniRightToLeft 1s ease-in-out forwards";
      }
    });
  }
  const observer2 = new IntersectionObserver(callback2, options);
  allTheEleAnimRightLeft.forEach((ele) => {
    observer2.observe(ele);
  });
}

aboutUsObserverFunc();
