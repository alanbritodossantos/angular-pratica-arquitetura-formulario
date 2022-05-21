import { RodapeComponent } from './rodape.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RodapeComponent],
  imports: [CommonModule, RouterModule],
  exports: [RodapeComponent],
})
export class RodapeModule {}
