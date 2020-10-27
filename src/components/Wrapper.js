import React from 'react';
import Header from './Header';
import Categories from './Categories';
import TotalsPanel from './TotalsPanel';
import Footer from './Footer';
import AllProductsMN from './AllProductsMN';
import LastProduct from './LastProduct';
import LastUser from './LastUser';


function Wrapper() {
  return (
    <>

        <div id="content-wrapper" className="d-flex flex-column">

        <div className="cover-modal"></div>
        
            <div id="content">

                <Header />
            
                <div className="container-fluid">

                    
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>

                    
                    <TotalsPanel />


                    
                    <div className="row">
                    
                        <LastProduct />

                        <LastUser />

                        <Categories />
                    
                        
                    </div>
                    
                    <AllProductsMN />
                    
                </div>

            <div className="modal-naito"></div>

            </div>



            <Footer />


        </div>

    </>
  );
}

export default Wrapper;
