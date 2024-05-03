const messages = [
    "Keep coding!",
    "Never stop learning.",
    "The only limit is your imagination.",
  ];
  
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  
  console.log(message);
  