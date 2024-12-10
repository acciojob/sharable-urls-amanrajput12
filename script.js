// your code here

let inputname = document.getElementById("name");
let url = document.getElementById("url");
let preval = document.getElementById("url")
const inputyear =document.getElementById("year");
const submit = document.getElementById("button");
submit.addEventListener("click",()=>{
	 
	
 if(inputname.value==""){
	    url.innerHTML+=`?year=${inputyear.value}`
}
	else if(inputyear.value==""){
		url.innerHTML+=`?name=${inputname.value}`
}
else {
	url.innerHTML+=`?name=${inputname.value}&year=${inputyear.value}`
}	
})
