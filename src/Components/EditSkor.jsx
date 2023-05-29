import { Row, Col, Button } from 'antd';
import { Fragment } from "react";

function EditSkor(){
    return(
        <Fragment>
            <div className='list-edit-skor'>
                <Row style={{width: '80%'}}>
                    <Col span={5}>Persib</Col>
                    <Col span={3}>VS</Col>
                    <Col span={5}>Persija</Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Edit Skor</Button>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
};

export default EditSkor;