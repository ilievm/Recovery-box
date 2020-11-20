/**
 * @jest-environment jsdom
 */

import React from 'react'
// import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import '@testing-library/jest-dom'
import { Provider } from "react-redux"
import store from '../redux/store'



import LoginScreen from '../components/Login'

test('successful login', async () => {

  const { getByPlaceholderText, getByText} = render(
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );

  const userField = getByPlaceholderText('Enter a username');
  const passwordField = screen.getByLabelText('Password');
  const button = getByText('IAMTHELOGINBUTTON');
  const button = screen.getByRole('button');

  // fill out and submit form
  fireEvent.changeText(userField, 'user');
  fireEvent.press(button);

  // it sets loading state
  expect(button).toBeDisabled();
  expect(button).toHaveTextContent('Loading...');

  await waitFor(() => {
    // expect(getByText('Hello user !').props.children).toBe(
    //   famousWomanInHistory
    // )    
    console.log(getByText('Hello user !'));
  });
});
