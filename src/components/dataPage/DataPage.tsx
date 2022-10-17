import React, { useEffect, useState } from "react";
import { DATASET } from "../../data";
import { SearchNav } from "../searchNav/SearchNav";
import { DataList } from "../dataList/DataList";
import { useSearchParams } from "react-router-dom";

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

  const inputHandler = () => {
    let filteredData: string[] = [];
    setSearchParams({ search: searchValue });

    DATASET.filter((str) => {
      if (str.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        filteredData.push(str);
      }
    });

    setData(searchValue.length ? filteredData : DATASET);
  };

  return (
    <>
      <SearchNav
        setSearchValue={setSearchValue}
        data={data}
        searchValue={searchValue}
      />

      <DataList data={data} />
    </>
  );
};

export default DataPage;
