# lazy load

페이지를 처음 로드할 때 저용량으로 저장된 파일을 불러오고 스크롤을 통해 해당 페이지의 내용이 드러날 때 고화질 이미지파일을 가져오는 것을 lazy load라 한다.

### 태그의 목록을 유사배열 객체에서 객체로 바꾸어 주는 방법

```
  let lazyImages = Array.prototype.slice.call(
    document.querySelectorAll("img.lazy")
  );
```

- querySelectorAll을 통해 노드를 가져오면 배열이 아니라 NodeList라는 유사배열 객체가 생성됨.
- 유사배열 객체의 형태는 아래와 같음.(숫자를 키로 가지며 length가 있음.)

```
  {0:'apple', 1:'banana', 2:'pineapple', length:3}
```

- 이를 Array.prototype.slice.call 혹은 [].slice.call을 통해 배열로 바꾸어 주어야 map이나 filter와 같은 배열을 메소드를 사용할 수 있음

### 고화질로 바꾸는 과정

- html img 태그에 data-set에 고화질 이미지를 지정해 놓고 저화질을 src속성에 넣어둔다.
- 스크롤을 통해 화면에 등장하면(코드는 아래와 같음)

```
  lazyImage.getBoundingClientRect().top <= window.innerHeight
```

- 해당이미지의 src를 data-set에 저장된 것으로 바꾼다.
- 그런 후 null을 집어넣는다(리턴한다).(map을 사용했다..)
- 그런 다음 filter를 사용해 해당 배열에서 삭제한다.
- 배열의 길이가 0이 되면 즉, 모든 이미지가 고화질로 로드 되었다면, 스크롤에 반응하는 이벤트 리스너를 삭제한다.
