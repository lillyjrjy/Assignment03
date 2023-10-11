let coinFlip
let loopTime = prompt('How many times do you want to loop?')
for(let i=0; i<loopTime; i++){
    coinFlip = Math.round(Math.random())
    if(coinFlip===0){
        console.log('Heads')
    } else{
        console.log('Tails')
    }
}