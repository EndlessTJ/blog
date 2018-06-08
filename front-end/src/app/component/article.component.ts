import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { HttpService } from '../service/http.service';

const data = {
  title: 'Vultr VPS主机快速安装Shadowsocks（ss）完整图文教程',
  publisthData: '2017-09-29',
  tags: ['vultr', 'vps', 'vultr教程'],
  content: '没有注册和购买vultr vps服务器，请看最新Vultr注册及VPS购买图文教程\n' +
  '\n' +
  '购买后没有搭建ss客户端的请看Vultr-VPS主机快速安装Shadowsocks（ss）完整图文教程\n' +
  '\n' +
  '购买后没有搭建ssr客户端的请看Vultr快速安装SSR完整图文教程',
  prevArticle: '没有注册和购买vultr ',
  nextArticle: 'vps服务器',
  prevLink: '',
  nextLink: ''
};
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
      console.log(id)
      this.http.post(`/getarticle/${id}`).subscribe((result) => {
        console.log(result)
      })
    });
    this.data = data
  }

  ngOnDestroy () {
    this.sub.unsubscribe()
  }
}
