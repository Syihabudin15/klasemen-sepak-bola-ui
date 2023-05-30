import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Input, Button, Spin, Form } from 'antd';
import { getAktifPertandingan } from "../Redux/Actions/AktifPertandinganSlice";

function UpdateAllSkor(){
    const { isLoading, datas } = useSelector(state => state.aktifPertandingans);
    const [form] = Form.useForm();
    const dis = useDispatch();
    
    const handleFinish = async (e) => {
        console.log(e);
    }

    useEffect(() => {
        dis(getAktifPertandingan());
    }, [dis]);
    return(
        <Fragment>
            <Spin spinning={isLoading}>
                <section title="Update Banya Pertandingan">
                    <Form onFinish={handleFinish} form={form}>
                        <div style={{width: '90vw', margin: '20px auto', padding: 10, boxSizing: "border-box"}}>
                            <Form.List name={'skors'}>
                                {(fields, {add, remove}) => (
                                    <>
                                        {fields.map((field) => (
                                            <>
                                                {datas && 
                                                datas.map((e,i) => (
                                                    <div key={i}>
                                                        <Row>
                                                            <Col span={7}>
                                                                {e.m_detail_pertandingans[i].m_klub.nama_klub}
                                                                <Row>
                                                                    <Form.Item {...field} name={[field.name, 'skor']}>
                                                                        <Input placeholder="Skor" />
                                                                    </Form.Item>
                                                                </Row>
                                                            </Col>

                                                            <Col span={5}>:</Col>

                                                            <Col span={7}>
                                                                {e.m_detail_pertandingans[i+1].m_klub.nama_klub}
                                                                <Row>
                                                                    <Form.Item {...field} name={[field.name, 'skor']}>
                                                                        <Input placeholder="Skor" />
                                                                    </Form.Item>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                ))}
                                            </>
                                        ))}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                style={{ width: "60%" }}
                                            >
                                                Add
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </div>
                        <div style={{width: '50vw', margin: '40px auto', display: "flex", justifyContent: 'center'}}>
                            <Button style={{width: '30vw'}} htmlType="submit" type="primary">Kirim</Button>
                        </div>
                    </Form>
                </section>
            </Spin>
        </Fragment>
    )
};

export default UpdateAllSkor;