import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  private checkLogout ;
  headers: Headers;
  options: RequestOptions;
  constructor (private _http: Http){
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  onSignup(details) {
    this.checkLogout = false;
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/insert.php/', details, this.options)
      .map(() => '');
  }
  getUsers() {
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/select.php/','' , this.options)
      .map( res => res.json());
  }

  isLoggedIn() {
    return this.checkLogout;
  }

  loggedIn(value) {
    this.checkLogout = value;
  }

  selectData(values){
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/selectRestaurants.php/', {'searchValue': 'restaurant', 'city': values} , this.options)
        .map( res => res.json());
  }

  selectDataEvents(values){
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/selectEvents.php/', {'searchValue': 'events', 'city': values} , this.options)
      .map( res => res.json());
  }

  selectDataPlaceofInt(values){
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/selectPlaceOfInt.php/', {'searchValue': 'placesofinterest', 'city': values} , this.options)
      .map( res => res.json());
  }

  selectDataNightLife(values){
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/selectRestaurants.php/', {'searchValue': 'nightlife', 'city': values} , this.options)
      .map( res => res.json());
  }

  selectDataShopping(values){
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/selectRestaurants.php/', {'searchValue': 'shopping', 'city': values} , this.options)
      .map( res => res.json());
  }

  contactUs(name ,email , msg){
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/contactus.php/', {'name':name,'email':email,'msg':msg} , this.options)
      .map(() => '');
  }

  careerRequest(name ,email ,phone, msg){
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/career.php/', {'name':name,'email':email,'phone':phone,'msg':msg} , this.options)
      .map(() => '');
  }

  getSelectedUsers(values){
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/insertwithdata.php/', {'mail': values} , this.options)
      .map( res => res.json());
  }

  updateReview(values,rating) {
    return this._http.post('https://whatsinmycityphp-whatsinmycityphp.1d35.starter-us-east-1.openshiftapps.com/updatereview.php/',{'rev': values,'rat':rating} , this.options)
      .map(() => '');
  }


}
