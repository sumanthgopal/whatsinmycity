import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service';
import {Router, NavigationExtras} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import * as $ from 'jquery';
import {User} from "../user/user";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  searchList = ["Food","Shopping","Events","Nightlife","Places of Interest","E-Learning"];
  public isUserLoggedIn = false;
  public emailUser: any;
  values: any[];
  closeResult: string;
  constructor(private userService: UserService , private router: Router, public modalService: NgbModal, private route: ActivatedRoute) { }
  ngOnInit() {
    this.isUserLoggedIn = this.userService
      .isLoggedIn();
    /*this.route.queryParams.subscribe(params => {
      this.emailUser = params["user"];
    });
    console.log(this.emailUser);*/
  }
  citiesList = [ {
    'Name': 'Boston',
  },
    {
      'Name': 'New York',
    },
    {
      'Name': 'Los Angeles',
    },
    {
      'Name': 'Las Vegas',
    },
    {
      'Name': 'Bangalore',
    },
    {
      'Name': 'Hyderabad',
    },
    {
      'Name': 'Mumbai',
    },
    {
      'Name': 'Nagpur',
    }
  ];

  logoutClicked(event: Event) {
    var retVal = confirm("Are you sure you want to Logout from the application?");
    if( retVal == true ){
      this.isUserLoggedIn = false;
    }else{
      return false;
    }
  }
    searchValidation(content){
        let check: boolean = false;
       if(!this.isUserLoggedIn) {
         this.modalService.open(content);
       }else
         {
           for (var i = 0; i < this.searchList.length; i++) {
             if ($('#searchInput').val().toString().toUpperCase() === this.searchList[i].toUpperCase()) {
               check = true;
               break;
             }
           }
           if (check) {
             if ($('#searchInput').val().toString().toUpperCase() === 'FOOD') {
               let navigationExtras: NavigationExtras = {
                 queryParams: {
                   "cityName": $('#selectValue').val().toString().toUpperCase()
                 }
               };
               this.router.navigate(['/restaurants'], navigationExtras);
             } else if ($('#searchInput').val().toString().toUpperCase() === 'EVENTS') {
               let navigationExtras: NavigationExtras = {
                 queryParams: {
                   "cityName": $('#selectValue').val().toString().toUpperCase()
                 }
               };
               this.router.navigate(['/events'], navigationExtras);
             } else if ($('#searchInput').val().toString().toUpperCase() === 'PLACES OF INTEREST') {
               let navigationExtras: NavigationExtras = {
                 queryParams: {
                   "cityName": $('#selectValue').val().toString().toUpperCase()
                 }
               };
               this.router.navigate(['/placesofint'], navigationExtras);
             } else if ($('#searchInput').val().toString().toUpperCase() === 'NIGHTLIFE') {
               let navigationExtras: NavigationExtras = {
                 queryParams: {
                   "cityName": $('#selectValue').val().toString().toUpperCase()
                 }
               };
               this.router.navigate(['/ntlife'], navigationExtras);
             } else if ($('#searchInput').val().toString().toUpperCase() === 'SHOPPING') {
               let navigationExtras: NavigationExtras = {
                 queryParams: {
                   "cityName": $('#selectValue').val().toString().toUpperCase()
                 }
               };
               this.router.navigate(['/shopping'], navigationExtras);
             }
           } else {
             $('#resultError').html('No Result');
             return false;
           }
         }

    }

  rest(content) {
    let check: boolean = false;
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": $('#selectValue').val().toString().toUpperCase()
        }
      }
      this.router.navigate(['/restaurants'], navigationExtras);
    }
  }

  shop(content) {
    let check: boolean = false;
    if(!this.isUserLoggedIn){
    this.modalService.open(content);
    }else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": $('#selectValue').val().toString().toUpperCase(),
          "user": this.emailUser
        }
      }

      console.log(navigationExtras);
      this.router.navigate(['/shopping'], navigationExtras);
    }
  }

  ev(content) {
    let check: boolean = false;
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": $('#selectValue').val().toString().toUpperCase()
        }
      }
      this.router.navigate(['/events'], navigationExtras);
    }
  }

  ntlif(content) {
    let check: boolean = false;
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": $('#selectValue').val().toString().toUpperCase()
        }
      }
      this.router.navigate(['/ntlife'], navigationExtras);
    }
  }

  placint(content) {
    let check: boolean = false;
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "cityName": $('#selectValue').val().toString().toUpperCase()
        }
      }
      this.router.navigate(['/placesofint'], navigationExtras);
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  writerev(content){
    if(!this.isUserLoggedIn){
    this.modalService.open(content);
    }else{
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "user": this.emailUser
      }
    }
      this.router.navigate(['/writereview']);
    };

  }

bagBtn(content){
  if (!this.isUserLoggedIn) {
    this.modalService.open(content);
  } else {
    this.router.navigate(['/bangalore']);
  }
}

  hydBtn(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/hyderabad']);
    }
  }
  mumBtn(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/mumbai']);
    }
  }
  nagBtn(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/nagpur']);
    }
  }
  bosBtn(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/boston']);
    }
  }
  losBtn(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/losangeles']);
    }
  }
  lasBtn(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/lasvegas']);
    }
  }
  nycBtn(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/newyork']);
    }
  }

  abtUs(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/about-us']);
    }
  }

  cntct(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/contact-us']);
    }
  }

  disc(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/disclaimer']);
    }
  }

  elear(content){
    if (!this.isUserLoggedIn) {
      this.modalService.open(content);
    } else {
      this.router.navigate(['/elearning']);
    }
  }
}
