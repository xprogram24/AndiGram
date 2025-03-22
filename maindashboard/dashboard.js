let hamburger = document.getElementById('hamburger');
let sidebar = document.getElementById('sidebar');

let isSidebarOpen = false; // Track sidebar state

/*hamburger.addEventListener('click', function() {
    if (!isSidebarOpen) {
        // Open sidebar
        sidebar.style.display = 'flex';
        sidebar.style.position = 'absolute'
        sidebar.style.zIndex = '999999';
        sidebar.style.width = '200px';
        
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
});*/





//log out button
let logoutbtn = document.getElementById('logout')

logoutbtn.addEventListener('click',function(){
    
    window.location.href = '/index.html';
})
//creates  the infinite scroll
document.addEventListener("DOMContentLoaded", function () {
    const feedsContainer = document.querySelector(".feeds");

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

        const feedIcons = document.createElement("div");
        feedIcons.classList.add("feed-icons");

        const icons = [
            { class: "fa-thumbs-up", label: "likes" },
            { class: "fa-share-from-square", label: "share" },
            { class: "fa-comment", label: "comment" },
            { class: "fa-bookmark", label: "save" }
        ];

        icons.forEach(icon => {
            const iconContainer = document.createElement("div");
            iconContainer.classList.add("lcss-icon");

            const iconElement = document.createElement("i");
            iconElement.classList.add("fa-regular", icon.class);
            iconElement.id = "feedicon";

            const iconLabel = document.createElement("h6");
            iconLabel.textContent = icon.label;

            iconContainer.appendChild(iconElement);
            iconContainer.appendChild(iconLabel);
            feedIcons.appendChild(iconContainer);
        });

        const commentSection = document.createElement("div");
        commentSection.classList.add("comment-section");

        const comment1 = document.createElement("div");
        comment1.classList.add("comment1");

        const commentImg = document.createElement("img");
        commentImg.src = "";
        commentImg.alt = "";

        const commentTextarea = document.createElement("textarea");
        commentTextarea.placeholder = "write your comment";

        comment1.appendChild(commentImg);
        comment1.appendChild(commentTextarea);
        commentSection.appendChild(comment1);

        card.appendChild(cardImg);
        card.appendChild(feedImg);
        card.appendChild(feedIcons);
        card.appendChild(commentSection);

        return card;
    }
//asynchronous lood to add new cards
    async function loadMorePosts() {
        for (let i = 0; i < 5; i++) { // Add 3 new posts
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

    feedsContainer.addEventListener("scroll", function () {
        if (feedsContainer.scrollTop + feedsContainer.clientHeight >= feedsContainer.scrollHeight - 10) {
            loadMorePosts();
        }
    });

    // Load initial posts
    loadMorePosts();
});

//icon click
