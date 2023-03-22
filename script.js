let dataform = [];
var form=document.getElementById("formId");
let i=0;
let info = ["Name","LastName","address","School","college","companyName","password","conformIt"]
let count=1;
NextAdd=()=>{
    let Fname = document.getElementById("FirstName").value;
    let Lname = document.getElementById("LastName").value;
    let Addre = document.getElementById("Address").value;
    if(Fname==''||Lname==''||Addre==''){
        // alert('Please Fill All details');
        if(Fname==''){
            document.getElementById("war").innerHTML="Please fill the Name";
            document.getElementById("war").style.display="block";
        }
        else if(Lname==''){
            document.getElementById("war-lname").innerHTML="Please fill the LastName";
            document.getElementById("war-lname").style.display="block";
        }
        else if(Addre==''){
            document.getElementById("war-Address").innerHTML="Please fill the Address";
            document.getElementById("war-Address").style.display="block";
        }
       
        return;
    }
    else{
        document.getElementById('form-step-sec').style.display="flex";
        document.getElementById('form-step-first').style.display="none";
        document.getElementById('red-line').style="width:40%;"
    }
    dataform[i]=Fname; i++;
    dataform[i]=Lname; i++;
    dataform[i]=Addre; i++;
   
       console.log(dataform);
}

NextAddsec=()=>{
    let Sname = document.getElementById("SchoolName").value;
    let Cname = document.getElementById("collegeName").value;
    let Coname = document.getElementById("CompanyName").value;
    if(Sname==''|| Cname=='' || Coname==''){
        if(Sname==''){
            document.getElementById("sec-School").innerHTML="Please fill the SchoolName";
            document.getElementById("sec-School").style.display="block";
        }
        else if(Cname==''){
            document.getElementById("sec-college").innerHTML="Please fill the Collegename";
            document.getElementById("sec-college").style.display="block";
        }
        else if(Coname==''){
            document.getElementById("sec-company").innerHTML="Please fill the company";
            document.getElementById("sec-company").style.display="block";
        }
        return;
    }else{
        document.getElementById('form-step-third').style.display="flex";
        document.getElementById('form-step-sec').style.display="none";
        document.getElementById('red-line').style="width:65%;"
    }
    dataform[i]=Sname; i++;
    dataform[i]=Cname; i++;
    dataform[i]=Coname; i++;
    console.log(dataform);

    
}
Previous=()=>{
    document.getElementById('form-step-sec').style.display="none";
    document.getElementById('form-step-first').style.display="flex";
    document.getElementById('red-line').style="width:20%;"
    dataform=[];
}


NextAddthird=()=>{
    let Fname = document.getElementById("firstpassword").value;
    let Pname = document.getElementById("conformpassword").value;
    if(Fname==''||Fname==''){
        alert('Please Fill All details');
    }
    // else {
    //     if(firstpassword!=conformpassword){
    //        alert("please enter the same password");
    //        return;
    //     }
    // }




    dataform[i]=Fname; i++;
    dataform[i]=Pname; i++;
      let print = `<ul>`;
      dataform.filter((x,idx)=>{
        print+= `<li>${info[idx]}:${x}</li>`;
      })
      print+=`</ul>`
      document.getElementById("demo").innerHTML = print;
       document.getElementById("form-step-third").style.display="none"
       document.getElementById('red-line').style="width:100%;"

    console.log(dataform);
}
PreviousSec=()=>{
    document.getElementById('form-step-sec').style.display="flex";
    document.getElementById('form-step-third').style.display="none";
    document.getElementById('red-line').style="width:40%;"
    dataform=[];
}

