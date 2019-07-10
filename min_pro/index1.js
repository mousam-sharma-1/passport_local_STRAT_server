function validateName(){
	var name =  /^[a-zA-Z]+$/;
	var age = /^[0-9]*$/;
	var checked=false;
	var name_value = document.getElementById("name_value");
	var age_value = document.getElementById("age_value");
	var city_value = document.getElementById("city_value");
	var hobby_value = document.getElementById("hobbies_value");
	hobby_value.innerHTML = "";
	if(document.getElementById("student_name").value.match(name) && document.getElementById("student_name").value != ""){
		name_value.innerHTML = document.getElementById("student_name").value;
	}
	else{
		name_value.innerHTML = "Invalid";
	}
	if(document.getElementById("student_age").value.match(age) && document.getElementById("student_age").value != ""){
		age_value.innerHTML = document.getElementById("student_age").value;
	}
	else{
		age_value.innerHTML = "Invalid"; 
	}
	if(document.getElementById("city").selectedIndex==0){
		city_value.innerHTML = "invalid";
	}
	else{
		 city_value.innerHTML = document.getElementById("city").value;
	}
	if(document.getElementById("painting").checked){
		checked = true;
		hobby_value.innerHTML += "#"+ document.getElementById("painting").value; 
	}
	if(document.getElementById("dancing").checked){
		checked = true;
		hobby_value.innerHTML +="#"+ document.getElementById("dancing").value; 
	}
	if(document.getElementById("sports").checked){
		checked = true;
		hobby_value.innerHTML +="#"+ document.getElementById("sports").value; 
	}
	if(!checked){
		hobby_value.innerHTML = "Invalid";
	}
	return false;

}
