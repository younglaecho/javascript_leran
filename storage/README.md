# Web Storage

- 아래의 두 storage는 HTML5에 추가된 내용으로 cookie와는 다르게 네트워크 요청 시 서버로 전송되지 않습니다.
- 대부분의 브라우저에서 2MB 이상의 데이터를 저장할 수 있음.
- cookie와 다른 점은 조작이 모두 자바스크립트 내에서만 수행된다는 것.
- 웹 스토리지 객체는 도메인, 포트로 정의되는 오리진에 묶여있음. 따라서 도메인이나 포트가 다르면 데이터에 접근할 수 없음.
- 두 스토리지 객체는 Map과 유사한 메서드와 프로퍼티를 제공함.

- setItem(key, value) – 키-값 쌍을 보관합니다.
- getItem(key) – 키에 해당하는 값을 받아옵니다.
- removeItem(key) – 키와 해당 값을 삭제합니다.
- clear() – 모든 것을 삭제합니다.
- key(index) – 인덱스(index)에 해당하는 키를 받아옵니다.
- length – 저장된 항목의 개수를 얻습니다.

## 일반적인 형태

- 키와 값으로 반드시 문장열을 사용함
- JSON을 사용하면 객체를 쓸 수 있음

```
  localStorage.setItem('nmae', 'cho)
```

위의 내용을 실행한 뒤 브라우저를 닫고 다시 연 다음 아래를 실행하면 이런 결과가 나옴

```
alert( localStorage.getItem('name') ); // 'cho'
```

## 일반적인 객체처럼 사용할 수 있으나 추천되지 않음.

```
  localStorage.test = 2
  alert( localStorage.test )
  delete localStorage.test
```

## localStorage

사용자의 브라우저나 컴퓨터를 껐다가 켜도 window.localStorage에 남아 있음

## sessionStorage

탭을 끄면 저장된 내용이 사라짐.

## 스토리지 이벤트

localStroge 나 sessionStroge의 데이터가 갱신될때, storage 이벤트가 실행됨. storage 이벤트는 아래와 같은 프로퍼티를 지원함.

- key – 변경된 데이터의 키(.clear()를 호출했다면 null)
- oldValue – 이전 값(키가 새롭게 추가되었다면 null)
- newValue – 새로운 값(키가 삭제되었다면 null)
- url – 갱신이 일어난 문서의 url
- storageArea – 갱신이 일어난 localStorage나 sessionStorage 객체
