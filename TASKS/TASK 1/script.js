const button = document.getElementById("btn");
const paragraph = document.querySelector(".main__description__more");

button.addEventListener("click", () => {
    paragraph.classList.toggle("show");
    if(paragraph.classList.contains('show')){
        button.textContent = "Show less";
    }else{
        button.textContent = "Learn more";
    }
})


