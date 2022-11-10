var i = 1
const type = ["dourado", "explorer", "ignite"]
const textinho = document.querySelector('.form__field') 

function setImageDefault() {
   img.setAttribute('src', `https://i1.sndcdn.com/artworks-000501300870-udhbt5-t500x500.jpg`);
 }

function changeCard(event) {
    if (i > 2) {
        i = 0
    }
    const card = document.querySelector(".card")
    card.style.backgroundImage = `url(./assets/bg-${type[i]}.svg)`
    i++
}

var nickInput = document.querySelector(".form__field")

var img = document.querySelector('.card > img')

nickInput.addEventListener("keypress", function(tecla) {

    if(tecla.key === 'Enter') {
        if (nickInput.textContent === 0){
            setImageDefault();
        } else {
            conectionApi();
        }
    }

})

img.onerror = function setImagee(){setImageDefault()}; 

//GITHUB API

function conectionApi() {

    const nameUser = document.querySelector(".info > h1")
    const profileImage = document.querySelector('.card > img')

    let user = textinho.value
    const url = `https://api.github.com/users/${user}`

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.message !== 'Not Found'){

                if (data.name = "") {
                    nameUser.textContent = data.login
                } else {
                    nameUser.textContent = data.name
                }

                profileImage.src = data.avatar_url

            } else {
               console.log("jonas")
            }
        })
}


