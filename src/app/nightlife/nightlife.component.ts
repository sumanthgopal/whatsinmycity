import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user-service';
import { Nightlife } from '../searchObjects/nightlife';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nightlife',
  templateUrl: './nightlife.component.html',
  styleUrls: ['./nightlife.component.css']
})
export class NightlifeComponent implements OnInit {

  nightlife: Nightlife;
  resData:Nightlife;
  constructor(private sanitizer: DomSanitizer, private router: Router, private userService: UserService, private route: ActivatedRoute, public modalService: NgbModal) { }

  cityName: any;
  closeResult: string;
  starName: any[];
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cityName = params["cityName"];
    });
    this.userService
      .selectDataNightLife(this.cityName)
      .subscribe(nightlife => {
        this.nightlife = nightlife;
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


  modalopen(content,r:Nightlife){
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
