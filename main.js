const monthContainer = document.getElementById('month-container');
const dayContainer = document.getElementById('day-container');
const weekdayContainer = document.getElementById('weekday-container');
const months = ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"];
const weekday = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"];
const saveFormButton = document.getElementById('save');
const eventSelection = document.getElementById('event-selection');
const table = document.getElementById('table');
const fetchButton = document.getElementById('fetchInputsWithData');

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
        this.vardas = name;
        this.telNr = tel;
        this.gyvenamojiVieta = place;
    }
};

class Services {
    constructor(food, acco, bathtube){
        this.maistas = food;
        this.apgyvendinimas = acco;
        this.kubilas = bathtube;
    }
}

class Event extends Customer {
    constructor(name, tel, place, event, amountOfGuests, eventStart, eventEnd){
        super(name, tel, place);
        this.renginys = event;
        this.sveciuSkaicius = amountOfGuests;
        this.renginioPradzia = eventStart;
        this.renginioPabaiga = eventEnd;
    }
    addSummaryToUI(){
         const row = document.createElement('tr');
         row.innerHTML = `
         <td>${this.vardas}</td>
         <td>${this.telNr}</td>
         <td>${this.gyvenamojiVieta}</td>
         <td>${this.renginys}</td>
         <td>${this.sveciuSkaicius}</td>
         <td>${this.renginioPradzia}</td>
         <td>${this.renginioPabaiga}</td>
         `
         table.appendChild(row);
    }
}
saveFormButton.addEventListener('click', ()=>{
    const formData = new Event(customerName.value, customerNumber.value, customerPlace.value, selectedEvent.value, amountOfGuests.value, eventStartDate.value, eventEndDate.value);
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
