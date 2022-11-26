const buttons = document.querySelector(".grid")
const btn = document.querySelectorAll("button")

function test() {
    btn.forEach(item => {
        item.addEventListener("click", function (e) {
            console.log(e.target)
        });

    });
}

test()