import React from 'react'
import Result from './Result';

const FinalPrice = () => {
    const [values, setValues] = React.useState({
        baseSellingPrice: "",
        taxRate: "",
        shippingFee: "",
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));

        console.log(values)
    }

    const [showResult, setShowResult] = React.useState(false)
    const [resultType, setResultType] = React.useState('');

    const [result, setResult] = React.useState({
        baseSellingPrice: '',
        taxAmount: '',
        shippingCost: '',
        finalPrice: '',
    })

    const handleCalculateClick = () => {
        const basePrice = parseFloat(values.baseSellingPrice);
        const taxRate = parseInt(values.taxRate);
        const shippingFee = parseFloat(values.shippingFee);
    
        if (!isNaN(basePrice) && !isNaN(taxRate) && !isNaN(shippingFee) && basePrice >= 0 && taxRate >= 0 && shippingFee >= 0) {
            const taxAmount = (basePrice * (taxRate / 100));
            const finalPrice = (basePrice + (taxAmount) + shippingFee);

            setResult({
                baseSellingPrice: values.baseSellingPrice.toString(),
                taxAmount: taxAmount.toFixed(2),
                shippingCost: values.shippingFee.toString(),
                finalPrice: finalPrice.toFixed(2),
            });

            setShowResult(true);
            setResultType('finalPrice');
        }  else {
            console.error('Invalid input values. Please enter valid numbers.');
            setShowResult(false);
        }

        console.log('result', result)
    }

    return (
        <div className='main-container'>
            <div className='form-head'>
                <h1>Final Price</h1>
            </div>
            
            <div>
                <div className='form'>
                    <p className='label'>Base Selling Price</p>
                    <input type="text" name='baseSellingPrice' onChange={handleChange} value={values.baseSellingPrice} />
                </div>
                <div className='form'>
                    <p className='label'>Tax Rate</p>
                    <input type="text" name='taxRate' onChange={handleChange} value={values.taxRate} />
                </div>
                <div className='form'>
                    <p className='label'>Shipping Fee</p>
                    <input type="text" name='shippingFee' onChange={handleChange} value={values.shippingFee} />
                </div>
            </div>

            <div className='btn'>
                <button onClick={handleCalculateClick} className='button'>CALCULATE FINAL PRICE</button>
            </div>

            {showResult && <Result data={result} resultType={resultType} />}
            
        </div>
    )
}

export default FinalPrice