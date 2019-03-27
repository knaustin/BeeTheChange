import React, { Component } from 'react';
import Nav from '../components/Nav';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import API from '../utils/API';

class Search extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        API.getUser(this.props.match.params.id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <Wrapper>
                <Nav />
                <h1 className="text-center">Update User Settings (Name, Image, About)</h1>
                <pre>
                    { this.state.user ? JSON.stringify(this.state.user, null, 2) : 'Loading...' }
                </pre>
                <Footer />
            </Wrapper>
        );
    }
}

export default Search;
