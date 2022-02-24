const db=require("./db");

 const  resolvers ={
    Query: {
        post: async (root, {_id}) => {
          return prepare(await Posts.findOne(ObjectId(_id)))
        },
        posts: async () => {
          return (await Posts.find({}).toArray()).map(prepare)
        },
        comment: async (root, {_id}) => {
          return prepare(await Comments.findOne(ObjectId(_id)))
        },
      },

      Mutation: {
        createPost: async (root, args, context, info) => {
            console.log(info);
            const post={
                title:args.title,
                content:args.content,
                comment:[]
            }
            console.log(db.postModel);
                    const postC=await db.postModel.create(post);
                    console.log(postC);
          return postC
        },
        createComment: async (root, args) => {
          const res = await Comments.insert(args)
          return prepare(await Comments.findOne({_id: res.insertedIds[1]}))
        },
      },


  }
  const prepare = (o) => {
    o._id = o._id.toString()
    return o
  }
  module.exports=resolvers;