const Box = (props) => {
  const { label, bgColor, fontColor, large } = props;
  // console.log(large);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        fontSize: large ? "40px" : "12px",
      }}
    >
      {label}
    </div>
  );
};

export default Box;
