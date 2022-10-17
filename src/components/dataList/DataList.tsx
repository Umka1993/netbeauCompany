import React from "react";

interface IDataList {
  data: string[];
}

export const DataList: React.FC<IDataList> = ({ data }) => {
  return (
    <>
      {data.length ? (
        <div>
          <ul>
            {data.map((str) => (
              <li key={str}>{str}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>X</p>
      )}
    </>
  );
};
