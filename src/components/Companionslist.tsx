import { cn, getSubjectColor, } from '@/lib/utils';
import Link from 'next/link';


import {

  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { recentSessions } from '@/constants';
import Image from 'next/image';
import { subjects } from './../constants/index';


interface CompanionslistProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const Companionslist = ({ title, companions = recentSessions, classNames }: CompanionslistProps) => {
  console.log('Companions in list:', companions); // Debug log


  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className='font-bold text-3xl mb-4'>{title}</h2>

      {companions?.length === 0 ? (
        <p className="text-gray-500">No lessons found.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg w-1/2">Lesson</TableHead>
              <TableHead className="text-lg w-1/4">Subject</TableHead>
              <TableHead className="text-lg text-right w-1/4">Duration</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {companions?.map(({ id, subject, name, topic, duration }) => (
              <TableRow key={id}>
                <TableCell>
                  <Link href={`/companions/${id}`}>
                    <div className='flex items-center gap-2 '>
                      <div className='size-[72px] flex items-center 
                      justify-center rounded-lg max-md:hidden ' style={{
                          backgroundColor: getSubjectColor(subject)
                        }} >
                        <Image src={`/icons/${subject}.svg`}
                          alt="Subject"
                          width={35}
                          height={35} />
                      </div>
                      <div className='flex flex-col gap-2 '>
                        <p className='font-bold text-2xl '>
                          {name}
                        </p>
                        <p className='text-lg'>
                          {topic}
                        </p>
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <div className='subject-badge w-fit max-md:hidden '>
                    {subject}
                  </div>
                  <div className='flex items-center justify-center rounded-lg
                    w-fit p-2 md:hidden' style={{
                      backgroundColor: getSubjectColor(subject)
                    }} >
                    <Image src={`/icons/${subject}.svg`} alt={subject}
                      width={18} height={18} />
                  </div>

                </TableCell>

                <TableCell>
                  <div className='flex items-center gap-2 w-full justify-end' >
                    <p className=' text-2xls '>
                      {duration} {' '}
                      <span className='max-md:hidden'>mins</span>
                    </p>
                  </div>
                  <Image src='/icons/clock.svg' alt='clock' width={14} height={14} className='md:hidden' />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </article>
  );
};

export default Companionslist;
