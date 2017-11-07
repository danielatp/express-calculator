/*
# Express Calculator

Create a simple calculator app using Express.

You will create an express calculator application with four separate GET routes: `add`, `sub`, `mult` and `div`. All routes take in two number as parameters. When the route is hit, your browser should display the result of the math operation and the numbers two numbers on the screen.

For Example:

- When a user visits /add/9/3, it should display 12
- When a user visits /sub/9/3, it should display 6
- When a user visits /mult/9/3, it should display 27
- When a user visits /div/9/3, it should display 3


Bonus: Handle decimals
Other Bonus: Style the page. Serve a stylesheet in yout express app!
*/

const express = require('express');
const app = express();
// const route = require('./routes');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('HELLO')
});

app.get('/add/:num1/:num2', (req, res) => {

    var n1 = parseFloat(req.params.num1);
    var n2 = parseFloat(req.params.num2);
    var sum = n1 + n2;

    res.send(`${sum}`);

  });

  app.get('/sub/:num1/:num2', (req, res) => {
    var n1 = parseFloat(req.params.num1);
    var n2 = parseFloat(req.params.num2);
    var sub = n1 - n2;
    res.send(`${sub}`);
  });

  app.get('/mult/:num1/:num2', (req, res) => {
    var n1 = parseFloat(req.params.num1);
    var n2 = parseFloat(req.params.num2);
    var mult = n1 * n2;
    res.send(`${mult}`);
  });

  app.get('/div/:num1/:num2', (req, res) => {
    var n1 = parseFloat(req.params.num1);
    var n2 = parseFloat(req.params.num2);
    var div = n1 / n2;
    res.send(`${div}`);
  });

