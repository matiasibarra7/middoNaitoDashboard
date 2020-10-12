import React from 'react';
import Category from './Category';

function Categories() {
  return (
    <>
        
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        
                        < Category id="1" />
                        < Category id="2"/>
                        < Category id="3"/>
                        < Category id="4"/>
                        < Category id="5"/>
                        < Category id="6"/>
                        
                    </div>
                </div>
            </div>
        </div>

    </>
  );
}

export default Categories;
