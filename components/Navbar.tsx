import React, { useState } from 'react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface NavItem {
  label: String;
  page: any;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
];

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className='fixed w-full top-0 m-2 mx-auto px-4'>
        <div className='md:flex md:items-center justify-between border dark:border-stone-500 px-4'>
          <div>
            <div className='flex justify-between py-3 md:py-5 md:block'>
              <h2 className='text-2xl font-bold'>Vkrm Segta</h2>
              <div className='md:hidden'>
                <button onClick={() => setNavbar(!navbar)}>
                  {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`md:flex justify-center items-center space-y-8 md:space-y-0 md:space-x-6 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.page}
                onClick={() => setNavbar(!navbar)}
                className='block lg:inline-block hover:text-neutral-500'
              >
                {item.label}
              </Link>
            ))}
            {currentTheme === 'dark' ? (
              <button
                className='bg-slate-100 p-2'
                onClick={() => setTheme('light')}
              >
                <RiSunLine color='black' size={20} />
              </button>
            ) : (
              <button
                className='bg-slate-100 p-2'
                onClick={() => setTheme('dark')}
              >
                <RiMoonFill size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='w-full h-24' />
    </>
  );
}

export default Navbar;
