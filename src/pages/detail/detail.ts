import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClinicaService } from '../../services/clinica.service';
import { AngularFireDatabase } from 'angularfire2/database';
import  * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database-deprecated'


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
   this.db.list('clinicas/', ref => ref.orderByChild("uid").equalTo(this.uid)).valueChanges().subscribe(datas =>{
   // firebase.database().ref("clinicas/").once("value")
     // .then(function(snapshot) {
       // var key = snapshot.key; // "ada"
    this.espec = datas;
    console.log(datas)      
    //console.log(snapshot.val());
  });  
                 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');

  }
 
  goToEspe(){
    this.navCtrl.push('EspeDetailPage');
  }

}
