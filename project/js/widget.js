// Create XHR object
const xhrEmployees = new XMLHttpRequest();

// Create callback function
xhrEmployees.onreadystatechange = function () {
  // If client received response from server
  if (xhrEmployees.readyState === 4 && xhrEmployees.status === 200) {
    // Returns a JS array of objects. The employees.json, but JS format
    const employees = JSON.parse(xhrEmployees.responseText);
    // console.log(employees);

    // Create widget content
    let employeesStatusHTML = '<ul class="bulleted">';
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        employeesStatusHTML += '<li class="in">';
      } else {
        employeesStatusHTML += '<li class="out">';
      }
      employeesStatusHTML += employees[i].name;
      employeesStatusHTML += '</li>';
    }
    employeesStatusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = employeesStatusHTML;
  }
};

// Open request - GET - load file
// In reality, this points to a server side script that would
// dynamically generate this JSON data with the most current info on employees
xhrEmployees.open('GET', 'data/employees.json');
xhrEmployees.send();

// Create XHR object
const xhrRooms = new XMLHttpRequest();

// Create callback function
xhrRooms.onreadystatechange = function () {
  // If client received response from server
  if (xhrRooms.readyState === 4 && xhrRooms.status === 200) {
    // Returns a JS array of objects. The employees.json, but JS format
    const rooms = JSON.parse(xhrRooms.responseText);

    // Create widget content
    let roomStatusHTML = '<ul class="rooms">';
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        roomStatusHTML += '<li class="full">';
      } else {
        roomStatusHTML += '<li class="empty">';
      }
      roomStatusHTML += rooms[i].room;
      roomStatusHTML += '</li>';
    }
    roomStatusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomStatusHTML;
  }
};

// Open request - GET - load file
// In reality, this points to a server side script that would
// dynamically generate this JSON data with the most current info on rooms
xhrRooms.open('GET', 'data/rooms.json');
xhrRooms.send();