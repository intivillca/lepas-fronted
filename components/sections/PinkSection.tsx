import { CSS } from "@stitches/react";
import { ReactNode } from "react";
import { styled } from "../../stitches.config";

type StyleComponentProps = React.ComponentProps<typeof PinkSectionContainer>;

interface PinkSectionProps extends StyleComponentProps {
  children: ReactNode;
}
export const PinkSection = ({ children, ...args }: PinkSectionProps) => {
  return <PinkSectionContainer {...args}>{children}</PinkSectionContainer>;
};

const PinkSectionContainer = styled("div", {
  backgroundColor: "$red700",
  backgroundPositionX: "0%",
  backgroundPositionY: "0%",
  backgroundRepeat: "repeat",
  backgroundAttachment: "scroll",
  backgroundImage:
    'url("http://demo.mage-themes.com/template/paws/pink/images/paw_pattern.png")',
  backgroundSize: "auto",
  backgroundOrigin: "padding-box",
  backgroundClip: "border-box",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
});
