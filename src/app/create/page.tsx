import Link from 'next/link'
import * as fakeDatabase from "@/fakeDatabase"
import Image from "next/image"
import Create from '@/components/create'

export default function Home({ params }: { params: { username: string } }) {
    // any ts valid here
    console.log(params)
    return (
        <div>
           <Create></Create>
        </div>
    )
}