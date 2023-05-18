import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  gender:string[] = ['Male','Female']
  civilStatus:string[] = ['Married','Single']
  nationality:string[] = ['Sri Lankan', 'American','British','French']
  country:string[] = ['Sri Lanka', 'USA', 'UK', 'France']
  constructor() { }

  ngOnInit(): void {
  }

}
