import React, { useCallback, useMemo } from "react";
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
            // editable: true,
            sortable: true,
        },
        {
            field: "unit",
            // editable: true,
            // cellEditorParams: {
            //     values: ["Kg", "Gm", "Pc"],
            // },
        },
    ];

    const defaultColDef = useMemo(() => {
        return {
            filter: "agTextColumnFilter",
            floatingFilter: true,
            flex: 1,
        };
    }, []);

    const rowSelection: RowSelectionOptions = {
        mode: "multiRow",
        headerCheckbox: false,
    };

    const myTheme = themeAlpine.withParams({
        spacing: 12,
        accentColor: "blue",
    });

    const onCellValueChanged = useCallback((event: CellValueChangedEvent) => {
        console.log(event);
    }, []);

    return (
        <div className="h-[500px] w-full">
            <AgGridReact
                theme={myTheme}
                rowData={products}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowSelection={rowSelection}
                pagination={true}
                paginationPageSize={5}
                paginationPageSizeSelector={[5, 10, 20, 50, 100]}
                onCellValueChanged={onCellValueChanged}
            />
        </div>
    );
};

export default OrderTable;
