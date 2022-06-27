
// Display Form Data

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const monthValue = params.month;
const dayValue = params.day;
const yearValue = params.year;
const nameValue = params.name;
const genderValue = params.gender;
const notesValue = params.notes;

const formattedDate = `${monthValue} / ${dayValue} / ${yearValue}`;

// Inject form data onto page
document.getElementById('dob-answer').innerHTML = formattedDate

document.getElementById('name-answer').innerHTML = nameValue;

document.getElementById('gender-answer').innerHTML = genderValue;

if(notesValue) {
    document.getElementById('notes-answer').innerHTML = 
    `<label class="form-label" for="Misc Notes">Misc Notes:</label>
    <div  class="px-3 py-1 answers">
        ${notesValue}
    </div> `
}