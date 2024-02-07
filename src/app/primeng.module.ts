import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

const  modPrimeNg: any = [
  CardModule,
  ButtonModule,
  InputTextModule,
  ToastModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeNg,
    ButtonModule,
    
  ], exports: [
    modPrimeNg
  ]
})
export class PrimengModule { }
