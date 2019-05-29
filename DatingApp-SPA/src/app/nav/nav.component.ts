import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  model: any={};
  
  login(){
    this.authService.login(this.model).subscribe(next=>{
      console.log('Logged in successfully')
    },error=>{
      console.log('Failed to log in')
    })
  }

  loggedIn(){
    const token=localStorage.getItem('token');
    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
    console.log('Logged out successfully');
  }
}