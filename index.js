const text = document.getElementById("text")
const author = document.getElementById("author")
const newQuote = document.getElementById("new-quote")
const tumblr = document.getElementById("tumblr-quote")
const tweet = document.getElementById("tweet-quote")
const body = document.getElementById("body")

appRender()

function appRender() {
    fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {

            let randomNumber = Math.floor(Math.random() * data.length)

            text.innerHTML = `<i class="fa fa-quote-left"</i>${data[randomNumber].text}`
            author.textContent = `-${data[randomNumber].author}`
        });

    let randomColor = Math.floor(Math.random() * 16777215).toString(16)

    text.style.color = `#${randomColor}`;
    author.style.color = `#${randomColor}`;
    body.style.backgroundColor = `#${randomColor}`;
    tumblr.style.backgroundColor = `#${randomColor}`;
    tweet.style.backgroundColor = `#${randomColor}`;
    newQuote.style.backgroundColor = `#${randomColor}`;
}

newQuote.addEventListener('click', function () {
    appRender()
})



