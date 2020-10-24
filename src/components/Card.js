import React from 'react';
//import PropTypes from 'prop-types'


function Card(props) {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className={`card ${props.colorClass} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {props.title} </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {
                    props.value? props.value 
                    : <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                  }
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${props.iconClass} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>          
    </>
  );
}

/* Card.propTypes = {
  title:  PropTypes.string,
  value:  PropTypes.string,
  iconClass:  PropTypes.string,
  colorClass:  PropTypes.string
}

Card.defaultProps = {
  title:  'Tarjeta sin nombre',
  value:  'No definido',
  colorClass:  'border-left-primary',
  iconClass:  'fa-question'
} */


export default Card;
