const amount = document.getElementById("number")
const description = document.getElementById("description")
const category = document.getElementById("category")
const submit = document.getElementById("submit")
const table = document.querySelector(".table")
let i = 0;
// function to add expenses in table
function addExpense(e){
   e.preventDefault();
   const tr = document.createElement("tr");
   tr.className = "table-primary"
   tr.innerHTML = `<th>${++i}</th><th>${amount.value}</th><th>${description.value}</th><th>${category.value}</th><th><button class='delete btn btn.dark'>Delete</button></th><th><button class='edit btn btn.dark'>Edit</button></th>`
   table.appendChild(tr)
   console.log(tr.children[0].textContent)
   localStorage.setItem(i+"",JSON.stringify({amountno:amount.value,descriptiono:description.value,categoryno:category.value}));
   amount.value="";
   description.value="";
   category.value="movie";
}


function deleteExpense(e){
    e.preventDefault();
    
    if(e.target.classList.contains("delete")){
        console.log("dlee");
    if(confirm("Are you sure ?"))
    {
        let text = e.target.parentElement.parentElement.children[0].textContent+"";
        localStorage.removeItem(text)
        e.target.parentElement.parentElement.remove();
    }
}
}

function editExpense(e){

    e.preventDefault();
    if(e.target.classList.contains("edit")){
        let what = prompt("Enter what you will edit : ");
        if(what==="amount"){
          let amount = prompt("enter new amount");
          e.target.parentElement.parentElement.childNodes[1].textContent = amount;
          let text = e.target.parentElement.parentElement.childNodes[0].textContent+"";
          const obj = JSON.parse(localStorage.getItem(text));
          obj.amountno=amount;
          localStorage.setItem(text,JSON.stringify(obj))
        }
        else if(what ==="description"){
            let amount = prompt("enter new description");
            e.target.parentElement.parentElement.childNodes[2].textContent = amount;
            let text = e.target.parentElement.parentElement.childNodes[0].textContent+"";
          const obj = JSON.parse(localStorage.getItem(text));
          obj.descriptiono=amount;
          localStorage.setItem(text,JSON.stringify(obj))
        }
        else if(what==="category"){
            let amount = prompt("enter new description");
            e.target.parentElement.parentElement.childNodes[3].textContent = amount;
            let text = e.target.parentElement.parentElement.childNodes[0].textContent+"";
          const obj = JSON.parse(localStorage.getItem(text));
          obj.descriptiono=amount;
          localStorage.setItem(text,JSON.stringify(obj))
        }
        else{
           
        }
    }
}
console.log(localStorage)
if(localStorage.length >= 1){
   let c = localStorage.length;
   while(c-- > 0){
    i++;
   const tr = document.createElement("tr");
   tr.className = "table-primary"
   const expense = JSON.parse(localStorage.getItem((i)+""))
   tr.innerHTML = `<th>${i}</th><th>${expense.amountno}</th><th>${expense.descriptiono}</th><th>${expense.categoryno}</th><th><button class='delete btn btn.dark'>Delete</button></th><th><button class='edit btn btn.dark'>Edit</button></th>`
   table.appendChild(tr)
   }
}
submit.addEventListener("click",addExpense);
table.addEventListener("click",deleteExpense)
table.addEventListener("click",editExpense)