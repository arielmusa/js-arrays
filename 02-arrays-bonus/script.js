const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
let reversedTeachers = "";

for (let i = teachers.length - 1; i >= 0; i = i - 1) {
  reversedTeachers += `${teachers[i]}, `;
}
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (i = 0; i < teachers.length; i++) {
  let teacherName = teachers[i];
  if (teacherName.length >= 5) {
    longNames.push(teacherName);
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
for (i = 0; i < teachers.length; i++) {
  if (teachers[i] == "Ed") {
    teachers.splice(i, 1);
  }
}

console.table(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = null;

for (i = 0; i < teachers.length; i++) {
  if (teachers[i] == "Fabio") {
    isFabioPresent = true;
  }
}

console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = "";

for (i = 0; i < teachers.length; i++) {
  /*  if (i < teachers.length - 1) {
    teachersString += `${teachers[i]}, `;
  } else {
    teachersString += `${teachers[i]}`;
  } */
  teachersString +=
    i < teachers.length - 1 ? `${teachers[i]}, ` : `${teachers[i]}`;
}

console.log(teachersString);
