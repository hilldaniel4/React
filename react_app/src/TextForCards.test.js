import { render, screen } from '@testing-library/react';
import TextForCards from './TextForCards';

test('TextforCard Loads', () => {
  render(<TextForCards />);
  const linkElement = screen.getByText(/Text from card/i);
  expect(linkElement).toBeInTheDocument();
});

test('TextforCard 2 Loads', () => {
  render(<TextForCards cardNum={2}/>);
  const linkElement = screen.getByText(/2/i);
  expect(linkElement).toBeInTheDocument();
});
test('TextforCard 2 Loads', () => {
  render(<TextForCards cardNum={5}/>);
  const linkElement = screen.getByText(/5/i);
  expect(linkElement).toBeInTheDocument();
});