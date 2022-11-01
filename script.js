var i = 0
const type = ["dourado","explorer","ignite"]

function changeCard(event) {
    if (i >= 3) {
        i = 0
    }
    const card = document.querySelector(".card")
    card.style.backgroudImage = `url(./assets/bg-${type[i]}.svg)`
    console.log(`url(./assets/bg-${type[i]}.svg)`)
    i++
}