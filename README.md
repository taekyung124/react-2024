# react-2024
react, jsx, html, css, scss, javascript

## Installation
```
npm create vite@latest
```

## project setting
```
// 01. project name
my-app

// 현재 디렉토리에 세팅 시
.

// 02. select a framework
React

// 03. select a variant
TypeScript 
```

## package install
```
npm install
```

### `npm start`
Starts the development server.

### `npm run build`
Bundles the app into static files for production.

### `npm test`
Starts the test runner.

### `npm run eject`
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

## Plugins

#### eslint
```
npm i --save-dev eslint-plugin-react-hooks
```

## 그 외

### React Devaloper Tools

01. [리액트 devtool 설치](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
> `Components` : 현재 페이지에 로드된 React 컴포넌트 트리를 볼 수 있습니다. 각 컴포넌트를 선택하면 해당 컴포넌트의 props와 state를 확인할 수 있음
> <br>`Profiler` : 애플리케이션 성능을 분석하고 각 렌더링에 소요된 시간을 시각적으로 확인할 수 있음

02. 실행 시 아래 메세지가 뜰 경우
> Note that the development build is not suitable for production. Make sure to use the production build before deployment.

**프로덕션 빌드에서 실행**
```
// 프로덕션 빌드 생성
npm run build

// 프로덕션 빌드 완료 시
npm run preview
```

