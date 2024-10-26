const greetUser = function() {
    let userName = prompt("Please enter your name:");
    if (userName === null || userName.trim() === "") {
      userName = "Guest";
    }
    console.log(`Hello, ${userName}!`);
  };
  
  greetUser();