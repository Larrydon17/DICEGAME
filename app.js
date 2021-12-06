// PLAYER1
let randomnumber = Math.ceil(Math.random()* 6)
console.log(randomnumber);


let randomdiceimage = 'dice' + randomnumber + '.jpeg'

let randomimagesource = 'images/' + randomdiceimage

let image = document.querySelectorAll('img') [0]
image.setAttribute('src',randomimagesource)

// PLAYER2
let randomNumber = Math.ceil(Math.random()* 6)
console.log(randomNumber);

let randomDiceimage = 'dice' + randomNumber + '.jpeg'

let randomImagesource = 'images/' + randomDiceimage

let Image1= document.querySelectorAll('img') [1]
Image1.setAttribute('src',randomImagesource)


// conditional statement

if(randomnumber > randomNumber){
    document.querySelector('h1').innerHTML ='Player1 wins🎊🎉'
} else if (randomNumber > randomnumber){
        document.querySelector('h1').innerHTML = 'Player2 wins🎉🎊'
}else{
    document.querySelector('h1').innerHTML = 'Draw🔗'
}

