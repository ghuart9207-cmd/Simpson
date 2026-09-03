interface UserProps {
 image: string;
 firstName: string;
 lastName: string;
}

function Avatar(props : UserProps) {

  return (
    <>
        <img src={props.image} alt={`${props.firstName}  ${props.lastName}`} />
        <h1>{props.firstName} {props.lastName}</h1>
    </>
  );
}

export default Avatar;