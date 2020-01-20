import React from 'react';
import './input.styles.scss'
import _ from 'lodash';
import getCurrencyName from '../../utils/getCurrencyName';
import PropTypes from 'prop-types';

/**
 * Component showing available currencies list and adding the currency
 * to the listed currencies 
 */
class Input extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showCurrencyList: false,
      query: '',
      filteredList: []
    }
  }

  /**
   * Toggle show currency list
   */
  toggleShowCurrencyList = () => {
    this.setState({ showCurrencyList: !this.state.showCurrencyList })
  }

  /**
   * Handle change query for filtering the available coin list
   * @param {string} query - search query
   */
  onChangeQuery = (query) => {
    let { currencyList } = this.props;

    // Create new list from filtered currencyList
    let filteredList = _.filter(currencyList, c => _.includes(c, query));

    this.setState({ query, filteredList })
  }

  render() {
    let currencies = {...this.props.currencyList};
    let { query, filteredList } = this.state;

    const renderCurrenciesList = (
      <div 
        aria-label="currencies-list"
        className="currencies-list h-48 overflow-auto"
      >
        {
          query ?
          // Show filtered list
          _.map( filteredList, c => {
            return (
              <span 
                key={c}
                className="dropdown-item currencies-list__item cursor-pointer hover:bg-orange-500" 
                onClick={ () => {this.props.addCurrencyHandler(c); this.toggleShowCurrencyList();} }
              >
                { c } - { getCurrencyName(c) }
              </span>
            )
          }) 
          :
          // Show all available currencies
          _.map( currencies, c => {
            return (
              <span 
                key={c}
                className="dropdown-item currencies-list__item cursor-pointer hover:bg-orange-500" 
                onClick={ () => {this.props.addCurrencyHandler(c); this.toggleShowCurrencyList();} }
              >
                { c } - { getCurrencyName(c) }
              </span>
            )
          }) 
        }
      </div>
    )

    return (

      <div className="card-input sm:w-4/5 md:w-3/4 lg:w-3/4 ml-auto mr-auto">
        {
          this.state.showCurrencyList ?
          renderCurrenciesList
            :
          null
        }
        <div className="input-group input-group--add-currency">
          <input 
            type="text" 
            className="form-control" 
            aria-label="currencies" 
            placeholder="Add more Currencies"
            onFocus={ () => this.toggleShowCurrencyList() }
            onChange={ (event) => this.onChangeQuery(event.target.value) }
          />
          <div className="input-group-append">
            <button 
              aria-label="toggle-currency-list"
              className="btn btn-secondary" 
              type="button" 
              id="button-addon2"
              onClick={ () => this.toggleShowCurrencyList() }
            >
              { this.state.showCurrencyList ? 'Close' : 'Add' }
            </button>
          </div>
        </div>
        
      </div>
    )
  }
}

Input.propTypes = {
  currencyList: PropTypes.object,
  addCurrencyHandler: PropTypes.func
}

Input.defaultProps = {
  currencyList: {},
  addCurrencyHandler: () => console.log('default addCurrencyHandler')
}

export default Input;