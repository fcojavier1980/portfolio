import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VardatoService } from '../vardato.service';
import { VardatoI } from '../../../shared/models/vardato.interface';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vardato',
  templateUrl: './vardato.component.html',
  styleUrls: ['./vardato.component.scss']
})
export class VardatoComponent implements OnInit {

	public vardatos$: Observable<VardatoI>;

	constructor(private route: ActivatedRoute, private vardatoSvc: VardatoService) { }

  ngOnInit(): void {
	  	const idVardato = this.route.snapshot.params.id;
  }



}
