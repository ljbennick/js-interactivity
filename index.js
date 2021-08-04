const message = document.querySelector('#message')
console.log("Hello bitch!")
function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    
    movieTitle.addEventListener("click", crossOffMovie)

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    

    const list = document.querySelector("ul")
    list.appendChild(movie)
    inputField.value = ""
}

document.querySelector("form").addEventListener("submit", addMovie)

function deleteMovie(event){
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    event.target.parentNode.remove()
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked") === true){
        message.textContent = `${event.target.textContent} watched! Nice! Was it good?`
    } else {
        messsage.textContent = `You wanted the movie, "${event.target.textContent}" back.`
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove("hide")
    setTimeout(() => {
        message.classList.add("hide")
    }, 1000)
}

// console.log(inputField)
