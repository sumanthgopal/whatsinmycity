import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user-service';
import { Shopping } from '../searchObjects/shopping';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import * as $ from 'jquery';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  shopping: Shopping;
  resData: Shopping;
  constructor(private sanitizer: DomSanitizer, private router: Router, private userService: UserService, private route: ActivatedRoute, public modalService: NgbModal) { }

  cityName: any;
  closeResult: string;
  starName: any[];
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cityName = params["cityName"];
    });
    this.userService
      .selectDataShopping(this.cityName)
      .subscribe(shopping => {
        this.shopping = shopping;
      });
  }

  cleanURL(oldURL)  {
    return (this.sanitizer.bypassSecurityTrustResourceUrl(oldURL));
  }

  onClick(){
    this.userService
      .loggedIn(false);
    this.router.navigate(['/home']);
  }

  modalopen(content,r:Shopping){
    this.resData=r;
    console.log(this.resData);
    this.starName = ['','','','',''];
    var myInt3 = parseInt(r.Rating);
    for(var i=0;i<myInt3;i++){
      this.starName[i] = 'checked';
    }
    this.modalService.open(content,{
      size:'lg',
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

}
