import { render } from '@testing-library/react';
import { Details } from './details.js';

describe('Details', () => {
  it('gives each details content a unique id', () => {
    const { container } = render(
      <>
        <Details label="First">First content</Details>
        <Details label="Second">Second content</Details>
      </>,
    );

    const summaries = [...container.querySelectorAll('summary')];
    const contents = [...container.querySelectorAll('details > div')];

    expect(contents).toHaveLength(2);
    expect(contents[0].id).not.toBe(contents[1].id);

    for (const [index, summary] of summaries.entries()) {
      expect(summary).toHaveAttribute('aria-controls', contents[index].id);
    }
  });
});
