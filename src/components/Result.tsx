import React from 'react'

const Result = ({ data, resultType}: any) => {

    return (
        <div className='result-container'>
            <div className="results">

                {resultType === 'profit' && (
                    <div>
                        <div className="result-ite">
                            <div className="price-estimate">{data.totalProfit}</div>
                            <div>TOTAL PROFIT</div>
                        </div>
                        <b className="hr"></b>
                        <div className='result'>
                            <div className="result-item">
                                <div>{data.costPrice}</div>
                                <div className='word1'>Cost Price</div>
                            </div>
                            <div className="result-item">
                                <div>{data.sellingPricePerUnit}</div>
                                <div className='word1'>Selling Price per Unit</div>
                            </div>
                            <div className="result-item">
                                <div>{data.profitPerUnit}</div>
                                <div className='word1'>Profit per unit</div>
                            </div>
                        </div>
                    </div>
                )}

                {resultType === 'finalPrice' && (
                    <div>
                        <div className="result-ite">
                            <div className="price-estimate">{data.finalPrice}</div>
                            <div>FINAL PRICE</div>
                        </div>
                        <b className="hr"></b>
                        <div className='result'>
                            <div className="result-item">
                                <div>{data.baseSellingPrice}</div>
                                <div className='word1'>BASE SELLING PRICE</div>
                            </div>
                            <div className="result-item">
                                <div>{data.taxAmount}</div>
                                <div className='word1'>TAX RATE</div>
                            </div>
                            <div className="result-item">
                                <div>{data.shippingCost}</div>
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