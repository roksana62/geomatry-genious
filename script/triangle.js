function calculatrArea(){
  const triangleBaseInput=document.getElementById('triangle_base');
  const triangleBaseText= triangleBaseInput.value;
  const base= parseFloat(triangleBaseText);
  console.log( base);

  const triangleheightInput= document.getElementById('triangle_hieght');
  const triangleheightText= triangleheightInput.value;
  const height= parseFloat(triangleheightText);
  console.log(height);

  const area=0.5* base*height;
  console.log('Area of the triangle is:', area);

  const triangleArea= document.getElementById('triangle_area');
  triangleArea.innerText= area;
}

// function calculatrRectengleArea(){
//     const rectengleBaseInput= document.getElementById('rectengle_base');
//     const rectengleBaseText= rectengleBaseInput.value;
//     const rectengleBase= parseFloat(rectengleBaseText);

//     console.log(rectengleBase);

//    const  rectengleheightInput= document.getElementById('rectengle_height');
//    const rectengleheightText= rectengleheightInput.value;
//    const rectengleheight= parseFloat(rectengleheightText);
//    console.log(rectengleheight);

//    const recAre= rectengleBase* rectengleheight;
//    console.log('Rectangle area is:' , recAre);

//    const rectangleArea= document.getElementById('rectengle_area');
//    rectangleArea.innerText= recAre;

// }
 
function calculatrRectengleArea (){
const recBase= getInputValueById('rectengle_base');
// console.log('base value', recBase)
const recheight= getInputValueById('rectengle_height');
// console.log('height', recheight);
const areaa= recBase*recheight;
 
console.log('Area of the rectangle is:', areaa);
setElementById('rectengle_area', areaa) 

}

function getInputValueById(inputFieldId){
const inputField= document.getElementById(inputFieldId);
const inputFieldText= inputField.value;
const inputValue= parseFloat(inputFieldText)
// const inputArea= 
// console.log(inputValue);
return inputValue;
}
function setElementById (elementId, area){
    const element= document.getElementById(elementId);
    element.innerText= area;
}