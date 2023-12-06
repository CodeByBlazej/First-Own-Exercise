const btnEl = document.getElementById('btn');
const dadJokeField = document.getElementById('joke');

const apiKey = '4ms521kOUHaR9IIYCY2Y5A==TrjQkXUWgb2m3PJt';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';


async function getJoke() {

  try {
    dadJokeField.innerText = 'Updating...';
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';
    const response = await fetch(apiURL, options);
    const data = await response.json();
    dadJokeField.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = 'TELL ME A JOKE';
  } catch (error) {
    dadJokeField.innerText = 'an error happened... check your connection...';
    btnEl.disabled = false;
    btnEl.innerText = 'TELL ME A JOKE';
    console.log(error);
  }

  
}

function jokeInput() {
  apiURL.push(dadJokeField);
}


btnEl.addEventListener('click', getJoke);