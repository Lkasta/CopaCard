var nick = document.querySelector(".form__group > input")
var nameH1 = document.querySelector(".info > h1")

function getApiGithub() {
    fetch(`https://api.github.com/users/${nick.value}`)
        .then(async res => {

           console.log(nick.value)

    }).catch(e => console.log(e))
}

// nick.addEventListener("input", (event) => {
//     nameH1.innerText = nick.value.length === 0 ? "Seu Nick" : nick.value
//     getApiGithub()
// })
