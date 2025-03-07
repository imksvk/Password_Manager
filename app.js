
let btn = document.querySelector("#submitbtn");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let passwords = localStorage.getItem("passwords");
    if(!passwords){
        let json = [];
        json.push({username:username,password: password});
        alert("password saved");
        localStorage.setItem("passwords",JSON.stringify(json));
    }else{
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({username:username,password: password});
        alert("password saved");
        localStorage.setItem("passwords",JSON.stringify(json));
    }
})