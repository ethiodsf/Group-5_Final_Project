const myForm = document.getElementById('myForm');
let validFormFieldInput = (data) => {
    const taskname = document.querySelector('#taskname');
    const taskName = taskname.value;
    if(taskName = ''){
        
    }
    console.log("Task Name:  "+taskName);

}
// Add event listener to the form to run valide form input
// If the input is not valide add the 'show' alert class to the alert element

function submitClick(event) {
    event.preventDefault()
    const validForm = formValidation()
    console.log(validForm);
    if (validForm) {
      alert("Thank you for your time! Your details have been submitted!");
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

