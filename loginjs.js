function check(){
    let a=document.getElementById("email").value; 
    let b=document.getElementById("password").value;
    if(a=="sud@gmail.com" && b=="sud" ){
        alert("Login Successful");
    }
    else{
        alert("Enter valid details");
    }
}
