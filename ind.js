function sub() {
    console.log("it is workin")
    document.querySelector("#lpv").style.display="none";
    document.querySelector("#lph").style.display=""
}
function cancel(){
    document.querySelector("#lpv").style.display="";
    document.querySelector("#lph").style.display="none";
}
let vr = document.getElementsByClassName("lower-part")
let veh =document.getElementsByClassName("lower-part-hidden")

const userdata={
}
function subuser(){
    alert("its working subuser()")
    userdata.name=(document.querySelector("#pt-Name").value);
    userdata.mnumber=document.querySelector("#mnumber").value;
    userdata.dob=document.querySelector("#dob").value;
    userdata.gender=document.querySelector("#gender").value;

    document.querySelector("#lp3").style.display='';
    document.querySelector("#lph").style.display="none";
    document.querySelector("#btn-final").style.display=''

    document.querySelector("#test-user").innerHTML=userdata.name;
    document.querySelector("#test-gender").innerHTML=userdata.gender;
    document.querySelector("#test-dob").innerHTML=userdata.dob;
}
