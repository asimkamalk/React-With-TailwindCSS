const MyCompoonent = (props) => {
  //   console.log(props); //children
  const { children, bgColor, height } = props;

  return (
    <div
      style={{
        background: bgColor,
        height: height + "px",
      }}
    >
      <div>
        This is my component
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MyCompoonent;
