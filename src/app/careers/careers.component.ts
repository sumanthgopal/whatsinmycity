import { Component, OnInit , AfterViewInit} from '@angular/core';
import { UserService } from '../user/user-service';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import {Router, NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit, AfterViewInit {

  fileUpload: any;
  loaded: boolean = false;

  constructor(private userService: UserService, public modalService: NgbModal,  private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#email').focus(function () {
      $('#emailError').html('');
      $('#signupError').html('');
    });
    $('#name').focus(function () {
      $('#nameError').html('');
      $('#signupError').html('');
    });
    $('#msg').focus(function () {
      $('#msgError').html('');
      $('#signupError').html('');
    });
    $('#phone').focus(function () {
      $('#phoneError').html('');
      $('#signupError').html('');
    });
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /pdf-*/;

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    this.fileUpload = file;
    this.loaded = false;
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

  descValidate() {
    if ($('#msg').val().toString().length.toString() === '0') {
      $('#msgError').html('Enter the  Description');
      return false;
    }
  }

  phoneValidate() {
    const regex: any = /^(\d{3})+\-(\d{3})+\-(\d{4})$/;
    if ($('#phone').val().toString().length.toString() === '0') {
      $('#phoneError').html('Enter the  Phone Number');
      return false;
    } else if (!regex.test($("#phone").val())) {
      $('#phoneError').html('Phone Number format is wrong');
      return false;
    }
  }

  submitBtn(content) {
    const regex: any = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const regex1: any = /^(\d{3})+\-(\d{3})+\-(\d{4})$/;
    if ($('#msg').val().toString().length.toString() === '0' || $('#name').val().toString().length.toString() === '0' || $('#email').val().toString().length.toString() === '0' || $('#phone').val().toString().length.toString() === '0') {
      $('#signupError').html('Please enter all the fields');
      return false;
    } else if (!regex.test($("#email").val())) {
      $('#emailError').html('Email format is wrong');
      return false;
    } else if (!regex1.test($("#phone").val())) {
      $('#phoneError').html('Phone Number format is wrong');
      return false;
    } else {
      this.userService
        .careerRequest($('#name').val(), $('#email').val(), $('#phone').val(), $('#msg').val())
        .subscribe();
      this.modalService.open(content);
      $('#name').val('');
      $("#email").val('');
      $('#msg').val('');
      $('#phone').val('');
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }

  onClick(content){
    this.userService
      .loggedIn(false);
    this.router.navigate(['/home']);
  }
}
