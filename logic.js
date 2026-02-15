let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let notify = document.querySelector(".notify");

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        if (turn0 === true){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        
        let isWinner = checkWinner();
    });
});


const checkWinner = () => {
    for (let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText =  `Congratulations, the winner is ${winner}`;
    notify.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const reset = () =>{
    turn0 = true;
    notify.classList.add("hide");
    enableboxes();
};



resetbtn.addEventListener("click" , reset );
newgame.addEventListener("click" , reset );