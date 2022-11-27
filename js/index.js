const buttons = document.querySelector(".grid")
const result = document.querySelector(".result")


function keys(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`)
    if (!key) return

    if (key.id == 'reset') {
        result.innerText = ' '
        return
    }

    if (key.id == '=') {
        if (result.innerText.search(/[^0-9*/+-.]/mi) != -1) return

        result.innerText = eval(result.innerText)
        return
    }

    result.innerText += key.id
}

buttons.addEventListener("click", function (e) {
    if (!e.target.classList.contains('button')) return

    const value = e.target.id
    if (e.target.classList.contains('button_reset')) {
        result.innerText = ' '
        return
    }

    if (e.target.classList.contains('button_equal')) {
        if (result.innerText.search(/[^0-9*/+-.]/mi) != -1) return

        result.innerText = eval(result.innerText)
        return
    }

    result.innerText += value
})

window.addEventListener('keydown', keys)
