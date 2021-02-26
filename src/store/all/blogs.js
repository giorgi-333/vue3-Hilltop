import { reqvest } from "../client"

export default {
   state: {
      blogs: {
         results: []
      },
      blog: {}, //one blog
      is_next_blog: true, // is next blog?
      count_blogs_load: 1,
   },
   mutations: {
      setBlogs(state, blogs) {
         state.blogs = blogs
      },
      appandBlogs(state, blogs) {
         state.blogs.next = blogs.next
         state.blogs.results = state.blogs.results.concat(blogs.results)
      },
      setBlog(state, blog) { //one blog
         state.blog = blog
      },
      clearBlogs(state) { // clear blogs data
         state.blogs.results = [];
      },
      set_blogs_count(state, n) { // set number of blogs load..
         state.count_blogs_load = n;
      }

   },
   actions: {
      fetchBlogs({ state, commit }) {
         if (state.blogs.results.length == 0) {
            reqvest.get('blog/')
               .then(function (response) {
                  commit("setBlogs", response.data)
                  if (response.data.next === null) {
                     //check next if is next blog
                     state.is_next_blog = false
                  }
               })
         }
         else {
            if (state.blogs.next != null) {
               reqvest.get(state.blogs.next)
                  .then(function (response) {
                     commit("appandBlogs", response.data)
                     if (response.data.next === null) {
                        //check next if is next blog
                        state.is_next_blog = false
                     }
                  })
            }
         }

      },
      fetchBlog({ commit }, slug) { //one blog
         reqvest.get(`blog/${slug}`)
            .then(function (response) {
               commit("setBlog", response.data)
            })
      },
   },
   getters: {
      getBlogs(state) {
         return state.blogs
      },
      getBlog(state) { //one blog
         return state.blog
      },
      show_load_more(state) { //return if is next blog
         return state.is_next_blog
      },
      count_blogs_load(state) {
         return state.count_blogs_load
      }
   }

}
