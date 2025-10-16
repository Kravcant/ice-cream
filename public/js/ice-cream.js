document.getElementById('ice-cream-form').onsubmit = () => {
    clearErrors();
	let isValid = true;
	let name = document.getElementById('name').value.trim();
	if (!name) {
		document.getElementById('err-name').style.display = "block";
		isValid = false;
	}

    let email = document.getElementById('email').value.trim();
	if (!email || email.indexOf("@") === -1) {
		document.getElementById('err-email').style.display = "block";
		isValid = false;
	}

    let methodButtons = document.getElementsByName("method");
    let count = 0;
    for (let i=0; i<methodButtons.length; i++) {
        if (methodButtons[i].checked) {
            count++;
        }
    }
    if (count === 0) {
        document.getElementById("err-method").style.display = "block";
        isValid = false;
    }


    return isValid;
}

function clearErrors() {
	let errors = document.getElementsByClassName('error');
	for (let i = 0; i < errors.length; i++) {
		errors[i].style.display = "none";
	}
}