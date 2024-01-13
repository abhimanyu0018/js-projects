const  display = document.querySelector('#display');


function addToDisplay(value){
    display.value +=  value;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    const equation = display.value;
    try{  
        display.value = eval(equation);
    }
    catch(error){
        display.value = 'Error';
    }

}  
    
function deleteOneCharactor(){
    let value = display.value;
    display.value =  value.slice(0,-1)
}