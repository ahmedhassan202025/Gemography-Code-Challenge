import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "../Components/CardComponent";
const Home = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  const getRepos = async (
    pageNumber = 1,
    year = "2021",
    month = "04",
    day = "26"
  ) => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:>${year}-${month}-${day}&sort=stars&order=desc&page=${pageNumber}`
    );
    console.log(response.data.items[0].owner.avatar_url);
  };

  useEffect(() => {
    getRepos();
  }, []);

  useEffect(() => {
    getRepos(page);
  }, [page]);

  return (
    <div>
      <RepoCard />
    </div>
  );
};
export default Home;