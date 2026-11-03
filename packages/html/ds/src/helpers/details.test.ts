import { createDetails } from './details';

describe('createDetails', () => {
  it('gives each details content a unique id', () => {
    const first = createDetails({
      label: 'First',
      content: 'First content',
    });
    const second = createDetails({
      label: 'Second',
      content: 'Second content',
    });

    const firstContent = first.querySelector<HTMLElement>('.gi-details-text');
    const secondContent = second.querySelector<HTMLElement>('.gi-details-text');

    expect(firstContent).not.toBeNull();
    expect(secondContent).not.toBeNull();
    expect(firstContent?.id).not.toBe(secondContent?.id);
  });
});
