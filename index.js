const tasks = [
    { title: "Купить продукты на неделю", isDone: false },
    { title: "Полить цветы", isDone: true },
    { title: "Сходить на тренировку", isDone: false },
]

const headerEl = document.createElement("h1");
const rootEl = document.getElementById("root");
headerEl.append("Tasks");
rootEl.append(headerEl);

const tasksEl = document.createElement("ul");
rootEl.append(tasksEl);

tasks.forEach(task => {
    const taskEl = document.createElement("li");
    const taskTitleEl = document.createElement("div");
    const taskStatusEl = document.createElement("input");
    taskEl.append(task.title);
    taskEl.append(taskStatusEl);
    taskTitleEl.append(task.title);
    taskStatusEl.checked = task.isDone;
    taskStatusEl.type = "checkbox";
    tasksEl.append(taskEl);
})


