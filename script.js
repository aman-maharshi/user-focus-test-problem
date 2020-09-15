/*
    INITIALIZAITON
*/
let tags = ["HTML", "CSS", "JavaScript"]

let tagsContainer = document.querySelector(".tags__container")
let addTagInput = document.querySelector(".add-tag__input")
let addTagBtn = document.querySelector(".add-tag__btn")

let draggables = document.querySelectorAll(".tag")
let containers = document.querySelectorAll(".box")

addTagBtn.addEventListener("click", addNewTag)

function showTags() {
    let tagString = ""
    tags.forEach(item => {
        tagString += `<div class="tag" draggable="true">${item}</div>`
    })
    tagsContainer.innerHTML = tagString
    draggables = document.querySelectorAll(".tag")
    implementDrag()
}
showTags()

function addNewTag() {
    let newTagContent = addTagInput.value
    if (newTagContent != "") {
        tags.push(newTagContent)
        showTags()
    }
    addTagInput.value = ""
}

/* 
    DRAG FUNCTIONALITY
*/

function implementDrag() {
    draggables.forEach(item => {
        item.addEventListener("dragstart", () => {
            item.classList.add("dragging")
        })
        item.addEventListener("dragend", () => {
            item.classList.remove("dragging")
        })
    })

    containers.forEach(item => {
        item.addEventListener("dragover", e => {
            e.preventDefault
            const draggingItem = document.querySelector(".dragging")
            item.appendChild(draggingItem)
        })
    })
}

implementDrag()

// reload btn
document.querySelector(".refresh").addEventListener("click", () => {
    location.reload()
})
