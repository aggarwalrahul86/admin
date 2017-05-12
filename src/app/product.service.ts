import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  getProductData() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost/admin/populateItems',{headers:headers})
      .map((response: Response) => response.json());
  }

 /* sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://angularpro-bea38.firebaseio.com/angularform.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }*/

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
