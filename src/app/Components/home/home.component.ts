import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.data = data;
        this.loading = false;
      });
  }
}
