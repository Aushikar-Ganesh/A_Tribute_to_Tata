// Array of Quotes with Different Background Colors and Images
const quotes = [
    { 
        text: "Take the stones people throw at you, and use them to build a monument.", 
        color: "#FF6F61", 
        image: "image.jpg" 
    },
    { 
        text: "If you want to walk fast, walk alone. But if you want to walk far, walk together.", 
        color: "#6A0572", 
        image: "image.jpg" 
    },
    { 
        text: "Ups and downs in life are very important to keep us going, because a straight line, even in an ECG, means we are not alive.", 
        color: "#11999E", 
        image: "image.jpg" 
    },
    { 
        text: "I don't believe in taking the right decisions. I take decisions and make them right.", 
        color: "#40514E", 
        image: "image.jpg" 
    },
    { 
        text: "None can destroy iron, but its own rust can! Likewise, none can destroy a person but their own mindset.", 
        color: "#F4A261", 
        image: "image.jpg" 
    }
];

let currentQuoteIndex = 0;

// Function to Display the Next Quote
function showNextQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteImage = document.getElementById('quote-image');
    const quoteWrapper = document.getElementById('quote-wrapper');

    // Fade out text and apply flip animation to the image
    quoteText.style.opacity = 0;
    quoteImage.classList.add('flipping');

    setTimeout(() => {
        // Update the quote, background color, and image
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        const currentQuote = quotes[currentQuoteIndex];

        quoteText.textContent = currentQuote.text;
        quoteWrapper.style.backgroundColor = currentQuote.color;
        quoteImage.src = currentQuote.image; // Update image source

        // Reset flip animation after it completes
        quoteImage.classList.remove('flipping');

        // Fade in the text and image
        setTimeout(() => {
            quoteText.style.opacity = 1;
            quoteImage.style.opacity = 1;
        }, 100);
    }, 600); // Match this with the animation duration
}

// Load the first quote initially
window.onload = showNextQuote;