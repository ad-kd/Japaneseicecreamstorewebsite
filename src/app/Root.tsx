import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Toaster } from './components/ui/sonner';

export function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}
