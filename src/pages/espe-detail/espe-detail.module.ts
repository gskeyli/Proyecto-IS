import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EspeDetailPage } from './espe-detail';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    EspeDetailPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(EspeDetailPage),
  ],
})
export class EspeDetailPageModule {}
