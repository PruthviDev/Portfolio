import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Projects', href: '/projects', current: false },
   
  ];

  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Left Side: Logo & Desktop Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* Simple Text Logo */}
              <span className="text-xl font-bold tracking-tight text-slate-900 cursor-pointer">
                PRUTHVI<span className="text-indigo-600">.</span>
              </span>
            </div>
            
            <div className="hidden sm:ml-10 sm:block">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current 
                        ? 'text-indigo-600 bg-indigo-50/50' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50',
                      'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Simple CTA Button */}
          <div className="hidden sm:block">
            <a
              href="#contact"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200 transition-all active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="sm:hidden bg-white border-b border-slate-200 shadow-xl">
        <div className="space-y-1 px-4 pt-2 pb-6">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'text-indigo-600 bg-indigo-50' : 'text-slate-600',
                'block rounded-xl px-3 py-4 text-base font-bold'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          {/* Mobile CTA */}
          <div className="pt-4">
            <DisclosureButton
              as="a"
              href="#contact"
              className="block text-center bg-indigo-600 text-white rounded-xl py-3 text-base font-bold"
            >
              Hire Me
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;