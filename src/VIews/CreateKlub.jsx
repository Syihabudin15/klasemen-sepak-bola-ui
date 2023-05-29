import { Fragment, useState } from "react";
import { Form, Input, Button, Modal } from 'antd';

function CreateKlub(){
    const [open, setOpen] = useState(false);
    return(
        <Fragment>
            <section title="form buat klub baru">
                <div className="form-wrap">
                    <Form labelCol={{span: 3}}>
                        <Form.Item label='Nama Klub'>
                            <Input placeholder="Masukan Nama Klub" />
                        </Form.Item>
                        <Form.Item label='Kota Klub'>
                            <Input placeholder="Masukan Kota Klub" />
                        </Form.Item>
                        <Form.Item style={{marginTop: 40}}>
                            <Button onClick={() => setOpen(true)} block type="primary" style={{fontWeight: 'bold'}}>BUAT</Button>
                        </Form.Item>
                    </Form>
                </div>
            </section>
            <Modal open={open} title="Yakin?" 
            footer={[<Button onClick={() => setOpen(false)}>Edit</Button>, <Button>Setuju</Button>]}
            onCancel={() => setOpen(false)}>

            </Modal>
        </Fragment>
    )
};

export default CreateKlub;