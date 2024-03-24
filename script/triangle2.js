function calculateTriangleArea (){
    // get triangle base
    let triangleBaseInfo= document.getElementById('triangle_base')
     let triangleBaseText= parseFloat(triangleBaseInfo.value)
     console.log(triangleBaseText)

    //  get triangle height

    let triangleHeightInfo= document.getElementById('triangle_height')
    let triangleHeightText= parseFloat(triangleHeightInfo.value)
    console.log(triangleHeightText);

    // area calculation

    let calculation= 0.5* triangleBaseText* triangleHeightText;
    console.log('Area of the input is: ',calculation)

    // display triangle area

    let triangleArea= document.getElementById('triangle_area')
    triangleArea.innerText= calculation;
    

}

document.getElementById('triangle_container').addEventListener('mouseover', function(){
    document.getElementById('triangle_container').style.backgroundColor= 'palevioletred';
   
})


