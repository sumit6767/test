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
let i = 0;
// function to add expenses in table

function showdata(key)
{   
    if(key.table1){
        const obj = document.createElement('tr');
        obj.innerHTML = `<td>${++i}</td><td>${key.table1.amount}</td>
        <td>${key.table1.description}</td>
        <td><button class='btn btn-primary delete'>Delete</button></td>
        <td><button class="btn btn-primary edit">Edit</button></td>`
        table1.append(obj)
    }
    else if(key.table2){
        const obj = document.createElement('tr');
        obj.innerHTML = `<td>${++i}</td><td>${key.table2.amount}</td>
        <td>${key.table2.description}</td>
        <td><button class='btn btn-primary delete'>Delete</button></td>
        <td><button class="btn btn-primary edit">Edit</button></td>`
        table2.append(obj)
    }
    else{
        const obj = document.createElement('tr');
        obj.innerHTML = `<td>${++i}</td><td>${key.table3.amount}</td>
        <td>${key.table3.description}</td>
        <td><button class="btn btn-primary delete">Delete</button></td>
        <td><button class="btn btn-primary edit">Edit</button></td>`
        table3.append(obj)
      }
}
function addOrder(e){
   e.preventDefault();

   const config = {
    [category.value] : {
        amount:amount.value,
        description:description.value,
    }
   }

    axios.post("https://crudcrud.com/api/487146af28e34d8a895531419c21017d/orders",config)
   .then(res=>{
    amount.value = "";
    description.value="";
    category.value="table1";
    showdata(res.data)
    updateres();
   })
   .catch(err=>{
    console.log(err.message)
   })  
}


function deleteOrder(e){
    e.preventDefault();
    
    if(e.target.classList.contains("delete")){
        console.log("dlee");
    if(confirm("Are you sure ?"))
    {
        let text = e.target.parentElement.parentElement.children[0].textContent+"";
        const id = response[+text - 1]._id;
        
        axios.delete(`https://crudcrud.com/api/487146af28e34d8a895531419c21017d/orders/${id}`)
        .then(res=>{ 
                e.target.parentElement.parentElement.remove();
        })
        .catch(error=>console.log(error))
    }
}
}

function editOrder(e){

    e.preventDefault();
    if(e.target.classList.contains("edit")){

        let what = prompt("Enter what you will edit : ");
        let text = e.target.parentElement.parentElement.children[0].textContent+"";
        const id = response[+text - 1];
        const existobj = Object.keys(id)[1];
        let obj=null; 

        if(what.toLowerCase()==="price"){

            let newamount = prompt("enter new price");
            e.target.parentElement.parentElement.childNodes[1].textContent = newamount
            obj = {
                [existobj] : {
                amount : newamount+"",
                description : id[existobj].description
                }
            }
        }

        else if(what.toLowerCase() ==="food"){
            let newdescription = prompt("enter new description");
            e.target.parentElement.parentElement.childNodes[3].textContent = newdescription;
            obj = {
                [existobj] : {
                amount : id[existobj].amount,
                description : newdescription+"",
                }
            }
        }

        // else if(what.toLowerCase()==="category"){
        //     let newcategory = prompt("enter new description");
        //     e.target.parentElement.parentElement.childNodes[3].textContent = newcategory;
        //     obj = {
        //         [existobj] : {
        //         amount : id[existobj].amount,
        //         description : newdescription+"",
        //         }
        //     }
        // }
        axios.put(`https://crudcrud.com/api/487146af28e34d8a895531419c21017d/orders/${id._id}`,obj)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
}

async function updateres(){
    try{
        const res = await axios.get("https://crudcrud.com/api/487146af28e34d8a895531419c21017d/orders");
        response = res.data;
    }
    catch(error)
    {
        console.log(error.message)
    }
    }

async function showuser(){
try{
    const res = await axios.get("https://crudcrud.com/api/487146af28e34d8a895531419c21017d/orders");
    showExistingUser(res)
}
catch(error)
{
    console.log(error.message)
}
}


let response = []; // to take response of existing user
function showExistingUser(res){
    
    response = res.data;
    for(let key of res.data){
        showdata(key)
    }  
}

showuser();

finalsubmit.addEventListener("click",addOrder);
table.addEventListener("click",deleteOrder)
table.addEventListener("click",editOrder)
