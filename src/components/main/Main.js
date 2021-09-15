import MainStyle from './Main.module.css';
const Main = ({Ref , style , content}) => {
  return (
    <div
      ref={Ref}
      className={MainStyle.container}
      style={style}
    >
      <div>{content}</div>
    </div>
  );
};

export default Main;
