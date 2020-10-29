import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
///Using Angular Material Progress Spinner
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

///////To use the Template-driven forms, import the Angular Forms module
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 

//Importing the Reactive Forms Module
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
////Angular Material slider
import {MatSliderModule} from '@angular/material/slider';

/** */
import { HttpModule } from '@angular/http';
///Use Angular HTTP client to obtain data from a server
import { HttpClientModule } from '@angular/common/http';

import { baseURL } from './shared/baseurl';

/** */
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';////apl on import


/** */

import { DishService } from './srevices/dish.service';
import { PromotionService } from './srevices/promotion.service';
import { LeaderService } from './srevices/leader.service';
import { FeedbackService } from './srevices/feedback.service';

/** */
import { AppRoutingModule} from './app-routing/app-routing.module';

/** */
import { HighlightDirective } from './directives/highlight.directive';

/** */
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule ,
    MatSliderModule ,
    HttpModule,
    HttpClientModule
  ],
  /** -------------------------------------*/
  /* Un composant d'entrée est tout composant que 
  Angular charge impérativement (ce qui signifie que 
    vous ne le référencez pas dans le modèle),
   par type. Vous spécifiez un composant d'entrée en l'amorçant
    dans un NgModule ou en l'incluant dans une définition de routage */

    ///=======>il n'y a pas du routage

  entryComponents: [
    LoginComponent
],
  /**---------------------------------------- */
  providers: [DishService,
              PromotionService,
              LeaderService,
              FeedbackService,

              {provide: 'baseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
