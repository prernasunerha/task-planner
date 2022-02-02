//task-4 Task Form Input Validation
const form = document.querySelector("#addTaskForm");

//task-6 Initialize a new TaskManager
const taskManager = new TaskManager(0);

 taskManager.load();
 taskManager.render();


//task-4 Task Form Input Validation
form.addEventListener("submit", (event) => {
    //alert("Error");
    const taskName = document.querySelector('#taskName');
    const status = document.querySelector('#status');
    const taskDescription = document.querySelector('#taskDescription');
    const validateAssignedTo = document.querySelector('#assignedTo');
    const validateDueDate = document.querySelector('#dueDate');
    let validationFail = 0;

    event.preventDefault();
    event.stopPropagation();
    console.log("Task Name :" + taskName.value.length);
    console.log("Task Description :" + taskDescription.value.length);
    console.log("Task Assigned To :" + validateAssignedTo.value.length);
    console.log("Task Due Date :" + validateDueDate.value);
    console.log("Task Status:" + status.value);

    const clearFormFields = () => {
      taskName.value = "";
      taskDescription.value = "";
      validateAssignedTo.value = "";
      validateDueDate.value = "";
      status.value = "In Progress";
      };
    
//Check if the Task Name input value is more than 5 characters.
    if(taskName.value.length > 5 ){
       taskName.classList.add("is-valid");
       taskName.classList.remove("is-invalid");
    } else {
        taskName.classList.add("is-invalid");
        taskName.classList.remove("is-valid");
        validationFail++;  
    }


//Check if the Task Description input value is more than 5 characters.
    if(taskDescription.value.length > 5){
    taskDescription.classList.add("is-valid");
    taskDescription.classList.remove("is-invalid");
  } else {
    taskDescription.classList.add("is-invalid");
    taskDescription.classList.remove("is-valid");
    validationFail++;

    }

//Check if the Assigned To value is more than 5 characters.
    if(validateAssignedTo.value.length > 5){
        validateAssignedTo.classList.add("is-valid");
        validateAssignedTo.classList.remove("is-invalid");
      } else {
        validateAssignedTo.classList.add("is-invalid");
        validateAssignedTo.classList.remove("is-valid");
        validationFail++;
    }

//Check if the Task Due Date input value is not empty.
    if (validateDueDate.value) {
        validateDueDate.classList.add("is-valid");
        validateDueDate.classList.remove("is-invalid");
      } else {
        validateDueDate.classList.add("is-invalid");
        validateDueDate.classList.remove("is-valid");
        validationFail++;
      }

//Check if the Task Status input value is not empty.}
    if (status.value) {
        status.classList.add("is-valid");
        status.classList.remove("is-invalid");
      } else {
        status.classList.add("is-invalid");
        status.classList.remove("is-valid");
        validationFail++;
      }
      
    if (validationFail > 0) {
        validationFail = 0;
        return;

      } else {
        taskManager.addTask(taskName.value, status.value, validateAssignedTo.value, taskDescription.value, validateDueDate.value);
        
        clearFormFields();
        taskManager.save();
        taskManager.render();
        
      }
});

//task-8 Update A Task
const taskList = document.querySelector("#task-list");
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    const parentTask =
      event.target.parentElement.parentElement.parentElement;
      console.log(parentTask);
    const taskId = Number(parentTask.dataset.taskId);
    console.log(taskId);
    const task = taskManager.getTaskById(taskId);
    console.log(task);
    task.status = "Done";
    taskManager.save();
    taskManager.render();
  }
  
  if (event.target.classList.contains("delete-button")) {
    const parentTask =
      event.target.parentElement.parentElement.parentElement;
      console.log(parentTask);
    const taskId = Number(parentTask.dataset.taskId);
    taskManager.deleteTask(taskId);
    console.log(taskId)
    taskManager.save();
    taskManager.render();
  }
});


//task-5 Display the Current Date
const dateElement =document.querySelector("#date-element");
let today = new Date();
const [month, day, year] = [today.getMonth()+1, today.getDate(), today.getFullYear()];
let dateString = `Current Date: ${day} / ${month} / ${year}`;
dateElement.innerHTML = dateString;

















