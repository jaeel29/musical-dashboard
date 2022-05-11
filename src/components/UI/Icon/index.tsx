import { paths } from './Paths';

const Icon = ({
  size,
  name,
  className,
  fill,
  fillPath,
}: {
  size?: number;
  name: string;
  className?: string;
  fill?: string;
  fillPath?: string;
}) => {
  const sizeFinal = size ? size : 24;
  return (
    <svg
      className={className}
      width={sizeFinal}
      height={sizeFinal}
      viewBox='0 0 24 24'
      fill={fill ? fill : 'none'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d={paths[name]} fill={fillPath}></path>
    </svg>
  );
};

export default Icon;
