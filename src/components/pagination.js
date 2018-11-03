import React, { Component } from 'react';

class Pagination extends Component {
    render() {

        // Generate page numbers
        const pageNumbers = [];
        const itemPerPage = 10
        for (let i = 1; i <= Math.ceil(this.props.starshipsCount / itemPerPage); i++) {
            pageNumbers.push(i);
		}
		
		const renderPageNumbers = pageNumbers.map(number => {
			return (
				<li
					key={number}
					id={number}
                    onClick={this.props.changePage}
                    className="pagination__item"
				>
					{number}
				</li>
			);
		});

        return (
            <ul className="pagination">
                {renderPageNumbers}
            </ul>
        );
    }
}

export default Pagination;