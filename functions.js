// Function to encode text to number format
function encode(phrase) {
  const phraseTokens = phrase.split(" ");
  const encodedPhrase = dictionary.map((word) =>
    phraseTokens.includes(word) ? 1 : 0
  );
  return encodedPhrase;
}

// Function to create a dictionary
function build_dictionary(json_data) {
  // Combine strings
  var str_data = json_data
    .map((dataset) => {
      return dataset.phrase;
    })
    .join(" ");
  //lowercase
  str_data = str_data.toLowerCase();

  // Remove punctuation
  str_data = str_data.replace(/[^\w\s']|_/g, "").replace(/\s+/g, " ");

  // Remove duplicate items
  var arr_duplicate = str_data.split(" ");
  var str_fix = arr_duplicate
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })
    .join(" ");
  return str_fix.split(" ");
}

// Clean text input
function clean_input(txt_input) {
  // Convert to lowercase
  txt_input = txt_input.toLowerCase();

  // Remove punctuation
  txt_input = txt_input.replace(/[^\w\s']|_/g, "").replace(/\s+/g, " ");
  return txt_input;
}

// User chat reply
function response_user(chat, date) {
  return `
    <div class="containerbot darker">
      <img src="./icons/user.png" alt="Avatar" class="right" style="width:100%;">
      <div class="row pt-4">
        <div class="col-sm-2">
          <span class="time-left">${date}</span>
        </div>
        <div class="col-sm-10 text-end">
          ${chat}
        </div>
      </div>
    </div>`;
}

// Bot chat reply
function response_bot(chat, prob, date) {
  return `
    <div class="containerbot">
      <img src="./icons/bot.png" alt="Avatar" style="width:100%;">
      <div class="row">
        <div class="col-sm-8 pt-4">
          ${chat}
        </div>
        <div class="col-sm-4 pt-2">
          <span class="time-right">${prob}%<br/>${date}</span>
        </div>
      </div>
    </div>`;
}

// Get current time in a readable format
function get_time(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // '0' should be '12'
  hours = hours < 10 ? "0" + hours : hours;

  minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if needed
  return hours + ":" + minutes + " " + ampm;
}
