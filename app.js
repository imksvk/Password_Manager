 

let btn = document.querySelector("#submitbtn");
let tb = document.querySelector("table");

const deletepassword = (website)=>{
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arrupdated = arr.filter((e)=>{
        return e.website !== website;
    })
    localStorage.setItem("passwords", JSON.stringify(arrupdated));
    alert("succesfully deleted");
    location.reload();
}


const showpasswords = () => {
    let data = localStorage.getItem("passwords");
    if (!data || data === "[]" || JSON.parse(data).length === 0)
        {
        tb.innerHTML = "No Data to show";
    } else {
        tb.innerHTML = `<tr>
                <th>website</th>
                <th>Username</th>
                <th>Passwords</th>
                <th>Delete</th>
            </tr>`;
        let arr = JSON.parse(data);
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            let str = `<tr>
                        <td>${element.website}</td>
                        <td>${element.username}</td>
                        <td>${element.password}</td>
                        <td><button class="btn" onclick="deletepassword('${element.website}')" >Delete</button></td>
                    </tr>`
            tb.innerHTML += str;
        }
    }
    // logic
    website.value = "";
    username.value = "";
    password.value = "";

}

showpasswords();

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let passwords = localStorage.getItem("passwords");
    if (!passwords) {
        let json = [];
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        let website = document.querySelector("#website").value;
        json.push({ website: website, username: username, password: password });
        alert("password saved");
        localStorage.setItem("passwords", JSON.stringify(json));
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        let website = document.querySelector("#website").value;
        json.push({ website: website, username: username, password: password });
        alert("password saved");
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    showpasswords();
})