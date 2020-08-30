import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from './../posts/post.service';
import { Observable } from 'rxjs';
import { PostI } from '../../shared/models/post.interface';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts$: Observable<PostI[]>;
    constructor(private postSvc: PostService) { }

    ngOnInit(): void {
      this.posts$ = this.postSvc.getAllPosts();
    }

    buttonManagement(elem){
      
      $( ".btn" ).each(function() {
        $(this).removeClass('btn-primary');
        $(this).addClass('btn-secondary');
    });
      var elemento = elem.srcElement;
      console.log(elemento);
      $(elemento).removeClass('btn-secondary');
      $(elemento).addClass('btn-primary');
      if(elemento.id == 'php-webs'){
        $('.angular').css('opacity', '0.2');
        $('.api_rest').css('opacity', '0.2');
        $('.php').css('opacity', '1');
      }
      if(elemento.id == 'angular-webs'){
        $('.php').css('opacity', '0.2');
        $('.api_rest').css('opacity', '0.2');
        $('.angular').css('opacity', '1');
      }  
        if(elemento.id == 'api-rest'){
        $('.php').css('opacity', '0.2');
        $('.angular').css('opacity', '0.2');        
        $('.api_rest').css('opacity', '1');
      }      
      if(elemento.id == 'all-webs'){
        $('.php').css('opacity', '1');
        $('.angular').css('opacity', '1');
        $('.api_rest').css('opacity', '1');
      }            
    }

    webManagementHover(elem){
    var elemento = elem.srcElement;
      $(elemento).hover(function() {
        $(this).css('opacity', '0');


      }, function() {
        // on mouseout, reset the background colour
       // $('.overlay-menu').css('background-color', '');
        $(this).css('opacity', '1');
     
      });                    

       
    }

    webManagementOut(){
      $( '.web-box > img' ).animate({
        zIndex: "1",
      }, 200, function() {
      // Animation complete. 
      });      
    }
}
