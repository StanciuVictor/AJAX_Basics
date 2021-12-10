// // Create XHR object
// const xhr = new XMLHttpRequest();

// // Create callback function
// xhr.onreadystatechange = function () {
//   // If client received response from server
//   if (xhr.readyState === 4) {
//     // Returns a JS object
//     const employees = JSON.parse(xhr.responseText);

//     // Create widget content
//     let statusHTML = '<ul class="bulleted">';
//     for (let i = 0; i < employees.length; i++) {
//       if (employees[i].inoffice === true) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       }
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//     console.log(statusHTML);
//   }
// };
// // Open request - GET - load file
// // In realiti, this points to a server side script that would
// // dynamically generate this JSON data with the most current info on employees
// xhr.open('GET', 'data/employees.json');
// xhr.send();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/employees.json');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.send();