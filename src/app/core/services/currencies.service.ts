import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {IGetCurrencyHistoryRateRequest, IGetCurrencyLatestRateRequest} from '../../shared/interfaces/requests';
import {IGetCurrencyHistoryRateResponse, IGetCurrencyLatestRateResponse} from '../../shared/interfaces/responses';
import {CurrenciesEndpoints} from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private currenciesEndpoints: CurrenciesEndpoints;

  constructor(private http: HttpClient) {
    this.currenciesEndpoints = new CurrenciesEndpoints(http, environment.apiBasePath);
  }

  fetchCurrenciesLatestRate(getCurrencyLatestRequest?: IGetCurrencyLatestRateRequest): Observable<IGetCurrencyLatestRateResponse> {
    return this.currenciesEndpoints.getCurrencyLatestRate(getCurrencyLatestRequest);
  }

  fetchCurrenciesHistoryRate(getCurrencyHistoryRequest: IGetCurrencyHistoryRateRequest): Observable<IGetCurrencyHistoryRateResponse> {
    return this.currenciesEndpoints.getCurrencyHistoryRate(getCurrencyHistoryRequest);
  }
}
