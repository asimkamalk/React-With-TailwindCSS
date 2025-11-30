import MyCompoonent from "./MyComponent";

const Title = () => {
  return <div>Hello World</div>;
};

const Description = () => {
  return <div>Another component</div>;
};

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

const App = () => {
  return (
    <div>
      Hello
      <Title />
      <Title />
      <Title />
      <Description />
      <br />
      {/* Props */}
      <Message text="This is my first props" bgColor="red" />
      <Message text="Hi!" bgColor="green" />
      <Message text="Bye!" bgColor="yellow" />
      <br />
      {/* Box */}
      <Box
        label="My name is Asim Kamal"
        bgColor="red"
        fontColor="white"
        large={true}
      />
      <Box
        label="another box"
        bgColor="purple"
        fontColor="white"
        large={false}
      />
      <Box
        label="Green Box"
        bgColor="green"
        fontColor="purple"
        // large will be undefined
      />
      <br />
      {/* My Component */}
      <MyCompoonent bgColor="yellow" height={90}>
        Hello
      </MyCompoonent>
      <MyCompoonent bgColor="lavender" height={40}>
        Bye
      </MyCompoonent>
    </div>
  );
};

export default App;
