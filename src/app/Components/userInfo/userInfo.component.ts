import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userInfo',
  templateUrl: './userInfo.component.html',
  styleUrls: ['./userInfo.component.css']
})
export class UserInfoComponent implements OnInit {
  id: number = 0;
  userInfo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const idParam: string | null = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = parseInt(idParam, 10); // Parse idParam to a number
      this.fetchUserInfo();
    } else {
      console.error('No id parameter found in the route.');
    }
  }

  fetchUserInfo() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + this.id)
      .subscribe(
        userInfo => {
          this.userInfo = userInfo;
        },
        error => {
          console.error('Error fetching user details:', error);
        }
      );
  }
}
