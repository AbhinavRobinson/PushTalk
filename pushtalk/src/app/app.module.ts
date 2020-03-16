import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const config = {
  apiKey: ' AIzaSyDzJd2ohJ4xVREa9gFsnL7gNFsWZzp3NcI ',
  authDomain: 'pushtalkapi.firebaseapp.com',
  databaseURL: 'https://pushtalkapi.firebaseio.com',
  projectId: 'pushtalkapi',
  storageBucket: 'pushtalkapi.appspot.com',
  messagingSenderId: '109606910515'
};

@NgModule({
  declarations: [AppComponent, ChatComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'corporate' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
