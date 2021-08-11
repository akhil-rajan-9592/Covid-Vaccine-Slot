import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  pincode :any
  dates :any

  results :any
  constructor(private dataservice : DataserviceService,private router : Router) { }

  ngOnInit(): void {
  }

  submitSub(){
    let pin = this.pincode;
    let date = this.dates;
    console.log(pin);
    if(pin && date){
      this.dataservice.getslots(pin,date)
      .subscribe(data=>{
        if(data){
          console.log(data);
          this.results = data;
        }
      },data=>{
        alert(data.error.message)
      })
    }
    else{
      alert('Please add subject name')
    }
  }

}
