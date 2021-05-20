class TaskManager {
    constructor() {
        this.tasks = [];
       this.id = 0;
    }
    addTask(taskName, description, assignedTo, dueDate, status) {
       this.id++;
        const taskObj = {
            id: this.id,
            taskName: taskName,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
        }
        this.tasks.push(taskObj);
        // for(let id = 1; id < this.tasks.length; id++)
    }
}