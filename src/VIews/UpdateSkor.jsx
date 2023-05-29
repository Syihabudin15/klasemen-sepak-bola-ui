import { Fragment } from "react";
import EditSkor from "../Components/EditSkor";
import { Row, Col } from 'antd';

function UpdateSkor(){
    return(
        <Fragment>
            <section title="Edit Skor Pertandingan">
                <section title="daftar Pertandingan Berlangsung">
                    <EditSkor/>
                </section>
            </section>
            <section title="history-edit-skor" className="history-edit-skor">
                <h4>History Edit Skor</h4>
                <div>
                    <div style={{width: '90%', margin: '20px auto', borderBottom: '1px solid #eee'}}>
                        <Row>
                            <Col span={5}>Persib</Col>
                            <Col span={5}>VS</Col>
                            <Col span={5}>Persib</Col>
                        </Row>
                        <Row style={{marginLeft: 10}}>
                            <Col span={5}>0</Col>
                            <Col span={5}>-</Col>
                            <Col span={5}>0</Col>
                        </Row>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default UpdateSkor;