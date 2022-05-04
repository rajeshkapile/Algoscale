import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.login=this.fb.group({   
      userName:[],    
      password:[],   
      })   
  }
  loginData(){
    console.log(this.login.value);
  }
}
