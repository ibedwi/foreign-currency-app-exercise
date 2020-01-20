import React from 'react';
import PropTypes from 'prop-types';
import './Card.styles.scss';
import getCurrencyName from '../../utils/getCurrencyName';
import imagesLink from '../../utils/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/**
 * Currency Card component
 * @param {Object} props - react props
 * @param {string} props.currencyTo - currency target
 * @param {string} props.currencyFrom - currency from
 * @param {number} props.amount - currenct amount 
 * @param {number} props.rate - currency_from and currency_to rate
 */
const Card = ({ currencyTo, currencyFrom, amount, rate, onDeleteHandler }) => {
  return (
    <div className="shadow-md md:w-2/4 sm:w-full lg:w-2/5 my-3 flex rounded-lg bg-white">
      {/* DATA */}
      <div className="data-container">
        <div className="row currency-amount">
          <div className="currency-amount__code">
            <div className="currency-icon">
              <img className="currency-icon-image" 
                src={imagesLink[currencyTo]} 
                alt={ getCurrencyName(currencyFrom) }
              />
            </div>
            <span className="currency-amount-__code__text">{ currencyTo }</span>
          </div>
          <div className="currency-amount__converted-amount">{ amount }</div>
        </div>

        <div className="row col-sm-12 col-md-12 col-lg-12 currency-name">
          <div className="currency-name__code">
            <p>{ currencyTo } - { getCurrencyName(currencyTo)}</p>
          </div>
        </div>

        <div className="rate">
          <div className="rate__amount">
            <p>1 { currencyFrom } = { currencyTo } { rate }</p> 
          </div>
        </div>
      </div>
      {/* DATA - END */}
      
      {/* BUTTON DELETE */}
      <div 
        className="button-container rounded-r-lg"
        onClick={ () => onDeleteHandler( currencyTo ) }
      >
        <FontAwesomeIcon icon={faTrash} className="btn-delete" />
      </div>
      {/* BUTTON DELETE - END */}
    </div>
  )
}

Card.propTypes = {
  currencyTo: PropTypes.string, 
  currencyFrom: PropTypes.string, 
  amount: PropTypes.number, 
  rate: PropTypes.number, 
  onDeleteHandler: PropTypes.func,
}

Card.defaultProps = {
  currencyTo: 'IDR', 
  currencyFrom: 'USD', 
  amount: 0, 
  rate: 0, 
  onDeleteHandler: () => console.log('Delete Hanlder'),
}

export default Card;