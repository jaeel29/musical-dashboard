function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={25}
      height={25}
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.293 11.39c1 .577 1 2.02 0 2.598l-8.049 4.648a1.5 1.5 0 01-2.25-1.3V8.043a1.5 1.5 0 012.25-1.299l8.05 4.647z'
        fill='#fff'
      />
    </svg>
  );
}

export default PlayIcon;
