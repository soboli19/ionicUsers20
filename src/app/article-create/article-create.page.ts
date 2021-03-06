import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.page.html',
  styleUrls: ['./article-create.page.scss'],
})
export class ArticleCreatePage implements OnInit {

  article = new Article();
  errors: any = [];
  errorMessage: string;

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit(): void {}
  response(response): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      this.router.navigate(['/articles']);
    }
  }
  onSubmit(): void {
    this.articlesService.createArticle(this.article).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }
}

