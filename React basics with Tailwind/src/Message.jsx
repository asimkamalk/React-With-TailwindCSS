const Message = (props) => {
  const { text, bgColor } = props;
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
    >
      {text}
    </div>
  );
};

export default Message;
