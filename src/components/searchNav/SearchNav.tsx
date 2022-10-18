import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface ISearchNav {
  setSearchValue: (arg: string) => void;
  searchValue: string;
  children: ReactNode;
}

const SearchNavWrapper = styled.div`
  display: flex;
  width: 400px;

  input {
    height: 100%;
    padding: 10px 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
    flex: 9;
  }

  button {
    flex: 1;
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;

export const SearchNav: React.FC<ISearchNav> = ({
                                                  setSearchValue,
                                                  searchValue,
  children,
}) => {
  return (
    <SearchNavWrapper>
      <input
        type="text"
        placeholder={"search..."}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />

      {children}
    </SearchNavWrapper>
  );
};
