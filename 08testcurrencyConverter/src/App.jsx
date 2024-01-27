import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [convertedAmount, setConvertedAmount] = useState(null);
  
    useEffect(() => {
      // Fetch exchange rates from an API (Replace 'YOUR_API_ENDPOINT' with the actual endpoint)
      const fetchExchangeRates = async () => {
        try {
          const response = await fetch('YOUR_API_ENDPOINT');
          const data = await response.json();
          const rate = data.rates[toCurrency];
          setExchangeRate(rate);
        } catch (error) {
          console.error('Error fetching exchange rates:', error);
        }
      };
  
      fetchExchangeRates();
    }, [fromCurrency, toCurrency]);
  
    useEffect(() => {
      if (exchangeRate !== null) {
        setConvertedAmount(amount * exchangeRate);
      }
    }, [amount, exchangeRate]);
  
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleFromCurrencyChange = (e) => {
      setFromCurrency(e.target.value);
    };
  
    const handleToCurrencyChange = (e) => {
      setToCurrency(e.target.value);
    };

  return (
    <div lassName="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1214630488/photo/currency-converter-concept.jpg?s=612x612&w=0&k=20&c=HI66nJqgsj6MxcjvoOqNNxHJX-6UXKv58h24jW_zr0g=')`,
    }}>
      <h2>Currency Converter</h2>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>From Currency:</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <div>
        <label>To Currency:</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <div>
        <p>Converted Amount: {convertedAmount !== null ? convertedAmount.toFixed(2) : 'Loading...'}</p>
      </div>
    </div>
  )
}

export default App
