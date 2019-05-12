import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  // posts = [{
  //   title: 'First Post', Content: 'This is the first post content'},
  //   {title: 'Second Post', Content: 'This is the second post content'},
  //   {title: 'Third Post', Content: 'This is the third post content'}
  // ];
 @Input() posts = [];
}
