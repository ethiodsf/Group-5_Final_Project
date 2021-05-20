
let createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    return `<ul class="card list-group border border-primary" style="width: 300px">
   
    <li class="list-group-item card-text">Task Name:${name}
    <button class="btn btn-primary ml-5" name="status" value="status">Status</button>
</li> 
    <li class="list-group-item card-text">Task Description:${description}</li>
    <li class="list-group-item card-text">Assigned to:${assignedTo}</li>
    <li class="list-group-item card-text">Due Date: ${dueDate}</li>
    <li class="list-group-item card-text">Status: ${status}</li>           

</ul>`
}


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

    render(){
        const taskHTML = `<div>${this.tasks.map(task => createTaskHtml(task.taskName, task.description, 
            task.assignedTo, task.dueDate, task.status)).join("")}</div>`       
            document.getElementById("taskList").innerHTML = taskHTML;
    }

}