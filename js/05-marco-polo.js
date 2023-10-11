for(let i=1;i<=100;i++){

    if(i%3!==0 && i%5!==0){
        console.log(i)
        continue
    }
    
    if(i%3===0 &&i%5===0){
        console.log("Marco! Polo!")
        continue
    }

    (i%3===0)? console.log("Marco!"):console.log("Polo!")
   
}