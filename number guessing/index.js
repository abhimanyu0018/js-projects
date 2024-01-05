const num = parseInt(Math.random()*100+1);
const form = document.querySelector('form')
let guessArray = []
let chances = 9

form.addEventListener('submit',function(event) {
    event.preventDefault()
    const input = parseInt(document.querySelector('#number').value)
    const result = document.querySelector('.res')
    const guesses = document.querySelector('.guesses')
    const remainChances =document.querySelector('.remain') 

    if(input===''|| isNaN(input)|| input <1)
    {
        result.innerHTML = " provide valid input!!"
    }
    else {
        if(chances<10 && chances >=0){
            if(input > num ){
                result.innerHTML = " HIGH !!"
                guessArray.push(input)
                guesses.innerHTML = `${guessArray}`
                remainChances.innerHTML = `${chances--}`
                            console.log(num)
    
            }
    
            else if(input < num ){
                result.innerHTML = " LOW !!"
                guessArray.push(input)
                guesses.innerHTML = `${guessArray}`
                remainChances.innerHTML = `${chances--}`
    
                console.log(num)
            }
            else {
                result.innerHTML = " correct !!"
                console.log(num)
    
            }


        }
        
    }
})