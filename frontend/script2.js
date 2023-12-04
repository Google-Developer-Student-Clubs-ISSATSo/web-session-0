window.onload = async (event)=> {
    const body = document.body;
    const response = await fetch("http://localhost:3000/getPersons");
    console.log(response)
    const attendees = await response.json();

    attendees.forEach(attendee => {
        delete attendee._id;
        delete attendee.__v;
        const div = document.createElement("div");
        div.className = "sep";
        Object.keys(attendee).forEach(key => {
            const p = document.createElement("p");
            if(key=="date_naiss"){
                p.textContent = `${key}: ${new Date(attendee[key]).toLocaleDateString()}`;
            }else
            p.textContent = `${key}: ${attendee[key]}`;
            div.appendChild(p);
        });


        body.appendChild(div);
    });
}