import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../article.model'; 

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  article: Article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params=>{
        // console.log(params['articleId']);
        this.getUser(params['articleId']);
      });
  }
  
  getUser(id:string):void {
      this.usersService.getArticle(id).subscribe(
        (response:any)=>{
          console.log(response);
          this.article = response.article;
        }
      );
  }
}


