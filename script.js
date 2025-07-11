let current = "";

function press(val) {
  current += val;
  updateDisplay(current);
}

function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}

function clearDisplay() {
  current = "";
  updateDisplay("0");
}

function calculate() {
  // Rickroll Easter Egg
  if (current === "6+6+6") {
    window.location.href = "rickroll.html";
    return;
  }

  const random = Math.random();

  // 10% ให้คำตอบจริง
  if (random < 0.10) {
    try {
      const result = eval(current);
      updateDisplay(result);
    } catch (e) {
      updateDisplay("Invalid");
    }
  } else {
    // 90% มั่วคำตอบ
    const fakeOutputs = [
      "Hello World!",
      "Welcome to ChatGPT. How can I help you today?",
      "Please wait...",
      "42",
      "System Busy",
      "Reboot Required",
      "Launching FlappyBird...",
      "404: Math Not Found",
      "Error: Undefined Output"
    ];

    // แอบเปิด flappy bird 5%
    if (random > 0.90) {
      window.location.href = "flappy.html";
      return;
    }

    const randomOutput = fakeOutputs[Math.floor(Math.random() * fakeOutputs.length)];
    updateDisplay(randomOutput);
  }

  current = "";
}

function showFormPopup() {
  const popup = document.getElementById("form-popup");
  popup.style.display = "block";
}

function closeForm() {
  const popup = document.getElementById("form-popup");
  popup.style.display = "none";
}

if (Math.random() < 0.15) {
    showFormPopup();
  }

  const random = Math.random();