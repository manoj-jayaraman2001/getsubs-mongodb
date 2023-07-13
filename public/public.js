const linkElements = document.getElementsByClassName("fa-solid");
const messageElement = document.getElementById('message')

const linkElementsArray = [...linkElements]


linkElementsArray.forEach((element) => {
  element.addEventListener("click", (event) => {
    // Handle the click event for each element
    const textValue = event.target.dataset.copy;

    navigator.clipboard.writeText(textValue)
      .then(() => {
        
        showMessage()
      })
      .catch(err => {
        console.error('Failed to copy data value to clipboard:', err);
        
      });
  });
});


function showMessage(){
  messageElement.style.display = 'block';
  setTimeout(()=>{
    messageElement.style.display = 'none';
  }, 2000)
}