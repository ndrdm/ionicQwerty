import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { Login } from '../pages/login/login';
import { MockDataProvider } from '../providers/mock-data/mock-data';
import {AuthService} from "../models/classes";
import {ListPage} from "../pages/list/list";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login
    FormPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FormPage,
    ListPage
    HomePage,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MockDataProvider,
    AuthService
  ]
})
export class AppModule {}
