import { Link } from '@react-navigation/native';

export default function StyledLink({to, text}) {
    return (
        <Link to={{ screen: to}} style={{fontWeight: 'bold', color: '#4673a2', textDecorationLine: 'underline'}}>
            {text}
        </Link>
    )
}