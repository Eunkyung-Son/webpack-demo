import _ from "lodash";
import "./style.css";
import MyLocalImage from "./image.png";

function component() {
  const element = document.createElement("div");
  // 이제 Lodash를 스크립트로 가져왔습니다.

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myImage = new Image();
  myImage.src = MyLocalImage;

  element.appendChild(myImage);

  return element;
}
document.body.appendChild(component());
