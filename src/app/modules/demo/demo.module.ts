import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { DemoRoutes } from './demo-routing.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { DemoComponent } from './demo.component'
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DemoRoutes),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
