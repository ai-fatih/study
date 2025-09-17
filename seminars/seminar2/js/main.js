
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getInfo() {
        return `Имя: ${this.name}, Возраст: ${this.age}`;
    }
}

function createPerson() {
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    
    const person = new Person(name, age);
    document.getElementById('result3').innerText = person.getInfo();
    console.log("Классы и объекты:", person.getInfo());
}
function checkNumber() {
    const num = parseFloat(document.getElementById('numberInput').value);
    let result = '';
    
    if (num > 0) {
        result = `Число ${num} является положительным`;
    } else if (num < 0) {
        result = `Число ${num} является отрицательным`;
    } else {
        result = `Число ${num} равно нулю`;
    }
    
    console.log("Условный оператор if и функции:", result);
    document.getElementById('result1').innerText = result;
}
function processArray() {
    const input = document.getElementById('arrayInput').value;
    
    const numbers = input.split(',')
        .map(item => item.trim())
        .filter(item => item !== '')
        .map(Number);

    if (numbers.length === 0) {
        document.getElementById('result2').innerText = 'Введите корректные числа';
        return;
    }

    let result = 'Результаты умножения:\n';
    
    for (let i = 0; i < numbers.length; i++) {
        result += `>> ${numbers[i]} * 2 = ${numbers[i] * 2}\n`;
    }
    
    console.log("Массивы и циклы:", result);
    document.getElementById('result2').innerText = result;
}


document.addEventListener('DOMContentLoaded', () => {  
     
const button = document.getElementById('checkNumberButton');
const processArrayButton = document.getElementById('processArrayButton');
const createPersonButton = document.getElementById('createPersonButton');
        
button.addEventListener('click', checkNumber);
processArrayButton.addEventListener('click', processArray);    
createPersonButton.addEventListener('click', createPerson);

})

 
