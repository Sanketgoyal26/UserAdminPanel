import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Permissions.css';

const Permissions = () => {
    const labels = [
        "Dashboard Stats",
        "Appointments",
        "Campaigns",
        "Bulk Requests",
        "Triggers",
        "Funnels",
        "Opportunities",
        "Conversations",
        "Contacts",
        "Reviews",
        "Online Listings",
        "Memberships"
    ];

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleLabelToggle = (labelIndex) => {
        // Handle toggle for the label at the given index
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className='permissions-container'>
            <p className='permissions-title' onClick={toggleCollapse}>
                <ExpandMoreIcon style={{ verticalAlign: 'middle', marginRight: '8px', transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                User Permissions
            </p>
            {!isCollapsed && (
                <div className='permissions-data-container'>
                    <Grid container spacing={1}>
                        {labels.map((label, index) => (
                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start' }} key={index}>
                                <div style={{ fontSize: '14px', width: '70%', marginRight: '10px' }}>{label}</div>
                                <div style={{ marginTop: '-7px' }}>
                                    <FormGroup style={{ width: '30%' }}>
                                        <FormControlLabel
                                            control={<Switch defaultChecked />}
                                            label=""
                                            onChange={() => handleLabelToggle(index)}
                                            labelPlacement="start"
                                        />
                                    </FormGroup>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default Permissions;
