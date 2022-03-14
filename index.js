function getAdvice() {
  axios.get('https://api.adviceslip.com/advice')
    .then(function (res) {
      const advice = document.getElementById("advice");
      const adviceId = document.getElementById("advice-id");
      
      const adviceNumber = document.createElement("span")
      const adviceText = document.createElement("span");
      adviceNumber.setAttribute("class", "clear");
      adviceText.setAttribute("class", "clear");

      adviceNumber.textContent = `ADVICE #${res.data.slip.id}`;
      adviceText.textContent = res.data.slip.advice;
      adviceId.appendChild(adviceNumber);
      advice.appendChild(adviceText)
    });
}


async function removeSpans() {
  const spans = document.querySelectorAll("span");
  for (i=0; i<spans.length; i++) {
    spans[i].remove();
  }
  await getAdvice();
}

getAdvice();