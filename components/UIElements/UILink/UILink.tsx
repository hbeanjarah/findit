import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import MuiLink, { LinkProps } from '@mui/material/Link';
import NextLinkComposed from './NextLinkComposed';

interface UILinkProps {
  activeClassName?: string;
  as?: string | Object;
  className?: string;
  href?: any;
  links?: Object | string;
  noLinkStyle?: boolean;
  role?: string;
  children: any;
}

const UILink = forwardRef<HTMLAnchorElement, UILinkProps & LinkProps>(
  (props, ref) => {
    const {
      activeClassName = 'active',
      as: linkAs,
      className: classNameProps,
      href,
      noLinkStyle,
      role, // Link don't have roles.
      ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameProps, {
      [activeClassName]: router.pathname === pathname && activeClassName,
    });
    const isExternal =
      typeof href === 'string' &&
      (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

    if (isExternal) {
      if (noLinkStyle) {
        return <a className={className} href={href} ref={ref} />;
      }

      return <MuiLink className={className} href={href} ref={ref} {...other} />;
    }

    if (noLinkStyle) {
      return <NextLinkComposed ref={ref as any} to={href} {...other} />;
    }
    return (
      <MuiLink
        component={NextLinkComposed as any}
        linkAs={linkAs}
        className={className}
        ref={ref}
        to={href}
        {...other}
      />
    );
  }
);

export default UILink;
