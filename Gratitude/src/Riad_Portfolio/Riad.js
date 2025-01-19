// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get the submit button and attach the event listener
    const submitButton = document.getElementById('submitButton');
    
    // Add event listener for button click
    submitButton.addEventListener('click', function() {
        submitForm();
    });

    // Function to handle form submission
    function submitForm() {
        // Hide the form elements (textarea and submit button)
        document.getElementById('formContainer').style.display = 'none';

        // Show the thank you message
        document.getElementById('thankYouMessage').style.display = 'block';
    }

});
