const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your favorite band?",
      name: "favoriteBand",
    },
  ])
  .then((response) => {
    // console.log(response);
    // console.log(typeof response);
    // console.log(response.favoriteBand);
    const rating = Math.floor(Math.random() * 5) + 1;
    // console.log(rating);
    console.log(`Really? Your band, ${response.favoriteBand} has a rating of ${rating}`);
  });
