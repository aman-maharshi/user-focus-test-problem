let tags = ["HTML", "CSS", "Python"]

let tagsContainer = document.querySelector(".tags__container")
let addTagInput = document.querySelector(".add-tag__input")
let addTagBtn = document.querySelector(".add-tag__btn")

document.addEventListener("DOMContentLoaded", showTags)

addTagBtn.addEventListener("click", addNewTag)

function showTags() {
    let tagString = ""
    tags.forEach(item => {
        tagString += `<div class="tag">${item}</div>`
    })
    tagsContainer.innerHTML = tagString
}

function addNewTag() {
    let newTagContent = addTagInput.value
    if (newTagContent != "") {
        tags.push(newTagContent)
        showTags()
    }
}
