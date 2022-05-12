import * as React from 'react';

function VolumeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={28} height={28} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.863 7.43c0-.621.503-1.124 1.124-1.124a7.864 7.864 0 010 15.728 1.123 1.123 0 110-2.247 5.617 5.617 0 100-11.234c-.62 0-1.124-.503-1.124-1.124z'
        fill='#181818'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.863 11.923c0-.62.503-1.123 1.124-1.123a3.37 3.37 0 010 6.74 1.123 1.123 0 110-2.247 1.123 1.123 0 100-2.246c-.62 0-1.124-.503-1.124-1.124zM9.419 6.051c1.143-2 4.197-1.189 4.197 1.115v14.008c0 2.304-3.054 3.115-4.197 1.115l-2.072-3.625H5.752a2.247 2.247 0 01-2.246-2.247v-4.494a2.247 2.247 0 012.246-2.247h1.595L9.42 6.051z'
        fill='#181818'
      />
    </svg>
  );
}

export default VolumeIcon;
