import * as React from 'react';

function AudioPrevIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={34} height={34} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.7 9.938l-.009-.154c-.079-.653-.653-1.16-1.35-1.16l-.157.008c-.676.076-1.2.631-1.2 1.306v13.67l.009.153c.078.654.652 1.16 1.349 1.16l.158-.008c.676-.076 1.2-.631 1.2-1.305V9.938zm2.717 5.778a1.358 1.358 0 00.02 2.129l8.653 6.73c.893.694 2.192.058 2.192-1.072V10.042c0-1.13-1.3-1.766-2.192-1.072l-8.653 6.73-.02.016z'
        fill='#E3E3E3'
      />
    </svg>
  );
}

export default AudioPrevIcon;
