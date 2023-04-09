import { html } from "lit";
import { generateAppState } from "@/utils/generateAppState";

import Icons from "@/constants/Icons";

import type { ApplicationState } from "@/types/ApplicationState";
import type { Applications } from "@/types/Applications";

type Db = {
  [Key in Applications]: ApplicationState;
};
const introductionContent = html` <div>
  <h2>안녕하세요</h2>
  <h3>류웅선입니다</h3>
  <p>프론트 엔드 개발자를 지망하고 있습니다</p>
</div>`;

const techStackContent = html` <div>
  <img src=${Icons.HTML5} />
  <img src=${Icons.CSS3} />
  <img src=${Icons.JAVASCRIPT} />
  <img src=${Icons.TYPESCRIPT} />
  <img src=${Icons.REACT} />
  <img src=${Icons.REDUX} />
  <img src=${Icons.STYLED_COMPONENT} />
  <img src=${Icons.LIT} />
  <img src=${Icons.NODE_JS} />
</div>`;

const reportContent = html` <div>
  <h2>문의가 있는 경우 아래에 이슈를 남겨주세요</h2>
  <a href="https://github.com/unsnruu/unsnruu.github.io/issues"
    >깃허브 이슈로 바로가기</a
  >
</div>`;
const JJANContent = html`
  <div>
    <flex-box .flex=${1}>
      <core-text .text=${"JJAN 프로젝트"}></core-text>
    </flex-box>
    <core-text .text=${"현재 작업 중인 프로젝트입니다."}></core-text>
    <div>
      <img src="/img-jjan-logo.png" />
    </div>
    <a href="https://github.com/numble-jjan/jjan-front-renewal"
      >JJAN 깃허브로 바로가기</a
    >
  </div>
`;

export default {
  introduction: generateAppState({
    appName: "introduction",
    content: introductionContent,
  }),
  techStack: generateAppState({
    appName: "techStack",
    content: techStackContent,
  }),
  report: generateAppState({ appName: "report", content: reportContent }),
  JJAN: generateAppState({ appName: "JJAN", content: JJANContent }),
} as Db;
