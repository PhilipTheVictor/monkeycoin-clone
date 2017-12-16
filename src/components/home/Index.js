import React from 'react';
import Radium from 'radium';
import FeaturedServices from './featuredServices/FeaturedServices';
import Renovation from './renovation/Renovation';
import Header from './Header';

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <Header />
                <FeaturedServices />
                <Renovation />
            </div>
        )
    }
}

Home = Radium(Home);
export default Home;