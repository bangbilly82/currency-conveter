const config = {
  base: 'USD',
  api: {
    host: 'https://api.exchangeratesapi.io/latest'
  },
  rates: {
    USD: 'United States Dollar',
    IDR: 'Indonesian Rupiah',
    EUR: 'Euro',
    GBP: 'British Pound',
    SGD: 'Singapore Dollar',
    JPY: 'Japanese Yen',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    INR: 'Indian Rupee',
    MYR: 'Malaysian Ringgit',
    KRW: 'South Korean Won',
    HKD: 'Hongkong Dollar'
  },
  option: [{
      value: 'USD'
    },
    {
      value: 'IDR'
    },
    {
      value: 'EUR'
    },
    {
      value: 'GBP'
    },
    {
      value: 'SGD'
    },
    {
      value: 'JPY'
    },
    {
      value: 'CAD'
    },
    {
      value: 'CHF'
    },
    {
      value: 'INR'
    },
    {
      value: 'MYR'
    },
    {
      value: 'KRW'
    },
    {
      value: 'HKD'
    }
  ]
};

export default config;