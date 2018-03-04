import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { UserService } from '../user/user-service';


@Component({
  selector: 'app-about-bangalore',
  templateUrl: './about-bangalore.component.html',
  styleUrls: ['./about-bangalore.component.css']
})
export class AboutBangaloreComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  ntlife(){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": "BANGALORE"
        }
      };
      this.router.navigate(['/ntlife'], navigationExtras);
    }

    shopping(){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": "BANGALORE"
        }
      };
      this.router.navigate(['/shopping'], navigationExtras);
    }

    events(){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": "BANGALORE"
        }
      };
      this.router.navigate(['/events'], navigationExtras);
    }

    placeofint(){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": "BANGALORE"
        }
      };
      this.router.navigate(['/placesofint'], navigationExtras);
    }

    rest(){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": "BANGALORE"
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
