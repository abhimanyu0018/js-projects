const div = document.querySelectorAll('.color-box');
        // console.log(div)
        const body = document.querySelector('body')

        div.forEach( function(box){
            box.addEventListener('click', function(event){
                console.log(event.target)
                if(event.target.id === 'white')
                {
                    body.style.backgroundColor = event.target.id
                    body.style.color = 'black'
                }

                if(event.target.id === 'orange')
                {
                    body.style.backgroundColor = event.target.id
                    body.style.color = 'white'
                }
                if(event.target.id === 'grey')
                {
                    body.style.backgroundColor = event.target.id
                    body.style.color = 'white'
                }
                if(event.target.id === 'black')
                {
                    body.style.backgroundColor = event.target.id
                    body.style.color = 'white'
                }
            })
        })
  