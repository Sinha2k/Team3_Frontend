import WrapperStyle from "./style";

function Wrapper({ children, style }) {
  return (
    <WrapperStyle style={style} className="wrapper">
      {children}
    </WrapperStyle>
  );
}

export default Wrapper;
