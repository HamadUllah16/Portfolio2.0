'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { setAllWork } from './redux/features/work';
import { motion } from "motion/react"
import WorkCard from './components/WorkCard';

export default function Home() {
  const { allWork } = useSelector((state: RootState) => state.work)
  const [error, setError] = useState<string | null>(null);
  const colors = ['bg-gradient-to-r from-fuchsia-500 to-cyan-500', 'bg-gradient-to-r from-red-500 to-orange-500', 'bg-gradient-to-r from-fuchsia-500 to-pink-500', 'bg-green-700', 'bg-indigo-600']

  const dispatch = useDispatch<AppDispatch>();

  // Fetching all work items from the API
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
      className='py-5 md:px-14 sm:px-5 max-sm:px-5 flex gap-5 flex-wrap h-full'
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
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
        allWork.map((work: any, index) => (
          <WorkCard
            key={work.id}
            work={work}
            bgColor={colors[index]}
          />
        ))
      ) : (
        <p>No work items found</p>
      )}
    </motion.div>
  );
}
