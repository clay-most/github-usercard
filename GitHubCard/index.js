/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
axios
  .get("https://api.github.com/users/clay-most")
  .then(response => {
    const cards = document.querySelector(".cards");
    const newCard = CardCreator(response.data);
    cards.appendChild(newCard);
  })
  .catch(error => {
    console.log("error", error);
  });

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(instructor => {
  axios
    .get(`https://api.github.com/users/${instructor}`)
    .then(response => {
      const cards = document.querySelector(".cards");
      const newCard = CardCreator(response.data);
      cards.appendChild(newCard);
    })
    .catch(error => {
      console.log("error", error);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

//Card maker function that takes in a single object//
function CardCreator(user) {
  //container div//
  const card = document.createElement("div");
  card.classList.add("card");

  //user image created with source and appeneded to card div//
  const userImg = document.createElement("img");
  userImg.src = `${user.avatar_url}`;
  card.appendChild(userImg);

  //info div classed and appended to main card div//
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("card-info");
  card.appendChild(infoDiv);

  //name//
  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = `${user.name}`;
  infoDiv.appendChild(name);

  //username//
  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = `${user.login}`;
  infoDiv.appendChild(username);

  //location//
  const location = document.createElement("p");
  location.textContent = `Location: ${user.location}`;
  infoDiv.appendChild(location);

  //profile and link//
  const profile = document.createElement("p");
  profile.textContent = "Profile:";
  infoDiv.appendChild(profile);

  const profileLink = document.createElement("a");
  profileLink.href = `${user.html_url}`;
  profileLink.textContent = `${user.html_url}`;
  profile.appendChild(profileLink);

  //followers//
  const followers = document.createElement("p");
  followers.textContent = `Followers: ${user.followers}`;
  infoDiv.appendChild(followers);

  //following//
  const following = document.createElement("p");
  following.textContent = `Following: ${user.following}`;
  infoDiv.appendChild(following);

  //bio//
  const bio = document.createElement("p");
  bio.textContent = `Bio: ${user.bio}`;
  infoDiv.appendChild(bio);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
