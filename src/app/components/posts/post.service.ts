import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { PostI } from '../../shared/models/post.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  /*Creo que con la siguiente línea de código es con la que nos conectamos a la bbdd y nos devuelve los campos que estén definidos en la interface o modelo Post*/
  private postsCollection: AngularFirestoreCollection<PostI>;
  private downloadURL: Observable<string>;
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage) {
    this.postsCollection = afs.collection<PostI>('posts', ref => ref.orderBy('titlePost', 'desc'));
}


    public getAllPosts(): Observable<PostI[]> {
    return this.postsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as PostI;
            const id = a.payload.doc.id;
            return { id, ...data};
           
          })
          
        )
        
      );
  }

  public getOnePost(id: PostI): Observable<PostI> {
    return this.afs.doc<PostI>(`posts/${id}`).valueChanges();
  }   

}
