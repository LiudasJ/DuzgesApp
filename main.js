const monthContainer = document.getElementById('month-container');
const dayContainer = document.getElementById('day-container');
const weekdayContainer = document.getElementById('weekday-container');
const months = ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"];
const weekday = ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"];
const saveFormButton = document.getElementById('save');
const eventSelection = document.getElementById('event-selection');
const table = document.getElementById('table');
const additionalServiceCheckbox = document.getElementsByClassName('additional-service-checkbox')
const optionalServiceContainer = document.getElementsByClassName('optional-service');
const foodInput = document.getElementsByClassName('food-input');
const amountOfSleepingGuests = document.getElementById('sleep');
const guestArrival = document.getElementById('arrival');
const notes = document.getElementById('notes');
var   food, acco, bathtube;
var accoDiv = document.getElementsByClassName('accoDiv');

const date = new Date();
monthContainer.innerHTML = months[date.getMonth()];
dayContainer.innerText = date.getDate();
weekdayContainer.innerText = weekday[date.getDay()];

eventSelection.addEventListener('mouseleave', ()=>{
    if(eventSelection.value == 'Nakvynė/Viešnagė') {
        document.getElementById('event-start-label').innerText = "Įsiregistravimo data:";
        document.getElementById('event-end-label').innerText = "Išsiregistravimo data:";
        accoDiv[0].style.display = 'none';
    } else {
        document.getElementById('event-start-label').innerText = "Renginio pradžia:";
        document.getElementById('event-end-label').innerText = "Renginio pabaiga:";
        accoDiv[0].style.display = 'block';
    }
})

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

notes.addEventListener('keyup', ()=>{
    var contentLength = notes.value.length;
    var progressBarLimit = document.getElementsByClassName('progress-bar-limit');
    var progressBar = document.getElementsByClassName('progress-bar');
    var percentOfProgress;

    progressBarLimit[0].innerHTML = `${contentLength} | 300`;

    percentOfProgress = contentLength * 100 / 300;

    if (percentOfProgress > 100) {
        progressBar[0].style.width = '100%';
        saveFormButton.disabled = true;    
    } else {
        progressBar[0].style.width = `${percentOfProgress}%`
        saveFormButton.disabled = false;
    }
    
});
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
food = document.getElementById('food');
acco = document.getElementById('accommodation');
bathtube = document.getElementById('bathtube');

class Customer {
    constructor(name, tel, place){
        this.name = name;
        this.tel = tel;
        this.place = place;
    }
    getCustomerInfo () {
        return `Renginį užsakė: ${this.name} iš ${this.place}. Asmens kontaktinis numeris: ${this.tel}.`
    }
};

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
    getAdditionalServices () {
        var output = {}; 
        if (food.checked) {
            for (let i = 0; i < foodInput.length; i++) {
                if (foodInput[i].checked) {
                   output.dishes = `${foodInput[i].value}`;
                }
            }
        }
        if (acco.checked) {
            output.amountOfSleepingGuests = `${amountOfSleepingGuests.value}`;
        }
        if (bathtube.checked) {
            output.bathtube = "yes";
        }
        return output;
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

saveFormButton.addEventListener('click', (e)=>{
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    var myForm = document.getElementById('form');
    var formValues = new FormData(myForm);
    xhr.open("POST", "form.php", true);
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) { 
            document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xhr.send(formValues); 
    }
)
  