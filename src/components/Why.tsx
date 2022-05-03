import React, { useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import RemixIcon from "./RemixIcon";

const ArrowDownIcon = () => <RemixIcon iconName="arrow-down-s-line" />;
const RootGrid = styled(Grid)`
  background: linear-gradient(white, lavender);
  padding-top: 7rem;
  padding-bottom: 10rem;
`;

export default function Why() {
  return (
    <RootGrid container justifyContent={"center"} id={"section-why"}>
      <Grid item xs={10} sx={{ marginBottom: "3rem" }}>
        <Typography sx={{ typography: "h3" }}>Q & A</Typography>
      </Grid>
      <Grid item xs={10}>
        <Accordion defaultExpanded={true}>
          <AccordionSummary id="why-start" expandIcon={<ArrowDownIcon />}>
            <Typography sx={{ typography: "subtitle1", fontWeight: "bold" }}>
              어떻게 개발 공부를 시작하게 되었나요?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              시작은 새로운 언어를 배우고 싶다는 이유였습니다. 본래는 자연어를
              배우는 취미를 가졌었습니다. 일본어와 프랑스어는 학원을 다니면서
              배운 적도 있습니다. 단순히 언어의 특이점이나 문화를 익히는 게
              즐거웠습니다. 그런데 어느 날 제가 생각해보니 컴퓨터 언어는 배우지
              않았더군요. 그렇게 단순한 흥미로 시작했습니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary id="why-frontend" expandIcon={<ArrowDownIcon />}>
            <Typography sx={{ typography: "subtitle1", fontWeight: "bold" }}>
              왜 프론트엔드를 공부했나요?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              처음에는 C언어로 시작했습니다. 언어의 숙력도와는 별개로 새로운
              사고 방식으로 말을 할 수 있다는 사실이 즐거웠습니다. 그렇게 한 권
              책을 마치고 배운 것으로 무엇을 할 수 있을지 찾았습니다. 일본어를
              배우면 만화를 볼 수 있고, 불어를 배우면 예술과 철학을 이해하는데
              도움이 되듯이요. 하지만 C언어로는 무엇을 할 지 몰랐습니다.
              그제서야 컴퓨터에도 많은 언어가 있고, 언어에 따라 할 수 있는
              영역이 보편적으로는 정해져있다는 걸 알았습니다. 마침 시각예술을
              전공하고 있었고 보이는 영역을 다루면 좋겠다고 생각했죠. 포털
              사이트나 쇼핑몰처럼 기왕이면 자주 마주치는 친근한 분야를 말이죠.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary id="why-development" expandIcon={<ArrowDownIcon />}>
            <Typography sx={{ typography: "subtitle1", fontWeight: "bold" }}>
              왜 프로그래머가 되고 싶은가요?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              프로그래밍은 예술과 닮았다고 생각합니다. 프로그래밍을 예술적으로
              할 생각은 없습니다. 닮은 점은 언어를 이용해 창작을 한다는
              점입니다. 하지만 그림과 글은 같은 창작이여도 좀처럼 서비스 대상과
              직접 마주하기 힘듭니다. 전 그래서 항상 소통에 대한 갈망이
              있었습니다. 소통 그리고 누군가에게 실질적인 결과를 가져다 주고
              싶었습니다. 프로그래밍, 그 중 특히나 프론트 엔드는 서비스를
              이용하는 유저와 백엔드 프로그래머 사이에서 완충제 역할을 한다고
              생각합니다. UX로 유저에게 직접적인 결과물을 안기는 한편 백엔드
              프로그래머와 디자이너와의 소통도 빼놓을 수 없는 이 분야가 저는
              궁금합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </RootGrid>
  );
}
