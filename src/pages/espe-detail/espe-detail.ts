import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClinicaService } from '../../services/clinica.service';

/**
 * Generated class for the EspeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-espe-detail',
  templateUrl: 'espe-detail.html',
})
export class EspeDetailPage {

  doctores = [];
  constructor(public cliServ: ClinicaService, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspeDetailPage');
  }
  
}
