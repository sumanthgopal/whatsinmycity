import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service';
import {Router, NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router,	 private userService: UserService) { }

  ngOnInit() {
  }

  onClick(){
    this.userService
      .loggedIn(false);
    this.router.navigate(['/home']);
  }
}
