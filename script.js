var User = function (data) {
    this.name = null;
    this.email = null;
    this.phone = null;

    for (var i in data) {
        if (typeof this[i] != "undefined" && data.hasOwnProperty(i)) {
            this[i] = data[i];
        }
    }
};
var stoper=false;
function creatTable (users) {
    var table = document.createElement('table');
    if (stoper)
        return;
    table.innerHTML = '<tbody>';

    for (var i = 0; i < users.length; i++) {
        table.innerHTML += '<tr><td>'+users[i].name+'</td><td>'+users[i].email+'</td><td>'+users[i].phone    +'</td></tr>';
    }

    table.innerHTML += '</tbody>';
    // document.getElementById("table").innerHTML = "";
    document.getElementById("table").appendChild(table);
    stoper=!stoper;
}

function send() {
    var user = new User({
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "phone": document.getElementById("tel").value
    });
    var users = [];
    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}
function getData() {
    var users = localStorage.getItem("users");  
    if (users == null) {
        alert("Нет пользователей");
        return;
    }
    users = JSON.parse(users);
    console.log(users);
    creatTable(users);
}