function valid(){
    var user=document.getElementById("un").value 
    var reg=/^[A-Za-z]+$/
	
    var pass=document.getElementById("pwd").value 
    var reg1=/^(?=.*[0-9])(?=.*[!@#$%^&*%])[a-zA-Z0-9!@#$%^&*%]{7,15}$/
    var cpass=document.getElementById("cpwd").value
    if(!reg.test(user)){
        alert("contains letters only")
        return false
    }
    else if(!pass.match(reg1)){
        alert("consist with uppercase and special char and length should be 8")
        return false
    }
    else if(pass==cpass){
        alert("passowrd and retype password not matching")
    }
    else{
        return true
    }
}