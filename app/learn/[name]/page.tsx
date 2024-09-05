"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import topics from "../topics/page"
import { useSearchParams } from "next/navigation"


function Topics() {
    const router = useRouter()
    const name = router.query
    const topic = topics.map(topic => topic.id === name)
    return (
        <><h1>{topic.id}</h1>
            <p>{topic.about}</p></>
    )
}

export default Topics