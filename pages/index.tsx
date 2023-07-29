import AboutMe from '@/components/AboutMe';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='w-full h-full'>
      <Navbar />
      <AboutMe />
    </main>
  );
}
