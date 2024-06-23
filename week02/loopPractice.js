const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


for (let i=0; i<studentReport.length;i++) {
    if (studentReport[i]<LIMIT){
        console.log(studentReport[i])
    };        
}

let i = 0;

while (i < studentReport.length){
    if (studentReport[i]<LIMIT){
        console.log(studentReport[i]);
        i++;
}
};

function reportLowScore(score, index) {
    if (score < LIMIT){
    console.log(`${index}: {score}`);}
}
studentReport.forEach(reportLowScore);

for (score in studentReport){
    if (score < LIMIT)
        {console.log(score)}
}

const today = new Date();
const futureDate = new Date(today);
futureDate.setDate(today.getDate() + DAYS);
const weekDay = futureDate.getDay();
const dayName = daysOfWeek[weekDay];
//console.log(`In ${DAYS} days, it will be a ${dayName.`)
console.log(`${DAYS} days from now, it will be a ${dayName}.`);

