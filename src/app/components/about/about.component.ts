import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VardatoService } from './../vardatos/vardato.service';
import { Observable } from 'rxjs';
import { VardatoI } from '../../shared/models/vardato.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  	public vardatos$: Observable<VardatoI[]>;
  	constructor(private vardatoSvc: VardatoService) { }

  	ngOnInit(): void {
      this.vardatos$ = this.vardatoSvc.getAllVardatos();

  	}

}
