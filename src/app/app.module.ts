import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ClinicaService } from '../services/clinica.service';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
//

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DetailPage,
    
     
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    LoginPage,
    DetailPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClinicaService
  ]
})
export class AppModule {}
