 const  typeDefs = [`
type Post {
    _id: String
    title: String
    content: String
    comments: [Comment]
  }
  type Comment {
    _id: String
    postId: String
    content: String
    post: Post
  }


  type Query {
    post(_id: String): Post
    posts: [Post]
    comment(_id: String): Comment
  }
  type Mutation {
    createPost(title: String, content: String): Post
    createComment(postId: String, content: String): Comment
  }
  schema {
    query: Query
    mutation: Mutation
  }
  
`]
module.exports=typeDefs