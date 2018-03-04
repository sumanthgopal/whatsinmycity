import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service';
import {Router, NavigationExtras} from '@angular/router';



@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor(	 private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.userService
      .loggedIn(false);
    this.router.navigate(['/home']);

  }

}
