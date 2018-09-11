
(function() {
    "use strict";

    const jokeUrl = "https://api.icndb.com/jokes/random"

    const jokeElement = document.getElementById("joke")
    const newJokeButton = document.getElementById("newJoke")

    let generateJoke = () => {
        const promise = new Promise((resolve, reject) => {
            const request = new XMLHttpRequest()

            request.open("GET", jokeUrl);
            request.onload = () => {
                if (request.status === 200) {
                    resolve(request.response)
                } else {
                    reject(Error(request.statusText))
                }
            }

            request.onerror = () => {
                reject(Error("Error fetching data"))
            }

            request.send()
        })

        promise.then((data) => {
            jokeElement.innerHTML = JSON.parse(data).value.joke
        }, (error) => {
            jokeElement.innerHTML = "An error occurred while fetching a joke."
        })
    }

    newJokeButton.addEventListener("click", generateJoke)
    generateJoke()
}())