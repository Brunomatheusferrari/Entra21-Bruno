let elemento = document.querySelector("#age-table")
elemento.style.backgroundColor = "blue"



let elementos = document.querySelectorAll("#age-list > label")

for (let elemento of elementos) {
    elemento.style.backgroundColor = "red"
}

let elementos2 = document.querySelectorAll("tr > td:first-child")

for (let elemento of elementos2) {
    elemento.style.backgroundColor = "green"
}
