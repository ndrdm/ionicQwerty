import { Component, ViewChild } from '@angular/core';
import {Platform, MenuController, Nav, App} from 'ionic-angular';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {FormPage} from "../pages/form/form";
import { Login } from '../pages/login/login';
import {AuthService} from "../providers/auth-service/auth-service";
import {AlertController} from "ionic-angular";
import {ChartsPage} from "../pages/charts/charts";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  //rootPage = HomePage;
  rootPage:any = Login;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private provider: AuthService,
    ) {
    this.initializeApp();
    // set our app's pages
   this.pages = [
      { title: 'Form ', component: FormPage},
      { title: 'Lista Richiesta', component: ListPage },
      {title: 'Mostra Parametri', component: ChartsPage}
  ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


  exit(){
    this.provider.logout();
    this.menu.close();
    this.nav.setRoot(this.rootPage);

  }


}

