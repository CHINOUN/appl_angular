import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
name: string;
email:string;
password:string;
confirmpassword:string;
users: any = [{}]
  constructor(private route: Router) { }


  ngOnInit() {
    if(localStorage.getItem('users')){
      this.users=JSON.parse(localStorage.getItem('users'));
    }
  }

  register(){
    let data={
      Name:this.name,
      Email:this.email,
      Password:this.password
    }
    this.users.push(data)
    localStorage.setItem('users',JSON.stringify(this.users));
    this.route.navigate(['login'])
  }
}
