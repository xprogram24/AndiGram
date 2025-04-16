document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById("profile-pic");
    const username = document.getElementById("username");
    const fullname = document.getElementById('fullname')
    const bio = document.getElementById("bio");
    const editBtn = document.getElementById("edit-profile-btn");
    const editModal = document.querySelector(".edit-profile-modal");
    const saveProfile = document.getElementById("save-profile");
    const closeModal = document.getElementById("close-modal");
    //function loadProfile() {
    
    // Load profile from localStorage
    /*const storedUsername = localStorage.getItem("username");
    const storedfullname = localStorage.getItem('fullname')
    const storedBio = localStorage.getItem("bio");
    const storedpic = localStorage.getItem('profilepic')

    if (storedUsername) username.textContent = storedUsername;
        if (storedfullname) fullname.textContent = storedfullname;
        if (storedBio) bio.textContent = storedBio;
        //if (storedpic) profilePic.innerHTML = 'storedpic';
    }*/

    //loadProfile();

    // Show modal
    /*editBtn.addEventListener("click", function () {
        editModal.style.display = 'flex';
    });

    Close modal
    closeModal.addEventListener("click", function () {
        editModal.style.display = 'none';
    });

    // Save profile
    saveProfile.addEventListener("click", function (e) {
        e.preventDefault()
        const newUsername = document.getElementById("edit-username").value;
        const newBio = document.getElementById("edit-bio").value;
        //const newpic = document.getElementById('edit-profilepic')
        const newfullname = document.getElementById('edit-fullname').value

        if (newUsername) {
            localStorage.setItem("username", newUsername);
            username.textContent = newUsername;
        }

        if (newBio) {
            localStorage.setItem("bio", newBio);
            bio.textContent = newBio;
        }
        if (newpic) {
            localStorage.setItem("profilepic",newpic)
            newpic.textContent = newpic;
        }

        if (newfullname) {
            localStorage.setItem("fullname",newfullname)
            newfullname.textContent = newfullname
        }

        editModal.style.display="hidden";

        //window.location.href = "../maindashboard/dashboard.html";

    });


    let profileimg =  document.getElementById('profilepic')
}*/

let profilepicedit = document.getElementById('edit-profilepic')
let selectedFile = null

function imgtest(){
    profilepicedit.addEventListener('change', () =>{
        const file = profilepicedit.files[0];

        if(file && file.type.startsWith('image/')){
            selectedFile = file

            const reader = new FileReader();
            reader.onload = (e) => {
                profilePic.src = e.target.result;//base64 encoded image
            };

            reader.readAsDataURL(file)
        }
        else{
            alert('select a valid image file')
            
            selectedFile = null;
        }
    })
}
imgtest()
    saveProfile.addEventListener('click', (e)=>{
        e.preventDefault()
      
           
            
        
        editModal.style.display="none";
    })


closeModal.addEventListener("click", function () {
        editModal.style.display = 'none';
    });

    editBtn.addEventListener("click", function () {
        editModal.style.display = 'flex';
    });


});
