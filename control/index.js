let index = 0;
let quoteJson;

let author = document.getElementById('author-holder');
let quote = document.getElementById('main-quote-holder');

let quoteText = document.getElementById('main-quote');

quoteText.addEventListener('dblclick', copyText)

// fetching the API
async function getData() {
    // fetching data
    let quoteJunk = await fetch('https://type.fit/api/quotes');

    // converting to json
    //let quoteJson = await quoteJunk.json();
    quoteJson = await quoteJunk.json();

    // display quotes
    display(quoteJson);


    display(quoteJson[index].author);
}


// get next quote
function nextQuote() {
    if (index <= 1640) {
        index += 1;
        author.innerHTML = `<em>${quoteJson[index].author}</em>`;
        quote.innerHTML = `${quoteJson[index].text}`;
        //display(quoteJson[index].author);

    } else {
        index = 0;
        author.innerHTML = `<em>${quoteJson[index].author}</em>`;
        quote.innerHTML = `${quoteJson[index].text}`;
        //display(quoteJson[index].author);
    }
}


// get previous quote
function prevQuote() {

    if (index >= 0) {
        index -= 1;
        //display(quoteJson[index].author);
        author.innerHTML = `<em>${quoteJson[index].author}</em>`;
        quote.innerHTML = `${quoteJson[index].text}`;
    } else {
        index = 1640;
        //display(quoteJson[index].author);
        author.innerHTML = `<em>${quoteJson[index].author}</em>`;
        quote.innerHTML = `${quoteJson[index].text}`;

    }
}


// copy text to clipboard
function copyText() {
    let copy = document.getElementById('main-quote-holder').textContent;

    quoteText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand('copy');
    console.log("Copy command executed successfully");
}

// display function
function display(item) {
    console.log(item);
}