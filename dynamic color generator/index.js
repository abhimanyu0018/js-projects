document.querySelector('.start').addEventListener('click',() => {
    const body = document.querySelector('body')
    
    // console.log(`${col1} ${col2} ${col3}`)
    const changeColor = ()=>{
        let col1= parseInt(Math.random()*255);
        let col2= parseInt(Math.random()*255);
        let col3= parseInt(Math.random()*255);
        body.style.backgroundColor = `rgb(${col1}, ${col2}, ${col3})`
    }
    
    const start = setInterval(changeColor,1000)

    document.querySelector('.stop').addEventListener('click',() =>{

        clearInterval(start)
        console.log('stopped')
    })
    
})