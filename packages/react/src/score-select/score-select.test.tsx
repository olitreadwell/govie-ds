import { fireEvent, renderComponent } from '@/test-utilities';
import { ScoreSelect } from './score-select.js';

describe('ScoreSelect', () => {
  it('marks the selected score as checked for assistive technology', () => {
    const { getByRole } = renderComponent(<ScoreSelect name="score" label="How satisfied are you?" type="1-5" />);

    const one = getByRole('radio', { name: '1' });
    const three = getByRole('radio', { name: '3' });

    expect(one).toHaveAttribute('aria-checked', 'false');
    expect(three).toHaveAttribute('aria-checked', 'false');

    fireEvent.click(three);

    expect(three).toHaveAttribute('aria-checked', 'true');
    expect(one).toHaveAttribute('aria-checked', 'false');
  });

  it('marks the default value as checked on first render', () => {
    const { getByRole } = renderComponent(
      <ScoreSelect name="score" label="How satisfied are you?" type="1-5" value="3" />,
    );

    expect(getByRole('radio', { name: '3' })).toHaveAttribute('aria-checked', 'true');
    expect(getByRole('radio', { name: '1' })).toHaveAttribute('aria-checked', 'false');
  });
});
