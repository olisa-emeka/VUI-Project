const activate = document.querySelector(".activate");

function updateScroll() {
    var element = document.getElementById("maindiv");
    element.scrollTop = element.scrollHeight;
}

//possible utterances
let finalProject = [
    "Undergraduate individual project",
    "individual project",
    "Individual project",
    "final year project",
    "Final year project",
    "undergraduate individual project",
    "CST3990",
];

let novelTech = [
    "Who takes novel interaction",
    "novel interaction details",
    "novel interaction room",
    "what room so i have novel interaction",
    "novel interaction technologies",
    "novel",
    "interaction",
    "novel interaction lecturer",
    "CST3140",
    "CST 3140",
];

let businessInt = [
    "Business intelligence",
    "business intelligence",
    "who takes business intelligence",
    "CST3340",
    "CST 3340",
];

let projectManagement = [
    "Project management",
    "project management",
    "who takes project management",
    "CST2560",
    "CST 2560",
];

let softwareEngineering = [
    "Software engineering",
    "software engineering",
    "who teaches software engineering",
    "CST2550",
    "CST 2550",
];

let webApp = [
    "Web Application",
    "web application",
    "who takes web application",
    "CST2120",
    "CST 2120",
];

let systemsAnalysis = [
    "Information systems analysis and design",
    "Information systems analysis",
    "Information systems",
    "Information system",
    "information systems",
    "information system",
    "who takes information system",
    "CST2310",
    "CST 2310",
];

let userExp = [
    "User experience",
    "User interface",
    "user experience",
    "user interface",
    "who takes user experience",
    "UX",
    "UI",
];

let salut = ["hello", "hi", "how are you", "howdy", "What's up"];
let salutReply = ["I am good, how are you", "Hey, how are you doing"];
let possibleSalutReply = ["i am good", "i am fine", "i'm fine", "fine", "i'm good", "good", "i am okay", "okay", "i'm okay"];
let replyAfterGreeting = [
    "wonderful, how may i be of assistance to you",
    "that's excellent, what can i help you with",
    "great, do you need assistance with something",
    "that's great, always remember to stay happy, and how may i be of assistance to you ",
];

let modules = ["module", "modules", "courses", "course"];

let referencing = [
    "how do i reference",
    "reference",
    "referencing",
    "harvard referencing",
    "harvard reference",
    "harvard",
];
let hybrid = [
    "recorded lecture",
    "recording",
    "hybrid learning",
]

let programming = [
    "learn programming",
    "programming",
    "how to program",
    "can you teach me how to program",
    "how can i learn programming",
    "program",
];

let develop = [
    "develop",
    "who developed you",
    "developed you",
    "your developer",
    "who made you",
    "made you",
];

let timetable = [
    "timetable",
    "What is on my timetable",
    "What class do I have today?",
    "time table",
    "table",
]


//initiate asstSpeech engine
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

//user asstSpeech to text
const studText = (text) => {
    const chatParagraph = document.createElement("p");
    chatParagraph.classList.add("message");

    const span = document.createElement("span");
    span.classList.add("float");

    let user = "STUDENT: ";
    const spanText = document.createTextNode(user);
    span.appendChild(spanText);

    const chatText = document.createTextNode(text);
    chatParagraph.appendChild(span);
    chatParagraph.appendChild(chatText);

    //main.appendChild(chatParagraph);
    return chatParagraph;
};

//VUI response text
const voiceSpeech = (text) => {
    const chatAsst = document.createElement("p");
    chatAsst.classList.add("reply");

    const voiceAsstSpan = document.createElement("span");
    voiceAsstSpan.classList.add("float");

    let assitant = " :VOICE ASSISTANT";
    const spanTextVa = document.createTextNode(assitant);
    voiceAsstSpan.appendChild(spanTextVa);

    const voiceTextAsst = document.createTextNode(text);
    chatAsst.appendChild(voiceTextAsst);
    chatAsst.appendChild(voiceAsstSpan);
    return chatAsst;
};

//VUI response
const voiceAsst = (userUtterances) => {
    const asstSpeech = new SpeechSynthesisUtterance();
    asstSpeech.text = "Sorry I didn't quite get that, do you mind repeating it?";

    //iterates through all possible utterance and keywords, the returns results
    for (let i = 0; i < salut.length; i++) {
        if (userUtterances.indexOf(salut[i]) > -1) {
            let randGreeting =
                salutReply[Math.floor(Math.random() * salutReply.length)];
            asstSpeech.text = randGreeting;
        }
    }
    for (let i = 0; i < possibleSalutReply.length; i++) {
        if (userUtterances.indexOf(possibleSalutReply[i]) > -1) {
            asstSpeech.text =
                replyAfterGreeting[
                    Math.floor(Math.random() * replyAfterGreeting.length)
                ];
        }
    }
    for (let i = 0; i < develop.length; i++) {
        if (userUtterances.indexOf(develop[i]) > -1) {
            asstSpeech.text = "Ajufo Olisaemeka developed me. ";
        }
    }

    //List of Modules

    for (let i = 0; i < novelTech.length; i++) {
        if (userUtterances.indexOf(novelTech[i]) > -1) {
            asstSpeech.text =
                "Novel Interaction Technologies is conducted in room CG01 for lectures and BG05 for the labs and is taught by Dr Girish Bekaroo, lectures start at 11:30am on Mondays and end 2:30pm, I just opened MDX My Learning if you want a more detailed description of the subject";
            window.open(
                "https://mdx.mrooms.net/",
                "My Learning",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < finalProject.length; i++) {
        if (userUtterances.indexOf(finalProject[i]) > -1) {
            asstSpeech.text =
                "Undergraduate Individual Project is conducted online and is chaired by Dr Girish Bekaroo, lecture is scheduled for specific thursdays, from 11am to 12pm, I just opened MDX My Learning if you want a more detailed description of the subject";
            window.open(
                "https://mdx.mrooms.net/",
                "My Learning",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < businessInt.length; i++) {
        if (userUtterances.indexOf(businessInt[i]) > -1) {
            asstSpeech.text =
                "Business Intelligence is conducted in room CG03 for lectures and BG01 for the labs, and is taught by Dr Suraj Juddo, lectures start at 10:30am on Tuesdays and end 1:30pm, i just opened MDX My Learning if you want a more detailed description of the subject";
            window.open(
                "https://mdx.mrooms.net/",
                "My Learning",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < userExp.length; i++) {
        if (userUtterances.indexOf(userExp[i]) > -1) {
            asstSpeech.text =
                "User Experience / User Interface (UX / UI) is conducted in room CG01 for lectures and BG05 for the labs, and is taught by Dr Priscilla Ramsamy, lectures start at 10:30am on Friday and end 2:30pm with an hour break in between, i just opened MDX My Learning if you want a more detailed description of the subject";
            window.open(
                "https://mdx.mrooms.net/",
                "My Learning",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < projectManagement.length; i++) {
        if (userUtterances.indexOf(projectManagement[i]) > -1) {
            asstSpeech.text =
                "As of the year 2021, Project Management and Professional Practice was taught by Dr. Waseemah Moedeen, i just opened MDX My Learning if you want a more detailed description of the subject";
            window.open(
                "https://mdx.mrooms.net/",
                "My Learning",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < hybrid.length; i++) {
        if (userUtterances.indexOf(hybrid[i]) > -1) {
            asstSpeech.text =
                "Because of the Covid-19 pandemic, Middlesex adopted the hybrid learning approach, so lectures are recorded here at MDX Play ";
            window.open(
                "https://www.play.mdx.ac.uk/",
                "MDX Play",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < softwareEngineering.length; i++) {
        if (userUtterances.indexOf(softwareEngineering[i]) > -1) {
            asstSpeech.text =
                "As of the year 2021, Software Engineering was taught by Dr. Aditya Santokhee, i just opened MDX My Learning if you want a more detailed description of the subject";
            window.open(
                "https://mdx.mrooms.net/",
                "My Learning",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < timetable.length; i++) {
        if (userUtterances.indexOf(timetable[i]) > -1) {
            asstSpeech.text =
                "If you are a Computer Science Student, you should have recieved an email sent by Lakshinee Jauhalee at the beginning of the semester about your timetable. I've opened a link to outlook.com, enter your credentials and search your mail for your timetable.";
            window.open(
                "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1648411617&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3dd71ba0ad-8037-31e0-ee7e-7bf97ff6bb5c&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015",
                "Outlook",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < systemsAnalysis.length; i++) {
        if (userUtterances.indexOf(systemsAnalysis[i]) > -1) {
            asstSpeech.text =
                "As of the year 2021, Information Systems Analysis and Design was taught by Dr. Aditya Santokhee, i just opened MDX My Learning if you want a more detailed description of the subject";
            window.open(
                "https://mdx.mrooms.net/",
                "My Learning",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < webApp.length; i++) {
        if (userUtterances.indexOf(webApp[i]) > -1) {
            asstSpeech.text =
                "As of the year 2021, Web Application and Databases was taught by Dr. Ameerah Assotally, i just opened MDX My Learning if you want a more detailed description of the subject";
            window.open(
                "https://mdx.mrooms.net/",
                "My Learning",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < referencing.length; i++) {
        if (userUtterances.indexOf(referencing[i]) > -1) {
            asstSpeech.text =
                "Middlesex university uses the Harvard referencing format, i just opened a new window, where you access documents on using harvard referencing";

            window.open(
                "https://www.citethisforme.com/citation-generator/harvard",
                "Harvard Referencing",
                "height=700,width=900"
            );
        }
    }

    for (let i = 0; i < modules.length; i++) {
        if (userUtterances.indexOf(modules[i]) > -1) {
            asstSpeech.text = "Which Module do you want information on";
        }
    }

    if (
        userUtterances.includes("dissertation") ||
        userUtterances.includes("Dissertation")
    ) {
        asstSpeech.text =
            "MDX Leaning enhancement team (LET) can provide you with information in regards to writing your dissertations you can email n.rozah@mdx.ac.mu for more information";
    }

    if (userUtterances.includes("thank you")) {
        asstSpeech.text =
            "you are most welcome, is there anything else i can do for you";
    }

    if (userUtterances.includes("no") || userUtterances.includes("No")) {
        asstSpeech.text =
            "Alright, don't forget to activate me when you need something";
    }

    if (userUtterances.includes("Yes") || userUtterances.includes("yes")) {
        asstSpeech.text = "What else would you like me to do for you";
    }

    if (userUtterances.includes("thank you")) {
        asstSpeech.text =
            "you are most welcome, is there anything else i can do for you";
    }

    if (
        userUtterances.includes("Javascript") ||
        userUtterances.includes("javascript") ||
        userUtterances.includes("JavaScript")
    ) {
        asstSpeech.text =
            "If you want to learn more about the Javascript programming language on linkedIn learning, i just opened the Unihub login page on a new browser window, enter your valid credentials, and you will be redirected to LinkedIn learning, from there you can just search javascript and you will see a variety of courses and tutorials, If it's not good enough, you can always search youtube.com";

        window.open(
            "https://www.linkedin.com/checkpoint/enterprise/login/42408908?application=learning",
            "LinkedIn Learning",
            "height=500,width=700"
        );
    }

    if (
        userUtterances.includes("programming") ||
        userUtterances.includes("how to program") ||
        userUtterances.includes("where can i program")
    ) {
        asstSpeech.text =
            "you can learn the programming on linkedIn learning, i just opened the Unihub login page on a new browser window, enter your valid credentials, and you will be redirected to LinkedIn learning, from there you can just search programming and you will see a variety of courses and tutorials, If it's not good enough, you can always search youtube.com";
        window.open(
            "https://www.linkedin.com/checkpoint/enterprise/login/42408908?application=learning",
            "LinkedIn Learning",
            "height=500,width=700"
        );
    }

    if (
        userUtterances.includes("search") ||
        userUtterances.includes("Search") ||
        userUtterances.includes("meaning") ||
        userUtterances.includes("Meaning")
    ) {
        asstSpeech.text =
            "Let me check for " +
            userUtterances +
            ".... a new window has been opened with the results of your search";
        url = "http://www.google.com/search?q=" + userUtterances;
        window.open(url, "Search", "height=500,width=700");
    }

    if (userUtterances.includes("synonym") || userUtterances.includes("Synonym")) {
        asstSpeech.text =
            "okay, I am now searching for the " +
            userUtterances +
            ".... a new window has been opened with the results of your search";
        url = "http://www.google.com/search?q=" + userUtterances;
        window.open(url, "Search", "height=500,width=700");
    }

    if (userUtterances.includes("antonym") || userUtterances.includes("antonym")) {
        asstSpeech.text =
            "okay, I am now searching for the  " +
            userUtterances +
            ".... a new window has been opened with the results of your search";
        url = "http://www.google.com/search?q=" + userUtterances;
        window.open(url, "Antonym | Synonym", "height=500,width=700");
    }

    if (userUtterances.includes("Python") || userUtterances.includes("python")) {
        asstSpeech.text =
            "If you want to learn more about the Python programming language, I have just opened a link to linkedIn learning, but first you have to input your credentials on unihub, then you will be redirected to LinkedIn Learning.";
        window.open(
            "https://www.linkedin.com/checkpoint/enterprise/login/42408908?application=learning",
            "LinkedIn Learning",
            "height=500,width=700"
        );
    }

    asstSpeech.volume = 1;
    asstSpeech.rate = 1;
    asstSpeech.pitch = 1;
    window.speechSynthesis.speak(asstSpeech);
    let main = document.querySelector(".main");
    main.appendChild(voiceSpeech(asstSpeech.text));
    updateScroll();
};

//start asstSpeech recognition
recognition.onstart = () => {
    console.log("Voice Assistant Initiated");
};

//when user stops talking
recognition.onresult = (event) => {
    console.log(event);
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript;
    //msg.textContent = transcript;
    let main = document.querySelector(".main");
    main.appendChild(studText(transcript));
    voiceAsst(transcript);
};

//button to start asstSpeech recognition
activate.addEventListener("click", () => {
    recognition.start();
});