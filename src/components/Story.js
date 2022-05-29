/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getStory } from '../services/api';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';

export const Story = props => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(props.storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid='story'>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className='story__by' data-testid='story-by'>
          <StoryMetaElement>By: </StoryMetaElement>
          {story.by}
        </span>
        <span className='story__time' data-testid='story-time'>
          <StoryMetaElement>Posted: </StoryMetaElement>
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
