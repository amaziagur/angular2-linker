import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {UrlAsset} from './UrlAsset'


@Injectable()
export class AssetsService{
 
 constructor (private http: Http) {
 }
  
    getAssets() : Observable<UrlAsset[]>{
        //https://shortener-link.herokuapp.com/shortener/v1/assets/all.json
        //http://localhost:8080/shortener/v1/assets/all.json
        return this.http.get('https://shortener-link.herokuapp.com/shortener/v1/assets/all.json')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
       if (res.status < 200 || res.status >= 300) {
             throw new Error('Bad response status: ' + res.status);
           }
       let body = res.json();
       return body || { };
    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}


