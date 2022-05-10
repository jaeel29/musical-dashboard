import * as React from 'react';

function NotificationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='#fff' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M9.67 20a.75.75 0 01.75-.75h3.16a.75.75 0 110 1.5h-3.16a.75.75 0 01-.75-.75zM7.227 5.227A6.75 6.75 0 0118.75 10v5A1.25 1.25 0 0020 16.25a.75.75 0 010 1.5H4a.75.75 0 010-1.5A1.25 1.25 0 005.25 15v-5a6.75 6.75 0 011.977-4.773zM6.449 16.25H17.55a2.75 2.75 0 01-.3-1.25v-5a5.25 5.25 0 10-10.5 0v5c0 .439-.105.867-.3 1.25z' />
    </svg>
  );
}

export default NotificationIcon;
