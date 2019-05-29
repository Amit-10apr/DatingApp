import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authService:AuthService, private alertify:AlertifyService) { }

  ngOnInit() {
  }

  model: any={};
  
  login(){
    this.authService.login(this.model).subscribe(next=>{
      this.alertify.success('Logged in successfully')
    },error=>{
      this.alertify.error(error)
    })
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('Logged out successfully');
  }
}
