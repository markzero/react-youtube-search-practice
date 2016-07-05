import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        // if value={this.state.term} then it's Controlled Component
        return (
            <div className="search-bar">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    // arbitrary; moze biti bilo koje ime
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
