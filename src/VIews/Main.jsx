import { Row, Col } from 'antd';

function Main(){
    return(
        <section title="Main Page">
            <div className="main-top">
                <h3>Daftar Riwayat Pertandingan</h3>
                <div className='list-history-wrapper'>
                    <div className='history-wrapper'>
                        <Row style={{fontWeight: 'bold'}}>
                            <Col span={5}>Persib</Col> 
                            <Col span={5} style={{fontStyle: 'italic'}}>VS</Col> 
                            <Col span={5}>Persija</Col>
                        </Row>
                        <Row style={{marginLeft: 20}}>
                            <Col span={5}>1</Col> <Col span={5}>-</Col> <Col>0</Col>
                        </Row>
                    </div>
                    <div className='status-pertandingan'>
                        <p>Berlangsung</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Main;