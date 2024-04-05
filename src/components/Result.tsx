import React from 'react'

const Result = ({ data, resultType}: any) => {

    return (
        <div className='result-container'>
            <div className="results">

                {resultType === 'profit' && (
                    <div>
                        <div className="result-ite">
                            <div className='subject'>TOTAL PROFIT</div>
                            <div className="price-estimate"> {'\u20A6'}{data.totalProfit}</div>
                        </div>
                        <hr style={{ height: '2px', borderWidth: '0', color: 'white', backgroundColor: '#F5F5DC', margin: '7px 40px'}} />
                        <div className='result'>
                            <div className="result-item">
                                <div className='subject'> {'\u20A6'}{data.costPrice}</div>
                                <div className='word1'>Cost Price</div>
                            </div>
                            <div className="result-item">
                                <div className='subject'> {'\u20A6'}{data.sellingPricePerUnit}</div>
                                <div className='word1'>Selling Price per Unit</div>
                            </div>
                            <div className="result-items">
                                <div className='subject'> {'\u20A6'}{data.profitPerUnit}</div>
                                <div className='word1'>Profit per unit</div>
                            </div>
                        </div>
                    </div>
                )}

                {resultType === 'finalPrice' && (
                    <div>
                        <div className="result-ite">
                            <div className='subject'>FINAL PRICE</div>
                            <div className="price-estimate"> {'\u20A6'}{data.finalPrice}</div>
                        </div>
                        <hr style={{ height: '2px', borderWidth: '0', color: 'white', backgroundColor: '#F5F5DC', margin: '7px 40px'}} />
                        <div className='result'>
                            <div className="result-item">
                                <div className='subject'> {'\u20A6'}{data.baseSellingPrice}</div>
                                <div className='word1'>BASE SELLING PRICE</div>
                            </div>
                            <div className="result-item">
                                <div className='subject'> {'\u20A6'}{data.taxAmount}</div>
                                <div className='word1'>TAX RATE</div>
                            </div>
                            <div className="result-items">
                                <div className='subject'> {'\u20A6'}{data.shippingCost}</div>
                                <div className='word1'>SHIPPING FEE</div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Result