const loginForm=document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input"); 
const greeting=document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //hidden이라는 class name을 더해줘서 form을 숨김
    const username=loginInput.value; //유저의 이름을 변수로 저장해 그 이름은 h1 안에 넣어줄거임
    localStorage.setItem(USERNAME_KEY, username) //첫번째는 저장될 아이템의 이름, 두번째는 변수
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsename=localStorage.getItem(USERNAME_KEY);

if(savedUsename===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsename);
}
