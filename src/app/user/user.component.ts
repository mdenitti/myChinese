import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 users = [
  { id:1, name: "Li Wei", age: 25 },
  { id:2, name: "Wang Fang", age: 34 },
  { id:3, name: "Zhang Ming", age: 29 },
  { id:4, name: "Chen Jie", age: 42 },
  { id:5, name: "Liu Hui", age: 22 },
  { id:6, name: "Zhao Lei", age: 31 },
  { id:7, name: "Sun Yan", age: 27 },
  { id:8, name: "Deng Xia", age: 38 },
  { id:9, name: "Gao Rong", age: 19 },
  { id:10, name: "Yu Jun", age: 45 }
];
}
