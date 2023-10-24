# Redux 예제

## Redux란? 간단히 이해하기
  - ⭐ 간단히 말하자면 상태 관리를 직관적으로 할 수 있게 해주는 라이브러리
> 참고 : https://velog.io/@qf9ar8nv/%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%98%88%EC%A0%9C%EB%A5%BC-%ED%86%B5%ED%95%B4-Redux%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0

  - store라는 App 전역 상태 트리를 가지고 있는 중앙 저장소가 있음.
  - 이는 React App의 모든 컴포넌트와 연결되고, reducer를 통해서 state를 변경할 수 있다.(그림 참고)

<hr/>

### 1. Redux의 주요 개념
```
state : store에 저장되어 있는 상태값.
action : store에 저장된 상태를 변경시키는 방식.
reducer : action, old state를 받아서 new state로 변환시키는 함수
store : App의 전역 상태 저장소
```

### 2. redux 환경 세팅
  * Redux for React 앱 생성 시 
    ```node.js
    # Vite with our Redux+TS template
    # (using the `degit` tool to clone and extract the template)
    npx degit reduxjs/redux-templates/packages/vite-template-redux my-app

    # Next.js using the `with-redux` template
    npx create-next-app --example with-redux my-app
    ```
  * 기존 React 앱에 라이브러리 추가
    ```node.js
    # If you use npm:
    npm install react-redux

    # Or if you use Yarn:
    yarn add react-redux
    ```