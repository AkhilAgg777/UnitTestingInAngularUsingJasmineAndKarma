import { UserService } from './../user.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
}) 
export class UserListComponent implements OnInit {
  users:any[]=[];
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.refreshUsers();
  }
  refreshUsers():void{
    this.userService.getUsers().subscribe(users=>this.users=users);
  }

}
