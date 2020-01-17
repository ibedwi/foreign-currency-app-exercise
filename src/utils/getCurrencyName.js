/**
 * Returned currency's name
 * @param {String} currencyCode 
 */
const getCurrencyName = ( currencyCode ) => {

  let currencyName = '';
  switch (currencyCode) {
    case 'EUR':
      currencyName = 'Euro'
      break;
  
    case "BGN":
      currencyName = 'Bulgarian Lev';
      break;

    case "NZD":
      currencyName = 'New Zealand Dollar';
      break;

    case "ILS":
      currencyName = 'Israeli Shekel';
      break;

    case "RUB":
      currencyName = 'Russian Rubble';
      break;

    case "CAD":
      currencyName = 'Canadian Dollar';
      break;

    case "USD":
      currencyName = 'United States Dollar';
      break;

    case "PHP":
      currencyName = 'Philippine Peso';
      break;

    case "CHF":
      currencyName = 'Swiss Franc';
      break;

    case "ZAR":
      currencyName = 'South African Rand';
      break;

    case "AUD":
      currencyName = 'Australian Dollar';
      break;

    case "JPY":
      currencyName = 'Japanese Yen';
      break;

    case "TRY":
      currencyName = 'Turkish Lira';
      break;

    case "HKD":
      currencyName = 'Hong Kong Dollar';
      break;

    case "MYR":
      currencyName = 'Malaysian Ringgit';
      break;

    case "THB":
      currencyName = 'Thai Baht';
      break;

    case "HRK":
      currencyName = 'Croatian Kuna';
      break;

    case "NOK":
      currencyName = 'Norwegian Crone';
      break;

    case "IDR":
      currencyName = 'Indonesian Rupiah';
      break;

    case "DKK":
      currencyName = 'Danish Krone';
      break;

    case "CZK":
      currencyName = 'Czech Koruna';
      break;

    case "HUF":
      currencyName = 'Hungarian Forint';
      break;

    case "GBP":
      currencyName = 'British Pound';
      break;

    case "MXN":
      currencyName = 'Mexican Peso';
      break;

    case "KRW":
      currencyName = 'South Korean Won';
      break;

    case "ISK":
      currencyName = 'Icelandic Króna';
      break;

    case "SGD":
      currencyName = 'Singapore Dollar';
      break;

    case "BRL":
      currencyName = 'Brazillian Real';
      break;

    case "PLN":
      currencyName = 'Polish Złoty';
      break;

    case "INR":
      currencyName = 'Indian Rupee';
      break;

    case "RON":
      currencyName = 'Romanian Leu';
      break;

    case "CNY":
      currencyName = 'Chinese Yuan Renminbi';
      break;

    case "SEK":
      currencyName = 'Swedish Krona';
      break;

    default:
      break;
  }
  
  return currencyName;

}

export default getCurrencyName;