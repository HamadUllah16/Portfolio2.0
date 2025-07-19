'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { setAllWork } from './redux/features/work';
import { motion } from "motion/react"
import WorkCard, { WorkCardProps } from './components/WorkCard';
import SmallWorkCard from './components/SmallWorkCard';

const rubyLogo = "/logoWithName.png"

const workProject: WorkCardProps = {
  image: rubyLogo,
  // github: 'https://github.com',
  preview: 'https://www.heyruby.ai/',
  title: 'Ruby - Your Sales Wingman',
  description: 'Ruby automates account research, giving you company insights, news, and sales angles. So you\'re always pitch-ready in minutes, not hours.',
  technologies: [
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
  ],
  status: "V2",
  id: "1",
}

export default function Home() {
  const { allWork } = useSelector((state: RootState) => state.work)
  const [error, setError] = useState<string | null>(null);

  const colors = ['bg-gradient-to-r from-fuchsia-500 to-cyan-500', 'bg-gradient-to-r from-red-500 to-orange-500', 'bg-gradient-to-r from-fuchsia-500 to-pink-500', 'bg-green-700', 'bg-indigo-600']

  const dispatch = useDispatch<AppDispatch>();

  const getAllWork = async () => {
    try {
      const response = await fetch('/api/work', { method: 'GET' });

      if (response.ok) {
        const data = await response.json();
        return data.allWork;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error: any) {
      console.error('Error fetching data:', error);
      setError(error.message || 'Something went wrong');
    }
  };


  useEffect(() => {
    if (allWork.length === 0) {
      getAllWork()
        .then((data) => {
          if (data) dispatch(setAllWork(data));
        })
        .catch((err) => console.log(err));
    }
  }, [allWork.length]);

  return (
    <>

      <motion.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='text-2xl font-bold'>
        What I&apos;m Working On
      </motion.h3>
      <motion.div
        className="
        overflow-auto
        p-5
      md:overflow-auto
      sm:py-1 sm:h-full
      max-sm:rounded-2xl max-sm:py-3 sm:rounded-2xl
      flex flex-col py-5 rounded-md space-y-3 h-full relative"
        variants={{
          hidden: { opacity: 0, left: -40 },
          show: {
            opacity: 1,
            left: 0,
            transition: {
              staggerChildren: 0.25,
            }
          }
        }}
        initial="hidden"
        animate='show'
      >
        {error && <p className="text-red-500">{error}</p>}
        <WorkCard work={workProject} bgColor={colors[0]} />
        <div className="h-8" />
        <h4 className="text-xl font-semibold mb-2 mt-2">Other Projects</h4>
        <div className="flex flex-wrap gap-4 pb-2">
          {allWork
            .filter((proj: WorkCardProps) => proj.id !== workProject.id)
            .reverse()
            .map((proj: WorkCardProps) => (
              <SmallWorkCard key={proj.id} work={proj} />
            ))}
        </div>
        {/* {allWork.length > 0 ? (
          [...allWork].sort((a: any, b: any) => b.id - a.id).map((work: any, index) => (
            <WorkCard
              key={work.id}
              work={work}
              bgColor={colors[index]}
            />
          ))
        ) :
          [1, 2, 3, 4, 5].map((each) => {
            return (
              <LoadingWorkCard key={each} />
            )
          })
        } */}
      </ motion.div>
    </>
  );
}
