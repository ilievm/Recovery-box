/**
 * @jest-environment jsdom
 */

import React from 'react'
// import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import '@testing-library/jest-dom'
import { Provider } from "react-redux"
import store from '../redux/store'



import SuggestionItem from '../components/SuggestionItem'

test('successful login', async () => {

  const { getByPlaceholderText, getByText, getByRole} = render(
    <Provider store={store}>
      <SuggestionItem />
    </Provider>
  );

  const button = getByRole('button');
  const oldButton = getByRole('button');

  // fill out and submit form
  fireEvent.press(button);

  // it sets loading state
  // expect(button).toBeDisabled();
  // expect(button).toHaveTextContent('Loading...');

  await waitFor(() => {
    expect(getByRole('button').props.children).toBe(
      !oldButton
    )    
    console.log(getByRole('button'));
  });
});
