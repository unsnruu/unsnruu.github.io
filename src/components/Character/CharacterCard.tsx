import React from "react";
import styled from "@emotion/styled";

import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import SimpleSlide from "./SimpleSlide";

export interface CharacterCardProps {
  title: string;
  text: string;
  emoji: string;
}

const StyledCard = styled(Card)`
  background-color: white;
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;
const StyledCardHeader = styled(CardHeader)`
  word-break: keep-all;
`;

export default function CharacterCard({
  text,
  title,
  emoji,
}: CharacterCardProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledCard elevation={4} sx={{ height: `${matches ? "13rem" : "auto"}` }}>
      <CardContent>
        <SimpleSlide emoji={emoji} />
      </CardContent>
      <CardContent>
        <StyledCardHeader
          title={title}
          titleTypographyProps={{ fontSize: "1.25rem" }}
        />
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </CardContent>
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
