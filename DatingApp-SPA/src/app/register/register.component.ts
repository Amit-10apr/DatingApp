import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { error } from '@angular/compiler/src/util';
import { AlertifyService } from 'src/app/_services/alertify.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,private alertify:AlertifyService) { }
  @Output() cancelRegister=new EventEmitter();
  model:any={};

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
      this.alertify.success("Registered successfully");
    },error=>{
      this.alertify.error(error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}
