// JavaScript functions to control the assistant

// Define button descriptions
const buttonDescriptions = {
    'button-1': 'Change Background Color',
    'button-2': 'Change Text Color',
    'button-3': 'Move Box Position',
};

function moveToButton(button) {
    const assistant = document.getElementById('assistant-container');
    const targetButton = button.getBoundingClientRect();
    const buttonId = button.getAttribute('id');

    // Calculate the position difference between the assistant and the button
    const dx = targetButton.left - assistant.getBoundingClientRect().left;
    const dy = targetButton.top - assistant.getBoundingClientRect().top;

    // Move the assistant smoothly to the button's position
    const assistantImage = document.getElementById('assistant-image');
    assistantImage.style.transition = 'transform 0.5s ease';
    assistantImage.style.transform = `translate(${dx}px, ${dy}px)`;

    // Update the explanation text to the button description
    showExplanation(buttonDescriptions[buttonId]);
}

function showExplanation(text) {
    const explanation = document.getElementById('explanation');

    // Display the explanation box with the provided text
    explanation.textContent = text;
    explanation.style.display = 'block';
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function changeTextColor() {
    const pageContent = document.getElementById('page-content');
    pageContent.style.color = getRandomColor();
}

function moveBox() {
    const button3 = document.getElementById('button-3');
    button3.style.transform = 'translate(50px, 0)';
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

showExplanation('Welcome to our page!');

const buttons = document.querySelectorAll('.button-box');
buttons.forEach((button) => {
    button.addEventListener('mouseleave', () => {
        const assistantImage = document.getElementById('assistant-image');
        assistantImage.style.transition = 'transform 0.5s ease';
        assistantImage.style.transform = 'translate(0, 0)';

        // Reset the explanation text to the welcome message
        showExplanation('Welcome to our page!');
    });
});

// Make the assistant jump up every 10 seconds
setInterval(() => {
    const assistantImage = document.getElementById('assistant-image');
    assistantImage.style.transition = 'transform 0.3s ease';
    assistantImage.style.transform = 'translate(0, -20px)';

    setTimeout(() => {
        assistantImage.style.transition = 'transform 0.3s ease';
        assistantImage.style.transform = 'translate(0, 0)';
    }, 300);
}, 10000);






