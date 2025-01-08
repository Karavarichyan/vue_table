import { defineStore } from 'pinia';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: JSON.parse(localStorage.getItem('posts')) || [],
  }),
  actions: {
    addPost(post) {
      post.id = Date.now();
      this.posts.push(post);
      this.savePosts();
    },
    removePost(postId) {
      this.posts = this.posts.filter(post => post.id !== postId);
      this.savePosts();
    },
    updatePost(updatedPost) {
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = updatedPost;
        this.savePosts();
      }
    },
    savePosts() {
      localStorage.setItem('posts', JSON.stringify(this.posts));
    },
  },
});
