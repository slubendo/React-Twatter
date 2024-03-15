import Link from 'next/link'
import * as fakeDatabase from "@/fakeDatabase"
import Image from "next/image"
import Posts from '@/components/posts'
import Profile from '@/components/profile'

export default function Home({ params }: { params: { user: string } }) {

console.log(params)
    const user = fakeDatabase.getUser(params.user)
    const userPost = fakeDatabase.getPostsForUser(user?.username ?? "undefined")

    return (
        <div>
            <Profile username={user?.username ?? "undefined"}></Profile>
            <Posts postArr={userPost}></Posts>
        </div>
    )
}