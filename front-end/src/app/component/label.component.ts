import { Component, OnInit } from '@angular/core';
const tags = ['CentOS', 'Debian', 'CentOS', 'Shadowrocket', 'Ububtu', 'bbr', 'ss', 'ssr', 'ss客户端', 'surge', 'vps', 'vultr', 'vultr教程'];
const tags_list = [
  {
    tag: 'CentOS',
    post_title: [
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
    ]
  },
  {
    tag: 'Debian',
    post_title: [
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
    ]
  },
  {
    tag: 'Shadowrocket',
    post_title: [
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
    ]
  },
  {
    tag: 'Ububtu',
    post_title: [
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
      'Vultr VPS主机快速安装SSR完整图文教程',
    ]
  },
];
@Component({
  selector: 'app-label',
  templateUrl: './template/label.component.html',
  styleUrls: ['./template/label.component.css']
})
export class LabelComponent implements OnInit{
  tags_count:number;
  tags: Array<string>;
  tags_list: Array<object>;
  ngOnInit () {
    this.tags_count = this.tags.length;
    this.tags = tags;
    this.tags_list = tags_list
  }
}
