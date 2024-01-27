function sub() {
    console.log("it is workin")
    document.querySelector("#step1box").style.display="none";
    document.querySelector("#formfill").style.display=""
    document.querySelector("#usersave").style.display="none"
}
function cancel(){
    document.querySelector("#step1box").style.display="";
    document.querySelector("#formfill").style.display="none";
}


const userdata={
}
function settes(v){
    userdata.onbehalf=v}
function subuser(){
    alert("its submiting...")
    userdata.name=(document.querySelector("#pt-Name").value);
    if(userdata.name==''){alert("Pleaase Enter Name"); return false}

    userdata.mnumber=document.querySelector("#mnumber").value;
    if(userdata.mnumber.length<9){alert("Invalid Number"); return false}

    userdata.dob=document.querySelector("#dob").value;
    if(userdata.dob==''){alert("Pleaase Enter Date Of Birth"); return false}

    userdata.gender=document.querySelector("#gender").value;
    if(userdata.gender=='Select Gender'){alert("Pleaase Select Gender"); return false}

 
    
    // userdata.onbehalf=this.document.querySelector("#typept").value
    // if(userdata.onbehalf==''){alert("Select type of patient")}
  

    document.querySelector("#formfill").style.display="none";
    document.querySelector("#usersave").style.display=""
    //for the button to add address for next step
    document.querySelector("#btn-final").style.display=''
    
    let xcont=`<div id="userdata-shown">
    <div class="lower-part-hidden justify-content-between user-data">
       <span class="d-flex justify-content-arround">
       <input type="checkbox" name="" id="checkedpt">
       <div class="test-text">
           <h2 id="test-user" class="title">${userdata.name}</h2>
           <h3 id="test-numb">${userdata.mnumber}</h3>
           <h3 id="test-gender" class="secondary-text">${userdata.gender}</h3>
           <h3 id="test-dob" class="secondary-text">${userdata.dob}</h3>
           <h3 id="test-dob" class="secondary-text">${userdata.onbehalf}</h3>
       </div>
       </span>
       <span class="d-flex justify-content-around">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
           <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
           <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
         </svg>
       <svg onclick="dlt()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF2B2B" class="bi bi-trash" viewBox="0 0 16 16">
           <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
           <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
         </svg>
       </span>
                         
    </div>

   </div>`
   let rn= document.querySelector("#ustext");
   rn.insertAdjacentHTML("afterbegin",xcont);
}
function step2(){
    document.querySelector("#ustext").style.display='none';
    document.querySelector("#formfill").style.display="none";
    document.querySelector("#btn-final").style.display='none'
    document.querySelector('#first-user').style.display='none'
    document.querySelector("#step1box").style.display="";

    document.querySelector(".hdin1").innerHTML="Address Details";
    document.querySelector(".hdin2").innerHTML="Step 2: Select Address";
    document.querySelector("#svg-bg").innerHTML=``

    //document.querySelector(".add-pt").style.display='none';
    let buttonAdd=`<button onclick="addressbt()" class="secondary-text add-pt" id="add-addr">+ Add Address</button>`
    let addresspage=document.querySelector('#step1box')
    addresspage.insertAdjacentHTML("afterbegin",buttonAdd)
}

function addressbt(){
    let elementaddress=` <div id="takeaddchild" class="modal-body mod2">
    <div class="primary-text">Enter Address Details</div>
    <input class="secondary-text" type="text" name="home-Name" id="home-Name" placeholder="Flat number, Building name, Streets*">
    <input class="secondary-text" type="number" name="mnumber" id="mnumber" placeholder="Enter mobile number">
    <input class="secondary-text" type="number" name="pincode" id="pincode" placeholder="Pincode*">
    <input class="secondary-text" type="text" name="landm" id="landm" placeholder="Landmark*">
     
    <select class="secondary-text"  name="city" id="city">
        <option >Select City</option>
        <option value="Lucknow">Lucknow</option>
        <option value="kanput">Kanpur</option>
 </select>
 <select class="secondary-text mt-3"  name="state" id="state">
    <option >State</option>
    <option value="UP">UP</option>
    <option value="MP">MP</option>
</select>
    
    <span class="d-flex contbtn">
    <button onclick="canceladress()" class="btn-mod1 primary-text">Cancel</button>
    <button onclick="addaddress()" class="btn-mod2 primary-text">Save</button>
</span>
</div>`
    let contadd= document.querySelector("#takeadd")
    contadd.style.display=''
    // above bcs box has styling and getting visible before
    contadd.insertAdjacentHTML("afterbegin",elementaddress)
    document.querySelector('#svg-bg').style.display='none';
    document.querySelector('#add-addr').style.display='none';
    
}   
function addaddress(){
    alert("its submiting address...")
    userdata.homeNName=(document.querySelector("#home-Name").value);
    if(userdata.homeNName==''){alert("Please Enter Address"); return false}
    
    userdata.mnumber=document.querySelector("#mnumber").value;

    userdata.pincode=document.querySelector("#pincode").value;
    if(userdata.pincode==''){alert("Please Enter Pincode"); return false}

    userdata.landmark=document.querySelector("#landm").value;
    if(userdata.landmark==''){alert("Please Enter landmark"); return false}

    userdata.city=document.querySelector("#city").value;
    if(userdata.city==''){alert("Please Enter City"); return false}

    userdata.state=document.querySelector("#state").value;
    if(userdata.state==''){alert("Please Enter State"); return false}
    

    document.querySelector("#ustext").style.display='';
    document.querySelector("#takeadd").style.display="none";
    document.querySelector("#takeaddchild").style.display="none";
    document.querySelector("#btn-final").style.display=''

   

    
    let dv=document.createElement('h2')
    dv.innerText=userdata.homeNName
    document.querySelector('.test-text').appendChild(dv)

    let dv1=document.createElement('h2')
    dv1.innerText=userdata.pincode
    document.querySelector('.test-text').appendChild(dv1)

    let dv2=document.createElement('h2')
    dv2.innerText=userdata.landmark
    document.querySelector('.test-text').appendChild(dv2)

    let dv3=document.createElement('h2')
    dv3.innerText=userdata.city
    document.querySelector('.test-text').appendChild(dv3)

    let dv4=document.createElement('h2')
    dv4.innerText=userdata.state
    document.querySelector('.test-text').appendChild(dv4)


   
}
function dlt(){
    alert("working dlt")
    this.document.querySelector(".user-data").remove()
}

