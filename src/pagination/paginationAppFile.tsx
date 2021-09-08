import React, { useMemo, useState } from "react";
import Pagination from "../pagination/pagination";
import { useSelector } from "react-redux";
import { TaskState } from "../store/types/types";

 // let PageSize = 1;

// export type PaginationData = {
//     currentPage: number;
//     setCurrentPage: any;
// };

export const PaginationAppFile = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    // const data = useSelector((state: TaskState) => state.todos);
    //
    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return data.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage, data]);

    return (
        <>
            {/*<table>*/}
            {/*    <thead>*/}
            {/*        <tr>*/}
            {/*            <th>ID</th>*/}
            {/*            <th>FIRST NAME</th>*/}
            {/*            <th>LAST NAME</th>*/}
            {/*            <th>EMAIL</th>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*        {currentTableData.map((item) => {*/}
            {/*            return (*/}
            {/*                <tr>*/}
            {/*                    <td>{item.id}</td>*/}
            {/*                </tr>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            {/*<Pagination*/}
            {/*    className="pagination-bar"*/}
            {/*    currentPage={currentPage}*/}
            {/*    totalCount={data.length}*/}
            {/*    pageSize={PageSize}*/}
            {/*    onPageChange={(page) => setCurrentPage(page)}*/}
            {/*/>*/}
        </>
    );
};
