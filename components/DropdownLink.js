import Link from 'next/link';
import React from 'react';

const DropdownLink = React.forwardRef(({ href, children, ...rest }, ref) => {
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});

export default DropdownLink;
