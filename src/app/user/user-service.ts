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
    console.log(details);
    this.checkLogout = false;
    return this._http.post('http://localhost/ProjectPhp/insert.php/', details, this.options)
      .map(() => '');
  }
  getUsers() {
    return this._http.post('http://localhost/ProjectPhp/select.php/','' , this.options)
      .map( res => res.json());
  }

  isLoggedIn() {
    return this.checkLogout;
  }

  loggedIn(value) {
    this.checkLogout = value;
  }

  selectData(values){
    return this._http.post('http://localhost/ProjectPhp/selectRestaurants.php/', {'searchValue': 'RESTAURANT', 'city': values} , this.options)
        .map( res => res.json());
  }

  selectDataEvents(values){
    return this._http.post('http://localhost/ProjectPhp/selectEvents.php/', {'searchValue': 'EVENTS', 'city': values} , this.options)
      .map( res => res.json());
  }

  selectDataPlaceofInt(values){
    return this._http.post('http://localhost/ProjectPhp/selectPlaceOfInt.php/', {'searchValue': 'PLACESOFINTEREST', 'city': values} , this.options)
      .map( res => res.json());
  }

  selectDataNightLife(values){
    return this._http.post('http://localhost/ProjectPhp/selectRestaurants.php/', {'searchValue': 'NIGHTLIFE', 'city': values} , this.options)
      .map( res => res.json());
  }

  selectDataShopping(values){
    return this._http.post('http://localhost/ProjectPhp/selectRestaurants.php/', {'searchValue': 'SHOPPING', 'city': values} , this.options)
      .map( res => res.json());
  }

  contactUs(name ,email , msg){
    return this._http.post('http://localhost/ProjectPhp/contactus.php/', {'name':name,'email':email,'msg':msg} , this.options)
      .map(() => '');
  }

  careerRequest(name ,email ,phone, msg){
    return this._http.post('http://localhost/ProjectPhp/career.php/', {'name':name,'email':email,'phone':phone,'msg':msg} , this.options)
      .map(() => '');
  }

  getSelectedUsers(values){
    console.log(values);
    return this._http.post('http://localhost/ProjectPhp/insertwithdata.php/', {'mail': values} , this.options)
      .map( res => res.json());
  }

  updateReview(values,rating) {
    console.log(values);
    console.log(rating);
    return this._http.post('http://localhost/ProjectPhp/updatereview.php/',{'rev': values,'rat':rating} , this.options)
      .map(() => '');
  }


}
