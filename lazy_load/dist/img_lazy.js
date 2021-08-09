document.addEventListener("DOMContentLoaded", function () {
  //DOMContentLoaded : DOM(Document Object Model)이 모두 로딩되었을 때의 이벤트입니다.
  // 참고로 DOMContentLoaded와 비교되는 load 이벤트는 js, css, img 등 정적 자원 모두와 DOM이
  // 모두 로딩되었을 때를 나타내며 window.onload = e => {}로 씁니다.
  let lazyImages = Array.prototype.slice.call(
    document.querySelectorAll("img.lazy")
  );
  // ocument.querySelectorAll("img.lazy")를 하면 유사배열인 NodeList로 배열의 메서드 인 filter나 forEach를 쓰지 못하기 떄문
  let active = false;
  const lazyLoad = function () {
    if (active === false) {
      active = true;
      setTimeout(() => {
        lazyImages = lazyImages
          .map((lazyImage) => {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              window.getComputedStyle(lazyImage).display !== "none"
            ) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              return null;
            } else return lazyImage;
          })
          .filter((image) => image);
        if (!lazyImages.length) {
          document.removeEventListener("scroll", lazyLoad);
        } else active = false;
      }, 200);
    }
  };
  document.addEventListener("scroll", lazyLoad);
});
