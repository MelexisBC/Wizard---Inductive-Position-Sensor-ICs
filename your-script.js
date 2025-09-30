// Setting the license key for AG Grid
agGrid.LicenseManager.setLicenseKey("Using_this_{AG_Grid}_Enterprise_key_{AG-060784}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{Melexis_Technologies_NV}_is_granted_a_{Single_Application}_Developer_License_for_the_application_{Melexis}_only_for_{1}_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_{Melexis}_need_to_be_licensed___{Melexis}_has_been_granted_a_Deployment_License_Add-on_for_{1}_Production_Environment___This_key_works_with_{AG_Grid}_Enterprise_versions_released_before_{25_June_2025}____[v3]_[01]_MTc1MDgwNjAwMDAwMA==8ae6b9bd8cf084846d6687ff9becd192");


document.addEventListener('DOMContentLoaded', function() {
    const selectAllButton = document.getElementById('selectAllButton');
    const deselectAllButton = document.getElementById('deselectAllButton');
    const exportSelectedButton = document.getElementById('exportSelectedButton');
    const clearFiltersButton = document.getElementById('clearFiltersButton');

    // Remove any existing event listeners
    selectAllButton.replaceWith(selectAllButton.cloneNode(true));
    deselectAllButton.replaceWith(deselectAllButton.cloneNode(true));
    exportSelectedButton.replaceWith(exportSelectedButton.cloneNode(true));
    clearFiltersButton.replaceWith(clearFiltersButton.cloneNode(true));

    document.getElementById('selectAllButton').addEventListener('click', selectAllRows);
    document.getElementById('deselectAllButton').addEventListener('click', deselectAllRows);
    document.getElementById('exportSelectedButton').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action
        e.stopPropagation(); // Prevent the event from bubbling up
        console.log("Custom Export button clicked");
        exportSelectedRowsToExcel();
    });
    document.getElementById('clearFiltersButton').addEventListener('click', clearAllFilters);
});

// Helper functions for 'Motion' column
function motionValueGetter(params) {
    const cellValue = params.data['Motion'];
    if (!cellValue) return [];
    return cellValue.split('|').map(value => value.trim());
}

function motionValueFormatter(params) {
    if (!params.value) return '';
    return params.value.join(', ');
}

function getUniqueMotionValues(params) {
    setTimeout(function() {
        const uniqueValues = new Set();
        params.api.forEachNodeAfterFilter((node) => {
            const motionValues = motionValueGetter({ data: node.data });
            motionValues.forEach(value => uniqueValues.add(value));
        });
        const uniqueValuesArray = Array.from(uniqueValues).sort();
        params.success(uniqueValuesArray);
    }, 0);
}

// Helper functions for 'Processing' column
function processingValueGetter(params) {
    const cellValue = params.data['Processing'];
    if (!cellValue) return [];
    return cellValue.split('|').map(value => value.trim());
}

function processingValueFormatter(params) {
    if (!params.value) return '';
    return params.value.join(', ');
}

function getUniqueProcessingValues(params) {
    setTimeout(function() {
        const uniqueValues = new Set();
        params.api.forEachNodeAfterFilter((node) => {
            const processingValues = processingValueGetter({ data: node.data });
            processingValues.forEach(value => uniqueValues.add(value));
        });
        const uniqueValuesArray = Array.from(uniqueValues).sort();
        params.success(uniqueValuesArray);
    }, 0);
}

// Helper functions for 'Output' column
function outputValueGetter(params) {
    const cellValue = params.data['Output'];
    if (!cellValue) return [];
    return cellValue.split('|').map(value => value.trim());
}

function outputValueFormatter(params) {
    if (!params.value) return '';
    return params.value.join(', ');
}

function getUniqueOutputValues(params) {
    setTimeout(function() {
        const uniqueValues = new Set();
        params.api.forEachNodeAfterFilter((node) => {
            const outputValues = outputValueGetter({ data: node.data });
            outputValues.forEach(value => uniqueValues.add(value));
        });
        const uniqueValuesArray = Array.from(uniqueValues).sort();
        params.success(uniqueValuesArray);
    }, 0);
}

// Helper functions for 'Extra' column
function extraValueGetter(params) {
    const cellValue = params.data['Extra'];
    if (!cellValue) return [];
    return cellValue.split('|').map(value => value.trim());
}

function extraValueFormatter(params) {
    if (!params.value) return '';
    return params.value.join(', ');
}

function getUniqueExtraValues(params) {
    setTimeout(function() {
        const uniqueValues = new Set();
        params.api.forEachNodeAfterFilter((node) => {
            const extraValues = extraValueGetter({ data: node.data });
            extraValues.forEach(value => uniqueValues.add(value));
        });
        const uniqueValuesArray = Array.from(uniqueValues).sort();
        params.success(uniqueValuesArray);
    }, 0);
}


// Helper functions for 'Sensitive Axis' column
function sensitiveAxisValueGetter(params) {
    const cellValue = params.data['Sensitive axis'];
    if (!cellValue) return [];
    return cellValue.split('|').map(value => value.trim());
}

function sensitiveAxisValueFormatter(params) {
    if (!params.value) return '';
    return params.value.join(', ');
}

function getUniqueSensitiveAxisValues(params) {
    setTimeout(function() {
        const uniqueValues = new Set();
        params.api.forEachNode((node) => {
            const sensitiveAxisValues = sensitiveAxisValueGetter({ data: node.data });
            sensitiveAxisValues.forEach(value => uniqueValues.add(value));
        });
        const uniqueValuesArray = Array.from(uniqueValues).sort();
        params.success(uniqueValuesArray);
    }, 0);
}

// Helper functions for 'Supply voltage [V]' column
function supplyVoltageValueGetter(params) {
    const cellValue = params.data['Supply voltage'];
    if (!cellValue) return [];
    return cellValue.split('|').map(value => value.trim());
}

function supplyVoltageValueFormatter(params) {
    if (!params.value) return '';
    return params.value.join(', ');
}

function getUniqueSupplyVoltageValues(params) {
    setTimeout(function() {
        const uniqueValues = new Set();
        params.api.forEachNodeAfterFilter((node) => {
            const supplyVoltageValues = supplyVoltageValueGetter({ data: node.data });
            supplyVoltageValues.forEach(value => uniqueValues.add(value));
        });
        const uniqueValuesArray = Array.from(uniqueValues).sort();
        params.success(uniqueValuesArray);
    }, 0);
}




var gridOptions = {

    overlayNoRowsTemplate: '<span class="ag-overlay-no-rows-center">Loading data...</span>', // Use this for both loading and no data

    onGridReady: function() {
        // Show 'Loading data...' message initially
        gridOptions.api.showNoRowsOverlay();
    },
    
    defaultColDef: {
        resizable: true,
        sortable: true,
        flex: 1,
        minWidth: 185,
        floatingFilter: false,
        wrapHeaderText: true,
        autoHeaderHeight: true,
        menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'],
        tooltipValueGetter: function(params) {
            // Show tooltip only if the cell content is truncated
            const cellValue = params.value;
            const cellDisplayValue = params.valueFormatted || cellValue;
            return (cellValue && cellDisplayValue && cellValue.length > 30) ? cellValue : null;
        }
    },
    tooltipShowDelay: 0,
    tooltipMouseTrack: true,
    tooltipHideDelay: 5000,

    domLayout: 'normal',
    onSelectionChanged: function() {
        var selectedRows = gridOptions.api.getSelectedRows();
        var deselectButton = document.getElementById('deselectAllButton');
        var exportButton = document.getElementById('exportSelectedButton');
        var selectAllButton = document.getElementById('selectAllButton');

        // Show or hide the buttons based on row selection
        if (selectedRows.length > 0) {
            deselectButton.classList.add('show');
            exportButton.classList.add('show');
            selectAllButton.classList.add('show');
        } else {
            deselectButton.classList.remove('show');
            exportButton.classList.remove('show');
            selectAllButton.classList.remove('show');
        }
        updateButtonStates(); // Call the function to update button states
    },

getContextMenuItems: function(params) {
        var result = [
            {
                name: 'Export complete table',
                subMenu: [
                    {
                        name: 'CSV Export',
                        action: function() {
                            console.log("Context Menu: CSV Export");
                            exportCompleteTableAsCsv();
                        },
                        icon: '<span class="far fa-file-excel"></span>'
                    },
                    {
                        name: 'Excel Export',
                        action: function() {
                            console.log("Context Menu: Excel Export");
                            exportCompleteTableAsExcel();
                        },
                        icon: '<span class="far fa-file-excel"></span>'
                    }
                ],
                icon: '<span class="far fa-file-excel"></span>'
            }
            // Removed the 'Export selected rows to Excel' context menu item to avoid conflicts
        ];
        return result;
    },
    sideBar: {
        position: 'left',
        toolPanels: [
            {
                id: 'filters',
                labelDefault: 'Filters',
                labelKey: 'filters',
                iconKey: 'filter',
                toolPanel: 'agFiltersToolPanel',
                width: 400,
                minWidth: 150,
                maxWidth: 1000,
                toolPanelParams: {
                    suppressFilterSearch: true,
                    suppressExpandAll: true,
                },
            },
            {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
                toolPanelParams: {
                    defaultGroupExpanded: false,
                    suppressRowGroups: true,
                    suppressValues: true,
                    suppressPivots: true,
                    suppressPivotMode: true,
                    suppressColumnFilter: true,
                    suppressColumnSelectAll: false,
                    suppressColumnExpandAll: false,
                    suppressSyncLayoutWithGrid: false
                },
            },
        ],
        defaultToolPanel: null,
    },
    columnDefs: [
        {
            headerName: 'Family',
            field: 'Family',
            unSortIcon: true,
            headerTooltip: 'Family',
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    { filter: 'agTextColumnFilter' },
                    { 
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true
                        }
                    }
                ]
            }
        },
        
        {
            headerName: 'Status',
            field: 'Status',
            unSortIcon: true,
            headerTooltip: 'Status',
            hide: true,
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    { filter: 'agTextColumnFilter' },
                    { 
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true
                        }
                    }
                ]
            }
        },
        
        {
            headerName: 'Part number',
            field: 'Part number',
            unSortIcon: true,
            headerTooltip: 'Part number',
            minWidth: 210,
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    { filter: 'agTextColumnFilter' },
                    {
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true

                        }
                    }
                ]
            },
            cellRenderer: function(params) {
                var productPageUrl = params.data['Product page'];
                if (productPageUrl) {
                    return '<a href="' + productPageUrl + '" target="_blank" style="color: inherit; text-decoration: underline;">' + params.value + '</a>';
                } else {
                    return params.value;
                }
            }
        },
        
        {
            headerName: 'Datasheet',
            field: 'Datasheet',
            maxWidth: 120,
            headerTooltip: 'Download datasheet',
            cellRenderer: function(params) {
                if (params.value) {
                    return `<a href="${params.value}" target="_blank" style="color: inherit; text-decoration: none;">
                                <i class="fa fa-file-pdf" style="font-size: 18px; color: #00354b;" title="Download datasheet"></i>
                            </a>`;
                } else {
                    return '';
                }
            }
    }, 
    {
        headerName: 'Temperature [°C]',
        field: 'Temperature',
        unSortIcon: true,
        headerTooltip: 'Temperature [°C]',
        comparator: (valueA, valueB) => {
            if (valueA == null && valueB == null) return 0;
            if (valueA == null) return -1;
            if (valueB == null) return 1;
    
            const numA = parseFloat(valueA);
            const numB = parseFloat(valueB);
    
            if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
            if (!isNaN(numA)) return -1;
            if (!isNaN(numB)) return 1;
    
            if (valueA < valueB) return -1;
            if (valueA > valueB) return 1;
            return 0;
        },
        filter: 'agMultiColumnFilter',
        filterParams: {
            filters: [
                {
                    filter: 'agNumberColumnFilter',
                    filterParams: {
                        filterOptions: ['greaterThan', 'lessThanOrEqual', 'inRange'],
                    }
                },
                {
                    filter: 'agSetColumnFilter',
                    filterParams: {
                        suppressSyncValues: false,
                        refreshValuesOnOpen: true
                    }
                }
            ]
        }
    },
    
      
    {
        headerName: 'Supply current [mA]',
        field: 'Supply current',
        unSortIcon: true,
        headerTooltip: 'Supply current [mA]',
        tooltipField: 'Supply current hover',
        comparator: (valueA, valueB) => {
            if (valueA == null && valueB == null) return 0;
            if (valueA == null) return -1;
            if (valueB == null) return 1;
    
            const numA = parseFloat(valueA);
            const numB = parseFloat(valueB);
    
            if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
            if (!isNaN(numA)) return -1;
            if (!isNaN(numB)) return 1;
    
            if (valueA < valueB) return -1;
            if (valueA > valueB) return 1;
            return 0;
        },
        filter: 'agMultiColumnFilter',
        filterParams: {
            filters: [
                {
                    filter: 'agNumberColumnFilter',
                    filterParams: {
                        filterOptions: ['greaterThan', 'lessThanOrEqual', 'inRange'],
                    }
                },
                {
                    filter: 'agSetColumnFilter',
                    filterParams: {
                        suppressSyncValues: false,
                        refreshValuesOnOpen: true
                    }
                }
            ]
        }
    },
    

    {
        headerName: 'Supply voltage [V]',
        field: 'Supply voltage',
        unSortIcon: true,
        headerTooltip: 'Supply voltage [V]',
        tooltipField: 'Supply voltage hover',
        filter: 'agSetColumnFilter',
        valueGetter: supplyVoltageValueGetter,
        filterParams: {
            values: getUniqueSupplyVoltageValues,
            suppressSyncValues: false,
            refreshValuesOnOpen: true
        },
        valueFormatter: supplyVoltageValueFormatter,
    },
    
        
        {
            headerName: 'Technology',
            field: 'Technology',
            unSortIcon: true,
            hide: true,
            headerTooltip: 'Technology',
            filter: 'agSetColumnFilter',
            filterParams: {
                values: ['Hall', 'Inductive'],  // Ensure both values appear in the filter
                applyMiniFilterWhileTyping: true, // Enables live searching inside the filter
                suppressSyncValues: false,
                refreshValuesOnOpen: true
            }
        },        

        {
            headerName: 'Motion',
            field: 'Motion',
            unSortIcon: true,
            headerTooltip: 'Motion',
            filter: 'agSetColumnFilter',
            valueGetter: motionValueGetter,
            filterParams: {
                values: getUniqueMotionValues,
                suppressSyncValues: false,
                refreshValuesOnOpen: true
            },
            valueFormatter: motionValueFormatter,
        },
        
        
            
        {
            headerName: 'Processing',
            field: 'Processing',
            unSortIcon: true,
            headerTooltip: 'Processing',
            filter: 'agSetColumnFilter',
            valueGetter: processingValueGetter,
            filterParams: {
                values: getUniqueProcessingValues,
                suppressSyncValues: false,
                refreshValuesOnOpen: true
            },
            valueFormatter: processingValueFormatter,
        },
        
        

        {
            headerName: 'Sensitive Axis',
            field: 'Sensitive axis',
            hide: true,
            unSortIcon: true,
            headerTooltip: 'Sensitive Axis',
            tooltipField: 'Sensitive axis hover',
            filter: 'agSetColumnFilter',
            valueGetter: sensitiveAxisValueGetter,
            filterParams: {
                values: getUniqueSensitiveAxisValues,
                suppressSyncValues: false,
                refreshValuesOnOpen: true
            },
            valueFormatter: sensitiveAxisValueFormatter,
        },
             

        {
            headerName: 'Stray field',
            field: 'Stray field',
            unSortIcon: true,
            headerTooltip: 'Stray field',
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    { filter: 'agTextColumnFilter' },
                    {
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true
                        }
                    }
                ]
            }
        },
        

        {
            headerName: 'Package',
            field: 'Package',
            unSortIcon: true,
            headerTooltip: 'Package',
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    { filter: 'agTextColumnFilter' },
                    {
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true
                        }
                    }
                ]
            }
        },
        

        {
            headerName: 'Trim&form',
            field: 'Trim&form',
            unSortIcon: true,
            headerTooltip: 'Trim&form',
            hide: true,
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    { filter: 'agTextColumnFilter' },
                    {
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true
                        }
                    }
                ]
            }
        },
        

        {
            headerName: 'Output',
            field: 'Output',
            unSortIcon: true,
            headerTooltip: 'Output',
            minWidth: 315,
            filter: 'agSetColumnFilter',
            valueGetter: outputValueGetter,
            filterParams: {
                values: getUniqueOutputValues,
                suppressSyncValues: false,
                refreshValuesOnOpen: true
                },
            valueFormatter: outputValueFormatter,
            tooltipField: 'Output hover',
        },
        

        {
            headerName: 'Input range',
            field: 'Input range',
            unSortIcon: true,
            headerTooltip: 'Input range',
            hide: true,
            comparator: (valueA, valueB) => {
                if (valueA == null && valueB == null) return 0;
                if (valueA == null) return -1;
                if (valueB == null) return 1;
        
                const numA = parseFloat(valueA);
                const numB = parseFloat(valueB);
        
                if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
                if (!isNaN(numA)) return -1;
                if (!isNaN(numB)) return 1;
        
                if (valueA < valueB) return -1;
                if (valueA > valueB) return 1;
                return 0;
            },
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    {
                        filter: 'agNumberColumnFilter',
                        filterParams: {
                            filterOptions: ['greaterThan', 'lessThanOrEqual', 'inRange'],
                        }
                    },
                    {
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true
                        }
                    }
                ]
            }
        },
        

        {
            headerName: 'Magnet TC [ppm/degC]',
            field: 'Magnet TC',
            unSortIcon: true,
            headerTooltip: 'Magnet TC [ppm/degC]',
            hide: true,
            minWidth: 210,
            comparator: (valueA, valueB) => {
                if (valueA == null && valueB == null) return 0;
                if (valueA == null) return -1;
                if (valueB == null) return 1;
        
                const numA = parseFloat(valueA);
                const numB = parseFloat(valueB);
        
                if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
                if (!isNaN(numA)) return -1;
                if (!isNaN(numB)) return 1;
        
                if (valueA < valueB) return -1;
                if (valueA > valueB) return 1;
                return 0;
            },
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    {
                        filter: 'agNumberColumnFilter',
                        filterParams: {
                            filterOptions: ['greaterThan', 'lessThanOrEqual', 'inRange'],
                        }
                    },
                    {
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true
                        }
                    }
                ]
            }
        },
        
        {
            headerName: 'AEC-Q100',
            field: 'AEC-Q100',
            unSortIcon: true,
            headerTooltip: 'AEC-Q100',
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    { filter: 'agTextColumnFilter' },
                    {
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true
                        }
                    }
                ]
            }
        },
        

        {
            headerName: 'ASIL',
            field: 'ASIL',
            unSortIcon: true,
            headerTooltip: 'ASIL',
            filter: 'agMultiColumnFilter',
            filterParams: {
                filters: [
                    { filter: 'agTextColumnFilter' },
                    {
                        filter: 'agSetColumnFilter',
                        filterParams: {
                            suppressSyncValues: false,
                            refreshValuesOnOpen: true
                        }
                    }
                ]
            }
        },
        

        {
            headerName: 'Extra',
            field: 'Extra',
            unSortIcon: true,
            headerTooltip: 'Extra',
            filter: 'agSetColumnFilter',
            valueGetter: extraValueGetter,
            filterParams: {
                values: getUniqueExtraValues,
                suppressSyncValues: false,
                refreshValuesOnOpen: true
            },
            valueFormatter: extraValueFormatter,
            tooltipField: 'Extra hover',
        },
        
         
        
        {
            headerName: 'Product page',
            field: 'Product page',
            headerTooltip: 'Visit product page',
            hide: true,
            cellRenderer: function(params) {
                if(params.value) {
                    return '<a href="' + params.value + '" target="_blank" style="color: inherit; text-decoration: none;"><i class="fa fa-external-link-alt" title="Open product page"></i></a>';
                } else {
                    return '';
                }
            }
        }
 

    ],
    rowData: [],
    rowSelection: 'multiple',
    statusBar: {
        statusPanels: [
            { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
            { statusPanel: 'agFilteredRowCountComponent', align: 'left' },
            { statusPanel: 'agSelectedRowCountComponent', align: 'left' }
        ],
    },
    rowMultiSelectWithClick: true,
    onFilterChanged: function() {
        updateClearFiltersButton();
        updateButtonStates(); // Call the function to update button states
    }
};

// Function to update the button states based on selection and filter status
function updateButtonStates() {
    var selectedRows = gridOptions.api.getSelectedRows();
    var deselectButton = document.getElementById('deselectAllButton');
    var exportButton = document.getElementById('exportSelectedButton');
    var clearFiltersButton = document.getElementById('clearFiltersButton');
    var filterModel = gridOptions.api.getFilterModel();
    var hasFilters = Object.keys(filterModel).length > 0;

    // Update buttons for row selection
    if (selectedRows.length > 0) {
        deselectButton.classList.remove('disabled');
        exportButton.classList.remove('disabled');
    } else {
        deselectButton.classList.add('disabled');
        exportButton.classList.add('disabled');
    }

    // Update button for filters
    if (hasFilters) {
        clearFiltersButton.classList.remove('disabled');
    } else {
        clearFiltersButton.classList.add('disabled');
    }
}

// Function to auto-size all columns
function autoSizeAllColumns() {
    var allColumnIds = [];
    gridOptions.columnApi.getColumns().forEach(function(column) {
        allColumnIds.push(column.getColId());
    });
    gridOptions.columnApi.autoSizeColumns(allColumnIds);
    gridOptions.api.sizeColumnsToFit(); // Make sure columns fit the full width of the grid
}

// Function to clear all filters
function clearAllFilters() {
    gridOptions.api.setFilterModel(null);
    gridOptions.api.onFilterChanged();
    updateClearFiltersButton(); // Ensure button visibility is updated after clearing filters
}

// Function to update the visibility of the clear filters button
function updateClearFiltersButton() {
    var clearFiltersButton = document.getElementById('clearFiltersButton');
    var filterModel = gridOptions.api.getFilterModel();
    var hasFilters = Object.keys(filterModel).length > 0;

    if (hasFilters) {
        clearFiltersButton.classList.add('show');
    } else {
        clearFiltersButton.classList.remove('show');
    }
    updateButtonStates(); // Call the function to update button states
}

// Get reference to AG-Grid element
var gridDiv = document.querySelector('#ag-grid');

// Create AG-Grid
new agGrid.Grid(gridDiv, gridOptions);

// Ensure updateButtonStates is called when the grid is ready
gridOptions.onGridReady = function() {
    updateButtonStates();
    autoSizeAllColumns(); // Auto-size columns based on header width

    // ✅ Apply the default filter to show only "Hall" and hide "Inductive"
    setTimeout(() => {
        gridOptions.api.getFilterInstance('Technology', function(filterInstance) {
            filterInstance.setModel({ values: ["Inductive"] }); // ✅ Only show Hall initially
            gridOptions.api.onFilterChanged(); // ✅ Apply the filter
        });
    }, 300);
};


// Fetch data from Github repo
fetch('https://api.github.com/repos/MelexisBC/Wizard--Magnetic-Position-Sensor-ICs-Data/contents/Magnetic-position-sensor-ICs-Wizard-Data.csv', {
    headers: {
        'Accept': 'application/vnd.github.v3.raw'  // This forces the GitHub API to return the raw file content
    }
})
    .then(function (response) {
        return response.text();
    })
    .then(function (csv) {
        var jsonData = Papa.parse(csv, { header: true }).data;

        // If data exists, set row data and hide the overlay
        if (jsonData.length > 0) {
            gridOptions.api.setRowData(jsonData);
            gridOptions.api.hideOverlay();  // Hide the 'Loading...' message when data is loaded
        } else {
            // Show 'No data to display' message if there's no data
            gridOptions.api.showNoRowsOverlay(); 
            document.querySelector('.ag-overlay-no-rows-center').innerHTML = 'No data to display';
        }

        autoSizeAllColumns();
        updateButtonStates();
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
        // In case of an error, show 'No data to display' message
        gridOptions.api.showNoRowsOverlay();
        document.querySelector('.ag-overlay-no-rows-center').innerHTML = 'Error fetching data';
    });


// Search
var searchInput = document.querySelector('#searchInput');

searchInput.addEventListener('input', function() {
    var searchText = searchInput.value;
    gridOptions.api.setQuickFilter(searchText);
    updateButtonStates(); // Call the function to update button states
});

async function exportSelectedRowsToExcel() {
    var selectedRows = gridOptions.api.getSelectedRows();
    console.log("Export function triggered with selected rows: ", selectedRows);

    if (selectedRows.length > 0) {
        // Create a new workbook and worksheet
        var workbook = new ExcelJS.Workbook();
        var worksheet = workbook.addWorksheet('Sheet1');

        // Specify the columns to exclude
        var columnsToExclude = ['Supply current hover', 'Output hover', 'Extra hover', 'Sensitive axis hover', 'Supply voltage hover'];

        // Define worksheet columns using grid column definitions, excluding specified columns
        var worksheetColumns = gridOptions.columnDefs
            .filter(def => !columnsToExclude.includes(def.field))
            .map(def => {
                return {
                    header: def.headerName || def.field,
                    key: def.field,
                    width: 20 // Default width; adjust as needed
                };
            });

        worksheet.columns = worksheetColumns;

        // Add rows to the worksheet with filtered data
        selectedRows.forEach(rowData => {
            // Create a new object including only the included columns
            var filteredRowData = {};
            worksheetColumns.forEach(column => {
                filteredRowData[column.key] = rowData[column.key];
            });
            worksheet.addRow(filteredRowData);
        });

        // Apply styles to the header and adjust column widths
        worksheet.columns.forEach((column, index) => {
            var cell = worksheet.getCell(1, index + 1);
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FF00354B' }
            };
            cell.font = {
                color: { argb: 'FFFFFFFF' },
                bold: true
            };

            // Adjust column width based on the maximum length of data in each column
            var maxLength = column.header.length;
            column.eachCell({ includeEmpty: true }, function(cell) {
                var cellValue = cell.value ? cell.value.toString() : '';
                if (cellValue.length > maxLength) {
                    maxLength = cellValue.length;
                }
            });
            column.width = maxLength < 20 ? 20 : maxLength;
        });

        // Write the workbook to a buffer and trigger the download
        var buffer = await workbook.xlsx.writeBuffer();
        var blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Melexis_Inductive_Position_Sensor_ICs_Selected_Rows.xlsx';
        console.log("Download link created and clicked");
        link.click();
    } else {
        console.warn('No rows selected for export.');
    }
}

// Function to select all rows
function selectAllRows() {
    console.log("Select All Rows button clicked"); // Debugging line
    if (gridOptions && gridOptions.api) {
        gridOptions.api.selectAll();
        updateButtonStates(); // Ensure button states are updated
    } else {
        console.error('Grid API is not available.');
    }
}

// Function to deselect all rows
function deselectAllRows() {
    gridOptions.api.deselectAll();
    var deselectButton = document.getElementById('deselectAllButton');
    var exportButton = document.getElementById('exportSelectedButton');
    var selectAllButton = document.getElementById('selectAllButton');

    deselectButton.classList.remove('show');
    exportButton.classList.remove('show');
    selectAllButton.classList.remove('show');
    updateButtonStates(); // Call the function to update button states
}

function exportSelectedRowsToCSV() {
    gridOptions.api.exportDataAsCsv({ onlySelected: true });
}

// Function to export complete table as Excel
async function exportCompleteTableAsExcel() {
    var allRowData = [];
    gridOptions.api.forEachNode(function(node) {
        allRowData.push(node.data);
    });

    if (allRowData.length > 0) {
        // Create a new workbook and worksheet
        var workbook = new ExcelJS.Workbook();
        var worksheet = workbook.addWorksheet('Sheet1');

        // Specify the columns to exclude
        var columnsToExclude = ['Supply current hover', 'Output hover', 'Extra hover', 'Sensitive axis hover', 'Supply voltage hover'];

        // Define worksheet columns using grid column definitions, excluding specified columns
        var worksheetColumns = gridOptions.columnDefs
            .filter(def => !columnsToExclude.includes(def.field))
            .map(def => {
                return {
                    header: def.headerName || def.field,
                    key: def.field,
                    width: 20 // Default width; adjust as needed
                };
            });

        worksheet.columns = worksheetColumns;

        // Add rows to the worksheet with filtered data
        allRowData.forEach(rowData => {
            // Create a new object including only the included columns
            var filteredRowData = {};
            worksheetColumns.forEach(column => {
                filteredRowData[column.key] = rowData[column.key];
            });
            worksheet.addRow(filteredRowData);
        });

        // Apply styles to the header and adjust column widths
        worksheet.columns.forEach((column, index) => {
            var cell = worksheet.getCell(1, index + 1);
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FF00354B' }
            };
            cell.font = {
                color: { argb: 'FFFFFFFF' },
                bold: true
            };

            // Adjust column width based on the maximum length of data in each column
            var maxLength = column.header.length;
            column.eachCell({ includeEmpty: true }, function(cell) {
                var cellValue = cell.value ? cell.value.toString() : '';
                if (cellValue.length > maxLength) {
                    maxLength = cellValue.length;
                }
            });
            column.width = maxLength < 20 ? 20 : maxLength;
        });

        // Write the workbook to file and trigger the download
        var buffer = await workbook.xlsx.writeBuffer();
        var blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Melexis_Inductive_Position_Sensor_ICs_Complete_Table.xlsx';
        console.log("Download link for complete table created and clicked");
        link.click();
    } else {
        console.warn('No data available for export.');
    }
}

// Function to export complete table as CSV
function exportCompleteTableAsCsv() {
    var params = {
        suppressQuotes: false,
        allColumns: true
    };
    gridOptions.api.exportDataAsCsv(params);
}

// Modify button click handlers to prevent actions when disabled
document.getElementById('deselectAllButton').addEventListener('click', function(e) {
    if (e.target.classList.contains('disabled')) return;
    deselectAllRows();
});

document.getElementById('exportSelectedButton').addEventListener('click', function(e) {
    if (e.target.classList.contains('disabled')) return;
    exportSelectedRowsToExcel();
});

document.getElementById('clearFiltersButton').addEventListener('click', function(e) {
    if (e.target.classList.contains('disabled')) return;
    clearAllFilters();
});


// Function to auto-size all columns
function autoSizeAllColumns() {
    var allColumnIds = [];
    gridOptions.columnApi.getColumns().forEach(function(column) {
        allColumnIds.push(column.getColId());
    });
    gridOptions.columnApi.autoSizeColumns(allColumnIds);
    gridOptions.api.sizeColumnsToFit(); // Ensure columns fill the full width of the grid
}