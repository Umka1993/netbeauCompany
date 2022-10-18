import React, { useEffect, useState, useCallback } from "react";
import { DATASET } from "../../data";
import { SearchNav } from "../searchNav/SearchNav";
import { DataList } from "../dataList/DataList";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

export const DataPage = () => {
  const [data, setData] = useState<string[]>(DATASET);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    inputHandler();
  }, [searchValue]);

  useEffect(() => {
    const searchParamsValue = searchParams.get("search");
    if (searchParamsValue) {
      setSearchValue(searchParamsValue);
    }
  }, []);

  const inputHandler = debounce(() => {
    let filteredData: string[] = [];
    setSearchParams(searchValue.length ? { search: searchValue } : {});
    DATASET.filter((str) => {
      if (str.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        filteredData.push(str);
      }
    });

    setData(searchValue.length ? filteredData : DATASET);
  },1000);

  return (
    <>
      <SearchNav setSearchValue={setSearchValue} searchValue={searchValue}>
        {!data.length && (
          <button onClick={() => setSearchValue("")}>clear</button>
        )}
      </SearchNav>

      <DataList data={data} />
    </>
  );
};

export default DataPage;
