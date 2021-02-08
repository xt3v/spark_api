import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { PromptComponent } from './prompt/prompt.component';

@NgModule({
  declarations: [ModalComponent, PromptComponent],
  imports: [CommonModule],
})
export class ModalModule {}
