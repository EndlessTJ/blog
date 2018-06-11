import {Component, OnInit} from "@angular/core";
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-index',
  templateUrl: './template/index.component.html',
  styleUrls: ['./template/index.component.css']
})

export class IndexComponent implements OnInit {
  posts: Array<object>;
  constructor (
    private http: HttpService
  ) {}
  ngOnInit () {
    this.http.post('/getPost').subscribe((result) => {
      if (result.success) {
        this.posts = result.data.post
      }
    });
  }
}
