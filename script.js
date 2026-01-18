const questionBank = {
    general: {
        easy: [
            {q:"Capital of India?", options:["Delhi","Mumbai","Chennai","Kolkata"], ans:"Delhi"},
            {q:"National animal of India?", options:["Lion","Tiger","Elephant","Leopard"], ans:"Tiger"},
            {q:"Currency of India?", options:["Dollar","Rupee","Yen","Euro"], ans:"Rupee"},
            {q:"Taj Mahal is in?", options:["Delhi","Agra","Jaipur","Lucknow"], ans:"Agra"},
            {q:"National bird of India?", options:["Peacock","Crow","Eagle","Sparrow"], ans:"Peacock"}
        ],
        medium: [
            {q:"Largest Indian state?", options:["UP","MP","Rajasthan","Maharashtra"], ans:"Rajasthan"},
            {q:"First PM of India?", options:["Nehru","Patel","Bose","Gandhi"], ans:"Nehru"},
            {q:"National flower?", options:["Rose","Lotus","Lily","Tulip"], ans:"Lotus"},
            {q:"Indian ocean borders?", options:["Asia","Africa","Both","None"], ans:"Both"},
            {q:"Author of Ramayana?", options:["Valmiki","Ved Vyas","Kalidas","Tulsidas"], ans:"Valmiki"}
        ],
        hard: [
            {q:"Article 370 related to?", options:["Punjab","J&K","UP","Bihar"], ans:"J&K"},
            {q:"Constitution adopted in?", options:["1947","1948","1949","1950"], ans:"1949"},
            {q:"First President?", options:["Rajendra Prasad","Nehru","Radhakrishnan","Patel"], ans:"Rajendra Prasad"},
            {q:"Longest river?", options:["Ganga","Yamuna","Godavari","Narmada"], ans:"Ganga"},
            {q:"Planning Commission replaced by?", options:["NITI Aayog","RBI","SEBI","ECI"], ans:"NITI Aayog"}
        ]
    },

    tech: {
        easy: [
            {q:"HTML stands for?", options:["Hyper Text Markup Language","High Text ML","Hyper Tool ML","None"], ans:"Hyper Text Markup Language"},
            {q:"CSS used for?", options:["Logic","Styling","Database","Server"], ans:"Styling"},
            {q:"JS runs in?", options:["Browser","Compiler","OS","Server"], ans:"Browser"},
            {q:"Which is browser?", options:["Chrome","Linux","Oracle","Apache"], ans:"Chrome"},
            {q:"HTML is?", options:["Language","Markup","DB","Server"], ans:"Markup"}
        ],
        medium: [
            {q:"HTTP success code?", options:["200","404","500","301"], ans:"200"},
            {q:"Frontend tech?", options:["HTML","PHP","MySQL","MongoDB"], ans:"HTML"},
            {q:"CSS framework?", options:["Bootstrap","Laravel","Spring","Django"], ans:"Bootstrap"},
            {q:"JS keyword?", options:["var","int","float","char"], ans:"var"},
            {q:"Link CSS tag?", options:["link","style","css","script"], ans:"link"}
        ],
        hard: [
            {q:"HTTP port?", options:["21","25","80","443"], ans:"80"},
            {q:"REST uses?", options:["HTTP","FTP","SMTP","SSH"], ans:"HTTP"},
            {q:"NoSQL DB?", options:["MySQL","Oracle","MongoDB","Postgres"], ans:"MongoDB"},
            {q:"JS is?", options:["Compiled","Interpreted","Binary","Assembly"], ans:"Interpreted"},
            {q:"Not JS framework?", options:["React","Angular","Vue","Django"], ans:"Django"}
        ]
    },

    math: {
        easy: [
            {q:"5 + 7 = ?", options:["10","11","12","13"], ans:"12"},
            {q:"10 × 2 = ?", options:["15","20","25","30"], ans:"20"},
            {q:"15 − 5 = ?", options:["5","10","15","20"], ans:"10"},
            {q:"8 ÷ 2 = ?", options:["2","3","4","5"], ans:"4"},
            {q:"Square of 4?", options:["8","12","16","20"], ans:"16"}
        ],
        medium: [
            {q:"12 × 4 = ?", options:["36","44","48","52"], ans:"48"},
            {q:"√81 = ?", options:["7","8","9","10"], ans:"9"},
            {q:"25% of 200?", options:["40","45","50","60"], ans:"50"},
            {q:"LCM of 4 & 6?", options:["6","12","18","24"], ans:"12"},
            {q:"20² = ?", options:["200","300","400","500"], ans:"400"}
        ],
        hard: [
            {q:"√144 = ?", options:["10","11","12","13"], ans:"12"},
            {q:"15³ = ?", options:["225","3375","375","150"], ans:"3375"},
            {q:"Value of π?", options:["2.14","3.14","4.14","5.14"], ans:"3.14"},
            {q:"(a+b)² ?", options:["a²+b²","a²+b²+2ab","2a²+2b²","None"], ans:"a²+b²+2ab"},
            {q:"Prime number?", options:["9","15","17","21"], ans:"17"}
        ]
    }
};

let questions = questionBank[CATEGORY][DIFFICULTY];
let index = 0, score = 0, correct = 0, wrong = 0;
let time = 10, timer, timeSpent = [];
let selectedAnswer = null;
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    clearInterval(timer);
    time = 10;
    selectedAnswer = null;
    nextBtn.disabled = true;

    document.getElementById("qno").innerText = `Question ${index+1} of ${questions.length}`;
    document.getElementById("timer").innerText = time;
    document.getElementById("question").innerText = questions[index].q;

    const optDiv = document.getElementById("options");
    optDiv.innerHTML = "";

    questions[index].options.forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => {
            selectedAnswer = opt;
            document.querySelectorAll(".option-btn").forEach(b=>b.classList.remove("selected"));
            btn.classList.add("selected");
            nextBtn.disabled = false;
        };
        optDiv.appendChild(btn);
    });

    nextBtn.innerText = (index === questions.length-1) ? "Submit Quiz" : "Next";

    timer = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = time;
        if(time===0) finalizeAnswer();
    },1000);
}

function finalizeAnswer(){
    clearInterval(timer);
    timeSpent.push(10-time);
    if(selectedAnswer === questions[index].ans){ score++; correct++; }
    else{ wrong++; }
    index++;
    index < questions.length ? loadQuestion()
        : location.href=`result.php?score=${score}&correct=${correct}&wrong=${wrong}&time=${timeSpent.join(",")}`;
}

function nextQuestion(){ finalizeAnswer(); }

loadQuestion();
