import { buildSchema } from "graphql";
const schema=buildSchema(`
type Course{
    id:ID
    courseName:String
    category:String
    price:Int
    language:String
    stack:Stack
    teachingAssists:[TeachingAssist]

}
type TeachingAssist{
    firstName:String
    lastName:String
    experience:Int

}
enum{
    mobile
    web
    other
}
type Query{
    getCourse(id:ID):Course
}
input CourseInput{
    id:ID
    courseName:String!
    category:String
    price:Int!
    language:String
    stack:Stack
    teachingAssists:[TeachingAssist]!

}
input TeachingAssistInput{

    firstName:String
    lastName:String
    experience:Int
}


type Mutation{
    createCourse(input:courseInput):Course
}



`)
export default schema;