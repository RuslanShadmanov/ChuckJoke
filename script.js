const button = document.querySelector("button")
const jokeDiv = document.querySelector (".joke")
const selectCategory = document.querySelector("select")
// const listCategory = document.querySelector(".listCategory")




const getRandomJoke = async()=>{
    const res = await fetch ("https://api.chucknorris.io/jokes/random")
   
    
    const joke = await res.json();

    console.log (joke)

    jokeDiv.innerText= joke.value;
   
    
}



const chooseCategory = async()=>{
    const res =await fetch("https://api.chucknorris.io/jokes/categories")
    const category = await res.json();
    // for(let el of category){
    //     const option = document.createElement("option")
    //     option.innerText = el;
    //     option.value=el;    
    //     selectCategory.appendChild(option)
    // }
    category.forEach ((category)=>{
        const option = document.createElement("option")
        option.innerText = category;
        option.value=category;    
        selectCategory.appendChild(option)
    })
}
button.addEventListener("click", getRandomJoke);
document.addEventListener("DOMContentLoaded",chooseCategory)




