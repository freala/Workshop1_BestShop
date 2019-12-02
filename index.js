let dropdownBtn = document.querySelector(".dropdown__btn");
let closeBtn = document.querySelector(".close__btn");
let menuList = document.querySelector("nav.main__menu");
//console.log(dropdownBtn, closeBtn, menuList);

dropdownBtn.addEventListener("click", ()=>{
    menuList.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
    dropdownBtn.classList.add("hidden")
});

closeBtn.addEventListener("click", ()=>{
    menuList.classList.add("hidden");
    closeBtn.classList.add("hidden");
    dropdownBtn.classList.remove("hidden")
});