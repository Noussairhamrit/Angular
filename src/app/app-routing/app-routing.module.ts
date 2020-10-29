import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** */
import { RouterModule, Routes } from '@angular/router'; ///apl on import //il faut aussi l'exporter
import { routes } from './routes'; ////param pour RouterModule
/** */

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
