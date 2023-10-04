import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div className='footer'>
            <div>
                <FontAwesomeIcon icon={faFacebook} style={{ cursor: 'pointer' }} />
                <FontAwesomeIcon icon={faTwitter} style={{ cursor: 'pointer' }} />
                <FontAwesomeIcon icon={faInstagram} style={{ cursor: 'pointer' }} />
            </div>
            <div>
                &copy; Copyright Ping. All rights reserved.
            </div>
        </div>
    )
}
