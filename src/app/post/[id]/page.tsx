import Link from 'next/link'
import Post from '@/components/post'
import Posts from '@/components/posts'
import * as fakeDatabase from '@/fakeDatabase'

export default function Home({params }: {params: {id: number}}) {
// any ts valid here
console.log(params)
const allReplies = fakeDatabase.getPostResponses(Number(params.id))

return (
<div>

  <Post id={Number(params.id)}></Post>
  <Posts postArr={allReplies}></Posts>

</div>
    )
  }