import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
//export class AppComponent implements OnInit {
export class AppComponent  {
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'person-add'
    },
    {
    title: 'Users',
    url: '/users',
    icon: 'people'
    },
    {
      title: 'Articles',
      url: '/articles',
      icon: 'newspaper'
      },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // ngOnInit() {
  //   const path = window.location.pathname.split('folder/')[1];
  //   if (path !== undefined) {
  //     this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
  //   }
  
}
