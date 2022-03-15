import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import TableOrder from './order-table/TableOrder';

const MyOrder = () => {
    return (
        <>
        <div className='home-tabs-order'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">

                <Tab eventKey="profile" title="All Order">
                    <TableOrder></TableOrder>
                </Tab>
                <Tab eventKey="Computer & Laptop" title="Received">
                </Tab>

                <Tab eventKey="Mobile & Tablet" title="Canceled">
                </Tab>
                <Tab eventKey="In Processor" title="In Processor">
                </Tab>

            </Tabs>
    </div>
        </>
    );
}

export default MyOrder;
