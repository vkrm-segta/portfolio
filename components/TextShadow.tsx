import React from 'react';

interface PropsType {
  content: String;
  shadow: Number;
}

const TextShadow: React.FC<PropsType> = ({ content, shadow }) => {
  const text = content;

  const getCharacterStyles = () => {
    const shadowOffset = shadow;
    return {
      textShadow: `0 0 4px rgba(0, 0, 0, 0.5), ${shadowOffset}px ${shadowOffset}px 0 rgb(120 113 108)`,
      display: 'inline-block',
    };
  };

  return (
    <div className={`mr-2`}>
      {text.split('').map((char: String, index: any) => (
        <span key={index} style={getCharacterStyles()}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextShadow;
