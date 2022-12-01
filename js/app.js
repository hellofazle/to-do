const item = document.querySelector("#item");
const toDoBox = document.querySelector('#to-do-box');

item.addEventListener(
    "keyup",
    function(e) {
        if(e.key =="Enter"){
            addToDoItem(this.value)
            this.value ="";
        }
    }
);
const addToDoItem = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML= `
    <span>${item}</span>
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function () {
            this.querySelector('span').classList.toggle('done')
            this.classList.toggle('complete')
        }
    )
    listItem.querySelector('i').addEventListener(
        'click',
        function(){
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem);
}