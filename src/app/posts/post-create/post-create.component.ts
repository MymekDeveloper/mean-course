import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create', // This is the HTML tag that will be used to render the component)
  templateUrl: './post-create.component.html', // This is the HTML file that will be used to render the component)
  styleUrls: ['./post-create.component.css'], // This is the CSS file that will be used to style the component)
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
