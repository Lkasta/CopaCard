var i = 0
const type = ["dourado", "explorer", "ignite"]

function changeCard(event) {
    if (i > 2) {
        i = 0
    }
    const card = document.querySelector(".card")
    card.style.backgroundImage = `url(./assets/bg-${type[i]}.svg)`
    i++
}

var nick = document.querySelector(".form__group > input")

var img = document.querySelector('.card > img')
var imgErrado = document.querySelector('.card > img')

nick.addEventListener("input", (event) => {
    if (nick.value.length === 0) {
        img.setAttribute('src', `https://i1.sndcdn.com/artworks-000501300870-udhbt5-t500x500.jpg`);
    }
    else if (imgErrado.onerror) {
        img.setAttribute('src', `https://i1.sndcdn.com/artworks-000501300870-udhbt5-t500x500.jpg`);
    }
    else {
        img.setAttribute('src', `https://github.com/${nick.value}.png`);
    }
})  