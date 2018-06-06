import { Component, OnInit } from '@angular/core';
const archive = [
  {
    year: '2017',
    dataYear: [
      {
        month:'12月',
        dataMonth:[
          {
            date: '12-11',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-12',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-13',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
        ]
      },
      {
        month:'11月',
        dataMonth:[
          {
            date: '12-11',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-12',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-13',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
        ]
      },
      {
        month:'9月',
        dataMonth:[
          {
            date: '12-11',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-12',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-13',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
        ]
      },
    ]
  },
  {
    year: '2017',
    dataYear: [
      {
        month:'12月',
        dataMonth:[
          {
            date: '12-11',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-12',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-13',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
        ]
      },
      {
        month:'11月',
        dataMonth:[
          {
            date: '12-11',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-12',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-13',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
        ]
      },
      {
        month:'9月',
        dataMonth:[
          {
            date: '12-11',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-12',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
          {
            date: '12-13',
            title:'Debian/Ububtu一键安装最新BBR加速图文教程'
          },
        ]
      },
    ]
  },
];
@Component({
  selector: 'app-archive',
  templateUrl: './template/archive.component.html',
  styleUrls: ['./template/archive.component.css']
})
export class ArchiveComponent implements OnInit {
  post_count: number;
  archive: Array<object>;
  ngOnInit () {
    this.post_count = 100;
    this.archive = archive
  }
}
