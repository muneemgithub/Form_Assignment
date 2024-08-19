const Form = document.getElementById('userform')

Form.addEventListener('submit', function(event){
    event.preventDefault()

    const username = document.getElementById('username').value
    console.log(username);

    const email = document.getElementById('email').value
    console.log(email);

    const age = document.getElementById('age').value
    console.log(age);

    const gender = document.querySelector('input[name=gender]:checked').value
    console.log(gender);

    const hobbies = Array.from(document.querySelectorAll('input[name=hobbies]:checked')).map(hobby => hobby.value);
    console.log(hobbies);

    Form.innerHTML = username + "  " + email + " " + age + " " + gender + " " + hobbies
        
});



document.body.style.backgroundColor = "#f2f2f2";
const form = document.getElementById("userform");
form.style.fontSize = "20px";
form.style.color = "#333";
form.style.padding = "20px";
form.style.margin = "50px auto";
form.style.width = "300px";


const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
    input.style.padding = "10px";
    input.style.margin = "10px 0";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "5px";
});



const submitbtn = document.getElementById("btnsubmit");
submitbtn.style.width = "100px";
submitbtn.style.height = "30px"

btnsubmit.addEventListener('mouseover', function(){
    this.style.backgroundColor = "#007B"
});
btnsubmit.addEventListener("mouseout", function(){
    this.style.backgroundColor = "#0056"
});
