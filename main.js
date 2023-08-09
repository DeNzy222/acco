const Accordion = document.querySelector(".accordion_sec");
const Content = document.getElementById("con");
const Arrow = document.getElementById("mn_coll");

Content.style.display = "none";

Accordion.addEventListener("click", () => {
  Arrow.style.transform = "rotate(-180deg)";
  Content.style.display = "block";
  console.log("click");
});
Accordion.addEventListener("mouseleave", () => {
  Arrow.style.transform = "rotate(0deg)";
  Content.style.display = "none";
  console.log("click");
});

// select gender

const GenderIs = document.getElementById("select_gd");
const GenderFrIs = document.getElementById("select_gd_fr");
colorGender = "#750b0b";
GenderFrIs.style.color = "black";
GenderFrIs.style.backgroundColor = colorGender;
GenderFrIs.style.color = "white";

GenderIs.addEventListener("click", () => {
  GenderIs.style.backgroundColor = colorGender;
  GenderIs.style.color = "white";
  GenderFrIs.style.backgroundColor = "white";
  GenderFrIs.style.color = "black";
});
GenderIs.addEventListener("mouseleave", () => {
  GenderIs.style.backgroundColor = "none";
});
GenderFrIs.addEventListener("click", () => {
  GenderFrIs.style.backgroundColor = colorGender;
  GenderFrIs.style.color = "white";
  GenderIs.style.backgroundColor = "white";
  GenderIs.style.color = "black";
});
