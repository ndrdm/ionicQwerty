import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { MockDataProvider } from '../providers/mock-data/mock-data';
import {ListPage} from "../pages/list/list";
import {AuthService} from '../providers/auth-service/auth-service';
import {HttpClientModule} from "@angular/common/http";
import {ChartsPage} from "../pages/charts/charts";
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    Login,
    HomePage,
    FormPage,
    ListPage,
    ChartsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    Login,
    ListPage,
    ChartsPage
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
