const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

// for (code in countryList){
//     let  newoption = document.createElement("newoption");
//     console.log(code,countryList[code]);
// // 

for(let select of dropdowns){
    for (code in countryList){
        let  newoption = document.createElement("option");
        newoption.value=code;
        newoption.innerText=code;
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
      updateflag(evt.target);
    });
}
const updateflag=(Element)=>{
  let code=Element.value;
  let countrycode=countryList[code];
  let newsrc="https://flagsapi.com/${countrycode}/flat/64.png";
  let img=Element.parentElement.querySelectorAll("img");
  img.src=newsrc;
};
