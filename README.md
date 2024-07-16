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

   ## 기본 플러그인들**

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
