import { createTabs } from './tabs';

describe('createTabs', () => {
  it('labels each tab panel with its tab', () => {
    const container = createTabs({
      id: 'tabs-example',
      ariaLabelledBy: 'tabs-heading',
      items: [
        {
          id: 'tab1',
          label: 'Tab 1',
          checked: true,
          panel: { content: 'Panel 1' },
        },
        {
          id: 'tab2',
          label: 'Tab 2',
          panel: { content: 'Panel 2' },
        },
      ],
    });

    const tab = container.querySelector('[role="tab"]');
    const panel = container.querySelector('[role="tabpanel"]');

    expect(tab).not.toBeNull();
    expect(panel).not.toBeNull();
    expect(panel).toHaveAttribute('aria-labelledby', tab?.id);
    expect(panel?.id).not.toBe(tab?.id);
  });
});
