import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import API from "../utils/API";

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
                { this.state.farmers.length
                    ? this.state.farmers.map(farmer => (<Link to={`/farmer/${farmer._id}`} key={farmer._id}>{farmer.Name}</Link>))
                    : <h1 className="text-center">{ this.state.loaded ? 'No Results' : 'Loading...' }</h1>
                }
                <Footer />
            </Wrapper>
        );
    }
}

export default Search;
