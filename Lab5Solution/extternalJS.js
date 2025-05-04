let nextBtn = document.getElementById("nextBtn");
let preBtn = document.getElementById("preBtn");
let slideBtn = document.getElementById("slideBtn");
let stopBtn = document.getElementById("stopBtn");
let img = document.images[0];

let count = 1;

function rightSlide() {
  count++;
  if (count > 3) count = 1;
  img.src = `imgs/${count}.png`;
}

function leftSlide() {
  count--;
  if (count < 1) count = 3;
  img.src = `imgs/${count}.png`;
}

function slideShow() {
  sliding = setInterval(rightSlide, 1500);
  document.getElementById("slideBtn").disabled = true;
}

function stopSlideShow() {
  clearInterval(sliding);
  document.getElementById("slideBtn").disabled = false;
}

nextBtn.onclick = rightSlide;
preBtn.onclick = leftSlide;
slideBtn.onclick = slideShow;
stopBtn.onclick = stopSlideShow;

//Endddddddddddddddddddddddddddddddddddddd

const students = [];

//Capitalize the name
function pascalCase(str) {
  let str2 = str.split(" ");
  for (let i = 0; i < str2.length; i++) {
    str2[i] =
      str2[i].charAt(0).toUpperCase() + str2[i].substring(1).toLowerCase();
  }
  let str3 = str2.join(" ");
  return str3;
}

//reset errors
function clearing() {
  document.getElementById("studentName").value = "";
  document.getElementById("studentGrade").value = "";
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("gradeError").innerHTML = "";
  document.getElementById("deptError").innerHTML = "";
}

//delete a student by knowing its index in the array
function studentDelete(name) {
  let studentIndex = students.findIndex(
    (studentName) => pascalCase(studentName["name"]) === name
  );
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    recordStudent();
  }
}
//validate before submitting data
function checkErrors(naming, grade, depts) {
  if (!depts) {
    deptError.innerHTML = "You must select department";
    return false;
  }

  if (!/^[a-zA-Z]+$/.test(naming)) {
    nameError.innerHTML = "Student name can't be empty and must be alphabetic consist of one word";
    return false;
  }

  if (
    students.some(
      (nameOfStudent) => nameOfStudent["name"] === pascalCase(naming)
    )
  ) {
    nameError.innerHTML = "Student is added before";
    return false;
  }

  if (isNaN(grade) || grade > 100 || grade < 0 || grade == "") {
    gradeError.innerHTML =
      "Student grade must be a number between 0 and 100 and can not be empty";
    return false;
  }
  return true;
}

//function to add new student
function pushStudent(sName, gStudent, checkedDept) {
  students.push({
    name: pascalCase(sName),
    studentGrading: gStudent,
    dept: checkedDept.value,
  });
}

//function to filter the student array
function filltering(filtering) {
  let filterStudent = [...students];
  if (filtering === "failed")
    filterStudent = filterStudent.filter(
      (studentGrade) => studentGrade["studentGrading"] <= 60
    );

  if (filtering === "success")
    filterStudent = filterStudent.filter(
      (studentGrade) => studentGrade["studentGrading"] >= 61
    );

  if (filtering === "none") filterStudent = filterStudent;
  return filterStudent;
}

//function to sort after filtering student array
function sorts(sorting, filterStudent) {
  if (sorting === "name")
    filterStudent.sort((a, b) => a.name.localeCompare(b.name));
  else filterStudent.sort((a, b) => a.studentGrading - b.studentGrading);
}

function coloringRow(student, tr) {
  if (student["studentGrading"] <= 60) {
    tr.style.backgroundColor = "red";
  } else if (
    student["studentGrading"] >= 61 &&
    student["studentGrading"] <= 75
  ) {
    tr.style.backgroundColor = "#E07A5F";
  } else tr.style.backgroundColor = "green";
}

function pushDataInTable(filterStudent) {
  for (const student of filterStudent) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${student["name"]}</td>
        <td>${student["studentGrading"]}</td>
        <td>${student["dept"]}</td>
        <td>
            <button class="submit" onclick="studentDelete('${student["name"]}')"  >          
            <span style="color: white;" class="material-symbols-outlined">
                delete
            </span>
    </button></td>
        `;
    coloringRow(student, tr);
    tbody.appendChild(tr);
  }
}

//function to add new student
function newStudent(event) {
  event.preventDefault();
  let sName = document.getElementById("studentName").value;
  let gStudent = document.getElementById("studentGrade").value;
  let checkedDept = document.querySelector('input[name="Department"]:checked');
  if (!checkErrors(sName, gStudent, checkedDept)) return false;
  pushStudent(sName, gStudent, checkedDept);
  clearing();
  recordStudent();
}

//function after filtering and sorting to push data in table
function recordStudent() {
  const filtering = document.getElementById("filtering").value;
  const sorting = document.getElementById("sorting").value;
  tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  filterStudent = filltering(filtering);
  sorts(sorting, filterStudent);
  pushDataInTable(filterStudent);
}

//some tries to access object in array

/* let students = []
students.push({  name:pascalCase("zyad ashraf")  ,
    studentGrading:40});

    students.push({  name:pascalCase("Ahmed mohamed")  ,
    studentGrading:50});
    students.push({  name:pascalCase("youssef mohamed")  ,
    studentGrading:70});
    students.push({  name:pascalCase("bassel mohamed")  ,
    studentGrading:80});
    students.push({  name:pascalCase("samy mohamed")  ,
    studentGrading:100});
    students.sort((a,b)=>b.studentGrading - a.studentGrading)
    console.log(students)
    for(const student of students){
        console.log(student['name'])
    }
 */

/////////////////////////////3 bonus

const tasks = [];
//Making listener for add button
document
  .getElementById("toDoButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toDoAddTask();
  });

function taskPush(name) {
  tasks.push({ name: name, done: false });
}

function clearingSearch() {
  toDoSearch.value = "";
  document.getElementById("toDoErrors").innerHTML = "";
}

function checkTaskError(taskName) {
  let TaskErrorIndex = tasks.findIndex((elem) => elem.name === taskName);
  if (TaskErrorIndex !== -1) {
    document.getElementById("toDoErrors").innerHTML = "You have the same task";
    return false;
  }
  if (!taskName || !/^[A-Za-z ,]+$/.test(taskName)) {
    document.getElementById("toDoErrors").innerHTML =
      "You task can not be empty and the text must be alphabet";

    return false;
  }
  return true;
}

function taskDelete(taskName, event) {
  let taskNameIndex = tasks.findIndex((elem) => elem.name === taskName);
  if (taskNameIndex !== -1) {
    tasks.splice(taskNameIndex, 1);
  }
  clearingSearch();
  pushTaskInTable();
}

function toDoAddTask() {
  let ToDoSearchValue = document.getElementById("toDoSearch").value;
  if (!checkTaskError(ToDoSearchValue)) return false;
  taskPush(pascalCase(ToDoSearchValue));
  clearingSearch();
  pushTaskInTable();
}

function lineThroughTask(checkTask) {
  let index = tasks.findIndex((elem) => elem.name === checkTask);
  let isCheck = document.getElementById(
    "toDoCheckBox " + `${checkTask}`
  ).checked;
  let taskName = document.getElementById("id " + `${checkTask}`);
  if (isCheck) {
    taskName.style.textDecoration = "line-through";
    tasks[index].done = true;
  } else {
    taskName.style.textDecoration = "none";
    tasks[index].done = false;
  }
}

function pushTaskInTable() {
  const tbody = document.getElementsByTagName("tbody")[1];
  tbody.innerHTML = "";

  for (let { name, done } of tasks) {
    tr = document.createElement("tr");
    tr.innerHTML = `
      <td id="center">
        <input type="checkbox" class="checkbox" id="toDoCheckBox ${name}" ${
      done ? "checked" : ""
    }>
      </td>
      <td id="id ${name}" style="text-decoration: ${
      done ? "line-through" : "none"
    }">${name}</td>
      <td id="center">
        <button type="button" class="button1" onclick="taskDelete('${name}')">
          <span id="spanButton" style="color:white;" class="material-symbols-outlined">delete</span>
        </button>
      </td>`;

    tr.querySelector("input[type=checkbox]").addEventListener("click", () =>
      lineThroughTask(name)
    );

    tbody.appendChild(tr);
  }
}
