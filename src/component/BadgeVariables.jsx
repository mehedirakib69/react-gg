import ProfileImg from './profile_1.JPG';
import './BadgeVariables.css';

function BadgeVariables() {
    const name = 'Mehedi Rakib';
    const handle = 'mehedirakib69';
    return ( 
        <div className="badge">
            <img src={ProfileImg} alt={name} />
        <div className="text">
            <h4>{name}</h4>
            <p>@{handle}</p>
        </div>
        </div>
    );
}
export default BadgeVariables;
