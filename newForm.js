const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const submit = document.querySelector("#submit");
const section = document.querySelector(".value");
let id=null;
let message = document.createElement("h3");;
const onsubmit = (e)=>{
    e.preventDefault();
    if(id !== null){
       document.querySelector(".form").childNodes[0].remove();
       id = null;
    }
    if(section.childNodes.length !== 1){
    	Array.from(section.childNodes).forEach((element)=>{
    		element.remove();
    	})
    }
    if(nameInput.value==="" || emailInput.value===""){
    	message = document.createElement("h2");
    	message.innerText = "Enter your name && email ID properly";
    	id = setTimeout(()=>{message.classList.add("application");message.classList.add("redline");document.querySelector(".form").prepend(message);},1000);
    }
	else{
	setTimeout(()=>{message = document.createElement("h2");message.innerText=nameInput.value;section.appendChild(message);message.classList.add("application")},1000);
	setTimeout(()=>{message = document.createElement("h2");message.innerText = emailInput.value;section.append(message);message.classList.add("application")},1000);
}
}

const form = document.querySelector(".section");

form.addEventListener("mouseover",(e)=>{
	form.style.backgroundColor = "lightyellow";
	form.style.color = "darkblue";
})
form.addEventListener("mouseout",(e)=>{
	form.style.backgroundColor = "#80808033"
	form.style.color = "black";
})
submit.addEventListener("click",onsubmit);