import _ from "lodash";
import "./style.css";
import MyLocalImage from "./image.png";
import Print from "./print";

async function getComponent() {
  // const element = document.createElement("div");
  // const btn = document.createElement("button");
  // 이제 Lodash를 스크립트로 가져왔습니다.
  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.classList.add("hello");
  // const myImage = new Image();
  // myImage.src = MyLocalImage;
  // element.appendChild(myImage);
  // btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;
  // element.appendChild(btn);
  // return element;

  // import() 는 promise를 반환하므로 async 함수와 함께 사용할 수 있습니다.
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.onclick = Print.bind(null, "Hello webpack!");

  return element;

  // 정적으로 import 하던 lodash를 동적으로 import하여 청크를 분리
  // return import("lodash")
  //   .then(({ default: _ }) => {
  //     const element = document.createElement("div");

  //     element.innerHTML = _.join(["Hello", "webpack"], " ");
  //     return element;
  //   })
  //   .catch((error) => "An error occurred while loading the component");
}
getComponent().then((component) => {
  document.body.appendChild(component);
});
