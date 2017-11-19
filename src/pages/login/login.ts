import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsistenciaPage } from '../asistencia/asistencia';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  goPrincipal():void{
  	this.navCtrl.push(TabsPage, {}, {animate: false});
  }

}
