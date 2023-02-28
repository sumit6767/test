const amount = document.getElementById("number")
const description = document.getElementById("description")
const category = document.getElementById("category")
const finalsubmit = document.getElementById("modalsubmit")
const submit = document.getElementById("submit")
const table = document.querySelector(".table")
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");
const modal = document.getElementById("modal");
const form = document.getElementById("form")
let i=0;
// function to add expenses in table
document.cookie = "name=sumit; expires"+new Date(2025,12,12);
document.cookie = "lastname=vishwakarma"
function showdata(key)
{
    
    console.log(key)
    if(key.table1){
        tableNo = "Table - 1"; 
        const obj = document.createElement('tr');
        obj.innerHTML = `<td>${++i}</td><td>${key.table1.amount}</td>
        <td>${key.table1.description}</td>
        <td><button class='btn btn-primary delete'>Delete</button></td>
        <td><button class="btn btn-primary">Edit</button></td>`
       
        table1.append(obj)
      }
      else if(key.table2){
        const obj = document.createElement('tr');
        obj.innerHTML = `<td>${++i}</td><td>${key.table2.amount}</td>
        <td>${key.table2.description}</td>
        <td><button class='btn btn-primary delete'>Delete</button></td>
        <td><button class="btn btn-primary">Edit</button></td>`
        // const button  = document.querySelectorAll("#table2 button")
        // button.forEach((value)=>{
        //     value.className="btn btn-primary"
        // })
        table2.append(obj)
      }
      else{
        const obj = document.createElement('tr');
        obj.innerHTML = `<td>${++i}</td><td>${key.table3.amount}</td>
        <td>${key.table3.description}</td>
        <td><button class="btn btn-primary delete">Delete</button></td>
        <td><button class="btn btn-primary">Edit</button></td>`
        // const button  = document.querySelectorAll("#table3 button")
        // console.log(button)
        // button.forEach((value)=>{
        //     value.className="btn btn-primary"
        // })
        table3.append(obj)
      }
}
function addExpense(e){
   e.preventDefault();
  
   axios.post("https://crudcrud.com/api/111309c748cd4badb46f16d6593f01e3/orders",{
    [category.value] : {
        amount:amount.value,
        description:description.value,
    }
   })
   .then(res=>{
    amount.value = "";
    description.value="";
    category.value="table1";
    showdata(res.data)})
   .catch(err => console.log(err.config))   
}


function deleteExpense(e){
    e.preventDefault();
    
    if(e.target.classList.contains("delete")){
        console.log("dlee");
    if(confirm("Are you sure ?"))
    {
        let text = e.target.parentElement.parentElement.children[0].textContent+"";
        const id = response[+text - 1]._id;
        axios.delete(`https://crudcrud.com/api/111309c748cd4badb46f16d6593f01e3/orders/${id}`)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
        e.target.parentElement.parentElement.remove();
    }
}
}

// function editExpense(e){

//     e.preventDefault();
//     if(e.target.classList.contains("edit")){
//         let what = prompt("Enter what you will edit : ");
//         if(what.toLowerCase()==="amount"){
//           let amountNo = prompt("enter new amount");
//           e.target.parentElement.parentElement.childNodes[1].textContent = amountNo;
//           let text = e.target.parentElement.parentElement.childNodes[0].textContent+"";
//         //   const obj = JSON.parse(localStorage.getItem(text));
//         //   obj.amountno=amount;
//         const id = response[+text - 1];
//         const obj = {
//             amount : amountNo + "",
//             description: (id.description)+"",
//             category: (id.category)+"",
//         }
//         axios.put(`https://crudcrud.com/api/41cac2c5f123412abe84c8ff40dc6420/expenses11/${id._id}`,obj)
//         .then(res=>console.log(res))
//         .catch(error=>console.log(error))
//           localStorage.setItem(text,JSON.stringify(obj))
//         }
//         else if(what.toLowerCase() ==="description"){
//             let amountNo = prompt("enter new description");
//             e.target.parentElement.parentElement.childNodes[2].textContent = amountNo;
//             let text = e.target.parentElement.parentElement.childNodes[0].textContent+"";
//         //   const obj = JSON.parse(localStorage.getItem(text));
//         //   obj.descriptiono=amount;
//         const id = response[+text - 1];
//         const obj = {
//             amount : (id.amount)+"",
//             description: amountNo+"",
//             category: (id.category)+"",
//         }
//         axios.put(`https://crudcrud.com/api/41cac2c5f123412abe84c8ff40dc6420/expenses11/${id._id}`,obj)
//         .then(res=>console.log(res))
//         .catch(error=>console.log(error))
//           localStorage.setItem(text,JSON.stringify(obj))
//         }
//         else if(what.toLowerCase()==="category"){
//             let amountNo = prompt("enter new description");
//             e.target.parentElement.parentElement.childNodes[3].textContent = amountNo;
//             let text = e.target.parentElement.parentElement.childNodes[0].textContent+"";
//         //   const obj = JSON.parse(localStorage.getItem(text));
//         //   obj.categoryno=amount;
//         const id = response[+text - 1];
//         const obj = {
//             amount : (id.amount)+"",
//             description: (id.description)+"",
//             category: amountNo+"",
//         }
//         axios.put(`https://crudcrud.com/api/41cac2c5f123412abe84c8ff40dc6420/expenses11/${id._id}`,obj)
//         .then(res=>console.log(res))
//         .catch(error=>console.log(error))
//           localStorage.setItem(text,JSON.stringify(obj))
//         }
//         else{
           
//         }
//     }
// }
// // let c = localStorage.length
// // if(localStorage.length >= 1){
// //     for(let obj in localStorage){
// //         if(c-- > 0){
// //    const tr = document.createElement("tr");
// //    let key = obj;
// //    i = i > +obj ? i:+obj;
// //    obj = JSON.parse(localStorage[obj]);
// //    tr.className = "table-primary"
// //    tr.innerHTML = `<th>${+key}</th><th>${obj.amountno}</th><th>${obj.descriptiono}</th><th>${obj.categoryno}</th><th><button class='delete btn btn.dark'>Delete</button></th><th><button class='edit btn btn.dark'>Edit</button></th>`
// //    table.appendChild(tr)
// //         }else{
// //             break;
// //         }
// // }
// // }


axios.get("https://crudcrud.com/api/111309c748cd4badb46f16d6593f01e3/orders")
.then(res=>showExistingUser(res))
.catch(error=>{})


let response = null;
function showExistingUser(res){
    
    response = res.data;
    for(let key of res.data){
        showdata(key)
    }  
}
finalsubmit.addEventListener("click",addExpense);

table.addEventListener("click",deleteExpense)
// // table.addEventListener("click",editExpense)
const dom = document.querySelector(".modal-body");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(dom.childNodes){
        dom.childNodes.forEach((naya)=>{
            naya.remove()
        })
    }
    const div = document.createElement("div");
    div.className='bg-danger-subtle rounded-3 text-dark fw-bolder p-3'
    div.setAttribute("style","font-family: 'Tilt Neon', cursive;")
    div.innerHTML = `<h2 class="d-flex justify-content-evenly"><span>Table No</span><span>:</span><span>${category.value}</span></h2>
    <p class="d-flex justify-content-evenly fw-bolder"><span>Amount</span><span>:</span><span>${amount.value}</span></p>
    <p class="d-flex justify-content-evenly fw-bolder"><span>Description</span><span>:</span><span>${description.value}</span></p`
    dom.appendChild(div)
})
