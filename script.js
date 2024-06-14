let contacts=[] 
function addcontact(){
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const phonenumber=document.getElementById("number").value

    if(name =="" || email==""|| phonenumber==""){
        window.alert("Please Fill All The Fields...!")
    }
    else{
        contacts.push({'name':name,'email':email,'ph':phonenumber})
        window.alert("Contact Added Successfully...!")
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
    }
}
for(let i=0;i<contacts.length;i++){
    contact=contacts[i]
    console.log(`${contact.name}\n${contact.email}\n${contact.ph}\n\n`)
}


function resfun(){
    var box1=document.getElementById("searchbox")
    var searchname=box1.value
    let foundcontact=[]
    for(let i=0;i<contacts.length;i++){
        contact=contacts[i]
        let searchname1=searchname.toLowerCase()
        let name=contact.name.toLowerCase()
        if(name==searchname1){
            foundcontact.push(contact)
        }
    } 
    if(foundcontact.length>0){
        console.log("search results")
        for(let i=0;i<foundcontact.length;i++){
            contact1=foundcontact[i]
            document.getElementById("resultbox").innerHTML = `Details Found about ${contact1.name}...!`+"<br><br>"+ `Name : ${contact1.name} ` + "<br>" + `EMail : ${contact1.email}` +"<br>" + `Contact   : ${contact1.ph}` ;
        }   
    }
    else{
        document.getElementById("resultbox").innerHTML=`OOPS ...No details found about ${searchname}...! `
    } 
}
