import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Card from '../../components/Card';
import Header from '../../components/Header';
import exchangeActions from '../../models/actions';
import Input from '../../components/Input';

class Home extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      rates: [],
      baseCurrency: 'USD',
      baseCurrencyAmount: 10,
      editingAmount: false,
      selectedCurrency: [],
      availableCurrency: []
    }
  }

  componentDidMount = async () => {
    exchangeActions.fetchLatest('USD').then( res => {
      console.log('result', res);
      this.setState({
        rates: res.data.rates
      })
    }).catch( err => {
      console.log(err);
    })
  }

  onInputChange = ( e ) => {
    const amount = e.target.value
    const validator = /^(\d+(\.\d*)*?)$/;

    if (amount == "" || validator.test(amount)) {
      this.setState({
        baseCurrencyAmount: amount
      })
    }
  }

  toggleEditing = () => {
    this.setState({
      editingAmount: !this.state.editingAmount
    })
  }

  /**
   * Handle delete currency card
   * @param {string} id - Currency card's id
   */
  onDeleteHandler = ( id ) => {
    // Create a copy of current currencies list
    let copiedList = [ ...this.state.selectedCurrency ];

    // Remove currency with selected id from the copied list
    let newList = _.remove( copiedList, arr => arr !== id );

    // Use the newList as current selectedCurrency
    this.setState({ selectedCurrency: newList })
  }

  /**
   * 
   */
  addCurrencyHandler = ( id ) => {
    let newSelectedCurrency =  [ ...this.state.selectedCurrency ];
    newSelectedCurrency.push(id);
    this.setState({ selectedCurrency: newSelectedCurrency })
  }

  render() {
    let allRatesCode = Object.getOwnPropertyNames(this.state.rates)
    let ratesData = this.state.rates;
    let selectedCurrency = this.state.selectedCurrency;
    let availableRatesCode = _.filter( allRatesCode, r => _.every( selectedCurrency, selected => r != selected ))

    return (
      <div className="flex flex-col h-screen justify-between w-full">
        <Header
          currency_code={ this.state.baseCurrency }
          amount={ this.state.baseCurrencyAmount }
          onChangeAmount={ this.onInputChange.bind(this) }
          toggleEditing={ this.toggleEditing }
          editing={ this.state.editingAmount }
        />
        <div className="bg-gray-200 w-full flex flex-col flex-1 items-center overflow-auto pt-2"> 
        {
          _.map( selectedCurrency, r => {
            return (
              <Card 
                key={ r } 
                currencyTo={ r }
                currencyFrom={ this.state.baseCurrency }
                rate={ ratesData[r] }
                amount={ this.state.baseCurrencyAmount * ratesData[r] }
                onDeleteHandler={ this.onDeleteHandler.bind(this) }
              />
            )
          })
        }
        </div>
        <div className="py-4 bg-gray-200">
        <Input
          currencyList={availableRatesCode} 
          addCurrencyHandler={ this.addCurrencyHandler.bind(this) }
        />
        </div>
        
      </div>
    )
  }
}

export default Home;