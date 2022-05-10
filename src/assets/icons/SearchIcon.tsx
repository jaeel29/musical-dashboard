import * as React from 'react';

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='#fff' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M11.059 4.75a6.309 6.309 0 100 12.618 6.309 6.309 0 000-12.618zM3.25 11.059a7.809 7.809 0 1115.618 0 7.809 7.809 0 01-15.618 0z' />
      <path d='M15.52 15.52a.75.75 0 011.06 0l3.95 3.95a.75.75 0 11-1.06 1.06l-3.95-3.95a.75.75 0 010-1.06z' />
    </svg>
  );
}

export default SearchIcon;
