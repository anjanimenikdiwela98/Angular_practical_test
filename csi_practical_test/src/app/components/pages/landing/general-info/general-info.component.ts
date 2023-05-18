import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  referenceNumberIDPendingList:any = [123,2546,478,125]
  constructor() { }

  ngOnInit(): void {
  }

}
