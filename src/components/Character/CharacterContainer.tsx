import React from "react";
import { Grid, Typography } from "@mui/material";
import CharacterCard, { CharacterCardProps } from "./CharacterCard";
import styled from "@emotion/styled";

const GridRoot = styled.section`
  padding-top: 10rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  background-color: lavender;
`;
// {title:"",text:"",emoji:""}
const cardItems: CharacterCardProps[] = [
  {
    title: `스스로 문제를 찾습니다`,
    text: `독학을 하면서 한 문제에서 시작해 뿌리를 뻗어 더욱 깊게 파고 들었습니다. 새로운 분야를 공부 하면서도 즐길 수 있던 이유였습니다.`,
    emoji: `🔑`,
  },
  {
    title: "사회적 트렌드를 빠르게 캐치합니다",
    text: "인문학적 교양을 바탕으로 보다 빠르고 민감하게 사회적 트렌드를 따라갈 수 있습니다. 새로운 트렌드를 빠르게 사용자 경험에 반영 하겠습니다.",
    emoji: "😎",
  },
  {
    title: "시각 정보의 전달을 고려합니다",
    text: "프론트 엔드는 데이터를 사용자에게 편의에 맞춰 전달하는 분야라고 생각합니다. 시각예술에 관련된 지식을 통해 심층적인 UI를 연구하고 싶습니다.",
    emoji: "📊",
  },
  {
    title: "UI의 맥락으로 생각합니다",
    text: "UI 접근성과 심미성을 동시에 사용자 친화적으로 고려하겠습니다. 아직 미숙한 점도 많겠지만 관심만큼은 뒤쳐지지 않습니다.",
    emoji: "🧵",
  },
  {
    title: "리뷰 문화에 익숙합니다",
    text: "비평 학회를 통해 서로에게 도움이되는 방향으로 코멘트를 남기는 일에 익숙합니다. 코드 리뷰에도 적극적으로 임하겠습니다.",
    emoji: "📝",
  },
  {
    title: "문서 작성에 능숙합니다",
    text: "비평을 공부하면서 언어를 체계적으로 구조화하는 방법을 다듬었습니다. 프로그래밍은 물론 API 문서등을 작성하는데 큰 도움이 될 수 있습니다.",
    emoji: "✍️",
  },
];

export default function CharacterContainer() {
  return (
    <GridRoot id={"section-character"}>
      <Grid
        container
        direction={"row"}
        spacing={6}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={10}>
          <Typography
            sx={{
              typography: "h3",
              fontWeight: "bold",
              wordBreak: "keep-all",
            }}
          >
            저는 이런 사람입니다.
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"}>
          {cardItems.map(({ title, text, emoji }, idx) => (
            <Grid key={idx} item xs={12} md={6} lg={5}>
              <CharacterCard title={title} text={text} emoji={emoji} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </GridRoot>
  );
}
