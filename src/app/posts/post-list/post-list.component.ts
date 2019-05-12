import { Component, OnInit, OnDestroy } from "@angular/core";
import {Subscription} from 'rxjs'
import { Post } from '../post.model'
import { PostService } from "../posts.service";
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [{
  //   title: 'First Post', Content: 'This is the first post content'},
  //   {title: 'Second Post', Content: 'This is the second post content'},
  //   {title: 'Third Post', Content: 'This is the third post content'}
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;

 constructor(public postsService: PostService){ }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}


