import Link from 'next/link';
import { Badge } from '../../components/ui/badge';
import { motion } from 'motion/react';
import Image from 'next/image';
import { WorkCardProps } from './WorkCard';

const SmallWorkCard: React.FC<{ work: WorkCardProps }> = ({ work }) => {
  return (
    <Link href={work.preview} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.04 }}
        className={`border bg-secondary rounded-lg flex flex-col items-center w-48 min-w-48 p-3 shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md`}
        style={{ minWidth: 0 }}
      >
        <div className="w-full h-24 relative flex items-center justify-center mb-2 bg-primary-foreground rounded-md border">
          {work.image && (
            <Image
              src={work.image}
              alt={work.title}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-md"
            />
          )}
        </div>
        <div className="flex flex-col items-center w-full gap-1">
          <div className="flex items-center gap-2 w-full justify-between">
            <h4 className="text-sm font-semibold w-32">{work.title}</h4>
          </div>
          <div className="flex flex-wrap gap-1 w-full justify-start mt-1">
            {work.technologies.map((tech, idx) => (
              <Badge key={idx} variant="default" className="text-xs px-2 py-0.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default SmallWorkCard; 