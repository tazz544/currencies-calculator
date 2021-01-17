import {Currency} from '../../enums';

export interface IGetCurrencyLatestRateRequest {
  base?: Currency;
  symbols?: Currency[];
}

export interface IGetCurrencyHistoryRateRequest {
  base?: Currency;
  symbols: Currency[];
  start_at: string;
  end_at: string;
}
