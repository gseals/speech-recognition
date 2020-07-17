window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
const transcript_element = document.getElementById("transcript");
const talk_button = document.getElementById("talk");
const end_button = document.getElementById("end");

let p = document.createElement("p");
transcript_element.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join("");

// for press button to talk, leave uncommented from here
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    p.textContent = transcript;
    transcript_element.appendChild(p);
    p.textContent = "";
  }
});

recognition.addEventListener("end", () => {
  end_button.disabled = true;
  talk_button.disabled = false;
});

talk_button.addEventListener("click", () => {
  end_button.disabled = false;
  talk_button.disabled = true;

  recognition.start();
});

end_button.addEventListener("click", () => {
  end_button.disabled = true;
  talk_button.disabled = false;

  recognition.stop()
});
// to here and uncommented the code below.

// the code below is built to begin listening when it hears the word Gideon and responds to the word weather
// if (transcript.startsWith("Gideon")) {
//   p.textContent = transcript;
//   if (e.results[0].isFinal) {
//     p = document.createElement("p");
//     p.textContent = transcript;
//     transcript_element.appendChild(p);
//     p.textContent = "";

// if (transcript.includes("weather")) {
//   let command = document.createElement("p")
//   command.classList.add("command");
//   command.textContent = "Getting Weather...";
//   transcript_element.appendChild(command);
//   }
// }
// }});

// recognition.addEventListener("end", recognition.start);

// recognition.start();
