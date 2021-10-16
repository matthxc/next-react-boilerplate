import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

describe('Homepage tests', () => {
  it('should render correctly', async () => {
    const { render } = await getPage({
      route: '/',
    });
    render();
    expect(screen.getByText('Documentation →')).toBeInTheDocument();
    expect(screen.getByText('Examples →')).toBeInTheDocument();
    expect(screen.getByText('Learn →')).toBeInTheDocument();
    expect(screen.getByText('Deploy →')).toBeInTheDocument();
  });
});
