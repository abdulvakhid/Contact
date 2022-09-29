let elForm = document.querySelector(".form");
let elNameInput = elForm.querySelector(".name");
let elRelation = elForm.querySelector(".relation");
let elNumber = elForm.querySelector(".number");
let elContact = document.querySelector(".Contact");

let newList = document.createElement("ul");
let newArr = [];

function deleteItem(evt) {
    evt.parentElement.remove();
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let nameValue = elNameInput.value;
    let realtionValue = elRelation.value;
    let numberValue = elNumber.value;

    let obj = {
        id: newArr.length + 1,
        name: nameValue,
        relation: realtionValue,
        number: numberValue,
    }

    newArr.push(obj);

    elNameInput.value = "";
    elRelation.value = "";
    elNumber.value = "";
    newList.innerHTML = "";

    for (const arr of newArr) {
        let newItem = document.createElement("li");
        let newTitle = document.createElement("h3");
        let newText = document.createElement("p");
        let newNumber = document.createElement("a");
        newNumber.href = "tel:[number]";

        let newBtn = document.createElement("button");
        newBtn.textContent = "X"
        newBtn.setAttribute("onclick", "deleteItem(this)")

        newTitle.textContent = arr.name;
        newText.textContent = arr.relation;
        newNumber.textContent = arr.number;

        newList.classList.add("list-unstyled", "text-center", "d-flex", "flex-wrap", "justify-content-center");
        newItem.classList.add("mb-3", "border", "border-warning", "mb-4", "me-3", "py-5", "px-3", "rounded", "bg-light", "shadow-lg", "position-relative", "w-25");
        newTitle.classList.add("fs-4", "mb-3");
        newText.classList.add("mb-2", );
        newNumber.classList.add("text-decoration-none");
        newBtn.classList.add("position-absolute", "top-0", "w-25", "end-0", "border-danger", "bg-danger", "text-white", )

        newItem.appendChild(newTitle);
        newItem.appendChild(newText);
        newItem.appendChild(newNumber);
        newItem.appendChild(newBtn);
        newList.appendChild(newItem);
        elContact.appendChild(newList);
    }
})