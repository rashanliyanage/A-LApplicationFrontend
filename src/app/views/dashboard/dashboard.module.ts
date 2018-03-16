import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlashMessagesModule } from 'ngx-flash-messages'; 
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    CommonModule,
    FlashMessagesModule,
    NgProgressModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
