import { Spin, Table } from 'antd';
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllKlub } from '../Redux/Actions/KlubSlice';

function ListKlub(){
    const {isLoading, data} = useSelector(state => state.klubs);
    const dis = useDispatch();

    const columns = [
        {title: 'Nama Klub', dataIndex: 'nama_klub'},
        {title: 'Kota Klub', dataIndex: 'kota_klub'}
    ];

    useEffect(() => {
        dis(getAllKlub());
    }, [dis]);
    return(
        <Fragment>
            <Spin spinning={isLoading}>
                <section title='List Klub' className='list-klub'>
                    <h3 style={{textAlign: 'center', marginBottom: 30}}>Daftar Klub</h3>
                    <Table columns={columns} dataSource={data} />
                </section>
            </Spin>
        </Fragment>
    )
};

export default ListKlub;