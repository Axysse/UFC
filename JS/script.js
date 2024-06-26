
const navigation = document.getElementById("nav1");


const menu = document.getElementById("clk");
console.log(menu);

display = menu.addEventListener("click", () => {
    if (navigation.classList.contains("max-md:hidden")) {
    navigation.classList.remove("max-md:hidden");
    } else {
        navigation.classList.add("max-md:hidden")
    }
    
    
})


