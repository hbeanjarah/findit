import React, { forwardRef } from 'react';
import NextLink from 'next/link';

interface NextLinkComposedProps {
  to: Object | string;
  linkAs?: Object | string;
  href?: string;
  replace?: boolean;
  scroll?: boolean;
  passHref?: boolean;
  shallow?: boolean;
  prefetch?: any;
  locale?: string;
}

const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  (props, ref) => {
    const {
      to,
      linkAs,
      href,
      replace,
      scroll,
      passHref,
      shallow,
      prefetch,
      locale,
      ...other
    } = props;
    return (
      <NextLink
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        locale={locale}
      >
        <a ref={ref} {...other} />
      </NextLink>
    );
  }
);

export default NextLinkComposed;
