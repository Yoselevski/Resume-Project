import MainStyle from './Main.module.css';
const Main = ({Ref , style , content}) => {
  return (
    <div
      ref={Ref}
      className={MainStyle.container}
      style={style}
    >
      <div className={MainStyle.content}>{content}</div>
    </div>
  );
};

export default Main;
