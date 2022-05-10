import * as React from 'react';

function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={41} height={41} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x={0.606} y={0.512} width={40} height={40} rx={20} fill='#020202' />
      <rect
        x={0.606}
        y={0.512}
        width={40}
        height={40}
        rx={20}
        fill='url(#prefix__paint0_linear_293_100)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M32.057 20.512l-6.2-2.493a4.907 4.907 0 01-2.722-2.72l-2.51-6.238-2.512 6.238a4.902 4.902 0 01-2.722 2.72l-6.2 2.493h-.036l6.2 2.493a4.907 4.907 0 012.722 2.72l2.511 6.238 2.511-6.237a4.903 4.903 0 012.722-2.72l6.2-2.494'
        fill='#020202'
      />
      <defs>
        <linearGradient
          id='prefix__paint0_linear_293_100'
          x1={0.606}
          y1={2.449}
          x2={45.528}
          y2={28.404}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#76FFAC' />
          <stop offset={1} stopColor='#A6EB67' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LogoIcon;
