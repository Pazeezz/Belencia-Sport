function validate(){
    var name = document.form.name;
    var email = document.form.email;
    var subject = document.form.subject;
    var message = document.form.message;

   
    
    if(name.value.length <= 0){
        alert("Name is required.");
        name.focus();
        return false;
    }

    if(email.value.length <= 0){
        alert("Email is required.");
        email.focus();
        return false;
    }

    if(subject.value == "select"){
        alert("Query subject is required.");
        subject.focus();
        return false;
    }

    if(message.value.length <= 0){
        alert("Query details are required.");
        message.focus();
        return false;
    }
     
   
   
}  
window.addEventListener('load', () =>{

    const params = (new URL(document.location)).searchParams;
    const name = params.get('name')
    const email = params.get('email')
    const subject = params.get('subject')
    const message = params.get('message')


    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-subject').innerHTML = subject;
    document.getElementById('result-message').innerHTML = message;
})

