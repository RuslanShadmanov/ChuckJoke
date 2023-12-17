const button = document.querySelector("button")
const jokeDiv = document.querySelector (".joke")
const selectCategory = document.querySelector("select")
// const listCategory = document.querySelector(".listCategory")
let currentCategory =null;
const searchBtn = document.querySelector (".btnSearch")
const input = document.querySelector('input')



const searchFunc = async () => {
    const searchInput = input.value;
    const res = await fetch (`https://api.chucknorris.io/jokes/search?query=${searchInput}`)
    const search = await res.json();

    for (let i=0 ; i<5; i++){
        const jokeP= document.createElement ('p')
        jokeP.innerText+=search.result[i].value;
        jokeDiv.appendChild(jokeP);
        
    }
}

searchBtn.addEventListener('click',searchFunc)

const getRandomJoke = async()=>{
    const url = currentCategory ?`https://api.chucknorris.io/jokes/random?category=${currentCategory}`:`https://api.chucknorris.io/jokes/random`
console.log (url)
   
    const res = await fetch (url)
   
    
    const joke = await res.json();



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

selectCategory.addEventListener('change',()=>{
    currentCategory = selectCategory.value
})
button.addEventListener("click", getRandomJoke);
document.addEventListener("DOMContentLoaded",chooseCategory)




