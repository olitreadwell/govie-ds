import { render, screen } from '@testing-library/react';
import { TabItem } from './tab-item.js';
import { TabList } from './tab-list.js';
import { TabPanel } from './tab-panel.js';
import { Tabs } from './tabs.js';

describe('Tabs', () => {
  it('labels each tab panel with its tab', () => {
    render(
      <Tabs id="tabs-example" ariaLabelledBy="tabs-heading">
        <TabList tabName="tabs-example">
          <TabItem value="tab1" checked>
            Tab 1
          </TabItem>
          <TabItem value="tab2">Tab 2</TabItem>
        </TabList>
        <TabPanel value="tab1">Panel 1</TabPanel>
        <TabPanel value="tab2">Panel 2</TabPanel>
      </Tabs>,
    );

    const tab = screen.getByRole('tab', { name: 'Tab 1' });
    const panel = screen.getByRole('tabpanel', { name: 'Tab 1' });

    expect(panel).toHaveAttribute('aria-labelledby', tab.id);
    expect(panel.id).not.toBe(tab.id);
  });
});
