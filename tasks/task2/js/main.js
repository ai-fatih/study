document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const input = document.getElementById('textInput');
    const message = document.getElementById('message');
    const textCh = document.getElementById('textCh');
     
    if (!form || !input || !message) {
        console.error('Один или несколько элементов не найдены в DOM');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();  

        const text = input.value;
        console.log('Введённый текст:', text);
        
        if (text.length > 0) {
            textCh.textContent = 'Успешно!';
            message.textContent = 'Вы ввели: ' + text;
            message.style.color = 'green';
            document.body.style.backgroundColor = '#dddddd';
        } else {
            textCh.textContent = 'Введите текст:';
            message.textContent = 'Введите что-нибудь';
            message.style.color = 'red';
            document.body.style.backgroundColor = '#ffffff';
        }
    });

    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.style.borderColor = '#4CAF50'; 
        } else {
            this.style.borderColor = '#ccc';     
        }
    });
});
