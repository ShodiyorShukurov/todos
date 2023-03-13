const API_PATH = "http://192.168.0.107:5000/";

export default API_PATH;

const token = localStorage.getItem("loginToken");

const elTodoForm = document.querySelector(".js-todo-form");
const elTodoInput = document.querySelector(".js-todo-input");


function renderTodo(todos){
    todos.forEach(todo => {
        
    });
}
async function addTodo() {
    try {
        const res = await fetch(API_PATH + 'todo', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                text: elTodoInput.value
            }),
        })
        const data = await res.json();
        console.log(data);
        getTodos()

    } catch (error) {
        console.log(error);
    }
};

function getTodos() {
    fetch(API_PATH + "todo")
        .then(res => res.json())
        .then(data => console.log(data.id))
}


elTodoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const inputValue = elTodoInput.value;
    getTodos();
    addTodo(inputValue);
});