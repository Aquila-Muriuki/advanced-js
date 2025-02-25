


function solution(message, K) {
    // If the message fits within the limit, return it as is
    if (message.length <= K) return message;
    
    let words = message.split(' '), notification = '';
    
    // Iterate through words to construct the notification within the limit
    for (let word of words) {
        let tempNotification = notification + (notification ? ' ' : '') + word;
        
        // Stop if adding the next word exceeds the allowed length (including "...")
        if (tempNotification.length > K - 3) break;
        
        notification = tempNotification;
    }
    
    // If any words were added, append " ..."; otherwise, return only "..."
    return notification ? notification + ' ...' : '...';
}




function solution(message, K) {
    const words = message.split(' '); // 1. Split the input message into an array of words using spaces as delimiters.
    let notification = ''; // 2. Initialize an empty string variable 'notification' to store the resulting notification.
  
    if (words.join(' ').length <= K) { // 3. Check if the length of the original message (joined back with spaces) is less than or equal to K.
      return message; // 4. If the message is short enough, return the original message.
    }
  
    for (let i = 0; i < words.length; i++) { // 5. Start a loop to iterate through each word in the 'words' array.
      const tempNotification = notification + (notification ? ' ' : '') + words[i]; // 6. Create a temporary notification string by appending the current word to the existing 'notification', adding a space if 'notification' is not empty.
  
      if (tempNotification.length <= K) { // 7. Check if the length of the 'tempNotification' is less than or equal to K.
        notification = tempNotification; // 8. If it's within the limit, update 'notification' with the 'tempNotification'.
      } else { // 9. If the 'tempNotification' exceeds the limit K.
        if (notification.length === 0) { // 10. If the 'notification' is empty, it means even the first word is too long.
          return '...'; // 11. Return "..." because all words need to be cropped.
        }
  
        const dots = '...'; // 12. Define the dots to add to the end of the cropped message.
        const remainingSpace = K - notification.length - 1 - dots.length; //13. Calculate how many characters are left to add the dots.
  
        if(remainingSpace >= 0){ //14. Check if there is enough space to add the dots and the space before the dots.
          return notification + " " + dots; //15. If there is enough space, return the notification, space and dots.
        } else { //16. If there is not enough space.
          let currentString = ""; //17. Create an empty currentString to store the notification.
          let currentLength = 0; //18. Create a variable for the current length of the notification.
          for(let j=0; j < words.length; j++){ //19. Iterate through the words.
            const tempString = currentString + (currentString ? " " : "") + words[j]; //20. Create a temporary string by adding the word to the current string.
            if(tempString.length <= K - 4){ //21. Check if the temporary string is within the length limit, minus the 4 characters that are " ..."
              currentString = tempString; //22. If it is within the limit, set the current string to the temporary string.
            } else { //23. If the temporary string is too long.
              if(currentString.length === 0){ //24. If the current string is empty, that means even the first word is too long.
                return "..."; //25. Return "...".
              }
              return currentString + " ..."; //26. Return the current string with " ..." added to the end.
            }
          }
        }
      }
    }
    return notification; // 27. If the loop finishes without exceeding the limit, return the final 'notification'.
  }