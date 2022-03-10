import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './tabdetail.css';

const TabDetail = () => {
    return (
        <>
        <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="Headphone" title="Headphone">
                testing
            </Tab>
            <Tab eventKey="asas" title="asas">
                524684531
            </Tab>
            <Tab eventKey="qwe" title="qwe">
                hahsbdahba
            </Tab>
        </Tabs>
        </div>
        </>
    );
}

export default TabDetail;
