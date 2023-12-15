const button = document.querySelector("button")
const jokeDiv = document.querySelector (".joke")



const getRandomJoke = async()=>{
    const res = await fetch ("https://api.chucknorris.io/jokes/random")
    
    const joke = await res.json();
    jokeDiv.innerText= joke.value
    
}
button.addEventListener("click", getRandomJoke);