import {Component, OnInit} from "@angular/core";
import { HttpService } from '../service/http.service';

const post = [
  {
    title: '最新Vultr注册及VPS购买图文教程',
    date: '2017-09-28',
    brief: '前言：今天给大家介绍一下如何购买Vultr的VPS，网上也有教程不过都有点太早了，而且不够全面。以下我将详细介绍如何注册Vultr、建立VPS。 Vultr是一家有名的云服务提供商，在全球共有15个自营数据中心机房，Vultr VPS全部采用KVM架构SSD固态硬盘，不超售，保证性能，支持linux ...'
  },
  {
    title: '最新Vultr注册及VPS购买图文教程',
    date: '2017-09-28',
    brief: '前言：今天给大家介绍一下如何购买Vultr的VPS，网上也有教程不过都有点太早了，而且不够全面。以下我将详细介绍如何注册Vultr、建立VPS。 Vultr是一家有名的云服务提供商，在全球共有15个自营数据中心机房，Vultr VPS全部采用KVM架构SSD固态硬盘，不超售，保证性能，支持linux ...'
  },
  {
    title: '最新Vultr注册及VPS购买图文教程',
    date: '2017-09-28',
    brief: '前言：今天给大家介绍一下如何购买Vultr的VPS，网上也有教程不过都有点太早了，而且不够全面。以下我将详细介绍如何注册Vultr、建立VPS。 Vultr是一家有名的云服务提供商，在全球共有15个自营数据中心机房，Vultr VPS全部采用KVM架构SSD固态硬盘，不超售，保证性能，支持linux ...'
  }


];
@Component({
  selector: 'app-index',
  templateUrl: './template/index.component.html',
  styleUrls: ['./template/index.component.css']
})

export class IndexComponent implements OnInit {
  posts: object;
  ngOnInit () {
    this.posts = post
    console.log(this.posts)
  }
}
