import { Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "../../../stitches.config";
import {
  getImageAlt,
  getImageLink,
  getImagePreview,
} from "../../../utils/parseImageLink";
import { Heading } from "../../typograpghy/Heading";

interface Props {
  akcije: any;
}
export const ActionCards = ({ akcije }: Props) => {
  return (
    <ActionsGroup>
      {akcije.map((akcija: any) => (
        <Link key={akcija.id} href={akcija.url}>
          <Card cover clickable hoverable>
            <Card.Body css={{ alignItems: "flex-start" }}>
              <ActionCardImageContainer>
                <Image
                  objectFit="cover"
                  layout="fill"
                  alt={getImageAlt({ media: akcija.slika })}
                  src={getImageLink({ media: akcija.slika })}
                  blurDataURL={getImagePreview({ media: akcija.slika })}
                  placeholder="blur"
                />
              </ActionCardImageContainer>
            </Card.Body>
            <ActionContent>
              <Heading heading={"h4"} variant={"pink"}>
                {akcija.naslov}
              </Heading>
              <ActionText>{akcija.opis}</ActionText>
            </ActionContent>
          </Card>
        </Link>
      ))}
    </ActionsGroup>
  );
};

const ActionsGroup = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "stretch",
  justifyContent: "center",
  gridGap: "$4",
  maxWidth: "$full",
  "@bp2": {
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "$6",
  },
  "@bp3": {
    gridGap: "$8",
    maxWidth: "$xl6",
  },
});

const ActionText = styled("p", {
  padding: "$4",
});
const ActionContent = styled("div", {
  height: "50%",
  transition: ".5s ease",
  backgroundColor: "$white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "$full",
  marginTop: "$4",
  marginBottom: "$4",
});

const ActionCardImageContainer = styled("div", {
  position: "relative",
  aspectRatio: 5 / 4,
  width: "$full",
  height: "auto",
  overflow: "hidden",
});
