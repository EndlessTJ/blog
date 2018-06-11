import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-article',
  templateUrl: './template/article.component.html',
  styleUrls: ['./template/article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy{
  data: object;
  private sub: Subscription;
  constructor (
    private route: ActivatedRoute,
    private http: HttpService
  ) {}
  ngOnInit () {
    this.sub = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.http.post(`/getarticle/${id}`).subscribe((result) => {
        if (result.success) {
          this.data = result.data.article;
        }
      })
    });
  }

  ngOnDestroy () {
    this.sub.unsubscribe()
  }
}
