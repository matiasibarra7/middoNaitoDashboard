import React from 'react';
import Header from './Header';
import Categories from './Categories';
import Cards from './Cards';
import Footer from './Footer';
import AllProducts from './AllProducts';
import LastProduct from './LastProduct';

import MiddoNaito from './MiddoNaito';

function Wrapper() {
  return (
    <>
        <div id="content-wrapper" className="d-flex flex-column">

        
            <div id="content">

                <Header />
            
                <div className="container-fluid">

                    
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>

                    
                    <Cards />


                    
                    <div className="row">
                    
                        <LastProduct />

                        <MiddoNaito />

                        <Categories />
                    
                        
                    </div>
                    
                    <AllProducts />
                    
                </div>
                
            </div>



            <Footer />


        </div>

    </>
  );
}

export default Wrapper;
