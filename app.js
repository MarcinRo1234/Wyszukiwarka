const ulList = document.querySelectorAll("li");
let input = document.querySelector(".search");
let ul = document.querySelector("ul");

const liElements = document.querySelectorAll("li");


const search = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    console.log(tasks);
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
};



const searcher2 = () => {
    ulList.forEach(li => {
        const match = new RegExp(input.value, "i").test(li.textContent);
        if(!match){
            li.style.display = "none";
        } else {
            li.style.display = "block";
        }
    })
}

input.addEventListener("keyup", searcher2);