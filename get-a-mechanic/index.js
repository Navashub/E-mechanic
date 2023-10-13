

// function searchUsers() {
//     const locationInput = document.getElementById("locationInput").value.toLowerCase();
//     const resultsDiv = document.getElementById("results");
//     resultsDiv.innerHTML = ''; // Clear previous results

//     fetch("http://localhost:3000/Mechanics")
//         .then(res => res.json())
//         .then(data => {
//             const filteredUsers = data.filter(user => user.Location.toLowerCase() === locationInput);
//             if (filteredUsers.length > 0) {
//                 filteredUsers.forEach(user => {
//                     let mech = document.createElement("section");

//                     mech.innerHTML = `
//                             <section class="group-mechanics">
//         <div class="mechanic-card">
//             <img src="./img.jpg" alt="image alt" style="width: 300px; margin: auto;">
//             <div>
//                 <span><label for="name">Name </label><p>:  Martin Bwogo</p></span>
//                 <span><label for="location">Location </label><p>:  Nairobi</p></span>
//                 <span><label for="contact">Contact </label><p>: martbwogo@gmail.com</p></span>
//                 <span><label for="rate">Rate/Hr[Ksh] </label><p>: 500</p></span>
//             </div>
//             <button>Send Request</button>
//         </div>
//         </section>
//                             `
//                     resultsDiv.appendChild(mech);
//                 });
//             } else {
//                 resultsDiv.textContent = "No users found in that location.";
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             resultsDiv.textContent = "An error occurred while fetching data.";
//         });
// };


document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

function handleDOMContentLoaded(event) {
    // console.log(event.target)
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        handleForm(event);
    })
}

function handleForm(event) {
    event.preventDefault()
    const locationInput = document.querySelector("#locationInput").value
    // console.log(event.target)
    fetchMechanics(locationInput)
}

function fetchMechanics(locationInput) {
    fetch("http://localhost:3000/Mechanics")
        .then(res => res.json())
        .then(data => {
            handleData(data, locationInput)

        })
}

function handleData(data, locationInput) {
    const filteredMech = data.filter((mech) => {
        return mech.location === locationInput;
    })
    // console.log(filteredMech)
    displayData(filteredMech)
}

function displayData(filteredMech) {
    const groupMechanics = document.querySelector(".group-mechanics")
    groupMechanics.innerHTML=''
    filteredMech.forEach((item) => {
        const {img, name, location} = item
        const mechanic = document.createElement("section")
        mechanic.innerHTML = `
    
    <div class="mechanic-card">
                <img src="${img}" alt="image alt" style="width: 300px; margin: auto;">
                <div>
                    <span><label for="name">Name </label>
                        <p>: ${name}</p>
                    </span>
                    <span><label for="location">Location </label>
                        <p>: ${location}</p>
                    </span>
                    <span><label for="contact">Contact </label>
                        <p>: martbwogo@gmail.com</p>
                    </span>
                    <span><label for="rate">Rate/Hr[Ksh] </label>
                        <p>: 500</p>
                    </span>
                </div>
                <button>Send Request</button>
            </div>
    `;
    groupMechanics.appendChild(mechanic)
    })


}
