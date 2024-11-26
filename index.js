// Build dictionary
const dictionary = build_dictionary(trainingPhrases);
// Test encoding text input
console.log("Input: Dhea");
console.log("Encoded:" + encode("Dhea"));

// Prepare training data
const trainingSet = trainingPhrases.map((dataSet) => {
  const encodedValue = encode(dataSet.phrase);
  return { input: encodedValue, output: dataSet.result };
});

// Train neural network
const model_network = new brain.NeuralNetwork();
model_network.train(trainingSet);

// Function to make predictions
function predict_bot(txt_chat_input) {
  // Encode input text
  const encoded = encode(clean_input(txt_chat_input));

  // Predict the response
  json_output = model_network.run(encoded);
  console.log(
    "Max Categories:",
    +Object.values(json_output).length + "intents."
  );

  // Find max value
  const max = Math.max(...Object.values(json_output));
  const index = Object.values(json_output).indexOf(max);
  const pred_label = Object.keys(json_output)[index];
  const pred_prob = json_output["" + pred_label];
  const pred_response = data_responses["" + pred_label];
  console.log(
    "Predicted label (" + pred_label + "), probability (" + pred_prob + ")."
  );
  return [pred_response, pred_prob];
}

// Compile/execute chatbot
function run_chatbot() {
  var input_chat = $("#input-chat").val(); // Get chat input

  if (input_chat.length === 0) {
    alert("Sorry, please write your text chat first.");
  } else {
    $("#content-chat-feed").append(
      response_user(input_chat, get_time(new Date()))
    );

    // Predict chatbot response
    const [respond_bot, prob_bot] = predict_bot(input_chat);
    const prob_val = (parseFloat(prob_bot) * 100).toFixed(2);

    const threshold = 10; // Confidence threshold
    if (prob_val > threshold) {
      $("#content-chat-feed").append(
        response_bot(respond_bot, prob_val, get_time(new Date()))
      );
    } else {
      $("#content-chat-feed").append(
        response_bot(
          "Sorry, I don't understand yet.",
          prob_val,
          get_time(new Date())
        )
      );
    }

    // Force scroll to bottom
    force_scroll_bottom();

    // Clear input
    $("#input-chat").val("");
  }
}

// Run chatbot when the page is ready
$(document).ready(function () {
  // Assign button click
  $("#btn-chat").click(function () {
    run_chatbot();
  });

  // Handle enter key press
  $("#input-chat").on("keydown", function (e) {
    if (e.keyCode === 13) {
      run_chatbot();
    }
  });
});
