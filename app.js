

    // JavaScript code for saving input name and counting button clicks
    document.addEventListener('DOMContentLoaded', function() {
      const input1 = document.getElementById('input1');
      const btn1  = document.getElementById('btn1');
      const resultElement = document.getElementById('msg');

      let nameCount = 0;

      btn1.addEventListener('click', function() {
        const enteredName = input1.value.trim();
         
        if (enteredName !== '') {
          // Increment the count
          nameCount++;

          
          // Display the result
          resultElement.textContent += ` ${enteredName}     ${nameCount}\n `;


          // Clear the input field
          input1.value = '';
        }
      });
    });





























  






  
