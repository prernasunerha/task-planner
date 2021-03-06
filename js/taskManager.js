//task-7 Display The Tasks
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    const html = `<li class="card" data-task-id="${id}" style="min-width: 50vw">
    <div class="card text-center">
        <div class="card-header text-primary font-weight-bold">${status}</div>
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <hr>
            <div class="container">
                <div class="row">
                    <div class="col">Assigned to:</div>
                    <div class="col">Due By: </div>
                </div>
                <div class="row">
                    <div class="col text-muted">${assignedTo}</div>
                    <div class="col text-muted">${dueDate}</div>
                </div>
                
            </div>
            <br>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#editTask">Edit</button>  
            <button class="btn btn-outline-danger delete-button">Delete</button>
            <button class="btn btn-outline-success done-button">Done</button>
        </div>
    </div>
    </li>`;
    return html;
  };


//task-6 Creating a Class and Adding Tasks Programmatically
class TaskManager  {
    constructor (currentId =0) {
          this.tasks = [];
          this.currentId = currentId;

    }
    addTask(taskName,status,assignedTo,description,dueDate) {
        const task = {
            taskName:taskName,
            status: status,
            assignedTo: assignedTo,
            description: description,
            dueDate:dueDate,
            id: this.currentId++,
        };
        this.tasks.push(task);
    };


//Create the render method
render() {
let tasksHtmlList = [];
for (let i = 0; i < this.tasks.length; i++) {
    const task1 = this.tasks[i];

    const date = new Date(task1.dueDate);
    const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const taskHtml = createTaskHtml(
      task1.id,
      task1.taskName,
      task1.description,
      task1.assignedTo,
      formattedDate,
      task1.status
    );
    tasksHtmlList.push(taskHtml);
  }
  const tasksHtml = tasksHtmlList.join("\n");
  const tasksList = document.querySelector("#task-list");
  tasksList.innerHTML = tasksHtml;
}


getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
    const task = this.tasks[i];
    
    if (task.id === taskId) {
    foundTask = task;
    }
    }
    //console.log(foundTask);
    return foundTask; 
}

//task-9 Persisting Tasks to LocalStorage
save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJson);
    const currentId = String(this.currentId);
    localStorage.setItem("currentId", currentId);
  }

load() {
    if (localStorage.getItem("tasks")) {
    const tasksJson = localStorage.getItem("tasks");
    this.tasks = JSON.parse(tasksJson);
    }
    if (localStorage.getItem("currentId")) {
    const currentId = localStorage.getItem("currentId");
    this.currentId = Number(currentId);
    }
}
//Task 10: Deleting Tasks
deleteTask(taskId) {
    console.log("delete task")
    const newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
    const task = this.tasks[i];
    if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
this.tasks = newTasks;
  }
}

