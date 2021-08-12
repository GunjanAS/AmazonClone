import React from 'react'
import "./Home.css"
import Products from './Products'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div className="home">
            <div className="home__carousel">
            <Carousel  >
                <Carousel.Item >
                    <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser2/GW/SMB_Desktop_Hero1x._CB418473838_.jpg" 
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/Jupiter_GW_Softlines/Phase_2/V2/V3-PC/Unrec_Template_1500x600fst._CB417368948_.jpg" 
                    alt="Third slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Mirzapurs2/Launch/Phase2/1500x600_Hero-Tall_np._CB419394629_.jpg" 
                    alt="Third slide"
                    />

                    
                </Carousel.Item>
            </Carousel>

            </div>
            
        
        {/*Products*/}
        <div className="home__row">
        <Products
        id="3"
        title="Healthgenie 3911M 2.5 HP Peak Motorized Treadmill for Home Use & Fitness Enthusiast (Free Installation Assistance)"
        price={388}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/61yn0q1YVCL._SL1500_.jpg"
        
        />
        
        <Products
        id="5"
        title="Honor Watch Magic (Lava Black), Lightweight Smart Watch, Personal Fitness Mentor, Watch Faces Store, 7 Days Battery Life, GPS,11 Workout Modes, Scientific Sleep & Heart Rate Monitor"
        price={6999}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81wWxtlyb6L._SL1500_.jpg"
        
        />
        

        </div>
        <div className="home__row">
        <Products
        id="1"
        title="Think Like a Monk"
        price={388}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
        
        />
        
        <Products
        id="4"
        title="Amazon Brand - Solimo Andro Solid Sheesham Wood Coffee Table with 4 Stools (Teak Finish)"
        price={11999}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/81QwerHEsxL._SL1500_.jpg"
        
        />
        
        <Products
        id="2"
        title="Prestige 1.5 Litre Kettle 1500-watts, Red"
        price={799}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/51zGuMpVccL._SL1000_.jpg"
        
        />

        </div>
        <div className="home__row">
        <Products
        id="6"
        title="Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)"
        price={31888}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71el-PAu1IL._SL1500_.jpg"
        
        />
        

        </div>
        
        
        
        </div>

        
    )
}

export default Home
