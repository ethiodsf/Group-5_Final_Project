const myForm = document.getElementById('myForm');
const tasks = new TaskManager();
let validFormFieldInput = (data) => {
    const taskname = document.querySelector('#taskname');
    const taskName = taskname.value;
    if(taskName = ''){
        
    }
    console.log("Task Name:  "+taskName);

}
// Add event listener to the form to run valide form input
// If the input is not valide add the 'show' alert class to the alert element
console.log(document.myForm)
function submitClick(event) {
    event.preventDefault()
    const validForm = formValidation()
    console.log(validForm);
    if (validForm) {
      alert("Thank you for your time! Your details have been submitted!");
      tasks.addTask(document.myForm.taskname.value, document.myForm.description.value,
        document.myForm.assignedto.value, document.myForm.duedate.value);
      
        console.log(tasks.tasks);
        tasks.render();
      return true;
    } else {
      return false;
    }
  }

  function formValidation() {
    flag = true;

    if (document.myForm.taskname.value === "") {
      alert("Please fill in task name!");
      flag = false;
    }

    // Validate letters only as Name
    if (document.myForm.description.value === "") {
        alert("Please fill in description!");
        flag = false;
    }
    if (document.myForm.assignedto.value === "") {
        alert("Please select assign to name!");
        flag = false;
    }
    if (document.myForm.duedate.value === "") {
        alert("Please select date!");
        flag = false;
    }
    return flag;
  }


myForm.addEventListener('submit', submitClick);



// tasks.addTask('Cook Dinner',
// 'Prepare a healthy serving of pancakes for the family tonight',
// 'Nick',
// '2020-09-20',
// 'TODO')
console.log(tasks.tasks);