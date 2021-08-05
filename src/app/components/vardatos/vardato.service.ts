import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { VardatoI } from '../../shared/models/vardato.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VardatoService {
  /*Creo que con la siguiente línea de código es con la que nos conectamos a la bbdd y nos devuelve los campos que estén definidos en la interface o modelo Post*/
  private vardatosCollection: AngularFirestoreCollection<VardatoI>;
  private downloadURL: Observable<string>;
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage) {
    this.vardatosCollection = afs.collection<VardatoI>('vardatos');
}


    public getAllVardatos(): Observable<VardatoI[]> {
    return this.vardatosCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data2 = a.payload.doc.data() as VardatoI;
            const id2 = a.payload.doc.id;
            //console.log('mira dato e id');
            //console.log(id2);
            //console.log(data2);
            return { id2, ...data2};
           
          })
          
        )
        
      );
  }
 

}
