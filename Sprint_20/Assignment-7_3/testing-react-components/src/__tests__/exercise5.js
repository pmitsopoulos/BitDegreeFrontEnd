import React from "react";
import { render, screen } from "@testing-library/react";
import { FavoriteNumber } from "../components/FavouriteNumber";
import user from "@testing-library/user-event";

test("entering an invalid value shows an error message", () => {
  // ✅ Destructure rerender from the render method.
  const {rerender} = render(<FavoriteNumber/>);
  const input = screen.getByLabelText(/favorite number/i);
  // ✅ Confirm that if the user types in 10, there will be an error
  user.type(input,'10');
  expect(screen.getByRole('alert').textContent).toMatch(/the number is invalid/i);
  // ✅ rerender the <FavoriteNumber max={10} /> with a new max
  rerender(<FavoriteNumber max={10}/>)
  // ✅ expect the queryByRole('alert') to be null.
  expect(screen.queryByRole('alert')).toBeNull();
});
