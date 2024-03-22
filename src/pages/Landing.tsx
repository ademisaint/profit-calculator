import React from 'react'
import logo1 from '../images/logo1-removebg.png'
import bg from '../images/calc3-removebg-preview.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductPrices from '../components/ProductPrices';
import FinalPrice from '../components/FinalPrice';


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

  const handleTabClick = () => {
    console.log('hello')
  }

  return (
    <div>
      <header className='App-header'>
        <img src={logo1} alt="" />
        <p>Profit Calculator</p>
      </header>

      <div>
        <div className='intro'>
          <div className='App'>Profit Calculator</div>
          <img src={bg} alt="" className='bg'/>
        </div>
      </div>

      <div className='section2'>
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
      
    
    </div>
    
  )
}

export default Landing