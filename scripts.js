const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];
 
//Function to add up to 3 new tasks*/
function addTasks() {
  let tasksAdded = 0;

  while (tasksAdded < 3) {
    // Check if user wants to continue adding
    let addMore = prompt("Would you like to add a new task?").toLowerCase();
    if (addMore !== "yes") {
      break;
    }

    // Get task details from user
    let title = prompt("Enter task title:");
    let description = prompt("Enter task description:");
    let status = prompt("Enter task status (done):").toLowerCase();

    // Get the last task's ID and increment
    let lastTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
    let newTask = {
      id: lastTaskId + 1,
      title: title,
      description: description,
      status: status
    };

    // Add new task to the array
    tasks.push(newTask);
    tasksAdded++;

    // Check if task limit reached
    if (tasksAdded === 3) {
      alert("There are enough tasks on your board, please check them in the console.");
    }
  }
}

 
//Function to log all tasks with clear labels*/
function logAllTasks() {
  console.log("=== All Tasks ===");
  tasks.forEach(task => {
    console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Status: ${task.status}`);
  });
}

 
//Function to filter and log only completed tasks*/
function logCompletedTasks() {
  let completedTasks = tasks.filter(task => task.status === "done");
  console.log("=== Completed Tasks ===");
  completedTasks.forEach(task => {
    console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}`);
  });
}

// Initial task array
let tasks = [
  { id: 1, title: "Launch Epic Career", description: "Create a killer Resume", status: "todo" },
  { id: 2, title: "Master JavaScript", description: "Get comfortable with the fundamentals", status: "doing" },
  { id: 3, title: "Contribute to Open Source Projects", description: "Gain practical experience and collaborate with others in the software development community", status: "done" }
];

// Function to add new tasks (up to 3)
function addNewTasks() {
  let tasksToAdd = 3;

  while (tasksToAdd > 0) {
    if (tasks.length >= 6) {
      alert("There are enough tasks on your board, please check them in the console.");
      break;
    }

    let title = prompt("Enter task title:");
    let description = prompt("Enter task description:");
    let status = prompt("Enter task status (todo, doing, done):");

    const newId = tasks[tasks.length - 1]?.id + 1 || 1;

    tasks.push({ id: newId, title, description, status });
    tasksToAdd--;
  }
}

// Call function to add tasks
addNewTasks();

// Log all tasks
console.log("All tasks:", tasks);

// Filter completed tasks
const completedTasks = tasks.filter(task => task.status === "done");
console.log("Completed tasks:", completedTasks);
