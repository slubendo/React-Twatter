import * as fakeDatabase from "@/fakeDatabase"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import IconInteractions from "./icon-interactions"


interface MediaProps {
    media: fakeDatabase.Media;
}

export default function Media({ media }: MediaProps) {

    if(media.type == "image") {
        return (
                    <div className="rounded-full overflow-hidden w-10 h-10">
                        <img className="" src={media.url} alt="" />
                    </div>
        )
    } else if(media.type == "video") {
        return (
                    <div className="">
                        <video className="" src={media.url} />
                    </div>
        )
    }

}