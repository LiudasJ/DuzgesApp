const monthContainer = document.getElementById('month-container');
const dayContainer = document.getElementById('day-container');
const weekdayContainer = document.getElementById('weekday-container');
const months = ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"];
const weekday = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"];
const saveFormButton = document.getElementById('save');
const eventSelection = document.getElementById('event-selection');
const table = document.getElementById('table');
const fetchButton = document.getElementById('fetchInputsWithData');
const additionalServiceCheckbox = document.getElementsByClassName('additional-service-checkbox')
const optionalServiceContainer = document.getElementsByClassName('optional-service');
const foodInput = document.getElementsByClassName('food-input');
const amountOfSleepingGuests = document.getElementById('sleep');
const guestArrival = document.getElementById('arrival');
const notes = document.getElementById('notes');

const date = new Date();
monthContainer.innerHTML = months[date.getMonth()];
dayContainer.innerText = date.getDate();
weekdayContainer.innerText = weekday[date.getDay()-1];

eventSelection.addEventListener('mouseleave', ()=>{
    if(eventSelection.value == 'Nakvynė/Viešnagė') {
        document.getElementById('event-start-label').innerText = "Įsiregistravimo data:";
        document.getElementById('event-end-label').innerText = "Išsiregistravimo data:";
    } else {
        document.getElementById('event-start-label').innerText = "Renginio pradžia:";
        document.getElementById('event-end-label').innerText = "Renginio pabaiga:";
    }
})

function unhideAdditionalServices(container) {
    container.style.display = 'block';
}

for (let i = 0; i < 2; i++) {
    let index = i;
    additionalServiceCheckbox[index].addEventListener('change', (event) => {
        if (index != 1) {
            for (j = 0; j<foodInput.length; j++) {
                foodInput[j].checked = false;
            } 
        } else {
            amountOfSleepingGuests.value = '';
        }
        if (event.target.checked) {
            optionalServiceContainer[index].style.display = "block";
        } else {
            optionalServiceContainer[index].style.display = 'none';
        }
    })
}
/* Customer data variables */
const customerName = document.getElementById('name');
const customerNumber = document.getElementById('tel');
const customerPlace = document.getElementById('place');

/* Event data variables*/

const selectedEvent = document.getElementById('event-selection');
const amountOfGuests = document.getElementById('guest-amount');
const eventStartDate = document.getElementById('event-start-date');
const eventEndDate = document.getElementById('event-end-date');

/* Additional Services variables */

class Customer {
    constructor(name, tel, place){
        this.name = name;
        this.tel = tel;
        this.place = place;
    }
};

class Services {

}

class Event extends Customer {
    constructor(name, tel, place, event, amountOfGuests, eventStart, eventEnd, guestArrival, notes){
        super(name, tel, place);
        this.event = event;
        this.amountOfGuests = amountOfGuests;
        this.eventStart = eventStart;
        this.eventEnd = eventEnd;
        this.guestArrival = guestArrival;
        this.notes = notes;
    }
    addSummaryToUI(){
         const row = document.createElement('tr');
         row.innerHTML = `
         <td>${this.name}</td>
         <td>${this.tel}</td>
         <td>${this.place}</td>
         <td>${this.event}</td>
         <td>${this.amountOfGuests}</td>
         <td>${this.eventStart}</td>
         <td>${this.eventEnd}</td>
         <td>${this.guestArrival}</td>
         <td>${this.notes}</td>
         `
         table.appendChild(row);
    }
}
saveFormButton.addEventListener('click', ()=>{
    const formData = new Event(customerName.value, customerNumber.value, customerPlace.value, selectedEvent.value, amountOfGuests.value, eventStartDate.value, eventEndDate.value, guestArrival.value, notes.value);
    table.style.display = 'block';
    formData.addSummaryToUI();
    document.getElementById("form").reset();
    }
)

fetchButton.addEventListener('click', ()=>{
    for(let i = 1; i < table.rows.length; i++) {
        for(let j = 0; j < table.rows[i].children.length; j++) {
            console.log(table.rows[i].children[j].innerText);
        }
    }
})
