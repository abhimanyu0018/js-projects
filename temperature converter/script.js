
document.querySelector('#submit').addEventListener('click',()=>{
    const tempInput =parseInt(document.querySelector('#input').value);
    const tempIn = document.querySelector('#tempIn').value
    const changeInto = document.querySelector('#tempTo').value
    const ans = document.querySelector('#ans')


   
    if(tempInput === "" || isNaN(tempInput) ){
        ans.textContent = "Invaild Input"
    }
    else{
        if(tempIn === "C" && changeInto ==="K"){
            celsiusToKelvin(tempInput)
        } else if(tempIn === "C" && changeInto === "F"){
            celsiusToFahrenheit(tempInput)
        }else if(tempIn === "K" && changeInto === "C"){
            kelvinToCelsius(tempInput)
        }else if(tempIn === "K" && changeInto === "F"){
            kelvinToFahrenheit(tempInput)
        }else if(tempIn === "F" && changeInto === "C"){
            fahrenheitToClesius(tempInput)
        }else if(tempIn === "F" && changeInto === "K"){
            fahrenheitToKelvin(tempInput)
        }else{
            ans.textContent = 'invalid choice'
        }
    }
    
    
   
});


function celsiusToKelvin(num) {
            ans.textContent =  (num+273.15).toFixed(2)
}
function celsiusToFahrenheit(num) {
    ans.textContent = ((num*1.8) + 32).toFixed(2)
}

function kelvinToCelsius(num){
    ans.textContent = (num-273.15).toFixed(2)
}

function kelvinToFahrenheit(num){ 
    ans.textContent = (((num-273.15)*1.8)+32).toFixed(2)
}
function fahrenheitToClesius(num){
    ans.textContent = ((num-32)*(0.55)).toFixed(2)
}

function fahrenheitToKelvin(num){
   ans.textContent =  (((num-32) *0.55)+273.15).toFixed(2)
}

