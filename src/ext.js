if (guess === 'up' && prevPrice < currPrice) {
  setResult(`You got a point. The price went higher.`);
  setColor('#5EB585');
  setPoints(points + 1);
  console.log('Current price in win', currPrice);
  console.log('PrevPrice price in win', prevPrice);
} else if (guess === 'up' && prevPrice > currPrice) {
  setResult(`You lost a point. The price went lower.`);
  setColor('#EF7B6F');
  setPoints(points - 1);
  console.log('Current price in win', currPrice);
  console.log('PrevPrice price in win', prevPrice);
} else if (guess === 'up' && prevPrice === currPrice) {
  setResult(`You lost a point. The did not change`);
  setColor('#EF7B6F');
  setPoints(points - 1);
  console.log('Current price in win', currPrice);
  console.log('PrevPrice price in win', prevPrice);
} else if (guess === 'down' && prevPrice < currPrice) {
  setResult(`You lost a point. The price went higher.`);
  setColor('#EF7B6F');
  setPoints(points - 1);
  console.log('Current price in lose', currPrice);
  console.log('PrevPrice price in lose', prevPrice);
} else if (guess === 'down' && prevPrice > currPrice) {
  setResult(`You got a point. The price went lower.`);
  setColor('#5EB585');
  setPoints(points + 1);
  console.log('Current price in lose', currPrice);
  console.log('PrevPrice price in lose', prevPrice);
} else if (guess === 'down' && prevPrice === currPrice) {
  setResult(`You lost a point. The did not change`);
  setColor('#EF7B6F');
  setPoints(points - 1);
  console.log('Current price in lose', currPrice);
  console.log('PrevPrice price in lose', prevPrice);
} else if (guess === 'same' && prevPrice < currPrice) {
  setResult(`You lost a point. The Price is higher`);
  setColor('#EF7B6F');
  setPoints(points - 1);
  console.log('Current price in same', currPrice);
  console.log('PrevPrice price in same', prevPrice);
} else if (guess === 'same' && prevPrice > currPrice) {
  setResult(`You lost a point. The Price is lower`);
  setColor('#5EB585');
  setPoints(points + 1);
  console.log('Current price in same', currPrice);
  console.log('PrevPrice price in same', prevPrice);
} else if (guess === 'same' && prevPrice === currPrice) {
  setResult(`You lost a point. The Price is higher`);
  setColor('#EF7B6F');
  setPoints(points + 1);
  console.log('Current price in same', currPrice);
  console.log('PrevPrice price in same', prevPrice);
}
