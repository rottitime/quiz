import React from 'react'
import Button from './Button'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup)

it("renders button correctly", () => {
    const { getByText } = render(<Router>
        <Button to="/somewhere">Click me</Button>
    </Router>)
    expect(getByText('Click me')).toBeInTheDocument()
    // expect(container.firstChild).toMatchInlineSnapshot(`<h1>Hello, World!</h1>`)
})

it("matches snapshot", () => {
    const tree = renderer.create(<Router>
        <Button to="/somewhere">Click me</Button>
    </Router>).toJSON()

    expect(tree).toMatchSnapshot()
})