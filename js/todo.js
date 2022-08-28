const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input"); 
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement; //target은 클릭된 html element. 버튼의 부모에 접근(li)
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //parseint는 문자열을 숫자로
    saveToDos();
}

//todo를 그리는 역할. handleToDoSubmit function이 paintToDo를 사용하게 됨
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); //li는 span이라는 child가 생김
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){ //사용자가 form을 submit하면 
    event.preventDefault(); 
    const newTodo=toDoInput.value; //input에 value를 복사
    toDoInput.value=""; //input을 비우고
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //랜덤으로 아이디 지정
    };
    toDos.push(newTodoObj); //newtodo를 todos array에 push한 후에
    paintToDo(newTodoObj); //화면에 그 todo를 그려주고 
    saveToDos(); //savetodos를 하여 저장시킴
}
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo) 
}

//새 array에 이 object를 유지하고 싶으면 반드시 true를 리턴해야 함
function sexy(){

} 

[1,2,3,4].filter(sexy);