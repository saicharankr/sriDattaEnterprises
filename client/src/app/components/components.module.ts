import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';




@NgModule({
  declarations: [ShowHidePasswordComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ShowHidePasswordComponent]
})
export class ComponentsModule { }
