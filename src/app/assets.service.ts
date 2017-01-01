import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {UrlAsset} from "./UrlAsset";


@Injectable()
export class AssetsService{


 constructor (private http: Http) {}

    getAssets() : Observable<UrlAsset[]>{
        return this.http.get('https://shortener-link.herokuapp.com/shortener/v1/assets/all.json')
            .map(this.extractData)
            .catch(this.handleError);
    }

    pushNewAsset(url : string) {

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      this.http.post("https://shortener-link.herokuapp.com/shortener/v1/short", JSON.stringify({"url": `${url}`}), options)
              .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
    }

    private extractData(res: Response) {
       if (res.status < 200 || res.status >= 300) {
             throw new Error('Bad response status: ' + res.status);
           }
       let body = res.json();
      console.log("service!!")
      console.log(body)
       return body || { };
    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}


