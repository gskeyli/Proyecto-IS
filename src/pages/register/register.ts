import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import  * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  dataU = [];
  user : User = {
    email: '',
    password: '',
    name: '',
    phone:''
  };
  items: FirebaseListObservable<any[]> = null;
  userId: string;
 
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth ) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
      console.log(this.userId)
    })
 
  }

  async register(user: User){
    try{
      firebase
     .auth()
     .createUserWithEmailAndPassword(this.user.email, this.user.password)
    
      firebase
     .database()
     .ref('/users' + '/' + this.userId)
     .set({name: this.user.name, phone: this.user.phone, uid:this.userId });
    this.navCtrl.push('LoginPage'); 
  
    }
     catch (e){
       console.error(e);
     }
   }
}
