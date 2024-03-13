import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import GraphData from "./GraphData";

export default function PlayerData({ data }) {
  const columns = useMemo(
    () => [
      { header: "Name", accessorKey: "Player" },
      { header: "Age (years)", accessorKey: "Age" },
      { header: "Height (cm)", accessorKey: "Height" },
      { header: "Weight (kg)", accessorKey: "Weight" },
      { header: "Team", accessorKey: "Team" },
      { header: "Position", accessorKey: "Position" },
    ],
    []
  );

  const [rowSelection, setRowSelection] = useState({});
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableColumnOrdering: true,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    initialState: { density: 'compact', pagination: { pageSize: 5 } },
    muiTableBodyProps: {
      sx: {
        //stripe the rows, make odd rows a darker color
        "& tr:nth-of-type(odd) > td": {
          backgroundColor: "#ffffff",
        },
      },
    },
    mrtTheme: (theme) => ({
      baseBackgroundColor: "#ecfbff",
      selectedRowBackgroundColor: "#7ef9c1",
    }),
  });

  useEffect(() => {
    let selectedPlayerData = [];
    for (const key of Object.keys(rowSelection)) {
      selectedPlayerData.push(data[key]);
    }
    setSelectedPlayers({ ...selectedPlayerData });
  }, [rowSelection, data]);

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title text-center mb-3">Player Information</h4>
            <MaterialReactTable table={table}></MaterialReactTable>
          </div>
        </div>
      </div>
      <GraphData data={selectedPlayers}></GraphData>
    </>
  );
}
