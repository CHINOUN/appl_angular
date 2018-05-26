import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';
import {CrudService} from'../../../shared/crud.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
 cars : any=[];
  constructor(private http:HttpClient,private crud:CrudService) { }

  ngOnInit() {
   this.getAll();
  
  }
getAll(){
  this.crud.getAllCars().subscribe(data=>{this.cars=data;
  }
)
  
}
deleteCarById(id,status){
  if(status=='affected'){
    swal("Alert!", "You can't delet affected car!", "error");
  }
  else{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",      
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Car has been deleted!", {
          icon: "success",
        });
       
       this.crud.deleteCarById(id).subscribe(data=>{console.log(data);
          this.getAll();
        })
      } else {
        swal("la suppression est annuler!");
      }
    });
  }
  
  }
  

}
