const button1 = document.getElementById("submit");

console.log(button1);
const arr = Array.from(document.getElementsByTagName("input"));
// arr.forEach((input)=>{
//    	console.log(input.value);
//    })
button1.addEventListener("click",(e)=>{
	e.preventDefault();
    let arr1 = [], i= 0;
   arr.forEach((input)=>{
   	arr1[i++] = input.value;
   })
   console.log(arr1)
})