import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userInfo',
  templateUrl: './userInfo.component.html',
  styleUrls: ['./userInfo.component.css'],
})
export class UserInfoComponent implements OnInit {
  id: number = 0;
  userInfo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = parseInt(id, 10);
      this.getUserInfo();
    } else {
      console.error('Something Went Wrong.');
    }
  }

  getUserInfo() {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users/' + this.id)
      .subscribe(
        (userInfo) => {
          this.userInfo = userInfo;
        },
        (error) => {
          console.error('Error getting user information:', error);
        }
      );
  }
}
