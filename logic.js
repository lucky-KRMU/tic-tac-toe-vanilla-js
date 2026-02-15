let buttons = document.querySelectorAll("button"); // targeting all the buttons 
let playerChecker = true; // for alternating X and O

let dataArray = Array(9).fill(null);


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
        if (dataArray[a] && dataArray[a] == dataArray[b] && dataArray[a] == dataArray[c]){
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
            let id = e.target.id;
            dataArray[id] = e.target.innerText;
            console.log(dataArray);
            let check = winCheck();
            console.log(check);
        }
    })
})