const inputbox = document.getElementById("inputbox");
const btn = document.querySelector("button");
const listContainer = document.querySelector("ul");



btn.addEventListener("click" , (e) => {
    if(inputbox.value == ""){
        alert("Must Have Been Write Somthing");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputbox.value;
        
        listContainer .appendChild(li)   
        inputbox.value = "";
        
        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        li.appendChild(span)
        
        let p = document.createElement("p");
        li.appendChild(p)
        
        
        span.addEventListener("click" , () =>{
            li.remove();
        });
        
        p.addEventListener("click" , (e) => {
            li.classList.toggle("check");
        });
        
        saveData();
    
    }
    
});

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}


























































// const form = document.querySelector(".form");
// const inp = document.querySelector("input");
// const btn = document.querySelector("button");
// const yourTask = document.querySelector(".yourTask");
// const work = document.querySelector(".work");
// // const h4 = document.querySelector(".list");

// form.addEventListener("click", function (e) {
//     e.preventDefault()
// });

// btn.addEventListener("click" , (e) => {
//     const h4 = document.createElement("h4");
//     h4.classList.add("h4");
//     h4.innerText = inp.value;
//     const div = document.querySelector("div");
//     div.classList.add("item")
//     div.appendChild(h4)
//     inp.value = "";
//     work.appendChild(div);
// });


// btn.addEventListener("click", () => {

//     let span = document.createElement("span");
//     let div = document.createElement("div");
//     let h4 = document.createElement("h4");
//     span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;
//     span.style.marginTop = "2px";
//     span.classList.add("span");
//     h4.innerText = inp.value;
//     div.appendChild(h4);
//     div.appendChild(span);
//     div.classList.add("work");
//     yourTask.appendChild(div);
//     inp.value = "";
//     span.addEventListener("click", () => {
//         div.remove();
//     });
// });
