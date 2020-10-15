const input = document.querySelector("input");
const btn = document.querySelector("button");
const out_text = document.querySelector("#out_text");


const man = {
    greet: ["Дорогой, Уважаемый"],
}
const female = {
    greet: ["Дорогая, Уважаемая"],

}

function sayText(sex) {
    let text = `${sex.greet[getRandomInt(sex.greet.length)]}
    ${input.value}`;
    return text;
}

btn.onclick = () => {
    out_text.textContent = sayText(female);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
