// function calculateParallelogramArea (){
//     // let baseInfo= document.getElementById('parallelogram_base')
//     // let base= parseFloat(baseInfo.value)
//     // console.log(base)
//     // let bas= parallelogramBase()
//     // console.log(bas)
// }

// function parallelogramBase (){
//     let baseInfo= document.getElementById('parallelogram_base')
//      let base= parseFloat(baseInfo.value)
//      return base;
// }

function calculateParallelogramArea (){
    let base= calculateArea('parallelogram_base')
    console.log(base)
    let height= calculateArea('perallelogram_height')
    console.log(height)

    let area= base*height;
    console.log('araea of pera', area)

    // let calArea= document.getElementById('peralleloram_area')
    // calArea.innerText= area;
    setInputSpan ('peralleloram_area', area)
}


function calculateRhombusArea (){
    let rhombusBase= calculateArea('rhombus_base')
    let rhombusHeight= calculateArea('rhombus_height')
    let rhombusArea= 0.5 *rhombusBase*rhombusHeight;
    console.log('area of rhombus', rhombusArea)
    // let rhombusSpan= document.getElementById('rhombus_area')
    // rhombusSpan.innerText= rhombusArea;
    setInputSpan ('rhombus_area', rhombusArea)
}
function calculatePentagonArea (){
    let pentagonBase= calculateArea ('pentagon_base')
    let pentagonHeight= calculateArea('pentagon_height')
    let pentagonArea= 0.5*pentagonBase*pentagonHeight;
    console.log('area of the pentagon is', pentagonArea)
    // let pentagonSpan= document.getElementById('pentagon_area')
    // pentagonSpan.innerText= pentagonArea;
    setInputSpan('pentagon_area', pentagonArea)
}


function calculateArea (inputId){
    let inpurField= document.getElementById(inputId)
    let inputText= parseFloat(inpurField.value)
return inputText
}

function setInputSpan (elementId, area){
    let element= document.getElementById(elementId)
    element.innerText= area;
}

function setColor (containerId, color){
     document.getElementById(containerId).addEventListener('mouseover', function(){
        document.getElementById(containerId).style.backgroundColor= color;
    })
}
setColor('rhombus_container', 'purple')
setColor('parallelogram_container', 'red')
setColor('pentagon_container', 'aqua')