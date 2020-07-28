import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { PostI } from '../../../shared/models/post.interface';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	public posts$: Observable<PostI>;

	constructor(private route: ActivatedRoute, private postSvc: PostService) { }

  ngOnInit(): void {
	  	const idPost = this.route.snapshot.params.id;
	  	this.posts$ = this.postSvc.getOnePost(idPost);  
  }

  	goToExternalLink(url){
    	window.open(url);
	}

}
