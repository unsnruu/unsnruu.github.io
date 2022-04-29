import React from "react";
import SimpleSlide from "./SimpleSlide";

const SimpleEmoji = ({ emojiStr }: { emojiStr: string }) => {
  return <div>{emojiStr}</div>;
};

export default function CharacterContainer() {
  return (
    <section id="index-section-character">
      <h1>저는요</h1>
      <div></div>
      <div id="">
        <SimpleSlide>
          <SimpleEmoji emojiStr="📚" />
        </SimpleSlide>
        <p>혼자서도 잘합니다</p>
      </div>
      <div>
        <SimpleSlide>
          <SimpleEmoji emojiStr="📚" />
        </SimpleSlide>
        <p></p> 물론, 함께라면 더 잘해요
      </div>
      <div>배움에 가림이 없습니다</div>
      <SimpleSlide>
        <SimpleEmoji emojiStr="📚" />
      </SimpleSlide>
    </section>
  );
}
