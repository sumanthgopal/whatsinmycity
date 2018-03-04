import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../user/user-service';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  constructor(private userService: UserService, public modalService: NgbModal, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#email').focus(function() {
      $('#emailError').html('');
      $('#signupError').html('');
    });
    $('#name').focus(function() {
      $('#nameError').html('');
      $('#signupError').html('');
    });
    $('#msg').focus(function() {
      $('#msgError').html('');
      $('#signupError').html('');
    });
  }

  emailValidate() {
    const regex: any = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ($('#email').val().toString().length.toString() === '0') {
      $('#emailError').html('Enter the  Email');
      return false;
    } else if (!regex.test($("#email").val())) {
      $('#emailError').html('Email format is wrong');
      return false;
    }
  }

  nameValidate() {
    if ($('#name').val().toString().length.toString() === '0') {
      $('#nameError').html('Enter the  Name');
      return false;
    }
  }

  msgValidate() {
    if ($('#msg').val().toString().length.toString() === '0') {
      $('#msgError').html('Enter the  Message');
      return false;
    }
  }

  onSubmit(content){
    const regex: any = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ($('#msg').val().toString().length.toString() === '0' || $('#name').val().toString().length.toString() === '0' || $('#email').val().toString().length.toString() === '0') {
      $('#signupError').html('Please enter all the fields');
      return false;
    }
    if ($('#name').val().toString().length.toString() === '0') {
      $('#nameError').html('Enter the  Name');
      return false;
    }else if ($('#email').val().toString().length.toString() === '0') {
      $('#emailError').html('Enter the  Email');
      return false;
    } else if (!regex.test($("#email").val())) {
      $('#emailError').html('Email format is wrong');
      return false;
    }else if ($('#msg').val().toString().length.toString() === '0') {
      $('#msgError').html('Enter the  Message');
      return false;
    }else{
      this.userService
        .contactUs($('#name').val(),$("#email").val(),$('#msg').val())
        .subscribe();
      this.modalService.open(content);
      $('#name').val('');
      $("#email").val('');
      $('#msg').val('');
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

  jobBtn(){
    this.router.navigate(['/career']);
  }

  onClick(){
    this.userService
      .loggedIn(false);
    this.router.navigate(['/home']);
  }
}
