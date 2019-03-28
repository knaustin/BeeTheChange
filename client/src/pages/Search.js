import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import API from "../utils/API";

const ResultsStyle = {
    color: 'black',
    fontSize: '40px'
};

const ResultsContainer = {
    backgroundColor: '#7A7882',
    borderRadius:'10px',
    margin: 'auto',
    marginTop: '30px',
    width: '50%'
};

class Search extends Component {
    state = {
        loaded: false,
        farmers: [],
    };

    componentDidMount() {
        const urlParams = new URLSearchParams(this.props.location.search);
        API.getFarmers(urlParams.get('name') || '')
            .then(res => this.setState({ farmers: res.data, loaded: true }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <Wrapper>
                <Nav />
                <div style={ResultsContainer}>
                    { this.state.farmers.length
                        ? this.state.farmers.map(farmer => (<div><Link style={ResultsStyle} id="farmerLink" to={`/farmer/${farmer._id}`} key={farmer._id}>{farmer.Name}</Link></div> ))
                        : <h1 className="text-center">{ this.state.loaded ? 'No Results' : 'Loading...' }</h1>
                    }
                </div>
                <Footer />
            </Wrapper>
        );
    }
}

export default Search;
