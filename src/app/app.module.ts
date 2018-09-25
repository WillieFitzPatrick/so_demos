import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SpinnerButtonDirective } from './directives/spinner-button.directive';
import { FilterPipe } from './filter.pipe';

import { MatToolbarModule }  from '@angular/material';
import { MatIconModule }  from '@angular/material';
import { MatButtonModule }  from '@angular/material';
import { MatButtonToggleModule }  from '@angular/material';
import { MatMenuModule }  from '@angular/material';
import { MatCardModule }  from '@angular/material';
import { MatInputModule }  from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



import { ResponsiveButtonGroupComponent } from './responsive-button-group/responsive-button-group.component';
import { GoogleStyleComponent } from './google-style/google-style.component';
import { SpinnerButtonComponent } from './spinner-button/spinner-button.component';
import { FilterDataComponent } from './filter-data/filter-data.component';
import { IsMobileComponent } from './is-mobile/is-mobile.component';
import { MatCardTitleComponent } from './mat-card-title/mat-card-title.component';
import { GenericMatButtonComponent } from './generic-mat-button/generic-mat-button.component';
import { ShowGenericMatButtonComponent } from './show-generic-mat-button/show-generic-mat-button.component';
import { AnimatedDivComponent } from './animated-div/animated-div.component';
import { DateInputComponent } from './date-input/date-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { HomeComponent } from './home/home.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { YearPipe } from './year.pipe';
import { ExcusedPipe } from './excused.pipe';
import { CacheSomeDataComponent } from './cache-some-data/cache-some-data.component';
import { DataService } from './services/data.service';
import { ButtonFunctionComponent } from './button-function/button-function.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "googlestyle", component: GoogleStyleComponent},
  {path: "spinnerbutton", component: SpinnerButtonComponent},
  {path: "filterdata", component: FilterDataComponent},
  {path: "ismobile", component: IsMobileComponent},
  {path: "responsivebuttongroup", component: ResponsiveButtonGroupComponent},
  {path: "matcardtitlealignment", component: MatCardTitleComponent},
  {path: "showgenericmatbutton", component: ShowGenericMatButtonComponent},
  {path: "animateddiv", component: AnimatedDivComponent},
  {path: "dateinput", component: DateInputComponent},
  {path: "numberinput", component: NumberInputComponent},
  {path: "chainedpipes", component: PipesDemoComponent},
  {path: "cacheddata", component: CacheSomeDataComponent},
  {path: "buttonfunction", component: ButtonFunctionComponent},
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    RouterModule.forRoot( routes ) 
],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    SpinnerButtonDirective, 
    FilterPipe, 
    ResponsiveButtonGroupComponent, 
    GoogleStyleComponent, 
    SpinnerButtonComponent, 
    FilterDataComponent, 
    IsMobileComponent, 
    MatCardTitleComponent, 
    GenericMatButtonComponent, 
    ShowGenericMatButtonComponent, 
    AnimatedDivComponent, 
    DateInputComponent, 
    NumberInputComponent, 
    HomeComponent, 
    PipesDemoComponent, 
    YearPipe, 
    ExcusedPipe, 
    CacheSomeDataComponent, ButtonFunctionComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
