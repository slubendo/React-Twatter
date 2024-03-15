import Posts from "@/components/posts"
import * as fakeDatabase from '@/fakeDatabase' 

const allPost = fakeDatabase.getPosts()

export default function Home() {
  return (
<Posts postArr={allPost}></Posts>
  )
}
