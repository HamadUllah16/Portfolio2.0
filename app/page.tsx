'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { setAllWork } from './redux/features/work';
import Image from 'next/image';

type WorkItem = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
};

export default function Home() {
  const { allWork } = useSelector((state: RootState) => state.work)
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  // Fetch all work items from the API
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

  // Fetch data on component mount
  useEffect(() => {
    getAllWork()
      .then((data) => {
        if (data) dispatch(setAllWork(data));
      })
      .catch((err) => console.error(err));
  }, [allWork.length]);

  return (
    <div className='px-14'>
      {error && <p className="text-red-500">{error}</p>}
      {allWork.length > 0 ? (
        allWork.map((work: any) => (
          <div key={work.id} className="mb-4">
            {/* <img src={work.imageUrl} alt={work.title} /> */}

            {/* Texts */}
            <div className="flex flex-col gap-2">
              <div className='bg-red-400 w-fit rounded-3xl overflow-hidden'>
                <Image
                  src={work.image ?? ''}
                  alt='a screenshot of application'
                  width={300}
                  height={300}
                />
              </div>
              <h3 className="font-bold text-lg">{work.title}</h3>
              <p>{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech: any, index: number) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No work items found</p>
      )}
    </div>
  );
}
