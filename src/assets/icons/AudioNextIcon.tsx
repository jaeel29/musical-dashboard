import * as React from 'react';

function AudioNextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={34} height={34} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.29 24.575l8.653-6.73c.7-.544.7-1.6 0-2.145L11.29 8.97c-.892-.694-2.192-.058-2.192 1.072v13.461c0 1.13 1.3 1.766 2.192 1.072z'
        fill='#E3E3E3'
      />
      <path
        d='M22.68 9.981a1.358 1.358 0 112.716 0v13.583a1.358 1.358 0 01-2.716 0V9.98z'
        fill='#E3E3E3'
      />
    </svg>
  );
}

export default AudioNextIcon;
