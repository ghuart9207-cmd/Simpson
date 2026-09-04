import Donut from './Donut';

interface UserProps {
 image: string;
 firstName: string;
 lastName: string;
 nbdonutapp: number;
}

function Avatar(props : UserProps) {

  return (
    <>
        <img src={props.image} alt={`${props.firstName}  ${props.lastName}`} />
        <h1>{props.firstName} {props.lastName}</h1>
        <Donut nbdonut={props.nbdonutapp}/>
    </>
  );
}

export default Avatar;