import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

/*
  Generated class for the GmapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GmapsProvider {

  public url:string;
  private token:string;

  constructor(public http: HttpClient) {
    console.log('Hello GmapsProvider Provider');
    this.url='https://maps.googleapis.com/maps/api/geocode/json'
    this.token = 'AIzaSyCS7evVaiCMJEfzQcckSUpeNXVubLUX0D4'
  }

  getAddressData(lat:number,lng:number): Observable<any>{
    var params = "?latlng="+lat+","+lng+"&key="+this.token 
    return this.http.get(this.url+params)
  }

}
