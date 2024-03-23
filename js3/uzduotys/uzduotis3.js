// Garso signalas gali būti koduojamas sveikųjų skaičių seka. Šie skaičiai rodo signalo stiprumą periodiniais laiko intervalais. Signalą iškraipantis triukšmas šiek tiek pakeičia tų skaičių reikšmes.
// Signalo „išlyginimo“ metu triukšmas pašalinamas tokiu būdu: kiekvienas skaičius keičiamas jo ir dviejų jam gretimų skaičių vidurkiu (vidutinės reikšmės sveikąja dalimi). Pirmas ir paskutinis skaičiai atitinkamai keičiami dviejų pirmųjų arba dviejų paskutinių skaičių vidurkiu.
// Faile yra garso signalo seka, kuri sudaryta iš k nuoskaitų. Pirmojoje failo eilutėje yra pateikiami skaičius k. Toliau surašytos visa seka. Sudarykite programą kuri nufiltruotų šias sekas ir išvestų jas į ekraną.
// Pradiniai duomenys
// 4 7 3 5 8

// Rezultatai
// 5.5 4.6 5 5.3 6.5

const fs = require("fs");

const data = fs.readFileSync(process.argv[2]).toString().split(" ").map(Number);

console.log(data);

const data2 = data.map((n) => {
    return n * 10;
});

// console.log(data2);

const newData = [];

for (let i = 0; i < data2.length; i++) {
    let newNumber = 0;
    if (i === 0) {
        newNumber = Math.floor((data2[i] + data2[i + 1])/2)/10;
        newData.push(newNumber);
    } else if (i === data2.length - 1) {
        newNumber = Math.floor(Number(((data2[data2.length - 1] + data2[data2.length - 2])/2).toFixed(1)))/10;
        newData.push(newNumber);
    } else {
        newNumber = Math.floor(Number(((data2[i] + data2[i + 1] + data2[i - 1])/3).toFixed(1)))/10;
        newData.push(newNumber);
    }

}

console.log(newData);



