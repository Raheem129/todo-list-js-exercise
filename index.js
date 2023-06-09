function newTask(title, description) {
  const task = {
    title: title, // Title of the task
    description: description, // Description of the task
    complete: false, // Indicates whether the task has been completed or not

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`); // Logs the current state of the task
    },

    markCompleted: function() {
      this.complete = true; // Marks the task as completed
    }
  };
  return task; // Returns the created task object
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // Creates a new task object with title and description
const task2 = newTask("Do Laundry", "😨"); // Creates another task object with a different title and description
const tasks = [task1, task2]; // Stores the tasks in an array

task1.logState(); // Logs the initial state of task1 (not completed)
task1.markCompleted(); // Marks task1 as completed
task1.logState(); // Logs the updated state of task1 (completed)
