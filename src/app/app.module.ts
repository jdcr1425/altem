import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { AsistenciaPage } from '../pages/asistencia/asistencia';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PerfilPage,
    TabsPage,
    AsistenciaPage,
    EstadisticasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    PerfilPage,
    TabsPage,
    AsistenciaPage,
    EstadisticasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
