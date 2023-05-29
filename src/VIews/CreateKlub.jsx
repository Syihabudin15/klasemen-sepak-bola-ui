import { Fragment, useState } from "react";
import axios from 'axios';
import { Form, Input, Button, Modal, notification } from 'antd';
import ListKlub from '../Components/ListKlub';
import { useDispatch } from "react-redux";
import { getAllKlub } from "../Redux/Actions/KlubSlice";

const base = process.env.BASE_URL || 'http://localhost:5000';

function CreateKlub(){
    const [open, setOpen] = useState(false);
    const [nama, setNama] = useState();
    const [kota, setKota] = useState();
    const [feed, setFeed] = useState();
    const dis = useDispatch();

    const openModal = () => {
        if(!nama || !kota) return setFeed('Nama dan Kota Klub harus diisi');
        setOpen(true);
    };

    const createKlub = async() => {
        try{
            let result = await axios.post(`${base}/api/klub`,{nama_klub: nama, kota_klub: kota});
            notification.success({message: result.data.msg});
            setOpen(false);
            dis(getAllKlub());
        }catch(err){
            console.log(err);
            notification.error({message: err.response.data.msg});
        }
        setOpen(false);
    };

    return(
        <Fragment>
            <section title="form buat klub baru">
                <div className="form-wrap">
                    <Form labelCol={{span: 3}}>
                        <Form.Item label='Nama Klub' rules={[{required: true, whitespace: false}]}>
                            <Input placeholder="Masukan Nama Klub" value={nama} onChange={(e) => setNama(e.target.value)} />
                        </Form.Item>
                        <Form.Item label='Kota Klub' rules={[{required: true, whitespace: false}]}>
                            <Input placeholder="Masukan Kota Klub" value={kota} onChange={(e) => setKota(e.target.value)} />
                        </Form.Item>
                        <p style={{color: 'red'}}>{feed? feed : ''}</p>
                        <Form.Item style={{marginTop: 40}}>
                            <Button onClick={() => openModal()} block type="primary" style={{fontWeight: 'bold'}}>BUAT</Button>
                        </Form.Item>
                    </Form>
                </div>
            </section>
            <ListKlub/>
            <Modal open={open} title="Yakin?" 
            footer={[<Button onClick={() => setOpen(false)}>Edit</Button>, <Button onClick={() => createKlub()}>Setuju</Button>]}
            onCancel={() => setOpen(false)}>

            </Modal>
        </Fragment>
    )
};

export default CreateKlub;