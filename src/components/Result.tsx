import React from 'react'

const Result = ({ data }: any) => {

    return (
        <div className='result-container'>
            <div className="results">
                <div className="result-ite">
                    <div className="price-estimate">{data.totalProfit}</div>
                    <div >TOTAL PROFIT</div>
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
                    {/* <div className="result-item">
                        <div>$133</div>
                        <div className='word1'>PMI</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Result