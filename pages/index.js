// Get the modal
let modal = document.getElementById('signIn-page');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('register-content').style.display = 'none';
        document.getElementById('logIn-content').style.display = 'none';
        document.getElementById('psw-content').style.display = 'none';
        document.getElementById('psw-content').style.display = 'none';
    }
}


