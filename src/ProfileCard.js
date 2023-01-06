const ProfileCard = ({img, title, handle, description}) => {
  return (
      <div>
        <img src={img} alt={title}/>
        <h3>{title}</h3>
        <h3>{handle}</h3>
        <div>{description}</div>
      </div>
  );
};

export default ProfileCard;
