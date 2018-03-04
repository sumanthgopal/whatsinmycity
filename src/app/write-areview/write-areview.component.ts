import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { UserService } from '../user/user-service';
import {Router, NavigationExtras} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { User } from '../user/user';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-write-areview',
  templateUrl: './write-areview.component.html',
  styleUrls: ['./write-areview.component.css']
})
export class WriteAreviewComponent implements OnInit, AfterViewInit {

  user:User;
  selectedUser:User;
  emailUser:any;
  constructor(private userservice: UserService , private router: Router, public modalService: NgbModal, private route: ActivatedRoute) {
    userservice
      .getUsers()
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnInit() {
    //this.route.queryParams.subscribe(params => {
      //this.emailUser = params["user"];
    //});
    this.userservice
      .getSelectedUsers(this.emailUser)
      .subscribe(user => {
        console.log(this.selectedUser = user);
      });
  }
  ngAfterViewInit() {

  }

  modalopen(){

  }
  subBtn(){
    if($('#reviewArea').val().toString().length.toString() === '0'){
      $('#signupError').html('Please enter Review');
      return false;
    }else{
      var retVal = confirm("Do you want to proceed with login?");
      if( retVal == true ){
        this.userservice
          .updateReview($('#reviewArea').val(),$('#btn').val());
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "user": this.emailUser
          }
        };
        this.router.navigate(['/home'], navigationExtras);
      }else{
        return false;
      }
    }
  }

}
