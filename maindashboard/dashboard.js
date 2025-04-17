let hamburger = document.getElementById('hamburger');
let sidebar = document.getElementById('sidebar');
let mainbody = document.getElementById('main')
let isSidebarOpen = false; // Track sidebar state

hamburger.addEventListener('click', function() {
    if (!isSidebarOpen) {
        // Open sidebar
        sidebar.style.display = 'flex';
        sidebar.style.position = 'absolute'
        sidebar.style.zIndex = '999999';
        sidebar.style.width = '180px';
        
        isSidebarOpen = true;
    } else {
        // Close sidebar
        sidebar.style.width = '0'; // Collapse it
        
        setTimeout(() => { 
            sidebar.style.display = 'none'; 
        }, 100); // Wait for transition to complete
        isSidebarOpen = false;
    }
});

/**/
//adding body click on specifc screen sizes

const mediaQuery = window.matchMedia(`(max-width: 768px)`)
    function handleScreenSize(e){
        if(e.matches){

            console.log('mobile screen size detected');
            mainbody.addEventListener('click',function(){
                sidebar.style.display = 'none';   //side bar collapse when user clicks outside it
        })
            
        }
        else{
            console.log('larger screen size detected');
            
        }
    }
    handleScreenSize(mediaQuery)
    mediaQuery.addEventListener('change',handleScreenSize)

const storedUsername = document.getElementById('username')
storedUsername.innerText = localStorage.getItem('username')




//log out button
let logoutbtn = document.getElementById('logout')

logoutbtn.addEventListener('click',function(){
    
    window.location.href = '/index.html';
})
//creates  the infinite scroll
document.addEventListener("DOMContentLoaded", function () {
    const feedsContainer = document.querySelector(".feeds");
    const friendbody = document.getElementById('friendbody')
    async function fetchUserData() {
        try {
            const response = await fetch('https://fake-json-api.mock.beeceptor.com/users');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log("Error fetching user data:", error);
            return null;
        }
    }
//creates card function
    function createCard(data ) {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardImg = document.createElement("div");
        cardImg.classList.add("card-img");

        const userImg = document.createElement("img");
        userImg.src = data.photo;
        userImg.alt = "";
        userImg.classList.add("card-user-img");

        const userCardName = document.createElement("div");
        userCardName.classList.add("user-cardname");

        const userName = document.createElement("h3");
        userName.textContent = data.username;

        const userEmail = document.createElement("h4");
        userEmail.textContent = data.email;

        userCardName.appendChild(userName);
        userCardName.appendChild(userEmail);
        cardImg.appendChild(userImg);
        cardImg.appendChild(userCardName);

        const feedImg = document.createElement("div");
        feedImg.classList.add("feedimg");

        const feedText = document.createElement("p");
        feedText.textContent = "This is a new post added dynamically.";

        const feedImage = document.createElement("img");
        feedImage.src = "/images/feed image.jpg";
        feedImage.alt = "feed image";
        feedImage.classList.add("feed-img");

        feedImg.appendChild(feedText);
        feedImg.appendChild(feedImage);
//rewrite icons code to allow indivdual link for save and like
        const feedIcons = document.createElement("div");
feedIcons.className = "feed-icons";

const iconData = [
  ["fa-thumbs-up", "likes"],
  ["fa-share-from-square", "share"],
  ["fa-comment", "comment"],
  ["fa-bookmark", "save"]
];

const iconStates = {
  likes: false,
  save: false
};

for (const [iconClass, label] of iconData) {
  const container = document.createElement("div");
  container.className = "lcss-icon";

  const icon = document.createElement("i");
  icon.className = `fa-regular ${iconClass}`;
  icon.id = `feedicon-${label}`;

  const text = document.createElement("h6");
  

  // Add click behavior
  container.addEventListener("click", () => {
    iconStates[label] = !iconStates[label]; // Toggle state

    if (iconStates[label]) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      icon.style.color = "#007bff"; // Highlight color (blue)
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      icon.style.color = ""; // Reset color
    }

    console.log(`${label} clicked: ${iconStates[label]}`);
  });

  container.append(icon, text);
  feedIcons.appendChild(container);
}

// Append to your target container
document.body.appendChild(feedIcons);

        const comment1 = document.createElement("div");
        comment1.classList.add("comment1");

        const commentImg = document.createElement("img");
        commentImg.src = "";
        commentImg.alt = "";

        const commentTextarea = document.createElement("textarea");
        commentTextarea.placeholder = "write your comment";

        comment1.appendChild(commentImg);
        comment1.appendChild(commentTextarea);
        

        card.appendChild(cardImg);
        card.appendChild(feedImg);
        card.appendChild(feedIcons);
        

        return card;
    }
    //function that dynamicaly create friend section
    function createfriends(friends){
        const userfriend = document.createElement('div')
        userfriend.classList.add('userfriend')

        const  friendsimg = document.createElement('img')
        friendsimg.src = friends.photo
        friendsimg.alt = 'friends'
        friendsimg.id = 'suggestions-img'
        friendsimg.classList.add('userfriend-img')

        const usernameclass = document.createElement('div')
        usernameclass.classList.add('friend-username')

        const p = document.createElement('p')
        p.textContent = friends.username

        const link = document.createElement('a')
        link.textContent = friends.name
        link.href = '#'

        const icon = document.createElement('div')
        icon.classList.add('friends-icon')

        usernameclass.appendChild(p)
        usernameclass.appendChild(link)

        userfriend.appendChild(friendsimg)
        userfriend.appendChild(usernameclass)

        return userfriend

    }
//asynchronous lood to add new cards
    async function loadMorePosts() {
        for (let i = 0; i < 2; i++) { // Add 3 new posts
            const data = await fetchUserData();
//the response.json is being returned in the fetchuserData() function  and the responsis stored in const data

            if (data) {
                data.forEach(data => {
                    const newCard = createCard(data);
                    feedsContainer.appendChild(newCard);

                })
                
            }
        }
    }
//async function for load friend section
    async function loadfriends() {
        for(let i = 0; i<= 3 ; i++){
            const friendsdata = await fetchUserData();

            if (friendsdata) {
                friendsdata.forEach(friends =>{
                    const newfriend = createfriends(friends);
                    friendbody.appendChild(newfriend)

                })
            }
        }
        
    }

    loadfriends()
//event listener for scroll on feed 
    feedsContainer.addEventListener("scroll", function () {
        if (feedsContainer.scrollTop + feedsContainer.clientHeight >= feedsContainer.scrollHeight - 10) {
            loadMorePosts();
        }
    });

    // Load initial posts
    loadMorePosts();
});

//icon click

//adding new post
let addpost = document.getElementById('addpost')
let newpost = document.getElementById("newpost")
newpost.addEventListener('click', function() {
    console.log('newpost clicked');
    addpost.style.display = 'flex'
    
})

let Close = document.getElementById("close")
Close.addEventListener('click', function(){
    addpost.style.display = 'none'
})

//upload click test
/*const icon = document.getElementById('triggerUpload');
const fileinput = document.getElementById('fileInput')

icon.addEventListener('click',() => {
    fileinput.click()
})

fileinput.addEventListener('change', () => {
    const file = fileinput.files[0];
    if (file) {
        alert(`you selected: ${file.name}`)
        
    }
})
*/
    const triggerIcon = document.getElementById('triggerUpload');
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');
    const uploadBtn = document.getElementById('uploadBtn');
                                                                                                                                                                                                                                                                                                                                           
    let selectedFile = null;
  
    // Click icon => trigger hidden file input
   // Click icon => trigger hidden file input
triggerIcon.addEventListener('click', () => {
  fileInput.click();
});

// Show preview when a file is selected
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  if (file && file.type.startsWith('image/')) {
    selectedFile = file; // Save for upload

    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image file.");
    preview.style.display = 'none';
    selectedFile = null;
  }
});

// Upload file as JSON
uploadBtn.addEventListener('click', async () => {
  if (!selectedFile) {
    alert("No file selected!");
    return;
  }

  const reader = new FileReader();

  reader.onload = async (e) => {
    const base64Image = e.target.result; // Base64 encoded image

    // Create JSON payload
    const payload = {
      image: base64Image,
      filename: selectedFile.name,
      type: selectedFile.type,
    };

    try {
      const response = await fetch('https://fake-json-api.mock.beeceptor.com/posts', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Upload failed!");
      }

      const result = await response.json();
      alert("Upload successful!");
      console.log("Server Response:", result);
    } catch (error) {
      alert("Something went wrong.");
      console.error(error);
    }
  };

  reader.readAsDataURL(selectedFile); // Convert image to Base64
});