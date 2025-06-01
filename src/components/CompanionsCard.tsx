import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"


interface CompanionsCardProps {
 id: string,
 name: string,
 topic: string,
 subject: string,
 duration: number,
 color: string
}

const CompanionsCard = ({ id, name, topic, subject, duration, color }:
 CompanionsCardProps
) => {
 return (
  <article className="companion-card" style={{
   backgroundColor: color
  }}>
   <div className="flex justify-between items-center">
    <div className="subject-badge">
     {subject}
    </div>
    <button className="companion-bookmark">
     <Image src="/icons/bookmark.svg" alt="book" width={12.5} height={15} />
    </button>
   </div>
   <h2 className="text-2xl font-bold">
    {name}
   </h2>
   <p className="text-sm"> {topic} </p>
   <div className="flex items-center gap-2 ">
    <Image src='/icons/clock.svg' alt="clock"
     width={14.5} height={15} />
    <p>{duration} mins durations </p>
   </div>
   <Link href={`/companions/${id}`} className="w-full " >
     <Button className="w-full rounded-xl justify-center">
          <p>Launch Lesson</p>
     </Button>
   </Link>
  </article>
 )
}

export default CompanionsCard