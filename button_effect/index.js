const btn_ele = document.querySelector(".btn");

btn_ele.addEventListener("mouseover", (event) => {
            const x = event.pageX - btn_ele.offsetLeft;
            const y = event.pageY - btn_ele.offsetTop;
            btn_ele.style.setProperty("--xPos", x + "px");
            btn_ele.style.setProperty("--yPos", y + "px");
        })

