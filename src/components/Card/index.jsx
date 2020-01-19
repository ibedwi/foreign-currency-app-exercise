import React from 'react';
import PropTypes from 'prop-types';
import './Card.styles.scss';
import getCurrencyName from '../../utils/getCurrencyName';
import imagesLink from '../../utils/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Card = ( props ) => {
  return (
    <div 
      className="shadow-md md:w-2/4 sm:w-full lg:w-2/5 my-3 flex rounded-lg"
    >
      {/* DATA */}
      <div className="data-container">
        <div className="row currency-amount">
          <div className="currency-amount__code">
            <div className="currency-icon">
              <img className="currency-icon-image" 
                src={imagesLink[props.currency_to]} 
                alt={ getCurrencyName(props.currency_to) }
              />
            </div>
            <span className="currency-amount-__code__text">{ props.currency_to }</span>
          </div>
          <div className="currency-amount__converted-amount">{ props.currency_amount }</div>
        </div>

        <div className="row col-sm-12 col-md-12 col-lg-12 currency-name">
          <div className="currency-name__code">
            <p>{ props.currency_to } - { getCurrencyName(props.currency_to)}</p>
          </div>
        </div>

        <div className="rate">
          <div className="rate__amount">
            <p>1 { props.currency_from } = { props.currency_to } { props.rate }</p> 
          </div>
        </div>
      </div>
      {/* DATA - END */}
      {/* BUTTON DELETE */}
      <div 
        className="button-container"
        onClick={ () => props.onDeleteHandler( props.currency_to ) }
      >
        <FontAwesomeIcon icon={faTrash} className="btn-delete" />
      </div>
      {/* BUTTON DELETE - END */}
    </div>
  )
}

Card.propTypes = {
  currency_amount: PropTypes.number,
  currency_to_name: PropTypes.string,
  currency_from: PropTypes.string,
  currency_to: PropTypes.string,
  rate: PropTypes.number,
  onDeleteHandler: PropTypes.func
}

Card.defaultProps = {
  currency_amount: 123000,
  currency_to_name: 'Indonesia Rupiah',
  currency_from: 'USD',
  currency_to: 'IDR',
  rate: 14000,
  onDeleteHandler: null
}

export default Card;