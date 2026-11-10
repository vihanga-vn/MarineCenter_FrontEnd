import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '../locales/i18n';

describe('App Starter Smoke Test', () => {
  it('renders the brand heading correctly', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/MARINE SERVICE CENTER/i);
  });
});
