function convertGrade() {


  let newEl = document.getElementById('letterDiv');
  let grade = document.getElementById('gradeAverage').value;

  let num = isNaN(grade);

  //checks if num is numeric or if grade is empty string
  if (num || grade === '') {

    window.alert("Input number, not characters");

  } else {

    if (grade < 60) {

      newEl.textContent = "F";
      newEl.style.color = "red";

    } else if (grade <= 69.5) {

      newEl.textContent = "D";
      newEl.style.color = "yellow";

    } else if (grade <= 79.5) {

      newEl.textContent = "C";
      newEl.style.color = "yellow";

    } else if (grade <= 89.5) {

      newEl.textContent = "B";
      newEl.style.color = "green";

    } else {

      newEl.textContent = "A";
      newEl.style.color = "green";

    }
  }

}
