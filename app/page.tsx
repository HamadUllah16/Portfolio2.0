'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { setAllWork } from './redux/features/work';
import { motion } from "motion/react"
import WorkCard from './components/WorkCard';
import LoadingWorkCard from './components/LoadingWorkCard';

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
    <motion.div
      className="
      md:overflow-y-scroll
      sm:py-1 max-sm:py-3
      max-sm:rounded-2xl sm:rounded-2xl
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
      {allWork.length > 0 ? (
        [...allWork].sort((a: any, b: any) => a.id - b.id).map((work: any, index) => (
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
      }
    </ motion.div>
  );
}
