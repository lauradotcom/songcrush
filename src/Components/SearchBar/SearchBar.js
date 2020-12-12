import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState(
            { term: e.target.value },
            () => {
                this.search();
            });
        e.preventDefault();
    }

    handleKeyPress(e) {
        if (e.charCode === 13) {
            this.props.search(this.state.term);
            e.preventDefault();
        }
    }


    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist"
                        type="text"
                        value={this.state.term}
                        onChange={this.handleTermChange}
                        onKeyPress={this.handleKeyPress}
                         />
                {/*<button className="SearchButton"
                        onClick={this.search}>
        FIND SONG</button>*/}
            </div>
        )
    }
}

export default SearchBar;