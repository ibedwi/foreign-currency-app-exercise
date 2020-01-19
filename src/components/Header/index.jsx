import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './header.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

/**
 * Header component that include the input amount text input
 * @param {*} param0 
 */
const Header = ({ currencyCode, currencyName, amount, onChangeAmount }) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing(!isEditing);

  return (
    <nav className="nav justify-content-center nav-custom ">
    <div className="header col-sm-12 col-md-8 col-lg-5">
      <div className="currency-name-full">
        <p>{ currencyCode } - { currencyName }</p>
      </div>
      <div className="currency-data">
        <div className="currency-code">
          { currencyCode }
        </div>
        <div 
          className="currency-amount"
        >
          {
            isEditing ?
            <div className="currency-amount__inner">
              <div className="input-group mb-3 input-amount">
                <input 
                  type="text" 
                  className="form-control" 
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-lg" 
                  onChange={ (e) => onChangeAmount(e) }
                  placeholder={ amount }
                  value={ amount }
                />
                <div className="input-group-append">
                  <button 
                    className="btn btn-secondary" 
                    type="button" 
                    id="button-addon2"
                    onClick={ () => toggleEditing() }
                  >
                      Done
                  </button>
                </div>
              </div>
            </div>
            :
              <div className="currency-amount__inner">
                { amount }
                <button 
                  className="btn-edit" 
                  onClick={ () => toggleEditing() }
                > 
                  <FontAwesomeIcon icon={faEdit} className="btn-edit__icon" />
                </button>
              </div>
          }
        </div>
      </div>
    </div>
    </nav>
  )
}

Header.propTypes = {
  currencyCode: PropTypes.string,
  currencyName: PropTypes.string,
  amount: PropTypes.number,
  onChangeAmount: PropTypes.func,
}

Header.defaultProps = {
  currencyCode: 'USD',
  currencyName: 'United States Dollar',
  amount: 10000,
  onChangeAmount: () => console.log('onChangeAmount'),
}

export default Header;

