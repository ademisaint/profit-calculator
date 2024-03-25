import React, { useRef } from 'react'
import logo1 from '../images/logo1-removebg.png'
import bg from '../images/bg.webp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductPrices from '../components/ProductPrices';
import FinalPrice from '../components/FinalPrice';
import Footer from '../components/Footer';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';


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
    // const targetDiv = document.getElementById('section2');
    // if (targetDiv) {
    //   targetDiv.scrollIntoView({ behavior: 'smooth' });
    // }

    parallax.current.scrollTo(0.4);

    console.log('hello')
  };

  const handleTabClick = () => {
    console.log('hello')
  }

  const [text] = useTypewriter ({
    words: ['Profits for Insight', 'Growth for Success', 'Efficiency for Savings', 'Cash Flow for Stability', 'Revenue for Strategy', 'Costs for Control', 'Margins  for Decisions', 'Investments for Returns', 'Performance for Improvement', 'Success for Expansion'],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 50,
  })

  const parallax = useRef<IParallax>(null!)

  return (
    <div>
      <div>
        <header className='App-header'>
          <div className='logo-area'>
            <img src={logo1} alt="" />
            <p>ProfitCalc</p>
          </div>
          <div className='social-area'>
            <a href="https://www.linkedin.com/in/saint-aderonmu/"><img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png" alt="linkedIn" className='socials' /></a>
            <a href="https://github.com/ademisaint/profit-calculator"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" className='socials' /></a>
          </div>
        </header>
      </div>
      
      <Parallax ref={parallax} pages={2} >
        <ParallaxLayer offset={0} speed={0.3} onClick={() => parallax.current.scrollTo(0.4)} >
          <div className='intro'>
            <div className='App'>
              <h1 className='App-h1'>Measure <span>{text}</span><span><Cursor/></span></h1>
              <p className='App-p'>Calculate your net profit, understand your margins, and make informed decisions to drive your business success. Our user-friendly tool offers real-time insights into your financials, empowering you to optimize pricing, reduce costs, and boost profitability.  </p>
              {/* <button className='App-btn' onClick={scrollToDiv}>Start Calculating...</button> */}
            </div>
            <div className='App-image'>
              <img src={bg} alt="" className='bg'/>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={1.5} id='section1' >
          <div id='section2'>
            <div className='section-2'>
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
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} factor={0.5} onClick={() => parallax.current.scrollTo(0)}>
          <div className='footer'><Footer/></div>
        </ParallaxLayer>
      </Parallax>

    
    </div>
    
  )
}

export default Landing