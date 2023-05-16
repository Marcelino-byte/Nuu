const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que o formulário seja enviado da maneira padrão
  const num1 = document.querySelector('#num1').value;
  const num2 = document.querySelector('#num2').value;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.querySelector('#resultado').textContent = this.responseText;
    }
  };
  xhr.open('POST', 'somar.php');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(`num1=${num1}&num2=${num2}`);
});
