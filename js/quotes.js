const quotes=[
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. ",
        author: "Thomas Edison",
    },
    {
        quote: "If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.",
        author: "Jim Rohn",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller",
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "Angelina Jolie",
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther King, Jr",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson",
    },
    {
        quote: "I didn't get there by wishing for it or hoping for it, but by working for it.",
        author: "Estee Lauder",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;