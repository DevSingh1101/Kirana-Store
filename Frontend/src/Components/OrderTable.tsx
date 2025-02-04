import { useCallback, useMemo } from "react";
import type {
    CellValueChangedEvent,
    ColDef,
    RowSelectionOptions,
} from "ag-grid-community";
import {
    AllCommunityModule,
    ModuleRegistry,
    themeAlpine,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { IProducts } from "../Constants";

ModuleRegistry.registerModules([AllCommunityModule]);

const OrderTable = ({ products }: { products: IProducts[] }) => {
    const columnDefs: ColDef[] = [
        {
            field: "category",
        },
        {
            field: "name",
        },
        {
            field: "quantity",
            sortable: true,
        },
        {
            field: "unit",
        },
    ];

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
        };
    }, []);

    const myTheme = themeAlpine.withParams({
        spacing: 12,
        accentColor: "orange",
        backgroundColor: "inherit",
        fontFamily: "inherit",
    });

    const onCellValueChanged = useCallback((event: CellValueChangedEvent) => {
        console.log(event);
    }, []);

    return (
        <div className="h-[60vh] w-full">
            <AgGridReact
                theme={myTheme}
                rowData={products}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={5}
                paginationPageSizeSelector={[5, 10, 20, 50, 100]}
                onCellValueChanged={onCellValueChanged}
            />
        </div>
    );
};

export default OrderTable;
