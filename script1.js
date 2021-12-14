var table = document.createElement('table');
table.setAttribute('class', 'table');

var thead = document.createElement('thead');
thead.setAttribute('class', 'thead-dark');

var tr = document.createElement('tr');
var th1 = createelement('th', 'First');
var th2 = createelement('th', 'Last');
var th3 = createelement('th', 'Handle');
tr.append(th1, th2, th3);
thead.append(tr);

var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var td1 = createelement('td', 'John');
var td2 = createelement('td', 'Doe');
var td3 = createelement('td', '@johndoe');
tr.append(td1, td2, td3);
tbody.append(tr);
table.append(thead, tbody);

var tr = document.createElement('tr');
var td1 = createelement('td', 'Mark');
var td2 = createelement('td', 'Otto');
var td3 = createelement('td', '@fat');
tr.append(td1, td2, td3);
tbody.append(tr);
table.append(thead, tbody);

var tr = document.createElement('tr');
var td1 = createelement('td', 'Jacob');
var td2 = createelement('td', 'Thornton');
var td3 = createelement('td', '@mdo');
tr.append(td1, td2, td3);
tbody.append(tr);
table.append(thead, tbody);

var tr = document.createElement('tr');
var td1 = createelement('td', 'Larry');
var td2 = createelement('td', 'Bird');
var td3 = createelement('td', '@twitter');
tr.append(td1, td2, td3);
tbody.append(tr);
table.append(thead, tbody);
document.body.append(table);











function createelement(elename, value){
    var element = document.createElement(elename);
    element.innerHTML = value;
    console.log(element);
    return element;
}

