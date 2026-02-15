let buttons = document.querySelectorAll("button"); // targeting all the buttons 
let playerChecker = true; // for alternating X and O

let dataArray = Array(9).fill(null);


console.log(buttons);

buttons.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        if (e.target.innerText === ""){
            if(playerChecker){
                e.target.innerText = "X";
            } else{
                e.target.innerText = "O"
            }
            playerChecker = !playerChecker;
        }
        let id = e.target.id;
        dataArray[id] = e.target.innerText;
        console.log(dataArray);
    })
})