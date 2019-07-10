function validateName()
{
    var alpha = /^[a-zA-Z ]+$/;
  var count = 0;
    var name = document.getElementById('student_name').value;
    if(name.length <= 20 && (name.match(alpha)))
    {
      document.getElementById('name_value').innerHTML = name;
    }
    else
    {
      document.getElementById('name_value').innerHTML = 'invalid';
    }
  var numbers = /^[0-9]+$/;
 var age = document.getElementById('student_age').value;
  if(age <= 100 && age.match(numbers))
  {
     document.getElementById('age_value').innerHTML = age;
  }
  else
  {
    document.getElementById('age_value').innerHTML = 'invalid';
  }
  var city = document.getElementById('city').value;
  if(city != '')
   document.getElementById('city_value').innerHTML = city;
  else{
   document.getElementById('city_value').innerHTML = 'invalid';
  }
  var input = document.getElementsByTagName('input');
  var txt='';
  var count = 0;
  for (var i = 0; i < input.length; i++)
  {
  if(input[i].type == 'checkbox' && input[i].checked == true)
  {
    txt +='#'+ input[i].name;
    count++;
  }
  }
  if(count == 0){
      document.getElementById('hobbies_value').innerHTML = txt + 'invalid';
  }
  else{
    document.getElementById('hobbies_value').innerHTML = txt;
  }
}