const form = document.querySelector('form')
    form.addEventListener('submit',function(event) {
          event.preventDefault()

          const height = parseInt(document.querySelector('#height').value);
          const weight = parseInt(document.querySelector('#weight').value);
          const result = document.querySelector('.result')

          if(height === '' || isNaN(height) || height <=0){
            result.innerHTML = "provide a valid height";
          }else if(weight === '' || isNaN(weight) || weight <=0){
            result.innerHTML = "provide a valid weight";
          }else {
            const bmi = (weight/ ((height*height)/10000)).toFixed(2)
            result.innerHTML = `<span>BMI = ${bmi}</span>`
            if(bmi < 18.6) {
                result.style.backgroundColor = '#81ecec'
                result.style.padding = '0.5em'
            }else if(bmi >= 18.60 && bmi <=24.90){
                result.style.backgroundColor = '#00b894'
                result.style.padding = '0.5em'
            }
            else{
                result.style.backgroundColor = '#d63031'
                result.style.padding = '0.5em'
            }
          }

         

    })
