import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClinicaService } from '../../services/clinica.service';
import { AngularFireDatabase } from 'angularfire2/database';
import  * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database-deprecated'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  espec = [];
  uid = null;
  dbreference: FirebaseListObservable<any[]>
  data= [];
  @ViewChild('myNav') nav: NavController
 
  constructor(public cliServ: ClinicaService, public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.uid = navParams.get("uid");
    console.log( this.uid )
   
    
   
   
     this.db.list('clinicas/', ref => ref).valueChanges().subscribe(datas =>{
      this.espec = datas;
      console.log(this.espec);
    });
    /*for(var i in this.espec) {
      var arr= [];
      arr.push({
       name : this.espec[i].payload.val(),
       espe: this.espec[i].payload.val(),
       uid: this.espec[i].payload.val()
      })
      this.espec = arr;
    } */  
  
        
          
  }


  


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  
  }
 
  


  goToEspe(){
    this.navCtrl.push('EspeDetailPage');
  }

}
