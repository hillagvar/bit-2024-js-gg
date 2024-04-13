//pasiimame html elementus is DOM pagal id
const addBtn = document.getElementById("add-task"); // <button>
const list = document.getElementById("task-list"); // <ul> elementas
const taskInput = document.getElementById("task-input"); // <input>
const clearBtn = document.getElementById("clear-tasks"); // <button> - isvalyti visa sarasa

//kintamasis, kuriame saugomos uzduotys
let tasks = [];


//funkcijos:

// f-ja atvaizduoja masyva kaip sarasa
const showTasks = () => {
    //isvalome buvusi sarasa
    list.innerHTML = "";
    //su kiekviena uzduotimi atliekame veiksma
    // kintamasis task - masyvo elementas (uzduotis)
    tasks.forEach((task) => {
        //sukuriame nauja objekta (HTMLElement klases)
        const newTask = document.createElement("li");
        //objekto atributam priskiriame reiksmes
        newTask.className = "list-group-item";
        newTask.textContent = task;
        //nauja objekta patalpiname i DOM (i saraso apacia)
        list.appendChild(newTask);

    });
}

const addTask = () => {
    //pasiimame uzduoties teksta
    const text = taskInput.value;

    //issaugome uzduoti masyve
    tasks.push(text);
    // console.log(JSON.stringify(tasks));

    //isvalome buvusia forma
    taskInput.value = "";

    //atvaizduojami irasai
    showTasks();

    //issaugome i localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks)); // galima paduoti tik tekstus

}

const clearList = () => {
    //isvalome masyva
    tasks = []
    //isvalome localstorage
    localStorage.removeItem("tasks");

    //atvaizduojame is naujo
    showTasks();
};

addBtn.onclick = addTask;
clearBtn.onclick = clearList;

//pasiimame is ls informacija
const lsTasks = localStorage.getItem("tasks");

//patikriname, ar ls buvo kintamasis tasks
if (lsTasks != null) {
    tasks = JSON.parse(lsTasks);
    //jei kintamasis egzistavo, tuomet atvaizduojame uzduotis
    showTasks();
}