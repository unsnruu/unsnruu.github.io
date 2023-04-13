# 프로젝트 소개

안녕하세요 류웅선의 포트폴리오 프로젝트 입니다.</br>
현재 계신 곳은 `develop` 브랜치입니다.</br>
실제 배포된 상황을 확인하고 싶으시다면 [여기](https://unsnruu.github.io/)를 방문해주세요!

## 사용하는 기술 스택

<div>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  
<img src="https://img.shields.io/badge/lit-324FFF?style=for-the-badge&logo=lit&logoColor=white"></img>
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

</div>

<details>
  <summary><h3>왜 Lit을 사용했나요?</h3></summary>
  
  [이슈 9](https://github.com/unsnruu/unsnruu.github.io/issues/9)를 참고해 주세요.

기존에는 별도의 라이브러리를 사용하지 않고 프로젝트를 진행하고 있었습니다.</br>
[types](https://github.com/unsnruu/unsnruu.github.io/tree/legacy/230311/src/types) 폴더에서 _component_ 클래스를 정의하여 컴포넌트를 생성 시 확장하는 방식으로 사용하고 있었습니다.</br>
스타일의 경우 [utils](https://github.com/unsnruu/unsnruu.github.io/tree/legacy/230311/src/utils)의 함수들을 이용해서 정의하였습니다.</br>
(_실제 코드를 보고 싶으시다면 [legacy/230311](https://github.com/unsnruu/unsnruu.github.io/tree/legacy/230311) 브랜치를 확인해 주세요_)</br>

위의 방식이 `lit`이 컴포넌트를 사용하는 방식과 닮았다고 느꼈습니다.</br>

1. Component를 extend 한다 = LitElement를 extend한다
2. *createStyleProps*로 스타일을 정의한다 = css 함수를 사용하여 스타일을 정의한다.
3. _getTemplate_ 메서드를 통해서 렌더링을 한다 = _render_ 메서드를 정의하고 html 함수를 사용해 렌더링을 한다.

하지만 `lit`의 경우 vscode에 plugin을 사용해서 보다 편리하게 작성할 수 있었습니다. </br>
또한 이벤트 핸들러를 부착하기 훨씬 용이하다고 생각했습니다.</br>
따라서 `lit`을 사용하기로 채택하였습니다.

</details>
