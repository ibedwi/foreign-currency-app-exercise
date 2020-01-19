import React from 'react';
import './input.styles.scss'
import _ from 'lodash';
import getCurrencyName from '../../utils/getCurrencyName'
class Input extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showCurrencyList: false
    }
  }

  toggleShowCurrencyList = () => {
    this.setState({ showCurrencyList: !this.state.showCurrencyList })
  }

  render() {
    let currencies = {...this.props.currencyList};
    
    const renderCurrenciesList = (
      <div className="currencies-list h-48 overflow-auto">
        {
          _.map( currencies, c => {
            return (
              <span 
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

      <div className="sm:w-4/5 md:w-3/4 lg:w-3/4 ml-auto mr-auto">
        {
          this.state.showCurrencyList ?
          renderCurrenciesList
            :
          null
        }
        <div 
          className="input-group input-group--add-currency"
        >
          <input 
            type="text" 
            className="form-control" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-lg" 
            placeholder="Add more Currencies"
            onFocus={ () => this.toggleShowCurrencyList() }
          />
          <div className="input-group-append">
            <button 
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

export default Input;