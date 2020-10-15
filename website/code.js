const input = document.querySelector("input");
const btn = document.querySelector("button");
const out_text = document.querySelector("#out_text");
let selected = document.querySelector("select")
let img = document.querySelector("img");

// https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png


const male = {
    greet: ["Дорогой", "Уважаемый", "Любимый"],
    quality: ["Замечательным", "Прекрасным", "Классным"],
    state: ["таким же работящим", "таким же невероятным"],
    url_images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
        "https://www.smdp.com/wp-content/uploads/2020/04/BUNNY_-Snowflake.jpg",
        "https://miro.medium.com/max/12032/1*99r7mbdm30qA1xrSJBuQjw.jpeg"]

}
const female = {
    greet: ["Дорогая", "Уважаемая", "Любимая"],
    quality: ["Замечательной", "Прекрасной"],
    state: ["такой же прекрасной", "такой же невероятной"],
    url_images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
    "https://www.smdp.com/wp-content/uploads/2020/04/BUNNY_-Snowflake.jpg",
    "https://miro.medium.com/max/12032/1*99r7mbdm30qA1xrSJBuQjw.jpeg"]
}

function sayText(sex) {
    let text = `${sex.greet[getRandomInt(sex.greet.length)]}
    ${input.value}.  Хотим поздравить вас с этим 
    ${sex.quality[getRandomInt(sex.quality.length)]} праздником.
    Желаем вас оставаться всегда ${sex.state[getRandomInt(sex.state.length)]}.
    До новых встреч!
    `;
    input.value = "";
    return text;
}

btn.onclick = () => {
    if(selected.value == "None"){
        alert("Пожалуйста, укажите пол коллеги!");
        return
    }else if(selected.value == "female")
    {
        out_text.textContent = sayText(female);
        img.src = female.url_images[getRandomInt(female.url_images.length)];
    }else if(selected.value == "male")
    {
        out_text.textContent = sayText(male);
        img.src = male.url_images[getRandomInt(male.url_images.length)];
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
