import Link from "next/link";
import * as Navigation from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { NavigationListItem } from "./navigation-list-item";

const NavigationMenu = () => {
  return (
    <Navigation.Root className="relative z-[1] flex w-screen justify-center">
      <Navigation.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
        <Navigation.Item>
          <Navigation.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Blog{" "}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <Navigation.Link asChild>
                  <Link
                    className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                      Radix Primitives
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </Link>
                </Navigation.Link>
              </li>

              <NavigationListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </NavigationListItem>
              <NavigationListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </NavigationListItem>
              <NavigationListItem
                href="https://icons.radix-ui.com/"
                title="Icons"
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </NavigationListItem>
            </ul>
          </Navigation.Content>
        </Navigation.Item>

        <Navigation.Item>
          <Navigation.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Tech stack{" "}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </Navigation.Trigger>
          <Navigation.Content className="absolute left-0 top-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <NavigationListItem title="React" />
              <NavigationListItem title="Next.js" />
              <NavigationListItem title="Gatsby" />
              <NavigationListItem title="JavaScript" />
              <NavigationListItem title="TypeScript" />
              <NavigationListItem title="TailwindCSS" />
              <NavigationListItem title="Styled-Components" />
              <NavigationListItem title="jest" />
              <NavigationListItem title="Cypress" />
              <NavigationListItem title="Playwright" />
              <NavigationListItem title="REST" />
              <NavigationListItem title="GraphQL" />
              <NavigationListItem title="MS Azure" />
              <NavigationListItem title="git" />
            </ul>
          </Navigation.Content>
        </Navigation.Item>

        <Navigation.Item>
          <Navigation.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/Graffiss"
            target="_blank"
          >
            Github
          </Navigation.Link>
        </Navigation.Item>

        <Navigation.Item>
          <Navigation.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://www.linkedin.com/in/andrzej-bogdo%C5%82/"
            target="_blank"
          >
            LinkedIn
          </Navigation.Link>
        </Navigation.Item>

        <Navigation.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </Navigation.Indicator>
      </Navigation.List>

      <div className="absolute left-0 top-full flex w-full justify-center perspective-[2000px]">
        <Navigation.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </Navigation.Root>
  );
};

export default NavigationMenu;
