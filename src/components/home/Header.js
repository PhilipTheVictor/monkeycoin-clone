import Image from '../../assets/images/logo1.png';
import React,{ Component } from 'react';
import { Grid, Row, Col,Button } from 'react-bootstrap';

var styles = {
 img: {
     width: 420,
     height: 350,
     marginTop: 30,
     
 },
 head: {
     fontSize: 70,

 },
 headmain: {
     marginLeft: 100,
 },
 head2: {
     fontSize: 27,

 },
 button1: {
     marginLeft: 170,
     borderRadius: 2,
     borderColor: "#fffff"
 },
 
 button2: {
    marginLeft: 180,
    borderRadius: 2,
    borderColor: "#fffff"
},
 bg: {
     backgroundColor: '#ffff00',
     marginTop: 40,
     padding: 30,
     borderRadius: 10
 }
}

export default class Header extends Component {
    render(){
return (<Grid >
    <Row className="showgrid" >
        <Col xs={12} sm={6} md={6}><img style={styles.img} src={Image} alt="mainpic" />
    <h2 style={styles.headmain}>MONKEY COIN</h2>
    </Col>
    <Col xs={12} sm={6} md={6}>
    <div style={styles.bg}>
    <h3  style={{marginLeft: 15}}>PRE-SALE STARTS ON JAN 8th 2018</h3>
    <h2 style={styles.head}>22 | 17 | 12 | 59</h2>
    <h2 style={styles.head2}> DAYS   |  HOURS  |  MINUTES  |  SECONDS </h2>
<Button bsStyle="warning" style={styles.button1}>Apply for Pre-Sale</Button>
<br />
<h5  style={{marginLeft: 135}}>
ICO STARTS IN : 32 DAYS 5 : 47 : 4
</h5>
<br />
<Button bsStyle="warning" style={styles.button2}>
Apply for ICO
</Button>
<br />
<a style={{marginLeft: 165}}>Subscribe for Updates</a>
    </div>
    </Col>
    </Row>
    </Grid>
);
}}