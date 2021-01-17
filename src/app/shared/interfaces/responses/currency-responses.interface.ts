import {Currency} from '../../enums';

export interface IGetCurrencyLatestRateResponse {
  base: Currency;
  date: string;
  rates: {
    [key: string]: number
  };
}

export interface IGetCurrencyHistoryRateResponse {
  base: Currency;
  end_at: string;
  start_at: string;
  date: string;
  rates: {
    [key: string]: {
      [key: string]: number
    }
  };
}
