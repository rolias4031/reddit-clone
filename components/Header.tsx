import React from 'react';
import Image from 'next/image';
import {
  BeakerIcon,
  HomeIcon,
  ChevronDownIcon,
  SearchIcon,
  VideoCameraIcon,
  MenuIcon,
} from '@heroicons/react/solid';
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/outline';

/*
 * flex-shrink-0 means the logo will never shrink when window does.
 * tailwind responsive tip - the [size]: tags designate a breakpoint. So the 'lg:inline' tag means that at the largeg screen size the display of the home text is inline, and when its smaller its hidden!
 */
function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src="/reddit-logo-text.png" layout="fill" />
      </div>
      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      {/* Search box */}
      <form className="flex flex-1 items-center space-x-2 rounded-md border bg-gray-100 px-3 py-1 border-gray-200">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>
      <div className="mx-5 text-gray-500 space-x-2 items-center hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      {/* complete this at the end? */}
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      {/* sign in and out buttons */}
      <div className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image layout="fill" src="/reddit-logo.png" />
        </div>
        <p className='text-gray-400'>Sign In</p>
      </div>
    </div>
  );
}

export default Header;
