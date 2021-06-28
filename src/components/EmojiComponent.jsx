import { useState } from "react";
import Picker, { SKIN_TONE_NATURAL } from "emoji-picker-react";

const EmojiComponent = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [pickerDisplay, setPickerDisplay] = useState(true);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      {chosenEmoji && <div>{chosenEmoji.emoji}</div>}
      {pickerDisplay && (
        <Picker
          onEmojiClick={onEmojiClick}
          skinTone={SKIN_TONE_NATURAL}
          pickerStyle={{ width: "100%" }}
        />
      )}
    </div>
  );
};

export default EmojiComponent;
