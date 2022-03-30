let addBtn = document.querySelector(".add-btn");

let modalCont = document.querySelector(".modal-cont");

let mainCont = document.querySelector(".main-cont");

let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length - 1]; // black

let allPriorityColors = document.querySelectorAll(".priority-color");

let removeBtn = document.querySelector(".remove-btn");
let removeFlag = false;

let addFlag = false;

let taskAreaCont = document.querySelector(".textarea-cont");

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

addBtn.addEventListener("click", function (e) {
  //Display the Modal

  // addFlag , true - Modal Display
  //addFlag , false - Modal Hide

  addFlag = !addFlag;

  if (addFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

//Changing Priority Colors

allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function (e) {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorElem.classList.add("active");

    modalPriorityColor = colorElem.classList[0];
  });
});

// Generating a Ticket

modalCont.addEventListener("keydown", function (e) {
  let key = e.key;

  if (key == "Shift") {
    createTicket(modalPriorityColor, taskAreaCont.value); // this function will generate the ticket
    modalCont.style.display = "none";
    addFlag = false;
    taskAreaCont.value = "";
  }
});

function createTicket(ticketKaColorClass, task) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = ` <div class="ticket-color ${ticketKaColorClass}"></div>
  <div class="ticket-id">Sample id</div>
  <div class="task-area">${task}</div>
  <div class="ticket-lock">
    <i class="fa-solid fa-lock"></i>
  </div>`;

  mainCont.appendChild(ticketCont);

  handleRemoval(ticketCont);

  handleLock(ticketCont);
}

removeBtn.addEventListener("click", function () {
  removeFlag = !removeFlag;
  if (removeFlag == true) {
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

// Remove Tickets Function
function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (removeFlag == true) {
      ticket.remove();
    }
  });
}

// Lock and unlock Tickets

function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");

  let ticketLock = ticketLockElem.children[0];

  let ticketTaskArea = ticket.querySelector('.task-area')

  ticketLock.addEventListener("click", function (e) {
    if (ticketLock.classList.contains(lockClass)) {
      ticketLock.classList.remove(lockClass);
      ticketLock.classList.add(unlockClass);
      ticketTaskArea.setAttribute('contenteditable' , 'true')

    } else {
      ticketLock.classList.remove(unlockClass);
      ticketLock.classList.add(lockClass);
      ticketTaskArea.setAttribute('contenteditable' , 'false')
    }
  });
}
