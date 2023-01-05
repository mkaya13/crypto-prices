import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import Crypto from '../components/Cryptos/Crypto';

import { store } from '../redux/configureStore';

it('renders Details correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}><Crypto /></Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
