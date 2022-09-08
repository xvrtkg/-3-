function Form(){
	const InputName = document.getElementById("name");
	if(InputName.value == ""){
		InputName.style.borderColor = "#c40424";
		InputName.placeholder = "Это поле обязательное для ввода";
	}
	const InputNumber = document.getElementById("number");
	if(InputNumber.value == ""){
		InputNumber.style.borderColor = "#c40424";
		InputNumber.placeholder = "Это поле обязательное для ввода";
	}
	const InputEmail = document.getElementById("email");
	if(InputEmail.value == ""){
		InputEmail.style.borderColor = "#c40424";
		InputEmail.style.placeholderColor = "#c40424";
		InputEmail.placeholder = "Это поле обязательное для ввода";
	}
}
