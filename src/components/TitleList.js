import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function TitleList(props) {
  let titles = "";
  if (props.movies) {
    titles = props.movies.map(function (title, i) {
      if (i < 5) {
        return (
          <Item key={title.id} movie={title} />
        );
      }
      return (<div key={title.id} />);
    });
  }

  return (
    <div
      className="TitleList"
      data-loaded={props.movies && props.movies.length > 0}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {titles}
        </div>
      </div>
    </div>
  );
}

TitleList.propTypes = {
  movies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleList;
