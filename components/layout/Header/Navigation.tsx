import { styled, css } from "../../../stitches.config";
import { NavigationButton } from "./NavigationButton";
import { NavigationInterface } from "../../../types/LayoutTypes";
import { ReactNode } from "react";

export interface NavigationProps {
  navigation: NavigationInterface[];
  brand?: ReactNode;
  socialmediabuttons?: ReactNode;
  divider?: boolean;
}

export const Navigation = ({
  navigation,
  brand,
  socialmediabuttons,
  divider = false,
}: NavigationProps) => {
  const isMobile = css({ "@bp2": {} });
  console.log("is mobile:", isMobile);
  return (
    <NavigationHeader>
      <NavigationContainer>
        {brand && brand}
        <NavigationLinks divider={divider}>
          <NavigationMenu>
            {navigation.map((item) => (
              <NavigationButton
                buttonText={item.text}
                link={item.href}
                key={item.id}
              />
            ))}
            {socialmediabuttons && socialmediabuttons}
          </NavigationMenu>
        </NavigationLinks>
      </NavigationContainer>
    </NavigationHeader>
  );
};
const NavigationHeader = styled("header", {
  zIndex: "2",
  textAlign: "center",
  "&::after": {
    clear: "both",
    content: ".",
    display: "block",
    fontSize: "0",
    height: "0",
    lineHeight: "0",
    overflow: "hidden",
  },
});
const NavigationContainer = styled("div", {
  maxWidth: "$xl5",
  boxSizing: "border-box",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const NavigationLinks = styled("div", {
  padding: "30px 0",
  variants: {
    divider: {
      true: { borderTop: "2px solid #e3e3e3" },
      false: {},
    },
  },
});

const NavigationMenu = styled("ul", {
  listStyle: "none",
  display: "flex",
  alignItems: "center",
});
