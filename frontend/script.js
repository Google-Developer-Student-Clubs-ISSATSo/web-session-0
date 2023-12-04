const submitButton = document.getElementById("sub");

submitButton.addEventListener("click",(event)=>{
    const name = document.getElementById("name").value;
    const date_naiss = document.getElementById("date").value;
    const commentaire = document.getElementById("commentaire").value || "";
    const niveau = document.getElementById("niveau").value;
    if(!name || !date_naiss){
        alert("Please fill the entire form!");
        return;
    }
    
    const data = {name,date_naiss,commentaire, niveau};

    fetch("http://localhost:3000/addPerson",{
        body: JSON.stringify(data),
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response)=>{
        if(response.status==200){
            alert("Thank you for filling the form!")
            window.location.replace("/frontend/consult.html");
        }
    })
})