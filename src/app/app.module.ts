import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';

/* Firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule , BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { PostComponent } from './components/posts/post/post.component';

/* --------- */


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,    

  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://portfolio-149bc.appspot.com' }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
