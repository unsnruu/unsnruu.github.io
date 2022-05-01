import React from "react";
import { Grid } from "@mui/material";
import CharacterCard, { CharacterCardProps } from "./CharacterCard";
import styled from "@emotion/styled";

const CharacterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: silver;
`;
const CardsGrid = styled(Grid)`
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
`;

// {title:"",text:"",emoji:""}
const cardItems: CharacterCardProps[] = [
  {
    title: `스스로 문제를 찾아요`,
    text: `공부하면서 한 문제에서 시작해 뿌리를 뻗어 더욱 깊게 파고 들었습니다. 독학을 하면서도 즐길 수 있던 이유였습니다.`,
    emoji: `💻`,
  },
  {
    title: "Review에 익숙해요",
    text: "비평 학회를 통해 서로에게 도움이되는 방향으로 코멘트를 남기는 일에 익숙합니다. 코드 리뷰에도 적극적으로 임하겠습니다.",
    emoji: "📝",
  },
];

export default function CharacterContainer() {
  return (
    <CharacterWrapper id="index-section-character">
      <h1>저는 이런 사람입니다</h1>
      <CardsGrid container justifyContent="center" alignItems="center">
        {cardItems.map(({ title, text, emoji }, idx) => (
          <Grid key={idx} item>
            <CharacterCard title={title} text={text} emoji={emoji} />
          </Grid>
        ))}
      </CardsGrid>
    </CharacterWrapper>
  );
}
