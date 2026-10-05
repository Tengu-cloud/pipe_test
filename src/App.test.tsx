import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
describe('App', () => {
  it('renders main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /^get started$/i })).toBeInTheDocument()
  })
  it('shows counter at zero', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })
  it('increments counter on click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /count is 0/i }))
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })
})