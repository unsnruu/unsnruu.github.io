import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

import SimpleSlide from "./SimpleSlide";

export interface CharacterCardProps {
  title: string;
  text: string;
  emoji: string;
}

const StyledCard = styled(Card)`
  background-color: gray;
  display: flex;
  align-items: center;
  margin: 0.5rem;
  height: 11rem;
`;

export default function CharacterCard({
  text,
  title,
  emoji,
}: CharacterCardProps) {
  return (
    <StyledCard>
      <CardContent>
        <SimpleSlide emoji={emoji} />
      </CardContent>
      <div>
        <CardHeader
          title={title}
          titleTypographyProps={{ fontSize: "1.25rem" }}
        />
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </div>
    </StyledCard>
  );
}

// {/* <Wrapper>
//   <SimpleSlide emoji={emoji} />
//   <div>
//     <h2>{title}</h2>
//     <p>{text}</p>
//   </div>
// </Wrapper>; */}
