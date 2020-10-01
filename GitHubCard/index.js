import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
/*
STEP 2: Inspect and study the data coming back, this is YOUR
github info! You will need to understand the structure of this
data in order to use it to build your component function

Skip to STEP 3.
*/
const placement = document.querySelector('.cards')

function cardMaker ({imageURL, userName, name, about }){
  const card = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  const user = document.createElement('h4')
  const story = document.createElement('p')

  heading.textContent = `UserName: ${userName}`
  user.textContent = `Name:${name}`
  image.src = imageURL
  story.textContent = `Bio: ${about}`

  card.classList.add('card')
  image.classList.add('card')
  heading.classList.add('userName')
  user.classList.add('name')
  story.classList.add('card')
  

  card.appendChild(image)
  card.appendChild(heading)
  card.appendChild(user)
  card.appendChild(story)
  placement.append(card)
  
return card
}







axios.get('https://api.github.com/users/Majortom917')
.then(res => {
    //debugger
    const userName = res.data.login
    const name = res.data.name
    const imageURL = res.data.avatar_url
    const about = res.data.bio
    cardMaker({imageURL, name, userName, about})
  }).catch(err => {
    console.log(err)
   // debugger
  })
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];
axios.get('https://api.github.com/users/Majortom917/followers')
.then(res => {
  followersArray.push(res.data)
  const profiles= followersArray
  profiles.forEach(data=> {
    const card = cardMaker({imageURL: data.avatar_url, name:data.name, userName:data.login, about:data.bio})
    console.log(followersArray)
    console.log(profiles)
    placement.append(card)
  });
}).catch(err => {
  debugger
  console.log(err)
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
