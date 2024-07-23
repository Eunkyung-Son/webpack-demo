import _ from "lodash";
import "./style.css";
import MyLocalImage from "./image.png";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // 이제 Lodash를 스크립트로 가져왔습니다.

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myImage = new Image();
  myImage.src = MyLocalImage;

  element.appendChild(myImage);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
document.body.appendChild(component());
