import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';

const  modPrimeNg: any = []


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeNg,
    ButtonModule
  ], exports: [
    modPrimeNg
  ]
})
export class PrimengModule { }
