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
   this.db.list('clinicas/', ref => ref.orderByChild("uid").equalTo(this.uid)).valueChanges().subscribe(datas =>{
   // firebase.database().ref("clinicas/").once("value")
     // .then(function(snapshot) {
       // var key = snapshot.key; // "ada"
    this.espec = datas;
    console.log(datas)      
    //console.log(snapshot.val());
  
   /* for(var i in key) {
      var arr= [];
      arr.push({
        name : this.key[i].name,
       espe:this.key[i].espe,
       uid: this.key[i].uid
      })
      this.espec = arr;
      console.log( this.key[i].name);
   } */ 
  });  
  
   
        
          
  }


  


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  
  }
 
  


  goToEspe(){
    this.navCtrl.push('EspeDetailPage');
  }

}
