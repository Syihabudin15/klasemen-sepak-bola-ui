import { Fragment, useEffect, useState } from "react";
import { Button, Modal, Form, Select, notification } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getAllKlub } from '../../Redux/Actions/KlubSlice';
import { getAktifPertandingan } from '../../Redux/Actions/AktifPertandinganSlice';
import axios from 'axios';


function CreatePertandingan(){
    const { data } = useSelector(state => state.klubs);
    const [open, setopen] = useState(false);
    const [load, setLoad] = useState(false);
    const [feed, setFeed] = useState();
    const dis = useDispatch();
    const base = process.env.BASE_URL || 'http://localhost:5000';

    
    const handleFinish = async(e) => {
        if(e.klub1 === e.klub2) return setFeed('Klub tidak boleh sama');
        setLoad(true);
        try{
            let result = await axios.post(`${base}/api/pertandingan`, e);
            notification.success({message: result.data.msg});
            setopen(false);
            dis(getAktifPertandingan());
        }catch(err){
            console.log(err);
            notification.error({message: err.response.data.msg});
        }
        setLoad(false);
    }
    useEffect(() => {
        dis(getAllKlub());
    }, [dis]);
    return(
        <Fragment>
            <div>
                <Button onClick={() => setopen(true)}>Buat Pertandingan</Button>
            </div>
            <Modal open={open} onCancel={() => setopen(false)} footer={[]} title='Buat Pertandingan Baru'>
                <Form onFinish={handleFinish}>
                    <Form.Item name={'klub1'}>
                        <Select placeholder='Klub 1'>
                            {data && 
                                data.map((e,i) => {
                                    return <Select.Option key={i} value={e.id}>{e.nama_klub}</Select.Option>
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item name={'klub2'}>
                        <Select placeholder='Klub 2'>
                            {data && 
                                data.map((e,i) => {
                                    return <Select.Option key={i} value={e.id}>{e.nama_klub}</Select.Option>
                                })
                            }
                        </Select>
                    </Form.Item>
                    <p style={{fontStyle: 'italic', color: 'red'}}>{feed? feed : ''}</p>
                    <Form.Item>
                        <Button block htmlType="submit" type="primary" loading={load}>Buat Pertandingan</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Fragment>
    )
};

export default CreatePertandingan;