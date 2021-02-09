import React from 'react';
import { Table } from 'semantic-ui-react';
import { IBrowseProps } from '../../../types/types';

export const Browse = (props: IBrowseProps): React.ReactElement => {
    const { dataHeader = [], dataResult = [] } = props;

    const createHeader = (): React.ReactElement => {
        return (
            <Table.Header>
                <Table.Row>
                    {dataHeader.map((headerTitleItem) => (
                        <Table.HeaderCell key={`headercell-${headerTitleItem.label}`}>
                            {headerTitleItem.label}
                        </Table.HeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>
        );
    };

    const createBody = () => {
        return (
            <Table.Body>
                {dataResult.map((resultRow, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Table.Row key={`resultrow-${index}`}>
                        {dataHeader.map((headerTitleItem) => (
                            <Table.Cell key={`resultcell-${headerTitleItem.label}`}>
                                {resultRow[headerTitleItem.label.toLowerCase()]}
                            </Table.Cell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        );
    };

    return (
        <Table singleLine>
            {createHeader()}
            {createBody()}
        </Table>
    );
};

export default Browse;
