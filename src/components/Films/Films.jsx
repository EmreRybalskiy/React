import React from "react";

import { useSelector } from "react-redux";

import "./films.css";

export const Films = () => {
  const { data, isLoading } = useSelector(({ films: { data, isLoading } }) => ({
    data,
    isLoading,
  }));
  return (
    <div>
      {isLoading ? (
        <div>Загрузка</div>
      ) : (
        data.map((film) => <p key={film.id}>{film.name}</p>)
      )}
    </div>
  );
};
