import Link from "next/link";
import Image from "next/image";
import { styled } from "../../../stitches.config";
import { getImageLink, ImageBase } from "../../../utils/parseImageLink";

interface NavigationBrandProps {
  logo: ImageBase;
}
export const NavigationBrand = ({ logo }: NavigationBrandProps) => {
  return (
    <NavigationBrandContainer>
      <Link href={"/"}>
        <a>
          <LogoBox>
            <Image
              src={getImageLink({ media: logo })}
              alt={"logo"}
              layout={"fill"}
            />
          </LogoBox>
        </a>
      </Link>
    </NavigationBrandContainer>
  );
};

const LogoBox = styled("div", {
  position: "relative",
  width: "5.75rem",
  height: "5.75rem",
  "@bp2": {
    width: "8rem",
    height: "6rem",
  },
});
const NavigationBrandContainer = styled("div", {
  ml: "0.5rem",
  "@bp2": {
    ml: "0",
  },
});
