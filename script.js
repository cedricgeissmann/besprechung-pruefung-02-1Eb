function right() {
    const blub = document.querySelector("#blubber")
    let cx = parseInt(blub.getAttribute("cx"))
    cx = cx + 50
    blub.setAttribute("cx", cx)
}