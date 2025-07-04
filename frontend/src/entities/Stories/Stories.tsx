import { FC, MouseEvent, useEffect, useState } from 'react';
import styles from './Stories.module.scss';

import { motion } from 'motion/react';
import Backdrop from '@mui/material/Backdrop';
import LinearProgress from '@mui/material/LinearProgress';
import { Button } from '@/shared/ui';
import { IconChevronLeft, IconChevronRight, IconX } from '@/shared/assets/icons';
import { Story } from '@/entities/Stories/Story';
import { StoryProps } from './types';

const STORY_TIMER = 1000;
const DEFAULT_PROGRESS = {
  value: 0,
  isDone: false,
};

type StoriesProps = {
  items: StoryProps[];
};

let timer: NodeJS.Timeout;

export const Stories: FC<StoriesProps> = ({ items }) => {
  const [open, setOpen] = useState(true);
  const [activeStory, setActiveStory] = useState(0);
  const [progress, setProgress] = useState<Record<number, { isDone: boolean; value: number }>>(() =>
    items.reduce((acc, _, index) => {
      return {
        ...acc,
        [index]: DEFAULT_PROGRESS,
      };
    }, {})
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleCloseStories = (e: MouseEvent<HTMLButtonElement>) => {
    handleClick(e);
    setOpen(false);
    setProgress(
      items.reduce((acc, _, index) => {
        return {
          ...acc,
          [index]: DEFAULT_PROGRESS,
        };
      }, {})
    );
    setActiveStory(0);
  };

  const handlePrevStory = (e: MouseEvent<HTMLButtonElement>) => {
    handleClick(e);
    setActiveStory((prevState) => (prevState === 0 ? prevState : prevState - 1));

    setProgress((prevState) => ({
      ...prevState,
      [activeStory]: { value: 0, isDone: false },
      [activeStory - 1]: { value: 0, isDone: false },
    }));
  };

  const handleNextStory = (e: MouseEvent<HTMLButtonElement>) => {
    handleClick(e);
    setActiveStory((prevState) => (prevState === items.length - 1 ? prevState : prevState + 1));
    setProgress((prevState) => ({
      ...prevState,
      [activeStory]: { value: 100, isDone: true },
      [activeStory + 1]: { value: 0, isDone: false },
    }));
  };

  useEffect(() => {
    timer = setInterval(() => {
      setProgress((prevState) => {
        const activeStoryState = prevState[activeStory];

        return {
          ...prevState,
          [activeStory]: {
            value: activeStoryState.value === 100 ? 100 : activeStoryState.value + 10,
            isDone: activeStoryState.value === 100,
          },
        };
      });
    }, STORY_TIMER);

    return () => {
      clearInterval(timer);
    };
  }, [activeStory]);

  useEffect(() => {
    if (progress[activeStory].isDone) {
      setActiveStory((prevState) => (prevState === items.length - 1 ? prevState : prevState + 1));
    }

    if (activeStory === items.length - 1 && progress[activeStory].isDone) {
      setOpen(false);
      setProgress(
        items.reduce((acc, _, index) => {
          return {
            ...acc,
            [index]: DEFAULT_PROGRESS,
          };
        }, {})
      );
      setActiveStory(0);
    }
  }, [progress[activeStory].isDone]);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Stories</Button>
      <Backdrop open={open} onClick={handleCloseStories}>
        <div className={styles.wrapper}>
          <Button
            onClick={handleCloseStories}
            className={`${styles.button} ${styles.button__close}`}
            icon={<IconX />}
          />
          <Button
            onClick={handlePrevStory}
            className={`${styles.button} ${styles.button__left}`}
            icon={<IconChevronLeft />}
          />
          <Button
            onClick={handleNextStory}
            className={`${styles.button} ${styles.button__right}`}
            icon={<IconChevronRight />}
          />
          <div className={styles.progress}>
            {items.map((_, i) => (
              <LinearProgress
                classes={{ root: styles.progress_root, bar1: styles.progress_bar1 }}
                value={progress[i].value}
                variant="determinate"
              />
            ))}
          </div>
          <motion.div
            key={activeStory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ margin: '0 auto', width: '100%' }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Story
              backgroundColor={items[activeStory].backgroundColor}
              description={items[activeStory].description}
              img={items[activeStory].img}
              title={items[activeStory].title}
            />
          </motion.div>
        </div>
      </Backdrop>
    </div>
  );
};
