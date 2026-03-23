function openFeatures() {
    var allElems = document.querySelectorAll('.elems');
    var fullElemPages = document.querySelectorAll('.fullElem');
    var allFullElemsBackBtn = document.querySelectorAll('.fullElem .back');

    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            fullElemPages[elem.id].style.display = 'block';
        });
    });

    allFullElemsBackBtn.forEach(function (backBtn) {
        backBtn.addEventListener('click', function () {
            fullElemPages[backBtn.id].style.display = 'none';
        });
    });
}

openFeatures();

var currentTask = [];
var savedTasks = localStorage.getItem('currentTask');

if (savedTasks) {
    currentTask = JSON.parse(savedTasks);
} else {
    console.log('Task list is empty');
}

var form = document.querySelector('.addTask form');
var taskInput = document.querySelector('.addTask form input');
var taskDetailsInput = document.querySelector('.addTask form textarea');
var taskCheckbox = document.querySelector('.addTask form #check');
var allTask = document.querySelector('.allTask');

function saveTasks() {
    localStorage.setItem('currentTask', JSON.stringify(currentTask));
}

function renderTask() {
    var sum = '';

    currentTask.forEach(function (elem, idx) {
        sum += `<div class="task">
                    <h5>${elem.task} <span class="${elem.imp}" id="taskimp">imp</span></h5>
                    <button type="button" data-index="${idx}">Mark as Completed</button>
                </div>`;
    });

    allTask.innerHTML = sum;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    currentTask.push({
        task: taskInput.value,
        details: taskDetailsInput.value,
        imp: taskCheckbox.checked
    });

    saveTasks();

    taskInput.value = '';
    taskDetailsInput.value = '';
    taskCheckbox.checked = false;

    renderTask();
});

allTask.addEventListener('click', function (e) {
    if (!e.target.matches('button[data-index]')) {
        return;
    }

    currentTask.splice(Number(e.target.dataset.index), 1);
    saveTasks();
    renderTask();
});

renderTask();
//Daily planner
var dayPlanner=document.querySelector('.day-planner');
var dayPlanData=JSON.parse(localStorage.getItem('dayPlanData'))||{};
var hours=Array.from({length:18},(elem,idx)=>`${6+idx}:00 -${7+idx}:00`)
var wholeDaySum='';
hours.forEach(function(elem,idx){console.log(dayPlanData[idx]||' ');
    
    wholeDaySum=wholeDaySum+`<div class="day-planner-time">
                    <p>${elem}</p>
                    <input type="text" id=${idx} placeholder="..." >
                </div>`
   
})
dayPlanner.innerHTML=wholeDaySum;


var dayPlannerInput=document.querySelectorAll('.day-planner input')
dayPlannerInput.forEach(function(elem){
    elem.addEventListener('input',function(){
        dayPlanData[elem.id]=elem.value;
        localStorage.setItem('dayPlanData',JSON.stringify(dayPlanData));
    })
})
