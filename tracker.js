const amount = document.getElementById("number")
const description = document.getElementById("description")
const category = document.getElementById("category")
const submit = document.getElementById("submit")
const table = document.querySelector(".table")
let i = 0;
// function to add expenses in table
function showdata()
{
   const tr = document.createElement("tr");
   tr.className = "table-primary"
   tr.innerHTML = `<th>${++i}</th><th>${amount.value}</th><th>${description.value}</th><th>${category.value}</th><th><button class='delete btn btn.dark'>Delete</button></th><th><button class='edit btn btn.dark'>Edit</button></th>`
   table.appendChild(tr)
   localStorage.setItem(i+"",JSON.stringify({amountno:amount.value,descriptiono:description.value,categoryno:category.value}));
   amount.value="";
   description.value="";
   category.value="movie";
}
function addExpense(e){
   e.preventDefault();
   
  
   axios.post("https://crudcrud.com/api/13635851d18f42e4909ebb6271deabd0/expenses",{
    amount:amount.value,
    description:description.value,
    category:category.value,
   })
   .then(res=>showdata(res))
   .catch(err=>console.log(err))   
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
        if(what.toLowerCase()==="amount"){
          let amount = prompt("enter new amount");
          e.target.parentElement.parentElement.childNodes[1].textContent = amount;
          let text = e.target.parentElement.parentElement.childNodes[0].textContent+"";
          const obj = JSON.parse(localStorage.getItem(text));
          obj.amountno=amount;
          localStorage.setItem(text,JSON.stringify(obj))
        }
        else if(what.toLowerCase() ==="description"){
            let amount = prompt("enter new description");
            e.target.parentElement.parentElement.childNodes[2].textContent = amount;
            let text = e.target.parentElement.parentElement.childNodes[0].textContent+"";
          const obj = JSON.parse(localStorage.getItem(text));
          obj.descriptiono=amount;
          localStorage.setItem(text,JSON.stringify(obj))
        }
        else if(what.toLowerCase()==="category"){
            let amount = prompt("enter new description");
            e.target.parentElement.parentElement.childNodes[3].textContent = amount;
            let text = e.target.parentElement.parentElement.childNodes[0].textContent+"";
          const obj = JSON.parse(localStorage.getItem(text));
          obj.categoryno=amount;
          localStorage.setItem(text,JSON.stringify(obj))
        }
        else{
           
        }
    }
}
let c = localStorage.length
if(localStorage.length >= 1){
    for(let obj in localStorage){
        if(c-- > 0){
   const tr = document.createElement("tr");
   let key = obj;
   i = i > +obj ? i:+obj;
   obj = JSON.parse(localStorage[obj]);
   tr.className = "table-primary"
   tr.innerHTML = `<th>${+key}</th><th>${obj.amountno}</th><th>${obj.descriptiono}</th><th>${obj.categoryno}</th><th><button class='delete btn btn.dark'>Delete</button></th><th><button class='edit btn btn.dark'>Edit</button></th>`
   table.appendChild(tr)
        }else{
            break;
        }
}
}
submit.addEventListener("click",addExpense);
table.addEventListener("click",deleteExpense)
table.addEventListener("click",editExpense)