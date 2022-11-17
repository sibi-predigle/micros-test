import { NgModule } from '@angular/core';
import { MicrosComponent } from './micros.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';

@NgModule({
  declarations: [MicrosComponent, C1Component, C2Component, C3Component],
  imports: [],
  exports: [MicrosComponent, C1Component, C2Component],
})
export class MicrosModule {}
