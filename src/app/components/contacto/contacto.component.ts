import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VardatoService } from './../vardatos/vardato.service';
import { Observable } from 'rxjs';
import { VardatoI } from '../../shared/models/vardato.interface';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  	public vardatos$: Observable<VardatoI[]>;
  	constructor(private vardatoSvc: VardatoService) { }

  	ngOnInit(): void {
      this.vardatos$ = this.vardatoSvc.getAllVardatos();

  	}

}
