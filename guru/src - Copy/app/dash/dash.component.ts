import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './must.validater';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  route: any;

  constructor(private data:FormBuilder, private rout:Router) { }
  regForm:any
  ngOnInit(): void {
    this.regForm=this.data.group({
      name:[''],
      userName:[''],
      password:['',Validators.required],
      confirm:['',Validators.required],
      date:[],
      year:[],
      month:[]
    }),
    {
      validator: MustMatch('password', 'confirm')
    };
    
    }
onSubmit(){
  console.log(this.regForm.value);
  localStorage.setItem('register', JSON.stringify(this.regForm.value))
  if (this.regForm.valid) {
    return this.rout.navigate(['/login'])
   
  //  console.log("success");
   
         
     }
     else{
       alert("check the password")
       
     }
}
}
