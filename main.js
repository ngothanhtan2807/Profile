

console.log(sessionStorage.getItem('login'));

function logoutFunction() {
    // localStorage.removeItem('login');
    sessionStorage.removeItem('login');
    window.location.assign("login.html");
}
function saveFunction() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("inemail").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phonenum").value;
    const input = document.getElementsByClassName("input-form");
    if (fname.length === 0){
        input[0].style.borderColor='RED';
    }

    if (lname.length === 0){
        input[1].style.borderColor='RED';
    }

    if (email.length === 0){
        input[2].style.borderColor='RED';
    }

    if (address.length === 0){
        input[3].style.borderColor='RED';
    }

    if (phone.length === 0){
        input[4].style.borderColor='RED';
    }
    //  || (lname.length === 0) || (email.length === 0) || (phone.length === 0) || (address.length === 0)){
        
    // }
    if (fname.length > 0){
        input[0].style.borderColor='green';
    }

    if (lname.length  >0){
        input[1].style.borderColor='green';
    }

    if (email.length > 0){
        if(!email.input("@")){
            input[2].style.borderColor='green';
        }
        else{
            input[2].style.borderColor='RED';
        }
    }

    if (address.length > 0){
        input[3].style.borderColor='green';
    }

    if (phone.length > 0){
        input[4].style.borderColor='green';
    }
}