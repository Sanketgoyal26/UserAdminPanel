import { useState } from 'react';
import Input from '../Input/Input';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './info.css';

const Info = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        ext: '',
        password: '',
    });

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className='userinfo-container'>
            <p className='userinfo-header' onClick={toggleCollapse}>
                <ExpandMoreIcon style={{ verticalAlign: 'middle', marginRight: '8px', transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                User Info
            </p>
            {!isCollapsed && (
                <div className='userinfo-data-container'>
                    <p className='userinfo-title'>User Info</p>

                    <div className='profile-top-cntnr'>
                        <div className='profile-img'>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
                        </div>
                        <div className='profile-img-instructions'>
                            <div id="p-logo">Personal Logo</div>
                            <div id="logo-inst">The proposed size is 512*512px no bigger than 2.5mb</div>
                        </div>
                    </div>

                    <div className='form-container'>
                        <Input dynamicStyles={{width: "240px"}} label="First Name" placeholder='First Name' value={formData.firstName} name="firstName" onChange={handleInputChange} />
                        <Input dynamicStyles={{width: "240px"}} label="Last Name" placeholder='Last Name' value={formData.lastName} name="lastName" onChange={handleInputChange} />
                    </div>

                    <div className='form-container'>
                        <Input dynamicStyles={{width: "240px"}} label="Email" placeholder='Email' value={formData.email} name="email" onChange={handleInputChange} />
                        <Input dynamicStyles={{width: "150px"}} label="Phone" placeholder='Phone' value={formData.phone} name="phone" onChange={handleInputChange} />
                        <Input dynamicStyles={{width: "60px"}} label="Extension" placeholder='Extension' value={formData.ext} name="ext" onChange={handleInputChange} />
                    </div>

                    <div className='form-container'>
                        <Input dynamicStyles={{width: "240px"}} label="Password" placeholder='Password' value={formData.password} name="password" onChange={handleInputChange} type='password' />
                    </div>

                    <div className='instructions'>
                        <p style={{ color: "red", fontSize: '14px', fontWeight: '500' }}>⌨ Your password needs to</p>
                        <div style={{ color: "red", marginLeft: "20px", fontSize: '14px', fontWeight: '500' }}>
                            <p>x include both uppercase and lowercase characters</p>
                            <p>x include at least one symbol and number</p>
                            <p>x be at least 8 characters long</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Info;
