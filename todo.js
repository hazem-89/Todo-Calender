window.addEventListener('load', mainToDo);

function mainToDo() {
    addEventListeners();
    addTodoToList()
    addTodo()
    deleteTodoFromList()
}

function addEventListeners() {
    let form = document.querySelector('form');
    form.addEventListener('submit', inputFieldToDoList);
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', toggleForm)
    let test = document.querySelector('form');
    test.addEventListener('submit', addTodo);
    
}

function inputFieldToDoList(e) {
    let textInput = document.getElementById('text');
    console.log(textInput.value);
    e.preventDefault();
}

function toggleForm() {
    const form = document.getElementsByClassName('todo-box')[0];
    form.classList.toggle('hide')
    
    
}

const todos = [
    {
        title: 'baka en tårta',
        date: '2021-12-09',
    },
    {
        title: 'baka en tårta',
        date: '2021-12-09',
    },    
    {
        title: 'baka en tårta',
        date: '2021-12-10',
    }
];
//funktionen som skapar list-elementet. 
function addTodoToList() {
    // Hämta UL från html, 
    const ulTodo = document.getElementById('todoULDOM');
    ulTodo.innerHTML = "";

    // loopa igenom arrayen med "todo" objekten
    for (const todo of todos) {
        
        //skapar ett list-element ("Li") för varje  objekt "todo" ur arrayen todos och skriver ut "title" ur objektet i DOMen. samt
        // lägger till en knapp som har funktion on click. 
        const liTodo = document.createElement("li");
        liTodo.innerHTML = todo.title + `<button onclick=deleteTodoFromList() class="deleteTodo">X</button>`;
        liTodo.className = "list-item"
       
        
        // lägg till li-elementet i UL'en
        ulTodo.append(liTodo);
    }  
}


//funktionen som gör så att ett nytt list-element skapas. 
function addTodo(){
    let todo = document.getElementById('text');
    console.log(todo.value);
    todos.push ({title:todo.value, date: new Date()});//nu så läggs "date" objektet till med datumet det är i nutid när man trycker på knappen.
    addTodoToList()                                  // det kvarstår nu att lösa så att den lägg tills med rätt datum. 
    console.log(todos)

}

// en funktion som tar bort "todo" från listan samt tar bort onjektet från arrayen. från arrayen. 
function deleteTodoFromList(){
    let buttons = document.getElementsByClassName("deleteTodo")
    console.log(buttons)

 let removeTodo = document.getElementsByClassName("deleteTodo");

for (let i = 0; i < removeTodo.length; i++) {
  removeTodo[i].onclick = function(e) {
    var div = this.parentElement;
    div.style.display = "none";
    var index = e.target.getAttribute('value');
    todos.splice(index, 1);
    console.log(todos)
  }
}
 
}



function myFunction() {
    var x = document.getElementById("toggle-button");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function todoSummary() {

    let todoSum = document.querySelector('.todo-sum');
    console.log(todoSum);
    todoSum.innerHTML = 3;
    
}