let buttons = document.querySelectorAll("button"); // targeting all the buttons 
let playerChecker = true; // for alternating X and O
let winCard = document.getElementById('win'); // targeting the p tag for the win card

let dataArray = Array(9).fill(null);

let playCount = 0;
let gameOver = false;


const winCheck = () =>{
    let winCheckPara = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]; // all the winning possiblities

    for (let i=0; i<winCheckPara.length; i++){
        const [a, b, c] = winCheckPara[i];
        if (dataArray[a] && dataArray[a] == dataArray[b] && dataArray[a] == dataArray[c] && playCount<9){
            gameOver = true;
            setTimeout(()=>{
                alert("The site will now reload")
                location.reload();
            }, 2000)
            return dataArray[a];
        } 

    }
    return null;

}



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
            playCount+=1;
            let id = e.target.id;
            dataArray[id] = e.target.innerText;
            // console.log(dataArray);
            let check = winCheck();
            // console.log(check);
            if (check){
                winCard.innerText = `Winner : ${check}`
            }
        }
        if(playCount==9 && !gameOver){
            winCard.innerText = "It's a draw";
            setTimeout(()=>{
                location.reload();
            }, 2000)
        }
    })
})