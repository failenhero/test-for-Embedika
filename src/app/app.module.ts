import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersFilterComponent } from './components/users-filter/users-filter.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { NameFilterPipe } from './pipes/name-filter.pipe';
import { CityFilterPipe } from './pipes/city-filter.pipe';
import { CompanyFilterPipe } from './pipes/company-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UsersListComponent,
    UserCardComponent,
    UsersFilterComponent,
    NameFilterPipe,
    CityFilterPipe,
    CompanyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
