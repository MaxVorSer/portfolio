import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MainPage } from '../MainPage';

test('MainPage snapshot', () => {
  const { asFragment } = render(<MainPage />);
  expect(asFragment()).toMatchSnapshot();
});