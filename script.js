let chaptersObj = {
    intro: {
        subtitle: "introduction",
        text: " Vous êtes un boss de mafia nommé: Stalionio. Vous faites partie d'une organisation du nom de Torrac. La nuit précédente, un des cinqs autres membres a été assassiné dans une location seulement connue par votre équipe. Il est évident que l'un des membres de l'équipe est un imposteur et c'est à vous de le trouver durant la rencontre à la table ronde.",
        img: "main_page.png",
        options: [
            { optionText: "Accuser Calciago", action: "goToChapter('calciago')" },
            { optionText: "Accuser Appasiliarco", action: "goToChapter('appasiliarco')" },
            { optionText: "Accuser Fiangaso", action: "goToChapter('fiangaso')" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },
    calciago: {
        subtitle: "Calciago",
        text: "Vous ne lui avez jamais fait confiance, car il ne vous a jamais plu. Il dit qu'il était chez Fiordisaggio, mais vous le ne croyez pas",
        img: "calciago.jpg",
        options: [
            { optionText: "Ne rien dire", action: "goToChapter('silenceCalciago')" },
            { optionText: "L'accuser", action: "goToChapter('accuserCalciago')" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },

    silenceCalciago: {
        subtitle: " Ne rien dire à propos de Calciago",
        text: "Trouvant votre silence supsicieux, les membres de votre équipes finient par vous accuser. Ne savant pas qui choisir entre vous et Calciago, ils vous tueunt tout les deux",
        img: "execution.png",
        options: [
            { optionText: "Recommencer", action: "goToChapter('intro')" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },
    accuserCalciago: {
        subtitle: "Accuser Calciago",
        text: "Les membres de l'équipe vous tuent, car ils trouvent l'accusation trop bizarre et brusque. Vous recevez cependant un papier contenant le code de la caméra de sécurité grâce à votre sacrifice, ce qui vous sera utile dans vos prochaines manches.",
        img: "execution.png",
        options: [
            { optionText: "Recommencer", action: "cat()" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },

    appasiliarco: {
        subtitle: "Appasiliarco",
        text: "C'est la personne en qui vous avez le plus confiance dans votre équipe. Par contre, il était la dernière personne à visité votre compagnon mort. Soudainement, une idée vous traverse l'esprit. Vous proposez de voir la caméra de surveillance, mais celle-ci à besoin d'un code de sécurité. Avez-vous le code?",
        img: "appasiliarco.jpg",
        options: [
            { optionText: "Oui", action: "codeCam()" },
            { optionText: "Non", action: "goToChapter('pasCode')" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },


    hasCode: {
        subtitle: "Vous avez le code",
        text: " Les caméras montrent qu'Appasiliarco est allé dans la chambre du camarade mort en colère et en panique. Il se fait exécuté et votre camarade fut vengé.",
        img: "main_page.png",
        video: "sunrise.mp4",
        options: [
            { optionText: "Recommencer", action: "goToChapter('intro')" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },

    pasCode: {
        subtitle: "Vous n'avez pas le code",
        text: "Malheureusement, les membres de votre équipe vous soupsonne, car ils pensent que vous avez inventer l'excuse des caméras sachant que personne ne possédait le code d'accès. Ils finissent par vous éxecuter.",
        img: "execution.png",
        video: "execution_video.mp4",
        options: [
            { optionText: "Recommencer", action: "goToChapter('intro')" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },

    fiangaso: {
        subtitle: "Fiangaso",
        text: "Vous êtes neutre envers lui, mais après quelques recherches, vous trouvez l'arme qui a tué votre camarade dans sa chambre. Avertir les autres?",
        img: "fiangaso.jpg",
        options: [
            { optionText: "Oui", action: "goToChapter('accuserFiangaso')" },
            { optionText: "Non", action: "goToChapter('pasCodeFiangaso')" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },
    accuserFiangaso: {
        subtitle: "Vous accusez Fiangaso",
        text: "Vous accusez Fiangaso, mais celui-ci propose de regarder les caméras pour prouvez qu'il était innocent. Cependant, les caméras demandent un code de sécurité. Avez vous le code?",
        img: "proposer.png",
        options: [
            { optionText: "Oui", action: "codeCam()" },
            { optionText: "Non", action: "goToChapter('pasCode')" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },
    pasCodeFiangaso: {
        subtitle: "Silence mortel",
        text: "Malheureusement, les membres de votre équipe vous soupsonne, car ils pensent que l'arme était un prétext pour tourner les soupsons contre Fiangaso. Il finissent par vous éxecuter.",
        img: "execution.png",
        options: [
            { optionText: "Recommencer", action: "goToChapter('intro')" },
            { optionText: "Effacer la partie", action: "reset()" },
        ]
    },

}



function goToChapter(chapterName) {
    let checkbox = document.querySelector("[type='checkbox']");
    let volumeOn = checkbox.checked
    if (volumeOn == true) {
        var audio = new Audio('assets/images/fx.mp3');
        audio.currentTime = 0;
        audio.play();
    }


    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
    document.querySelector(".subtitle").innerHTML = chaptersObj[chapterName]["subtitle"];
    document.querySelector(".text").innerHTML = chaptersObj[chapterName]["text"];
    document.querySelector(".buttons").innerHTML = "";


    localStorage.setItem("name", [chapterName]);


    if (chaptersObj[chapterName]["video"]) {
        document.querySelector(".main").innerHTML = `<video src="assets/images/` + chaptersObj[chapterName]['video'] + `" loop muted autoplay></video>`;
    } else {
        document.querySelector(".main").innerHTML = `<img src="assets/images/` + chaptersObj[chapterName]["img"] + `">`;
    }



    for (i in chaptersObj[chapterName].options) {
        const button = document.createElement("button");
        button.setAttribute("class", "option");
        button.setAttribute("onclick", chaptersObj[chapterName].options[i].action);
        const buttonText = document.createTextNode(chaptersObj[chapterName].options[i].optionText);
        button.appendChild(buttonText);
        const daddy = document.querySelector(".buttons");
        daddy.appendChild(button);
    }

    let body = document.querySelector("body");
    body.setAttribute("class", [chapterName]);
}

let codeFound = localStorage.setItem("Code", "false");

function cat() {
    localStorage.setItem("Code", "true");
    goToChapter("intro");
}

function codeCam() {
    codeFound = localStorage.getItem("Code");
    if (codeFound == "true") {
        goToChapter("hasCode")
        localStorage.clear();
    } else {
        goToChapter("pasCode")
    }
}

let endChapter = localStorage.getItem("name")



function start() {
    if (endChapter !== "intro") {
        goToChapter(endChapter)
    } else {
        goToChapter("intro")
    }
}


function reset() {
    goToChapter("intro")
    codeFound = false
    localStorage.removeItem("Code");
};

start()