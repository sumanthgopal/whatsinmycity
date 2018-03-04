import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { UserService } from '../user/user-service';



@Component({
  selector: 'app-nagpur-individual-page',
  templateUrl: './nagpur-individual-page.component.html',
  styleUrls: ['./nagpur-individual-page.component.css']
})
export class NagpurIndividualPageComponent implements OnInit {

  constructor(private router: Router,	 private userService: UserService) { }

  ngOnInit() {
  }

  ntlife(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NAGPUR"
      }
    };
    this.router.navigate(['/ntlife'], navigationExtras);
  }

  shopping(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NAGPUR"
      }
    };
    this.router.navigate(['/shopping'], navigationExtras);
  }

  events(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NAGPUR"
      }
    };
    this.router.navigate(['/events'], navigationExtras);
  }

  placeofint(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NAGPUR"
      }
    };
    this.router.navigate(['/placesofint'], navigationExtras);
  }

  rest(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NAGPUR"
      }
    };
    this.router.navigate(['/restaurants'], navigationExtras);
  }

  onClick(){
    this.userService
      .loggedIn(false);
    this.router.navigate(['/home']);
  }

}
