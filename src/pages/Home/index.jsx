import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Card from '../../components/Card';
import Header from '../../components/Header';
import exchangeActions from '../../models/actions';
// import Input from '../../components/input/input.component';

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

  async componentDidMount() {
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

  onDeleteHandler = ( id ) => {
    console.log('onDeleteHandler', id);
    let copiedList = [ ...this.state.selectedCurrency ];
    let newList = _.remove( copiedList, arr => arr != id )
    this.setState({
      selectedCurrency: newList
    })
  }

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
      <div>
        <Header
          currency_code={ this.state.baseCurrency }
          amount={ this.state.baseCurrencyAmount }
          onChangeAmount={ this.onInputChange.bind(this) }
          toggleEditing={ this.toggleEditing }
          editing={ this.state.editingAmount }
        />
        <div className="container"> 
        {
          _.map( selectedCurrency, r => {
            return (
              <Card 
                key={ r } 
                currency_to={ r }
                currency_from={ this.state.baseCurrency }
                rate={ ratesData[r] }
                currency_amount={ this.state.baseCurrencyAmount * ratesData[r] }
                onDeleteHandler={ this.onDeleteHandler.bind(this) }
              />
            )
          })
        }
        {/* <Input 
          currencyList={availableRatesCode} 
          addCurrencyHandler={ this.addCurrencyHandler.bind(this) }
        /> */}
        </div>
      </div>
    )
  }
}

export default Home;