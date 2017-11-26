import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { DetailPage } from '../detail/detail';
import { AngularFireList} from 'angularfire2/database';
import  * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {
 
  clinid ={id:null}; 
  
  array = [];
  clinicas_ar =[] ;
 
 @ViewChild('myNav') nav: NavController
 



  constructor(private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase,
  ) {
    
   //this.clinicas_ar = cliServ.getClinica(); 
  this.db.list('clinicas/').valueChanges().subscribe(data =>{
    this.clinicas_ar = data;
    //console.log(this.clinicas_ar);
    });
    
  }


/*ionViewDidLoad() {
    this.afAuth.authState.subscribe(data =>{
   //  if(data && data.email && data.uid){
      this.toast.create({
        message: `Welcome to MedicServ, ${data.email}`,
        duration: 3000
      }).present();
      //} else {
       // this.toast.create({
         // message: `Coult fint module, ${data.email}`,
          //duration: 3000
        //}).present();
     // }
    })
  }*/



  public goToDetail(uid){
    this.navCtrl.push(DetailPage, {uid:uid});
  }

}
