const form = document.querySelector('form');
// const results = document.querySelector('#results');
// const weightGuide = document.querySelector('#weight-guide');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',async function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const suggestionsGuide = document.querySelector('#suggestions-weight-guide');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  
    let data;
    if (bmi < 18.6) {
      suggestionsGuide.innerHTML = `<h3>BMI Weight Guide</h3>
                               <p>Underweight: Less than 18.6</p>
                               <p>Eat a balanced diet with plenty of proteins and healthy fats. Incorporate strength training exercises to build muscle mass.</p>`;

    
  } else if (bmi >= 18.6 && bmi <= 24.9) {
      suggestionsGuide.innerHTML = `<h3>BMI Weight Guide</h3>
                               <p>Normal Range: 18.6 and 24.9</p>
                               <p>Maintain a balanced diet with a variety of nutrients. Engage in regular physical activity to stay healthy and fit.</p>`;
    } else {
      suggestionsGuide.innerHTML = `<h3>BMI Weight Guide</h3>
                               <p>Overweight: Greater than 24.9</p>
                               <p>Focus on portion control and reduce calorie intake. Increase physical activity and incorporate cardio exercises.</p>`;
                            
  
  }
}
});