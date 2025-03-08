let btn = document.querySelector("#submitbtn");
let tb = document.querySelector("table");

// const deletepassword = (website)=>{
//     let data = localStorage.getItem("passwords");
//     let arr = JSON.parse(data);


// }


const showpasswords = () => {
    let data = localStorage.getItem("passwords");
    if (data == null) {
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
                        <td>${"Delete"}</td>
                    </tr>`
            tb.innerHTML += str;
        }
    }
    // logic

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