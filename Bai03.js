const oanBtn = document.getElementById('oan');
const tuBtn = document.getElementById('tu');
const tiBtn = document.getElementById('ti');
const resultDiv = document.getElementById('result');

const choices = ['Oẳn', 'Tù', 'Tì'];

oanBtn.addEventListener('click', playGame);
tuBtn.addEventListener('click', playGame);
tiBtn.addEventListener('click', playGame);

function playGame() {
    const playerChoice = this.textContent;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;
    if (playerChoice === computerChoice) {
        result = "Hòa!";
    } else if ((playerChoice === "Oẳn" && computerChoice === "Tì") ||
              (playerChoice === "Tù" && computerChoice === "Oẳn") ||
              (playerChoice === "Tì" && computerChoice === "Tù")) {
        result = "Bạn thắng!";
    } else {
        result = "Bạn thua!";
    }

    resultDiv.textContent = `Bạn chọn: ${playerChoice}, Máy chọn: ${computerChoice}. Kết quả: ${result}`;
}