
function getRow(firstName, lastName, phone){
    if(phone === undefined){
        phone = ''
    }
    if(typeof lastName == 'undefined') {
        lastName = ''
    }

    firstName = firstName || '';

    return '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td></tr>';
}

/*function getRow(firstName, lastName, phone) {
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td></tr>';
    return row;
}*/
//firstName = firstName[];

var contacte = [];

var person = {
    lastName: 'Rus',
    firstName: 'Marcel',
    age: 36,
    married: 'false',
    skills: ['html', 'css'],
    voiceCall: function (nume) {
        console.log(' te rog sa suni pe ', nume);
    },
    partner: {
        firstName: 'M',
        age:18
    }
};

console.info(person.firstName);
person.voiceCall("Soacra");

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
};

for(var i= 0; i<contacte.length; i++) {
    createRow(contacte[i]);
}

$.ajax('date/contacte.json').done(function (contacte){
    console.info('contacte', contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);
});



//function pentruToateContactele() {}






//1 convert from array of arrays into json
//2 load contacts from json with AJAX
//3 remove contacts (UI)
//4 edit contact (UI)