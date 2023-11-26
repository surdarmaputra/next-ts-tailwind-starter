import { render, screen } from '@testing-library/react';

import Home from '../page';

function setup() {
  return render(<Home />);
}

test('display title', async () => {
  setup();
  await screen.findByText(/Next.js Tailwind Starter/);
});
