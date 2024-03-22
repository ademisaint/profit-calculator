import React from 'react'
import Result from './Result';

const ProductPrices = () => {

  const [values, setValues] = React.useState({
    name: "",
    costPrice: 1000,
    totalUnits: 2,
    profitMargin: 20,
  });

  const [showResult, setShowResult] = React.useState(false);
  const [resultType, setResultType] = React.useState('');

  const [result, setResult] = React.useState({
    productName: '',
    costPrice: '',
    sellingPricePerUnit: '',
    profitPerUnit: '',
    totalProfit: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));

    console.log('values', values)
  }

  const handleCalculateClick = () => {
    const cost = (values.costPrice);
    const units = (values.totalUnits);
    const margin = (values.profitMargin);

    if (!isNaN(cost) && !isNaN(units) && !isNaN(margin) && units > 0 && margin > 0) {
      const profitPerUnit = (margin / 100) * (cost / units);
      const sellingPricePerUnit = (cost / units) + profitPerUnit;
      const totalProfit = profitPerUnit * units;

      setResult({
        productName: values.name,
        costPrice: cost.toString(),
        sellingPricePerUnit: sellingPricePerUnit.toFixed(2),
        profitPerUnit: profitPerUnit.toFixed(2),
        totalProfit: totalProfit.toFixed(2),
      });

      setShowResult(true);
      setResultType('profit');
    } else {
      console.error('Invalid input values. Please enter valid numbers.');
      setShowResult(false);
    }

    console.log('result', result)
  };

  return (
    <div className='main-container'>
      <div>
        <h1>calculate your commodities profit</h1>
      </div>

      <div>
        <div className='form'>
          <p className='label'>PRODUCT NAME</p>
          <input type="text" name='name' onChange={handleChange} value={values.name} />
        </div>
        <div className='form'>
          <p className='label'>COST PRICE</p>
          <input type="text" name='costPrice' onChange={handleChange} value={values.costPrice} />
        </div>
        <div className='form'>
          <p className='label'>TOTAL UNITS</p>
          <input type="text" name='totalUnits' onChange={handleChange} value={values.totalUnits} />
        </div>
        <div className='form'>
          <p className='label'>PROFIT MARGIN</p>
          <input type="text" name='profitMargin' onChange={handleChange} value={values.profitMargin} />
        </div>
      </div>

      <div className='btn'>
        <button onClick={handleCalculateClick} className='button'>CALCULATE PROFIT</button>
      </div>

      {showResult && <Result data={result} resultType={resultType} />}


    </div>
  )
}

export default ProductPrices