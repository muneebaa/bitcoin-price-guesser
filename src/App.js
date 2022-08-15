import React, { useState, useEffect } from 'react';

import Button from './globals/components/Button';
import PropagateLoader from 'react-spinners/PropagateLoader';
import axios from 'axios';

import { colors } from './globals/constants/colors';
import './App.css';

function App() {
  let [points, setPoints] = useState(0);
  const [prevPrice, setPrevPrice] = useState(0);
  const [currPrice, setCurrPrice] = useState(0);
  const [guess, setGuess] = useState(null);
  const [result, setResult] = useState('Results will be shown here');

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState('#F7931A');

  const sendGetRequest = async () => {
    try {
      const res = await axios.get(
        'https://api.coindesk.com/v1/bpi/currentprice.json'
      );
      setCurrPrice(parseFloat(res.data.bpi.USD.rate.replace(/,/g, '')));
      setPrevPrice(parseFloat(currPrice));
    } catch (err) {
      console.error(err);
    }
  };

  const checkGuess = (result, color, points) => {
    setResult(result);
    setColor(color);
    setPoints(points);
  };

  useEffect(() => {
    if (guess) {
      if (guess === 'up' && prevPrice < currPrice) {
        checkGuess(
          `You got a point. The price went higher.`,
          colors.green,
          points + 1
        );
      } else if (guess === 'up' && prevPrice > currPrice) {
        checkGuess(
          'You lost a point. The price went lower.',
          colors.red,
          points - 1
        );
      } else if (guess === 'up' && prevPrice === currPrice) {
        checkGuess(
          `You lost a point. The price did not change`,
          colors.red,
          points - 1
        );
      } else if (guess === 'down' && prevPrice < currPrice) {
        checkGuess(
          `You lost a point. The price went higher.`,
          colors.red,
          points - 1
        );
      } else if (guess === 'down' && prevPrice > currPrice) {
        checkGuess(
          'You got a point. The price went lower.',
          colors.green,
          points + 1
        );
      } else if (guess === 'down' && prevPrice === currPrice) {
        checkGuess(
          'You lost a point. The price did not change',
          colors.red,
          points - 1
        );
      } else if (guess === 'same' && prevPrice < currPrice) {
        checkGuess(
          'You lost a point. The Price is higher',
          colors.red,
          points - 1
        );
      } else if (guess === 'same' && prevPrice > currPrice) {
        checkGuess(
          'You lost a point. The Price is lower',
          colors.red,
          points - 1
        );
      } else if (guess === 'same' && prevPrice === currPrice) {
        checkGuess(
          'You got a point. The price remains same',
          colors.green,
          points + 1
        );
        console.log('helloooooo');
      } else {
        setResult(`Some Thing went wrong`);
        setColor('#485A81');
      }
    }
    setGuess('');
  }, [currPrice, guess, prevPrice]);

  const handleClick = (guess) => {
    setLoading(true);
    setTimeout(async function () {
      await sendGetRequest();
      setLoading(false);
      setGuess(guess);
    }, 3000);
    console.log(guess);
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  useEffect(() => {
    console.log(guess, result, points);
  }, [points, guess, result]);

  return (
    <div className='main'>
      <div className='header'>
        <img
          className='bitcoin'
          src='https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023'
          alt='bitcoin'
        />
        <h1>Price Guesser</h1>
      </div>
      <div className='points'>
        <p>
          Points <span className='points-span'>{points}</span>
        </p>
      </div>

      <div className='guess-panel'>
        <div>
          <h2 className='guess-panel-text'>Guess :</h2>
          <p className='guess-panel-choose'>
            Will the price go up or down or it will remain same
          </p>
          <div className='guess-panel-button  '>
            <Button
              handleClick={() => handleClick('up')}
              disabled={loading}
              value={'up'}
              background={colors.green}
            />
            <Button
              handleClick={() => handleClick('down')}
              disabled={loading}
              value={'down'}
              background={colors.red}
            />
            <Button
              handleClick={() => handleClick('same')}
              disabled={loading}
              value={'same'}
              background={colors.blue}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className='current-price'>Current Price : {currPrice}</h2>
      </div>
      <div className='results' style={{ background: color }}>
        {loading ? (
          <div className='results-loader'>
            <PropagateLoader color='#ffffff' loading={loading} size={20} />
          </div>
        ) : (
          <p>{result}</p>
        )}
      </div>
    </div>
  );
}

export default App;
