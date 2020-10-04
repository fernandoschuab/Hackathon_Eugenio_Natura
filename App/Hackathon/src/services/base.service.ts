import { environment } from '../environments/environment';
import { HttpService } from './../services/http.service';
import { iResultHttp } from '../interfaces/iResultHttp';

export abstract class BaseService<T> {

  urlBase: string = '';

  constructor(
    public url: string,
    public http: HttpService) {
    this.urlBase = `${environment.url_api}/${this.url}`;
  }

  public GetAll(): Promise<iResultHttp> {
    return this.http.get(this.urlBase);
  }

  public GetById(uid: string): Promise<iResultHttp> {
    return this.http.get(`${this.urlBase}/${uid}`);
  }

  public post(model: T): Promise<iResultHttp> {
    return this.http.post(this.urlBase, model);
  }


  public delete(uid: string): Promise<iResultHttp> {
    return this.http.delete(`${this.urlBase}/${uid}`);
  }

}