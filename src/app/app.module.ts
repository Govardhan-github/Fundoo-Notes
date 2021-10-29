import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './Components/login/login.component';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { LoginpasswordComponent } from './Components/loginpassword/loginpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import{ReactiveFormsModule} from  '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import {MatCardModule} from '@angular/material/card';
import { IconsComponent } from './Components/icons/icons.component';
import { TakeNotesComponent } from './Components/take-notes/take-notes.component';
import {FormsModule} from '@angular/forms';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';











@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotemailComponent,
    LoginpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    
    GetNotesComponent,
    IconsComponent,
    TakeNotesComponent,
    DisplayNotesComponent,
    UpdateNoteComponent,
    TrashComponent,
    ArchivenotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
