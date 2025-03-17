import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { useState } from 'react';

function MyGrid() {
    const [data, setData] = useState([{ id: 1, name: "Product A"}, {id:2, name:"Product B"}]);
    return (
        <Grid data={data}>
            <GridColumn field="id" title="ID" />
            <GridColumn field="name" title="Name" />
        </Grid>
    );
}

export default MyGrid;