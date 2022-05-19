import { styled } from "../../../stitches.config";
import { AnimalCard, AnimalCardProps } from "../AnimalCard/AnimalCard";

interface AnimalCardGroupProps {
  animals: AnimalCardProps[];
}

export const AnimalCardGroup = ({ animals }: AnimalCardGroupProps) => {
  const GroupContainer = styled("div", {
    display: "flex",
    width: "$full",
    maxWidth: "$xl5",
    margin: "0 auto",
    columnGap: "$8",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  });
  const Wrapper = styled("div", {
    width: "$full",
    "@bp2": {
      width: `${100 / (animals.length > 4 ? 4 : animals.length)}%`,
      maxWidth: "30%",
    },
  });
  return (
    <GroupContainer>
      {animals.map((animals, id) => (
        <Wrapper key={id}>
          <AnimalCard
            ime={animals.ime}
            slika={animals.slika}
            slug={animals.slug}
            path={animals.path}
          />
        </Wrapper>
      ))}
    </GroupContainer>
  );
};
