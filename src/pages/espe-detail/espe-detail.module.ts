import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EspeDetailPage } from './espe-detail';

@NgModule({
  declarations: [
    EspeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EspeDetailPage),
  ],
})
export class EspeDetailPageModule {}
