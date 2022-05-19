import { SocialMedia } from "../../../types/LayoutTypes";
import { NavigationSocialMediaButton } from "./NavigationSocialMediaButton";

interface Props {
  socialmedia: SocialMedia[];
}
export const NavigationSocialMediaButtons = ({ socialmedia }: Props) => {
  return (
    <>
      {socialmedia.map((item) => (
        <NavigationSocialMediaButton
          site={item.site}
          link={item.href}
          key={item.id}
        />
      ))}
    </>
  );
};
