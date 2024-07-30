# 2024.07.17

## 1. 파일 번들링

Webpack은 엔트리 포인트로 지정된 파일(./src/index.js)을 시작으로, 해당 파일에서 가져오는 모든 모듈과 의존성을 하나의 파일(main.js)로 번들링합니다.

## 2. 코드 압축 및 최적화

Production 모드에서는 Webpack이 기본적으로 코드 압축(Uglify) 및 최적화 작업을 수행합니다. 이를 통해 번들 파일의 크기를 줄이고 로드 속도를 향상시킵니다.
구체적으로는:

- 코드 압축: 코드를 최소화하고 불필요한 공백과 주석을 제거합니다.
- 난독화: 변수와 함수의 이름을 단축하여 파일 크기를 줄입니다.

## 3. 모듈 합병

Webpack은 각 모듈을 하나의 파일로 합병하여 필요한 모듈들을 함께 묶습니다. 이 과정에서 CommonJS, ES6 모듈, AMD 등의 모듈 포맷을 지원합니다.

## 4. 환경 변수 설정

Production 모드에서는 process.env.NODE_ENV가 'production'으로 설정됩니다. 이를 통해 코드 내에서 환경에 따라 다른 동작을 수행할 수 있습니다.

## 5. 최적화된 로더 사용

Production 모드에서는 Webpack이 일부 최적화된 로더를 사용합니다. 예를 들어, Babel 로더는 production 모드에서 코드 변환을 더 최적화할 수 있습니다.

## 6. 플러그인 적용

Webpack은 기본적으로 몇 가지 플러그인을 사용하여 최적화 작업을 수행합니다. 예를 들어, TerserPlugin을 사용하여 자바스크립트 코드를 압축합니다.
Webpack의 기본 설정 안에는 몇 가지 기본 플러그인이 포함되어 있습니다. 특히, production 모드에서는 특정 플러그인이 자동으로 활성화되어 최적화를 돕습니다.
아래에 Webpack이 production 모드에서 기본으로 사용하는 주요 플러그인들을 설명하겠습니다.

## 기본 플러그인들

### DefinePlugin

이 플러그인은 process.env.NODE_ENV를 'production'으로 설정하여, 코드 내부에서 환경에 따라 동작을 다르게 할 수 있게 합니다.
예를 들어, if (process.env.NODE_ENV === 'production') { ... } 같은 조건문이 있습니다.

### TerserPlugin

이 플러그인은 자바스크립트 코드를 난독화하고 압축합니다.
기본적으로 production 모드에서 활성화되어 코드 크기를 최소화합니다.

### ModuleConcatenationPlugin

이 플러그인은 스코프 호이스팅(scope hoisting)을 통해 더 빠르고 작은 번들을 생성합니다.
모듈 간의 중복된 코드를 줄이고, 실행 속도를 향상시킵니다.

### NoEmitOnErrorsPlugin

컴파일 도중 에러가 발생했을 때, 번들을 생성하지 않도록 합니다.
이로 인해 실패한 빌드가 배포되지 않도록 합니다.

### EnvironmentPlugin

환경 변수를 설정하는 플러그인으로, process.env.NODE_ENV와 같은 변수를 설정합니다.

기본 설정으로 인한 플러그인 활성화 Webpack이 production 모드에서 기본적으로 활성화하는 플러그인들은 아래와 같은 명령어를 통해 확인할 수 있습니다:

`webpack --mode production`

이 명령어를 실행하면, Webpack은 기본적으로 위에서 언급한 플러그인들을 활성화하여 번들링 과정을 최적화합니다.

# 요약

현재 상황에서, production 모드의 Webpack이 수행하는 주요 작업은 다음과 같습니다:

- 모든 모듈과 의존성을 하나의 번들 파일로 묶기
- 코드 압축 및 난독화
- 환경 변수 설정
- 최적화된 로더 사용
- 기본 플러그인 적용을 통한 추가 최적화
- 이를 통해 로드 속도가 빠르고, 최적화된 번들 파일을 생성하게 됩니다.

# 2024.07.19

## 이미지 로더와 CSS 파일의 차이점

### 이미지 로더 (JavaScript)

- JavaScript 파일에서 이미지를 직접 임포트하고 사용하는 경우, Webpack은 이미지를 번들링하고 해당 경로를 처리하여 올바른 URL로 변환합니다.
- 예를 들어, index.js에서 import Icon from './icon.png';와 같이 이미지를 임포트하면, Webpack은 이미지를 번들링하고 Icon 변수에 올바른 경로를 할당합니다.
  const myIcon = new Image(); myIcon.src = Icon; 코드에서 Icon 변수는 번들된 이미지의 URL을 가리키므로, 이미지를 HTML 요소에 추가할 수 있습니다.

### CSS 파일

- CSS 파일에서 이미지를 사용하면, Webpack의 css-loader와 style-loader가 이미지를 처리하여 올바른 URL로 변환합니다.
- background: url('./icon.png');와 같이 CSS에서 이미지를 사용하는 경우, Webpack은 이미지를 번들링하고 CSS 파일 내에서 사용될 수 있는 URL로 변환합니다.
- CSS 파일을 import './style.css';로 임포트하면, Webpack은 CSS 파일을 JavaScript 파일에 포함시키고 스타일을 HTML 문서에 적용합니다.

### 차이점

- CSS 파일을 임포트하는 경우:
  - 스타일이 적용되어 .hello 클래스가 있는 요소에 빨간색 텍스트 색상과 백그라운드 이미지가 적용됩니다.
  - 백그라운드 이미지는 CSS에서 정의된 대로 적용됩니다.
- CSS 파일을 임포트하지 않는 경우:
  - 스타일이 적용되지 않으므로 .hello 클래스가 있는 요소에 텍스트 색상과 백그라운드 이미지가 적용되지 않습니다.
  - JavaScript에서 직접 추가한 이미지는 여전히 DOM에 추가됩니다. 이는 index.js에서 myIcon.src = Icon;로 설정된 이미지입니다.

### 요약

- CSS 파일을 임포트하면 스타일이 적용되며, CSS 내의 백그라운드 이미지도 올바르게 로드됩니다.
- CSS 파일을 임포트하지 않으면 JavaScript에서 직접 추가한 이미지는 DOM에 추가되지만, CSS 스타일과 백그라운드 이미지는 적용되지 않습니다.
- 이를 통해 CSS 파일 임포트의 중요성과 이미지 로더의 역할을 이해할 수 있습니다. CSS 파일을 임포트함으로써 스타일이 적용되고, CSS에서 정의한 이미지가 올바르게 로드됩니다.

# 2024.07.24

## OUTPUT MANAGEMENT

- 이전까지는 모든 에셋을 `index.html` 파일에 수동으로 추가했었습니다. 하지만 엔트리 포인트의 이름을 변경하거나 새 엔트리 포인트를 추가하면 index.html 은 이전에 수동으로 추가한 에셋의 이름을 참조합니다. `HtmlWebpackPlugin` 플러그인을 통하여 dist 안에 `index.html` 파일이 존재하더라도 새로 생성된 파일로 대체하며, 모든 번들이 자동으로 `index.html` 파일에 추가됩니다.

- 사용하는 파일만 생성되도록 빌드 전 `/dist` 폴더를 정리해주는 옵션인 output.clean 옵션이 있습니다.

## DEVELOPMENT

### USING SOURCEMAP

- webpack이 소스 코드를 번들로 묶을 때, 오류와 경고의 원래 위치를 추적하기 어려울 수 있습니다. 예를 들어, 세 개의 소스 파일(a.js, b.js, 그리고 c.js)을 하나의 번들로 묶고 하나의 소스 파일이 오류가 있는 경우, 스택 추적은 단순히 bundle.js를 가리킵니다.
  
- 오류와 경고를 쉽게 추적할 수 있도록, JavaScript는 컴파일된 코드를 원래 소스로 매핑하는 소스맵을 제공합니다. b.js에서 오류가 발생한 경우, 소스맵에서 정확히 알려줍니다.

  - 소스 맵 사용:
  <img width="541" alt="스크린샷 2024-07-24 오전 1 06 02" src="https://github.com/user-attachments/assets/9093b739-acb3-45f4-9e42-06b4b403f488">
  
  - 소스 맵 미사용:
  <img width="550" alt="스크린샷 2024-07-24 오전 1 05 33" src="https://github.com/user-attachments/assets/8bf3ab6f-eb08-4be1-8074-6968a1e9eeed">

### USING WATCH MODE

- webpack이 디펜던시 그래프 내의 모든 파일에서의 변경사항을 "감시"하도록 지시할 수 있습니다. 파일 중 하나가 업데이트되면, 코드가 다시 컴파일되므로 전체 빌드를 수동으로 실행할 필요가 없습니다.

- 변경사항을 확인하려면 브라우저를 새로고침 해야 합니다. 이것을 자동으로 하는 `webpack-dev-server` 가 있습니다.

### USING webpack-dev-server

- 메모리 내 번들 파일:
  - `src/index.js`를 번들링하여 `dist/bundle.js`로 메모리에 저장합니다.

- 서버 루트 경로에 마운트:
  - 메모리에 저장된 `dist/bundle.js` 파일을 서버의 `/dist/` 경로에 마운트합니다. 브라우저에서 `http://localhost:8080/dist/bundle.js`로 접근할 수 있습니다.
    
- 디스크에 파일 작성 안 함:
  - `dist/` 디렉터리 내에 실제 파일 `bundle.js`는 존재하지 않습니다. 모든 번들 파일은 메모리 내에만 존재합니다.

- `dist/` 디렉터리를 삭제하고 `webpack serve --open` 을 실행하면 `dist/` 디렉터리 내부에 번들 파일이 생성되지 않았지만 서버를 통해 메모리에 있는 파일을 제공하기 때문에 정상적으로 동작합니다.


### USING webpack-dev-middleware

- `webpack-dev-middleware`는 `webpack`에서 처리한 파일을 서버로 내보내는 래퍼 입니다.
- `webpack-dev-middleware`와 `express` 서버를 결합할 수 있고 포트 번호를 설정할 수 있습니다.

# 2024.07.31

## Code Splitting

- 코드 스플리팅은 webpack의 가장 매력적인 기능 중 하나입니다. 이 기능을 사용하여 코드를 다양한 번들로 분할하고, 요청에 따라 로드하거나 병렬로 로드할 수 있습니다. 더 작은 번들을 만들고 리소스 우선순위를 올바르게 제어하기 위해서 사용하며, 잘 활용하면 로드 시간에 큰 영향을 끼칠 수 있습니다.

### Entry Points

- 코드를 분할하는 가장 쉽고 직관적인 방법이지만 다른 방법에 비해 수동적이고, 몇 가지 함정이 있습니다.

빌드 로그를 보면 다음과 같은 정보가 있습니다:
```
[webpack-cli] Compilation finished
asset index.bundle.js 553 KiB [emitted] (name: index)
asset another.bundle.js 553 KiB [emitted] (name: another)
runtime modules 2.49 KiB 12 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./src/another-module.js 84 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 245 ms
```

이 로그에서 몇 가지 중요한 점을 확인할 수 있습니다.
- 번들 파일의 크기:
  - index.bundle.js와 another.bundle.js 모두 553 KiB입니다.
- 모듈 크기:
  - ./node_modules/lodash/lodash.js는 530 KiB입니다.
- 모듈의 포함 여부:
  - ./src/index.js, ./src/another-module.js, 그리고 ./node_modules/lodash/lodash.js가 cacheable modules로 나열되어 있으며, 이는 이 모듈들이 번들에 포함되었음을 나타냅니다.

- `webpack-bundle-analyzer` 를 통한 분석 결과에서도 확인할 수 있습니다.
  - <img width="756" alt="image" src="https://github.com/user-attachments/assets/2e774461-88f9-4a6b-ab7c-20c42f2d6965">

