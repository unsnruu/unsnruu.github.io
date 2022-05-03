import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const RootGrid = styled(Grid)`
  background: lavender;
  padding-bottom: 5rem;
`;

export default function Promising() {
  return (
    <RootGrid container justifyContent={"center"} id={"section-promising"}>
      <Grid item xs={10} sx={{ marginBottom: "3rem" }}>
        <Typography sx={{ typography: "h3" }}>향후 계획</Typography>
      </Grid>
      <Grid item xs={10} container justifyContent={"center"} spacing={4}>
        <Grid item xs={12} md={5}>
          <Typography sx={{ typography: "h6", fontWeight: "bold" }}>
            하나.
          </Typography>
          <Typography sx={{ typography: "body" }}>
            서버와 클라이언트 간의 통신을 심층적으로 이해하도록 노력하겠습니다.
            제 약점인 컴퓨터의 동작 원리 등 컴퓨터를 심화 학습하여 computation
            thinking을 체화하겠습니다. 그러한 자기 발전을 토대로 여러 소스
            코드에 컨트러뷰트도 하고 싶습니다.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography sx={{ typography: "h6", fontWeight: "bold" }}>
            둘.
          </Typography>
          <Typography sx={{ typography: "body" }}>
            이후에는 시각적인 정보를 더욱 다양한 방법으로 전달하기 위해,
            애니메이션과 SVG를 다루는 능력을 키우고 싶습니다. 표현이 밑바탕
            되어야 내용에도 힘이 실린다고 생각합니다.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography sx={{ typography: "h6", fontWeight: "bold" }}>
            셋.
          </Typography>
          <Typography sx={{ typography: "body" }}>
            코드와 그 외의 문서를 체계적으로 정리하고 작성하는 방법을 지속적으로
            발전시켜나갈 계획입니다. 잘 정리된 문서와 꾸준한 리팩토링을 통해
            유지보수 가능한 코드는 효율성의 핵심이라고 생각합니다.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography sx={{ typography: "h6", fontWeight: "bold" }}>
            넷.
          </Typography>
          <Typography sx={{ typography: "body" }}>
            사이드 프로젝트나 토이 프로젝트를 틈틈히 해나가면서 새로운 기술을
            빠르게 받아들이고 싶습니다. 편안함에 안주하지 않도록 주의를
            기울이겠습니다.
          </Typography>
        </Grid>
      </Grid>
    </RootGrid>
  );
}
