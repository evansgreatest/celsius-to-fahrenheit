const convertCtoF = () => {
  let celsius = document.getElementById('celsius').value;
  let toFahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById('fahrenheit').value = toFahrenheit;

  if (!celsius) {
    document.getElementById('fahrenheit').value = '';
  }
};
celsius.oninput = convertCtoF;

const convertFtoC = () => {
  let fahrenheit = document.getElementById('fahrenheit').value;
  let toCelsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById('celsius').value = toCelsius;

  if (!fahrenheit) {
    document.getElementById('celsius').value = '';
  }
};
fahrenheit.oninput = convertFtoC;
