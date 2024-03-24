function calculateRectangleArea (){
    // get rectangal info 
    let rectangalBaseInfo= document.getElementById('rectangle_base')
    let rectangalBasetext= parseFloat(rectangalBaseInfo.value)
    console.log(rectangalBasetext)
    // get rectangal height
    let rectangalHeightInfo= document.getElementById('rectangle_height')
    let rectangalheightText= parseFloat(rectangalHeightInfo.value);
    console.log(rectangalheightText)

    // ara calculate

    let recArea= rectangalBasetext*rectangalheightText;
    console.log('area of the input is ', recArea)

    // display area in Calculate area

    let calculateArea= document.getElementById('rectangle_area');
    calculateArea.innerText= recArea;
    
}
document.getElementById('rectangle_container').addEventListener('mouseover', function(){
   document.getElementById('rectangle_container').style.backgroundColor= 'seagreen'
})