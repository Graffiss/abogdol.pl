import { forwardRef } from "react";
import classNames from "classnames";
import * as Navigation from "@radix-ui/react-navigation-menu";

interface NavigationListItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children?: React.ReactNode;
  title: string;
}

export const NavigationListItem = forwardRef<
  HTMLAnchorElement,
  NavigationListItemProps
>(({ className, children, title, ...props }, forwardedRef) => {
  return (
    <li>
      <Navigation.Link asChild>
        <a
          className={classNames(
            "focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          {children && <p className="text-mauve11 leading-[1.4]">{children}</p>}
        </a>
      </Navigation.Link>
    </li>
  );
});

NavigationListItem.displayName = "NavigationListItem";
