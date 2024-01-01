const time = document.querySelector('.time')
   
    
    setInterval(function(){
        let date = new Date();
        time.innerHTML= date.toLocaleTimeString();
        // console.log(date.toLocaleTimeString())
    
    }, 1000)
