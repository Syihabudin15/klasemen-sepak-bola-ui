import { Fragment, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import EditSkor from "../Components/EditSkor";
import { Row, Col, Spin, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getPertandingan } from "../Redux/Actions/PertandinganSlice";
import CreatePertandingan from "../Components/Utils/CreatePertandingan";

function UpdateSkor(){
    const { isLoading, data } = useSelector(state => state.pertandingans);
    const dis = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        dis(getPertandingan('riwayat'));
    }, [dis]);
    return(
        <Fragment>
            <section title="Buat Peretandingan" style={{display: 'flex', gap: 20, margin: 20}}>
                <CreatePertandingan />
                <Button onClick={() => nav('/update-all-skor')}>Update All Skor</Button>
            </section>
            <section title="Edit Skor Pertandingan" style={{margin: '50px auto'}}>
                <section title="daftar Pertandingan Berlangsung">
                    <EditSkor/>
                </section>
            </section>
            <Spin spinning={isLoading}>
                <section title="history-edit-skor" className="history-edit-skor">
                    <h4>History Edit Skor</h4>
                    <div>
                        {data &&
                            data.map((e,i) => {
                                return <div className="history-card" key={i}>
                                        <div style={{width: '90%', margin: '20px auto', borderBottom: '1px solid #eee'}}>
                                            <Row>
                                                <Col span={5}>{e.m_detail_pertandingans[0].m_klub.nama_klub}</Col>
                                                <Col span={5}>VS</Col>
                                                <Col span={5}>{e.m_detail_pertandingans[1].m_klub.nama_klub}</Col>
                                            </Row>
                                            <Row style={{marginLeft: 10}}>
                                                <Col span={5}>{e.m_detail_pertandingans[0].skor}</Col>
                                                <Col span={5}>-</Col>
                                                <Col span={5}>{e.m_detail_pertandingans[1].skor}</Col>
                                            </Row>
                                        </div>
                                    </div>
                            })
                        }
                    </div>
                </section>
            </Spin>
        </Fragment>
    )
};

export default UpdateSkor;