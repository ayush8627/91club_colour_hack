function getNum() {
  let inpNum = document.getElementById("num");
  const arr = [`.including(*) = fatch{inpNum.val = {${inpNum.value}}() string.form=> error.(Big)}`, `.including(*) = fatch{inpNum.val = {${inpNum.value}}() string.form=> error.(Big)}`];
  if (inpNum.value == 0) {
    // console.log("Please enter your trade number");
  } else {
    const num = Math.floor(Math.random() * 2);
    let result = arr[num];
    let index = 0;
    let resParagraph = document.getElementById("res-p");

    // Clear previous text and reset width
    resParagraph.textContent = "";
    resParagraph.style.width = "0";

    // Typing animation function
    function typeText() {
      if (index < result.length) {
        resParagraph.textContent += result.charAt(index); // Add one character at a time
        resParagraph.style.width = `${resParagraph.textContent.length}ch`; // Adjust width
        index++;
        setTimeout(typeText, 200); // Typing speed (100ms per character)
      } else {
        inpNum.value = ""; // Clear input field after animation
      }
    }

    typeText(); // Start typing animation
  }
}
document.getElementById("btn").addEventListener("click", getNum);

// Arrow function to add event listeners and open links
document.querySelector('.nav-1').addEventListener('click', () => {
  window.open('https://91club.net/', '_blank'); // Open Google
});

document.querySelector('.nav-2').addEventListener('click', () => {
  window.open('https://91club.net/', '_blank'); // Open Facebook
});

document.querySelector('.footer').addEventListener('click', () => {
  window.open('https://91club.net/', '_blank'); // Open Facebook
});
// `.including(7h25slw3) = fatch{inpNum.value = {${inpNum}} () string.form => error. (Big)}`
// (`The sum of a and b is: ${c}`)