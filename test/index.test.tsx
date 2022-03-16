import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: "Hello world!",
    })

    console.log(heading);

    // expect(heading)
    expect(heading).toBeInTheDocument()
  })
})