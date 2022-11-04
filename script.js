var i = 0
const type = ["dourado", "explorer", "ignite"]
const textinho = document.querySelector('.form__field') 

function setImageDefault() {
   img.setAttribute('src', `https://i1.sndcdn.com/artworks-000501300870-udhbt5-t500x500.jpg`);
 }

// function setImageByNick() {
//   img.setAttribute('src', `https://github.com/${nick.value}.png`);
// }

// function changeCard(event) {
//     if (i > 2) {
//         i = 0
//     }
//     const card = document.querySelector(".card")
//     card.style.backgroundImage = `url(./assets/bg-${type[i]}.svg)`
//     i++
// }


var nick = document.querySelector(".form__group > input")

var img = document.querySelector('.card > img')

img.onerror = function setImagee(){setImageDefault()}; 


//GITHUB API

nick.addEventListener("textinho", (event) => {
    conectionApi();
})

function conectionApi() {

    const nameUser = document.querySelector(".info > h1")
    const profileImage = document.querySelector('.card > img')

    let user = textinho.value
    const url = `https://api.github.com/users/${user}`

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.message !== 'Not Found'){
                nameUser.textContent = data.name
                profileImage.src = data.avatar_url
            } else {
               console.log("jonas")
            }
        })
}

nick.addEventListener("textinho", (event) => {
    conectionApi();
})