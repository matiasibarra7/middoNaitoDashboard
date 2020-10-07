import React from 'react';
import Header from './Header';
import Categories from './Categories';

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

                    
                    <div className="row">

                        <div className="col-md-4 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">135</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    
                        <div className="col-md-4 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    
                        <div className="col-md-4 mb-4">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">38</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-user-check fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row">
                    
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src="images/product_dummy.svg" alt="imagen dummy"/>
                                    </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                                </div>
                            </div>
                        </div>

                        <Categories />
                    
                        
                    </div>
                </div>
                
            </div>



            <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                <span>Copyright &copy; Dashboard 2020</span>
                </div>
            </div>
            </footer>


        </div>

    </>
  );
}

export default Wrapper;
