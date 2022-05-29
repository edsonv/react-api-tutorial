import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/api';
import { Story } from '../components/Story';
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  // [] = when the component mounts, do this...
  // ex. [storyIdsUpdated (true/false)]

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <StoriesContainerWrapper>
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </div>
  );
};
