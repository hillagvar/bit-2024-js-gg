// Faile studentai.json pateikiamas JSON formatu studentų sąrašas (masyvas), jų duomenys ir pažymiai. Nuskaitykite duomenis iš masyvo, suskaičiuokite ir išveskite:

// 1. Studentų kiekį
// 2. Studentų amžiaus vidurkį
// 3. Studentų pažangumo vidurkį (visų pažymių vidurkį)
// 4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:

// Jonas Jonaitis 5.5
// Petras Petraitis 9.3

const fs = require("fs");

const studentDataStr = fs.readFileSync("studentai.json").toString();

const studentData = JSON.parse(studentDataStr);

// console.log(studentData);

const studentCount = studentData.length;

let studentAges = 0;

studentData.forEach((student) => {
  studentAges += student.amzius;
});

const averageStudentAge = studentAges / studentCount;

let markSum = 0;
let markCount = 0;

const studentList = [];

studentData.forEach((student) => {
  let studentMarkSum = 0;
  let studentMarkCount = 0;
  student.pazymiai.forEach((mark) => {
    studentMarkSum += mark;
    studentMarkCount++;
  });

markSum += studentMarkSum;
markCount += studentMarkCount;

const averageStudentMark = (studentMarkSum / studentMarkCount).toFixed(1);

studentList.push(`${student.vardas} ${student.pavarde} ${averageStudentMark}`);

});

const average = Number((markSum / markCount).toFixed(1));

console.log(`Studentų kiekis: ${studentCount}`);
console.log(`Studentų amžiaus vidurkis: ${averageStudentAge}`);
console.log(`Studentų pažangumo vidurkis: ${average}`);
console.log(studentList);
