import React from 'react'
import logo1 from '../images/logo1-removebg.png'
import bg from '../images/bg.webp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductPrices from '../components/ProductPrices';
import FinalPrice from '../components/FinalPrice';
import Footer from '../components/Footer';


const Landing = () => {
  const [tabs, setTabs] = React.useState([
    {
      id: 1,
      name: 'Product Prices and profit',
    },
    {
      id: 2,
      name: 'Final Price',
    }
  ])

  const scrollToDiv = () => {
    const targetDiv = document.getElementById('section2');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabClick = () => {
    console.log('hello')
  }

  return (
    <div>
      <header className='App-header'>
        <img src={logo1} alt="" />
        <p>ProfitCalc</p>
      </header>

      <div className='intro'>
        <div className='App'>
          <h1 className='App-h1'>Maximize Your Margins</h1>
          <p className='App-p'>Calculate your net profit, understand your margins, and make informed decisions to drive your business success. Our user-friendly tool offers real-time insights into your financials, empowering you to optimize pricing, reduce costs, and boost profitability. 
            <button className='App-btn' onClick={scrollToDiv}>Start Calculating...</button>
          </p>
          
        </div>
        <div className='App-image'>
          <img src={bg} alt="" className='bg'/>
        </div>
      </div>

      <div id='section2'>
        <div className='navTab'>
          <Tabs>
            <TabList className='tablist'>
              {tabs.map((tab)=> (
                <Tab key={tab.id} onClick={handleTabClick}>{tab.name}</Tab>
              ))}
            </TabList>
            {tabs.map((tab) => (
              <TabPanel key={tab.id}>
                {tab.name === 'Product Prices and profit' ? <ProductPrices/> : <FinalPrice/>}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>

      <div><Footer/></div>
      
    
    </div>
    
  )
}

export default Landing