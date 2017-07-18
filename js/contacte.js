
function getRow(contact){

    var id = contact.id ;
    var phone = contact.phone || '';
    var lastName = contact.lastName || '';
    var firstName = contact.firstName || '';

    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td>' +
        '<td class="action"> ' +
            '<span>[<a href="date/remove.html?id= '+id+ '">x</a>]</span>' +
            '<span>[<a href="#">edit</a>]</span>' +

        '</td>'+
    '</tr>';
    return row;
}

// var person = {
//     lastName: 'Rus',
//     firstName: 'Marcel',
//     age: 36,
//     married: 'false',
//     skills: ['html', 'css'],
//     voiceCall: function (nume) {
//         console.log(' te rog sa suni pe ', nume);
//     },
//     parage:18
//};
//
// console.info(person.firstName);
// person.voiceCall("Soacra");

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact);
};

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