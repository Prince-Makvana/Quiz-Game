const URI = "https://aptitude-api.vercel.app/Random";

const que = document.querySelector("#question");
const opt1 = document.querySelector("#option1");
const opt2 = document.querySelector("#option2");
const opt3 = document.querySelector("#option3");
const opt4 = document.querySelector("#option4");
const explain = document.querySelector("#explanation");
const newQue = document.querySelector("#new-question");



(async function getQuiz(){
    let responce = await fetch(URI);
    console.log(responce);
    let data = await responce.json();
    console.log(data);


    que.innerText = data.question;
    opt1.innerText = opt1.innerText + data.options[0]
    opt2.innerText = opt2.innerText + data.options[1]
    opt3.innerText = opt3.innerText + data.options[2]
    opt4.innerText = opt4.innerText + data.options[3]
    explain.innerText = data.explanation;

    function checkAnswer(clickedOption, optionText) {
        if (optionText === data.answer) {
            clickedOption.classList.remove("bg-primary-subtle");
            clickedOption.style.backgroundColor = "MediumSeaGreen";
        } else {
            clickedOption.classList.remove("bg-primary-subtle");
            clickedOption.style.backgroundColor = "Tomato";
        }
    }

    opt1.addEventListener("click", () => checkAnswer(opt1, data.options[0]));
    opt2.addEventListener("click", () => checkAnswer(opt2, data.options[1]));
    opt3.addEventListener("click", () => checkAnswer(opt3, data.options[2]));
    opt4.addEventListener("click", () => checkAnswer(opt4, data.options[3]));

    newQue.addEventListener("click", (event) => {
        event.preventDefault();
        location.reload();
    });

})();

