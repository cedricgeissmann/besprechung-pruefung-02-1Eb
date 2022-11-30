function right() {
    const blub = document.querySelector("#blubber")
    let cx = parseInt(blub.getAttribute("cx"))
    cx = cx + 50
    blub.setAttribute("cx", cx)
}

function left() {
    const blub = document.querySelector("#blubber")
    let cx = parseInt(blub.getAttribute("cx"))
    cx = cx - 50
    blub.setAttribute("cx", cx)
}

function up() {
    const blub = document.querySelector("#blubber")
    let cy = parseInt(blub.getAttribute("cy"))
    cy = cy - 50
    blub.setAttribute("cy", cy)
}

function down() {
    const blub = document.querySelector("#blubber")
    let cy = parseInt(blub.getAttribute("cy"))
    cy = cy + 50
    blub.setAttribute("cy", cy)
}

function reset() {
    const blub = document.querySelector("#blubber")
    blub.setAttribute("cx", 250)
    blub.setAttribute("cy", 250)
}