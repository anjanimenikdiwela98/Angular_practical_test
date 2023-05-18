import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { TempleteModule } from '../templete/templete.module';
import { HomeComponent } from './home/home.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    LandingComponent,
    GeneralInfoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    TempleteModule,
    NgSelectModule
  ]
})
export class LandingModule { }
