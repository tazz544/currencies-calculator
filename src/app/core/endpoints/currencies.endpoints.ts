import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {pickBy, identity} from 'lodash-es';
import {IGetCurrencyHistoryRateResponse, IGetCurrencyLatestRateResponse} from '../../shared/interfaces/responses';
import {IGetCurrencyHistoryRateRequest, IGetCurrencyLatestRateRequest} from '../../shared/interfaces/requests';

export class CurrenciesEndpoints {

  constructor(public http: HttpClient, public apiUrl: string) {
  }

  getCurrencyLatestRate(getCurrencyLatestRequest: IGetCurrencyLatestRateRequest = {}): Observable<IGetCurrencyLatestRateResponse> {
    const params = pickBy(getCurrencyLatestRequest, identity);
    return this.http.get<IGetCurrencyLatestRateResponse>(`${this.apiUrl}/latest`, {params});
  }

  getCurrencyHistoryRate(getCurrencyHistoryRequest: IGetCurrencyHistoryRateRequest): Observable<IGetCurrencyHistoryRateResponse> {
    return this.http.get<any>(`${this.apiUrl}/history`, {params: {... getCurrencyHistoryRequest}});
  }
}
