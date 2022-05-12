import * as React from 'react';

function PauseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={34} height={34} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.192 11.13a2.301 2.301 0 012.301-2.302h2.302a2.301 2.301 0 012.301 2.302v11.507a2.301 2.301 0 01-2.301 2.301h-2.302a2.301 2.301 0 01-2.301-2.301V11.13zM18.397 11.13A2.301 2.301 0 0120.7 8.828H23a2.301 2.301 0 012.301 2.302v11.507a2.301 2.301 0 01-2.3 2.301h-2.302a2.301 2.301 0 01-2.302-2.301V11.13z'
        fill='#FFFBFB'
      />
    </svg>
  );
}

export default PauseIcon;
