// Example structure for quiz categories
const quizzes = {
  wireless: [
      {
          question: "What does Wi-Fi stand for?",
          options: ["Wireless Fidelity", "World Fidelity", "Wide Frequency"],
          correctAnswer: "Wireless Fidelity"
      },
      {
          question: "Which band is commonly used for Wi-Fi?",
          options: ["2.4 GHz", "5 GHz", "6 GHz"],
          correctAnswer: "2.4 GHz"
      },
      {
          question: "What frequency range does Bluetooth use?",
          options: ["2.4 GHz", "1.8 GHz", "5 GHz"],
          correctAnswer: "2.4 GHz"
      },
      {
          question: "What is the range of a typical Wi-Fi network?",
          options: ["50-100 meters", "100-150 meters", "200-300 meters"],
          correctAnswer: "50-100 meters"
      }
  ],
  aptitude: [
      {
          question: "What is the square root of 144?",
          options: ["12", "14", "16"],
          correctAnswer: "12"
      },
      {
          question: "What is 15% of 200?",
          options: ["30", "35", "40"],
          correctAnswer: "30"
      },
      {
          question: "What is the value of pi?",
          options: ["3.14159", "3.142", "3.15"],
          correctAnswer: "3.14159"
      },
      {
          question: "If a car travels at 60 km/h, how far will it go in 2 hours?",
          options: ["120 km", "100 km", "150 km"],
          correctAnswer: "120 km"
      }
  ],
  general: [
      {
          question: "Who wrote the play 'Romeo and Juliet'?",
          options: ["Shakespeare", "Dickens", "Hemingway"],
          correctAnswer: "Shakespeare"
      },
      {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris"],
          correctAnswer: "Paris"
      },
      {
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Jupiter", "Saturn"],
          correctAnswer: "Jupiter"
      },
      {
          question: "Who was the first president of the United States?",
          options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
          correctAnswer: "George Washington"
      }
  ],
  VLSI: [
    {
        question: "What does VLSI stand for?",
        options: ["Very Large Scale Integration", "Virtual Large Scale Integration", "Variable Logic System Integration"],
        correctAnswer: "Very Large Scale Integration"
    },
    {
        question: "What is the primary purpose of a D flip-flop?",
        options: ["Data storage", "Data transmission", "Data filtering"],
        correctAnswer: "Data storage"
    },
    {
        question: "Which of these is a commonly used VLSI process?",
        options: ["CMOS", "BJT", "UJT"],
        correctAnswer: "CMOS"
    },
    {
        question: "What is the typical feature size of modern VLSI chips?",
        options: ["1-10 nm", "10-100 nm", "100-1000 nm"],
        correctAnswer: "1-10 nm"
    }
],
java: [
    {
        question: "What is the correct syntax to output 'Hello World' in Java?",
        options: ["print('Hello World');", "System.out.println('Hello World');", "echo 'Hello World';"],
        correctAnswer: "System.out.println('Hello World');"
    },
    {
        question: "Which keyword is used to create an object in Java?",
        options: ["new", "create", "object"],
        correctAnswer: "new"
    },
    {
        question: "Which method is the entry point of a Java application?",
        options: ["start()", "main()", "run()"],
        correctAnswer: "main()"
    },
    {
        question: "Which of the following is not a primitive data type in Java?",
        options: ["int", "float", "String"],
        correctAnswer: "String"
    }
],
nps: [
    {
        question: "What does IP stand for in networking?",
        options: ["Internet Protocol", "Integration Protocol", "Internal Protocol"],
        correctAnswer: "Internet Protocol"
    },
    {
        question: "Which protocol is used to retrieve email from a server?",
        options: ["HTTP", "FTP", "POP3"],
        correctAnswer: "POP3"
    },
    {
        question: "Which of the following is a key feature of HTTPS?",
        options: ["Encrypted communication", "Faster communication", "Data compression"],
        correctAnswer: "Encrypted communication"
    },
    {
        question: "Which protocol is used for secure communication over the internet?",
        options: ["FTP", "HTTP", "SSL/TLS"],
        correctAnswer: "SSL/TLS"
    }
],
digital: [
    {
        question: "What is the Nyquist rate?",
        options: ["2 times the highest frequency", "1 time the highest frequency", "3 times the highest frequency"],
        correctAnswer: "2 times the highest frequency"
    },
    {
        question: "Which modulation technique is used in digital communication systems?",
        options: ["AM", "FM", "PSK"],
        correctAnswer: "PSK"
    },
    {
        question: "What does FFT stand for?",
        options: ["Fast Fourier Transform", "Fast Frequency Transfer", "Frequency Fourier Transfer"],
        correctAnswer: "Fast Fourier Transform"
    },
    {
        question: "Which of the following is a characteristic of digital signals?",
        options: ["Continuous range of values", "Discrete values", "Analog behavior"],
        correctAnswer: "Discrete values"
    }
],
chemistry: [
    {
        question: "What is the atomic number of oxygen?",
        options: ["6", "8", "10"],
        correctAnswer: "8"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "O2"],
        correctAnswer: "H2O"
    },
    {
        question: "Which element is known as the 'King of Chemicals'?",
        options: ["Sulfur", "Oxygen", "Chlorine"],
        correctAnswer: "Chlorine"
    },
    {
        question: "What is the pH value of pure water?",
        options: ["7", "8", "9"],
        correctAnswer: "7"
    }
],
french: [
    {
        question: "What is the French word for 'hello'?",
        options: ["Hola", "Bonjour", "Ciao"],
        correctAnswer: "Bonjour"
    },
    {
        question: "How do you say 'Thank you' in French?",
        options: ["Merci", "Gracias", "Danke"],
        correctAnswer: "Merci"
    },
    {
        question: "What is the French word for 'Goodbye'?",
        options: ["Adieu", "Au revoir", "Ciao"],
        correctAnswer: "Au revoir"
    },
    {
        question: "Which of the following is a French-speaking country?",
        options: ["France", "Spain", "Germany"],
        correctAnswer: "France"
    }
],
japanese: [
    {
        question: "What is the Japanese word for 'Thank you'?",
        options: ["Arigato", "Konnichiwa", "Sayonara"],
        correctAnswer: "Arigato"
    },
    {
        question: "Which is the Japanese writing system that uses characters borrowed from Chinese?",
        options: ["Kanji", "Hiragana", "Katakana"],
        correctAnswer: "Kanji"
    },
    {
        question: "What does 'Sushi' mean in Japanese?",
        options: ["Rice", "Fish", "Vinegar Rice"],
        correctAnswer: "Vinegar Rice"
    },
    {
        question: "What is the Japanese word for 'Good morning'?",
        options: ["Konnichiwa", "Ohayou", "Arigato"],
        correctAnswer: "Ohayou"
    }
],
linux: [
    {
        question: "What does 'ls' command do in Linux?",
        options: ["List directory contents", "Change directory", "Delete files"],
        correctAnswer: "List directory contents"
    },
    {
        question: "Which Linux command is used to change directories?",
        options: ["cd", "ls", "pwd"],
        correctAnswer: "cd"
    },
    {
        question: "Which Linux command is used to create a new file?",
        options: ["mkdir", "touch", "cp"],
        correctAnswer: "touch"
    },
    {
        question: "What is the name of the Linux kernel?",
        options: ["Linux", "Unix", "GNU"],
        correctAnswer: "Linux"
    }
],
logicalThinking: [
  {
    question: "What comes next in the sequence: 2, 5, 10, 17, 26, ___?",
    options: ["35", "36", "37", "38"],
    correctAnswer: "37",
  },
  {
    question: "If two's company and three's a crowd, what are four and five?",
    options: ["Nine", "Party", "Chaos", "Fun"],
    correctAnswer: "Nine",
  },
  {
    question: "A man builds a house with all four sides facing south. A bear walks by. What color is the bear?",
    options: ["White", "Brown", "Black", "Grey"],
    correctAnswer: "White",
  },
  {
    question: "If you rearrange the letters in 'NEW DOOR,' what do you get?",
    options: ["One Word", "Old Row", "Wooden", "New Rod"],
    correctAnswer: "One Word",
  },
],

patternRecognition: [
  {
    question: "What comes next in the sequence: 1, 4, 9, 16, 25, ___?",
    options: ["30", "36", "42", "49"],
    correctAnswer: "36",
  },
  {
    question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ___?",
    options: ["40", "41", "42", "43"],
    correctAnswer: "42",
  },
  {
    question: "What comes next in the pattern: A, B, D, G, K, ___?",
    options: ["M", "O", "P", "Q"],
    correctAnswer: "P",
  },
  {
    question: "Find the missing number: 8, 16, 32, ___, 128.",
    options: ["48", "64", "96", "112"],
    correctAnswer: "64",
  },
],

riddle: [
  {
    question: "I speak without a mouth and hear without ears. What am I?",
    options: ["Echo", "Wind", "Shadow", "Thought"],
    correctAnswer: "Echo",
  },
  {
    question: "The more of this there is, the less you see. What is it?",
    options: ["Darkness", "Light", "Fog", "Silence"],
    correctAnswer: "Darkness",
  },
  {
    question: "I have keys but open no locks. What am I?",
    options: ["Piano", "Map", "Keyboard", "Chest"],
    correctAnswer: "Keyboard",
  },
  {
    question: "What has hands but cannot clap?",
    options: ["Clock", "Statue", "Doll", "Robot"],
    correctAnswer: "Clock",
  },
],

wordAssociation: [
  {
    question: "What is the opposite of 'arrive'?",
    options: ["Depart", "Stay", "Stop", "Wait"],
    correctAnswer: "Depart",
  },
  {
    question: "What is a synonym for 'rapid'?",
    options: ["Slow", "Quick", "Calm", "Lazy"],
    correctAnswer: "Quick",
  },
  {
    question: "Choose the word most closely related to 'ocean':",
    options: ["Mountain", "Wave", "Cloud", "River"],
    correctAnswer: "Wave",
  },
  {
    question: "What is the opposite of 'expand'?",
    options: ["Reduce", "Grow", "Stretch", "Increase"],
    correctAnswer: "Reduce",
  },
],

memoryChallenge: [
  {
    question: "Memorize this list: Apple, Train, Lion, House, Banana. Which was NOT in the list?",
    options: ["Apple", "Dog", "Train", "House"],
    correctAnswer: "Dog",
  },
  {
    question: "Memorize this list: Chair, Table, Laptop, Fan, Pen. Which was in the list?",
    options: ["Table", "Sofa", "Bed", "Door"],
    correctAnswer: "Table",
  },
  {
    question: "Memorize this list: Moon, Sun, Star, Planet, Comet. Which was NOT in the list?",
    options: ["Star", "Comet", "Asteroid", "Planet"],
    correctAnswer: "Asteroid",
  },
  {
    question: "Memorize this list: Book, Lamp, Key, Bag, Bottle. Which was in the list?",
    options: ["Book", "Phone", "Chair", "Fan"],
    correctAnswer: "Book",
  },
],
trivia: [
  {
    question: "Which planet is closest to the sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O", "H2O", "CO2", "NaCl"],
    correctAnswer: "H2O",
  },
],

lateralThinking: [
  {
    question: "A man gave one son 10 cents and another son 50 cents. What time is it?",
    options: ["10:50", "5:10", "5:50", "10:00"],
    correctAnswer: "5:10",
  },
  {
    question: "If you divide 30 by half and add 10, what do you get?",
    options: ["25", "40", "70", "50"],
    correctAnswer: "70",
  },
  {
    question: "What has cities, but no houses; forests, but no trees; and rivers, but no water?",
    options: ["Map", "Globe", "Book", "Painting"],
    correctAnswer: "Map",
  },
  {
    question: "Which word is spelled incorrectly in every dictionary?",
    options: ["Incorrectly", "Incorrect", "Misspelled", "Dictionary"],
    correctAnswer: "Incorrectly",
  },
],

spatialAwareness: [
  {
    question: "If you fold a piece of paper with a square hole, what shape will the hole be when viewed from the side?",
    options: ["Square", "Rectangle", "Triangle", "Circle"],
    correctAnswer: "Rectangle",
  },
  {
    question: "Which shape has the most sides?",
    options: ["Hexagon", "Octagon", "Pentagon", "Decagon"],
    correctAnswer: "Decagon",
  },
  {
    question: "What is the 3D shape of a basketball?",
    options: ["Cube", "Sphere", "Cylinder", "Cone"],
    correctAnswer: "Sphere",
  },
  {
    question: "Which 3D shape has only one surface?",
    options: ["Cone", "Sphere", "Cylinder", "Torus"],
    correctAnswer: "Sphere",
  },
],
};

// Global variables to track the quiz
let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = [];

// Start the quiz based on category selection
function startQuiz(category) {
  currentQuiz = quizzes[category];
  currentQuestionIndex = 0;
  userAnswers = [];
  loadQuestion();
  document.getElementById("quiz-content").style.display = "none"; // Hide category selection
  document.getElementById("quiz-question-container").style.display = "block"; // Show quiz
}

// Load the next question and options
function loadQuestion() {
  const currentQuestion = currentQuiz[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;

  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectAnswer(option);
      optionsContainer.appendChild(button);
  });

  // If it's the last question, change "Next Question" to "Submit"
  if (currentQuestionIndex === currentQuiz.length - 1) {
      document.getElementById("next-btn").textContent = "Submit";
      document.getElementById("next-btn").onclick = submitQuiz; // Change button function to submit
  }
}

// Select an answer
let selectedAnswer = "";
function selectAnswer(answer) {
  selectedAnswer = answer;
}

// Store the selected answer
function storeAnswer() {
  const currentQuestion = currentQuiz[currentQuestionIndex];
  userAnswers.push({
      question: currentQuestion.question,
      selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer
  });
}

// Submit the quiz and redirect to quiz2.html
function submitQuiz() {
  storeAnswer(); // Store the final answer

  let score = 0;
  userAnswers.forEach(answer => {
      if (answer.selectedAnswer === answer.correctAnswer) {
          score++;
      }
  });

  // Display the result
  document.getElementById("quiz-question-container").style.display = "none"; // Hide quiz content
  document.getElementById("quiz-result-container").style.display = "block"; // Show result container
  document.getElementById("score").textContent = `You scored ${score} out of ${currentQuiz.length}`;

  // Redirect to quiz2.html after a short delay (e.g., 3 seconds)
  setTimeout(function() {
      window.location.href = 'quiz2.html';
  }, 3000); // Redirect after 3 seconds
}

// Move to the next question
function nextQuestion() {
  if (selectedAnswer === "") {
      alert("Please select an answer.");
      return;
  }

  storeAnswer(); // Store the selected answer
  selectedAnswer = ""; // Reset the selected answer

  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuiz.length) {
      loadQuestion(); // Load the next question
  } else {
      submitQuiz(); // If no more questions, submit the quiz
  }
}
