import React, {Component} from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import { Container, Row, Col, Button } from 'reactstrap';
import Logo from '../assets/santrenkoding_logo.png';
import Icon from 'antd/lib/icon';

export default class Home extends Component{
    render(){
        return(
            <div className="bg-light">
                <Jumbotron />
                <div className="text-center m-4">
                    <h2>Daftar Kajian Rutin</h2>
                </div>
                <Container>
                    <Row>
                        <Col md="4" sm="12">
                            <Card 
                                title="Kajian Koding #3"
                                text="ReactJS dan Firebase Auth/Hosting"
                                img="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"/>
                        </Col>
                        <Col md="4" sm="12">
                            <Card
                                title="Kajian Koding #2"
                                text="html, css, boostrap dasar"
                                img="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"/>
                        </Col>
                        <Col md="4" sm="12">
                            <Card
                                title="Kajian Koding #1"
                                text="Belajar Laravel Dasar"
                                img="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"/>
                        </Col>
                    </Row>
                </Container>
                
                <div className="text-center m-4">
                    <Button className="bg-success mb-2">Lihat Seluruh Kajian Koding</Button>
                </div>

                <hr className="pb-4"/>
                
                <Container className="mt-4 border shadow-sm">
                    <Row className="text-center">
                        <Col md="6" sm="12" className="bg-success p-4 text-white">
                            <h4>Kegiatan</h4>
                            <p><Icon type="login" /> Koding</p>
                            <p><Icon type="login" /> Belajar Agama dan Al Qur'an</p>
                            <p><Icon type="login" /> Pendidikan Karakter</p>
                        </Col>
                        <Col md="6" sm="12" className="bg-white">
                            <img src={Logo}/><br/>
                            <h4>"Memberi Manffat Untuk Ummat"</h4>
                            <p>-Santren Koding-</p>
                        </Col>
                    </Row>
                    
                </Container>

                <Container className="text-center mt-4 pb-4 pt-4">
                    <h4>Kontak</h4>
                    <p><Icon type="phone" /> 082225111587</p>
                    <p><Icon type="mail" /> santrenkoding@gmail.com</p>

                    <p><Icon type="environment" /> Titik Ruang Space,<br/>
                    Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,<br/>
                    Kota Semarang, Jawa Tengah 50269</p>
                </Container>

                <div className="Jumbotron fluid border-top mt-4 bg-white">
                    <p className="m-2 text-left pl-4">Copyright © Santren Koding 2018. All rights reserved.</p>
                </div>

            </div>
        )
    }
}