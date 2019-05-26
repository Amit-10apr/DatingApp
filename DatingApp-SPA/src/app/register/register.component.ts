import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { error } from '@angular/compiler/src/util';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }
  @Output() cancelRegister=new EventEmitter();
  model:any={};

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
      console.log("Registered successfully");
    },error=>{
      console.log(error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}
