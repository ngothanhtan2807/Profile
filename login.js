const inputPass = document.getElementById("inputPass");

function showHidenPass() {
    if (inputPass.getAttribute("type") === "password") {
        inputPass.setAttribute("type", "text");
    }
    else if (inputPass.getAttribute("type") === "text") {
        inputPass.setAttribute("type", "password");
    }

}


async function getUser(username, password) {
    return fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: `${username}`,
            password: `${password}`,
            // username: 'kminchelle',
            // password: '0lelplR',
            // expiresInMins: 60, // optional
        })
    })
        .then(res => res.json())

        .then(data => {
            const token = data.token;
            // console.log(data.username);
            // console.log(data.password);
            // console.log(token);

            sessionStorage.setItem('login', `${token}`)

        });

}
// console.log(getUser());
// console.log(sessionStorage.getItem("login"));
// console.log(sessionStorage.getItem("login"));
// console.log(sessionStorage.getItem("login"));

function loginFunction() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("inputPass").value;
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: username,
            password: password,
        })
    })
        .then(res => res.json())

        .then(data => {
            const token = data.token;
            if (token) {
                alert("dang nhap thanh cong")
                sessionStorage.setItem("login", token);
                window.location.assign("edit.html");
            }
            else {
                alert("dang nhap that bai");
                window.location.assign("login.html")
            }

        });
}