import "./Avatar.scss";

export const Avatar = ({ avatarImg, bgColor }) => {
  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <img src={avatarImg} alt="avatar" />
    </div>
  );
};
