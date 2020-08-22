
function addRating() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'yelp.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const ratingsobject = JSON.parse(this.responseText);
            for(let i = 0; i < ratingsobject.length; i++ ) {
                getChildElements(ratingsobject[i].id, parseFloat(ratingsobject[i].rating));
                addReview(ratingsobject[i].id, ratingsobject[i].review, ratingsobject[i].opened); 
            }
        }
    }

    xhr.send()
}


// Get child elements of the DIV

function getChildElements(cardId, starRating) {
    const elements = document.getElementById(cardId).children;
    childrenArray = [];
    for (let item in elements) {
        if (typeof elements[item] === 'object') {
            childrenArray.push(elements[item]);
        }
    }

    addStar(childrenArray, starRating);

}


// Adding star

function addStar(childrenArray, starRating) {
    if (Number.isInteger(starRating) === true) {
        for (let i = 0; i < starRating; i++) {
            childrenArray[i].classList.remove('unchecked');
            childrenArray[i].classList.add('checked');
        }
    } else {

        for (let j = 0; j < parseInt(starRating); j++) {
            childrenArray[j].classList.remove('unchecked');
            childrenArray[j].classList.add('checked');
        }

        // console.log(starRating)

        childrenArray[Math.floor(starRating)].classList.remove('unchecked');
        childrenArray[Math.floor(starRating)].classList.add('fa-star-half-o');

    }

}

addRating()


// Adding reviews
function addReview(elementId, userReview, activity) {
    const reviewCard = document.getElementById(elementId)
    const newElement = document.createElement('span');
    const newElementText = document.createTextNode(`${userReview} Reviews`);
    newElement.appendChild(newElementText);
    reviewCard.appendChild(newElement);

    // Adding Recent activity
    const firecard = document.getElementById(elementId).parentElement.lastElementChild;
    const newRecentElement = document.createElement('span');
    const newRecentElementText = document.createTextNode(`${activity} days ago`);
    newRecentElement.appendChild(newRecentElementText);
    firecard.appendChild(newRecentElement);
}



function imageclick(clickContainer) {
    randomNum = Math.floor(Math.random() * (3 -1 + 1)  + 1)
    document.getElementById(clickContainer).style.order = randomNum;
    console.log(randomNum);
}


