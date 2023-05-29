import { Table, Spin } from 'antd';
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getKlasmen } from '../Redux/Actions/KlasemenSlice';

function Klasemen(){
    const { isLoading, data } = useSelector(state => state.klasmens);
    const dis = useDispatch();

    const columns = [
        {title: 'NO', dataIndex: 'id'},
        {title: 'Klub', dataIndex: 'nama_klub'},
        {title: 'Kota', dataIndex: 'kota_klub'},
        {title: 'MA', dataIndex: 'ma'},
        {title: 'ME', dataIndex: 'me'},
        {title: 'S', dataIndex: 's'},
        {title: 'K', dataIndex: 'k'},
        {title: 'GM', dataIndex: 'gm'},
        {title: 'GK', dataIndex: 'gk'},
        {title: 'Point', dataIndex: 'point'}
    ];

    useEffect(() => {
        dis(getKlasmen());
    }, [dis]);

    return(
        <Fragment>
            <section title="klasemen" style={{
                margin: '50px 20px'
            }}>
                <h3 style={{textAlign: 'center'}}>Klasemen Sementara</h3>
                <Spin spinning={isLoading}>
                    <div className="table-klasemen">
                        <Table style={{overflow: 'auto'}} columns={columns} dataSource={data}/>
                    </div>
                </Spin>
            </section>
        </Fragment>
    )
};

export default Klasemen;