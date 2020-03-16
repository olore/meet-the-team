import React from 'react';
import {render, cleanup} from '@testing-library/react';
import ImageButton from './ImageButton';

afterEach(cleanup);

describe('ImageButton component', () => {

  it('should use the alt text that is passed in', () => {
    const { getByAltText } = render(<ImageButton alt="my alt"/>);
    expect(getByAltText('my alt')).toBeInTheDocument();
  });

  describe('wrong answer scenario', () => {
    it('should use the alt text of the \'wrong\' image', () => {
      const { getByAltText } = render(<ImageButton wrongAnswer="true"/>);
      expect(getByAltText('wrong meme')).toBeInTheDocument();
    });
  });

});