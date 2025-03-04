// Display the section by hiding all others and showing the desired section
function displaySection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('d-none');
    });

    // Show the selected section
    const sectionToDisplay = document.getElementById(sectionId);
    sectionToDisplay.classList.remove('d-none');
}

// Handle the question form submission
document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user input from the question form
    const userQuestion = document.getElementById("user_question").value;
    
    // Simulate an answer from the database or backend (you can replace this with actual logic later)
    const simulatedAnswer = getAnswer(userQuestion);

    // Show the response container with the answer
    const responseContainer = document.getElementById("responseContainer");
    const responseElement = document.getElementById("response");

    // Set the simulated answer to the response
    responseElement.textContent = simulatedAnswer;

    // Show the response container
    responseContainer.style.display = 'block';
});

// Function to simulate the response (this would ideally be replaced by actual backend logic)
function getAnswer(question) {
    // Sample database responses (you can replace this with actual API calls)
    const responses = {
        "What is domestic violence?": "Domestic violence is a pattern of abusive behavior in any relationship used by one partner to gain or maintain control over another intimate partner.",
        "How can I leave an abusive relationship?": "Contact a local shelter or domestic violence hotline for immediate assistance. Create a safety plan and gather important documents.",
        "What are my legal rights?": "You have the right to file for a protective order and seek legal counsel for domestic violence cases."
    };

    // Return the answer if available, otherwise return a default response
    return responses[question] || "No response available. Please contact support for more assistance.";
}

// Optional: You can include a function to display the contact support popup or trigger email links, etc.
function contactSupport(organization) {
    alert(`You are contacting ${organization}. Please proceed to your email or phone to get assistance.`);
}

// Initialize by showing the first section (section 1) when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displaySection('section1');
});
