import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate:TranslateService,private statusBar: StatusBar) {
    this.initializeApp()
   }
  
  initializeApp() {
    this.translate.setDefaultLang('en')
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#ffffff');
   }
}
