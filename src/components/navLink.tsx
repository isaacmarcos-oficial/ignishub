'use client'
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  children?: React.ReactNode;
  end?: boolean;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, children, end, ...props }, ref) => {
    const pathname = usePathname();
    const normalizedPath = pathname.replace(/\/$/, ""); // remove barra final

    const isActive = end
      ? normalizedPath === href // só ativo se for exatamente igual
      : normalizedPath === href || normalizedPath.startsWith(String(href));

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";