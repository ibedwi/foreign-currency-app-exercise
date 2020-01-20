import React from 'react';
import './input.styles.scss'
import _ from 'lodash';
import getCurrencyName from '../../utils/getCurrencyName'
class Input extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showCurrencyList: false,
      query: '',
      filteredList: []
    }
  }

  toggleShowCurrencyList = () => {
    this.setState({ showCurrencyList: !this.state.showCurrencyList })
  }

  onChangeQuery = (query) => {
    let { currencyList } = this.props;
    let filteredList = _.filter(currencyList, c => _.includes(c, query));

    this.setState({ query, filteredList })
  }
  render() {
    let currencies = {...this.props.currencyList};
    let { query, filteredList } = this.state;

    const renderCurrenciesList = (
      <div className="currencies-list h-48 overflow-auto">
        {
          query ?
          _.map( filteredList, c => {
            return (
              <span 
                className="dropdown-item currencies-list__item cursor-pointer hover:bg-orange-500" 
                onClick={ () => {this.props.addCurrencyHandler(c); this.toggleShowCurrencyList();} }
              >
                { c } - { getCurrencyName(c) }
              </span>
            )
          }) 
          :
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
            onChange={ (event) => this.onChangeQuery(event.target.value) }
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