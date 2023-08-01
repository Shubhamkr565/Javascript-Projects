// Get a reference to the form and button
const form = document.querySelector('form');
const submitButton = document.querySelector('button');

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form input values
  const name = form.elements[0].value;
  const email = form.elements[1].value;
  const age = form.elements[2].value;
  const role = form.elements.role.value;
  const friendRecommendation = form.elements.friend.value;
  const languagesKnown = getSelectedLanguages();
  const comments = form.elements[9].value;

  // Display the form data in an alert
  const formData = {
    Name: name,
    Email: email,
    Age: age,
    Role: role,
    'Recommend GeeksforGeeks to a friend': friendRecommendation,
    'Languages Known': languagesKnown,
    'Comments/Suggestions': comments,
  };
  alert(JSON.stringify(formData, null, 2));
}

// Function to get selected languages
function getSelectedLanguages() {
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const selectedLanguages = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedLanguages.push(checkbox.nextElementSibling.textContent);
    }
  });
  return selectedLanguages;
}

// Event listener for form submission
submitButton.addEventListener('click', handleSubmit);
