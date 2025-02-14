import { useCallback, useMemo } from "react";
import type { CellValueChangedEvent, ColDef } from "ag-grid-community";
import {
    AllCommunityModule,
    ModuleRegistry,
    themeAlpine,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { IProduct } from "../types";

ModuleRegistry.registerModules([AllCommunityModule]);

const OrderTable = ({
    products,
    columns,
}: {
    products: IProduct[];
    columns: ColDef[];
}) => {
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
        };
    }, []);

    const myTheme = themeAlpine.withParams({
        spacing: 10,
        accentColor: "orange",
        backgroundColor: "inherit",
        fontFamily: "inherit",
        textColor: "white",
        headerRowBorder: {
            color: "gray",
        },
        headerColumnBorder: {
            color: "gray",
        },
        rowBorder: {
            color: "gray",
        },
    });

    const onCellValueChanged = useCallback((event: CellValueChangedEvent) => {
        console.log(event);
    }, []);

    return (
        <div className="h-[60vh] w-full p-4">
            <AgGridReact
                theme={myTheme}
                rowData={products}
                columnDefs={columns}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={[10, 20, 50, 100]}
                onCellValueChanged={onCellValueChanged}
            />
        </div>
    );
};

export default OrderTable;
