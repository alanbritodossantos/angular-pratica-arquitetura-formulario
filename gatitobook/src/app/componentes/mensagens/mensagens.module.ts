import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensComponent } from './mensagens.component';



@NgModule({
  declarations: [
    MensagensComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MensagensComponent
  ]
})
export class MensagensModule { }
