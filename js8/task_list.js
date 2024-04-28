//pasiimame html elementus is DOM pagal id
const addBtn = document.getElementById("add-task"); // <button>
const list = document.getElementById("task-list"); // <ul> elementas
const taskInput = document.getElementById("task-input"); // <input>
const clearBtn = document.getElementById("clear-tasks"); // <button> - isvalyti visa sarasa

//kintamasis, kuriame saugomos uzduotys
let tasks = [];

//funkcijos:

//f-ja uzd issaugojimui
const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // galima paduoti tik tekstus
}

// f-ja atvaizduoja masyva kaip sarasa
const showTasks = () => {
    //isvalome buvusi sarasa
    list.innerHTML = "";
    //su kiekviena uzduotimi atliekame veiksma
    // kintamasis task - masyvo elementas (uzduotis)
    tasks.forEach((task, i) => {
        //sukuriame nauja objekta (HTMLElement klases)
        const newTask = document.createElement("li");
        //objekto atributam priskiriame reiksmes
        newTask.className = "list-group-item d-flex justify-content-between align-items-center";
        newTask.textContent = task;
        //nauja objekta patalpiname i DOM (i saraso apacia)
        list.appendChild(newTask);

        //sukuriame HTML button elementa
        const deleteBtn = document.createElement("button");

        //priskiriame atributa text content
        deleteBtn.textContent = "Ištrinti";

        //stilizuojame mygtuka
        deleteBtn.className = "btn btn-sm btn-info";

        deleteBtn.onclick = () => {
            tasks.splice(i, 1);
            saveTasks();
            showTasks();
        }

        //mygtuka priskiriame li elementui (newTask)
        newTask.appendChild(deleteBtn);


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
    saveTasks();

}

const clearList = () => {
    //isvalome masyva
    tasks = []
    //isvalome localstorage
    localStorage.removeItem("tasks");
    //arba saveTasks();

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