function calculateEllipseArea (){
    // get base info
   let ellipseBaseInfo= document.getElementById('ellipse_base')
   let ellipseBaseText= parseFloat(ellipseBaseInfo.value)
   console.log(ellipseBaseText)
// get height info
   let ellipseHeightInfo= document.getElementById('ellipse_height')
   let ellipseHeightText= parseFloat(ellipseHeightInfo.value);
   console.log(ellipseHeightText)
// calculation
   let calculation= Math.PI* ellipseBaseText* ellipseHeightText;
    console.log('Ellipse area is',calculation)

// display area calculation

let calculateArea= document.getElementById('ellipse_area')
calculateArea.innerText= calculation;
}

let colors= document.getElementById('ellips_container').addEventListener('mouseover', function(){
   document.getElementById('ellips_container').style.backgroundColor= 'orange'
})