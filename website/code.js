const input = document.querySelector("input");
const btn = document.querySelector("button");
const out_text = document.querySelector("#out_text");
let selected = document.querySelector("select")


const male = {
    greet: ["Дорогой", "Уважаемый", "Любимый"],
    quality: ["Замечательным", "Прекрасным"],
    state: ["таким же работящим", "таким же невероятным"]

}
const female = {
    greet: ["Дорогая", "Уважаемая", "Любимая"],
    quality: ["Замечательным", "Прекрасным"],
    state: ["такой же прекрасной", "такой же невероятной"]
}

function sayText(sex) {
    let text = `${sex.greet[getRandomInt(sex.greet.length)]}
    ${input.value}.  Хотим поздравить вас с этим 
    ${sex.quality[getRandomInt(sex.quality.length)]} праздником.
    Желаем вас оставаться всегда ${sex.state[getRandomInt(sex.state.length)]}.
    До новых встреч!
    `;
    return text;
}

btn.onclick = () => {
    if(selected.value == "None"){
        alert("Пожалуйста, укажите пол коллеги!");
        return
    }else if(selected.value == "female")
    {
        out_text.textContent = sayText(female);
    }else if(selected.value == "male")
    {
        out_text.textContent = sayText(male);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
