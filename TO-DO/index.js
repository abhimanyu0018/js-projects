const addButton = document.querySelector("#addTask");
const aaa = document.querySelector(".task-list");

addButton.addEventListener(
  "click",
  () => {
    let input = document.querySelector("#input");
    const p = document.createElement("p");

    p.className = "para";

    //button 1 for task completion
    const btn1 = document.createElement("button");
    btn1.className = "done";
    btn1.textContent = "Done";
    btn1.addEventListener(
      "click",
      () => {
        // p.classList.toggle('line')

        textSpan.classList.toggle("line");
        //btn1.classList.toggle('green')
      },
      false
    );

    //button 2 for deletion
    const btn2 = document.createElement("button");
    btn2.className = "del";
    btn2.textContent = "Delete";
    btn2.addEventListener(
      "click",
      () => {
        btn2.parentElement.remove();
      },
      false
    );

    // Span for the text content
    const textSpan = document.createElement("span");
    textSpan.textContent = input.value;

    //adding btn1 to pTag
    p.appendChild(btn1);

    //add input task to pTag
    p.appendChild(textSpan);
    input.value = "";

    //adding delete (btn2) to pTag
    p.appendChild(btn2);

    //adding these p tag to the webpage in div(.task-list)
    document.querySelector(".task-list").appendChild(p);
  },
  false
);