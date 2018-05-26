import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
  data: string ="pt your name";
  user:any;
  counter: number = 0;
  name: string;
  email: string;
  phone:number;
  about:string;
  result:any=[];
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
   ];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      data =>{
        this.result = data;
  }
    )
  }
decrement():number{
  return this.counter --;
}
increment():number{
  return this.counter ++;
}
save(){
this.user={ 
  Name:this.name,
  Email:this.email,
  Phone:this.phone,
  About:this.about
}

console.log (this.user);
}
reset(){
 this.name="",
 this.email="",
 this.phone=null,
 this.about=""
}
}