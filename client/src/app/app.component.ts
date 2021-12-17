import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BackgroundColorOptions, StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate:TranslateService) {
    this.initializeApp()
   }
  
  initializeApp() {
    this.translate.setDefaultLang('en')
    const opts: BackgroundColorOptions = {
      color:'#ffde03'
    }
    StatusBar.setBackgroundColor(opts);
   }
}
