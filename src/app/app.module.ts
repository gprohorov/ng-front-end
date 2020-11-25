import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './component/items-list/items-list.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { ItemDetailsComponent } from './component/item-details/item-details.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemsListComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'add', component: AddItemComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    AddItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
