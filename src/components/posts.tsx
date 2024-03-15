import * as fakeDatabase from "@/fakeDatabase"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import IconInteractions from "./icon-interactions"


const allPost = fakeDatabase.getPosts()

interface PostsProps {
  postArr: fakeDatabase.Post[];
}

export default function Posts({ postArr }: PostsProps) {

  const posts = postArr.map(post =>
    <div className='flex flex-wrap shadow rounded-md' key={post.id}>
      
      <Link href={`/user/${post.user.username}`}>
        <div className="rounded-full overflow-hidden w-10 h-10">
          <img className="object-cover object-center w-10 h-10" src={post.user.avatar} alt="" />
        </div>
      </Link>

      <div className="w-4/5">
        <div className='flex justify-between'>
          <Link href={`/user/${post.user.username}`}>
            <h6>{post.user.username}</h6>
          </Link>
          <p>{post.date}</p>
        </div>
        <Link href={`/post/${post.id}`}>
          <p>{post.content}</p>
        </Link >

        <IconInteractions></IconInteractions>
      </div>

      <div className='flex justify-start w-full '>
        <p>{post.likes}</p>
        <p>.</p>
        <p>{post.replies}</p>
      </div>
    </div>
  )

  return (
    <div>
      {posts}
    </div>
  )

}