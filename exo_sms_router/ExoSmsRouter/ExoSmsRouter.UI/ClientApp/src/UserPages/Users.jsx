import React from 'react';

class EnhancedTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 'asc',
            orderBy: 'Name',
            selected: [],
            data: [],
            page: 0,
            rowsPerPage:5,
        }

        handleRequestSort = (event, property) => {
            const orderBy = property;
            let order = 'desc';
            if (this.state.orderBy == property && this.state.order === 'desc') {
                order = 'asc';
            }
            this.setState({ order, orderBy });
        };

        handleSelectAllClick = (event, checked) => {
            if (checked) {
                this.setState({ selected: this.state.data.map(n => n.id) });
                return;
            }
            this.setState({ selected: [] });
        }

        handleClick = (event, id) => {
            const { selected } = this.state;
            const selectedIndex = selected.indexOf(id);
            let newSelected = [];

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(selected.id);
            }
            else if (selectedIndex === 0) {
                newSelected = newSelected.concat(selected.slice(1));
            }
            else if (selectedIndex === selected.length - 1) {
                newSelected = newSelected.concat(selected.slice(0, -1));
            }
            else if (selectedIndex > 0) {
                newSelected = newSelected.concat(
                    selected.slice(0, selectedIndex),
                    selected.slice(selectedIndex + 1)
                );
            }
            this.setState({ selected: newSelected });
        }

        handleChangePage = (event, page) => {

        };
    }
}