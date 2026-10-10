import { fireEvent } from '@testing-library/react';
import { renderComponent } from '@/test-utilities.js';
import { Accordion } from './accordion.js';
import { AccordionItem } from './accordion-item.js';

const renderAccordion = () =>
  renderComponent(
    <Accordion>
      <AccordionItem label="First question">First answer</AccordionItem>
      <AccordionItem label="Second question">Second answer</AccordionItem>
      <AccordionItem disabled label="Third question">
        Third answer
      </AccordionItem>
    </Accordion>,
  );

const itemHeaders = (container: HTMLElement) => [
  ...container.querySelectorAll<HTMLElement>('[data-testid="accordion-item"]'),
];

const panels = (container: HTMLElement) => [...container.querySelectorAll<HTMLElement>('[role="region"]')];

describe('AccordionItem', () => {
  it('exposes each header as a button that reports its expanded state and controls its panel', () => {
    const { container } = renderAccordion();

    for (const header of itemHeaders(container)) {
      expect(header).toHaveAttribute('role', 'button');
      expect(header).toHaveAttribute('aria-expanded', 'false');

      const panelId = header.getAttribute('aria-controls');
      expect(panelId).toBeTruthy();
      expect(container.querySelectorAll(`[id="${panelId}"]`)).toHaveLength(1);
    }
  });

  it('labels each panel from the header that controls it, with unique ids', () => {
    const { container } = renderAccordion();
    const panelElements = panels(container);

    expect(panelElements).toHaveLength(3);
    expect(new Set(panelElements.map((panel) => panel.id)).size).toBe(panelElements.length);

    for (const panel of panelElements) {
      const labelledBy = panel.getAttribute('aria-labelledby');
      expect(labelledBy).toBeTruthy();
      expect(container.querySelectorAll(`[id="${labelledBy}"]`)).toHaveLength(1);
      expect(container.querySelector(`[id="${labelledBy}"]`)).toBe(panel.previousElementSibling);
    }
  });

  it('toggles the expanded state with Enter and Space', () => {
    const { container } = renderAccordion();
    const [header] = itemHeaders(container);

    fireEvent.keyDown(header, { key: 'Enter' });
    expect(header).toHaveAttribute('aria-expanded', 'true');

    fireEvent.keyDown(header, { key: 'Enter' });
    expect(header).toHaveAttribute('aria-expanded', 'false');

    fireEvent.keyDown(header, { key: ' ' });
    expect(header).toHaveAttribute('aria-expanded', 'true');
  });

  it('keeps a disabled item collapsed and announces it as disabled', () => {
    const { container } = renderAccordion();
    const [disabledHeader] = itemHeaders(container).slice(-1);

    expect(disabledHeader).toHaveAttribute('aria-disabled', 'true');

    disabledHeader.click();
    fireEvent.keyDown(disabledHeader, { key: 'Enter' });
    fireEvent.keyDown(disabledHeader, { key: ' ' });

    expect(disabledHeader).toHaveAttribute('aria-expanded', 'false');
  });

  it('has no axe violations', async () => {
    const { axe } = renderAccordion();

    await axe();
  });
});
