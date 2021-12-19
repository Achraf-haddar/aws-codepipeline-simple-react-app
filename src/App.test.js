import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  //const pElement = screen.getByTestId('Phrase', {exact: false});
  //expect(pElement).toBeInTheDocument();
});
