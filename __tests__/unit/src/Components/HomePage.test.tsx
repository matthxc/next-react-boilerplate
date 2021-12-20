import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@Pages/index';
import Example from '@Pages/example';

describe('Homepage tests', () => {
  it('should render correctly', async () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Open Footer'));
    fireEvent.click(screen.getByText('Open Title'));
    expect(screen.getByText('Documentation →')).toBeInTheDocument();
    expect(screen.getByText('Examples →')).toBeInTheDocument();
    expect(screen.getByText('Learn →')).toBeInTheDocument();
    expect(screen.getByText('Deploy →')).toBeInTheDocument();
    expect(screen.getByText('Welcome to Next.js!')).toBeInTheDocument();
    expect(screen.getByText('Powered by')).toBeInTheDocument();
  });

  it('should render correctly the example', async () => {
    render(<Example />);
    expect(screen.getByText('Documentation →')).toBeInTheDocument();
    expect(screen.getByText('Examples →')).toBeInTheDocument();
    expect(screen.getByText('Learn →')).toBeInTheDocument();
    expect(screen.getByText('Deploy →')).toBeInTheDocument();
  });
});
