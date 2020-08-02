import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EvolucionEficienciaComponent } from './evolucion-eficiencia/evolucion-eficiencia.component';
import { ModalDatosDelPersonalComponent } from './modal-datos-del-personal/modal-datos-del-personal.component';

import { DialogModule } from "primeng/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports:      [ BrowserModule, FormsModule,DialogModule,BrowserAnimationsModule,ReactiveFormsModule,
    NgApexchartsModule ],
  declarations: [ AppComponent, HelloComponent, EvolucionEficienciaComponent, ModalDatosDelPersonalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
