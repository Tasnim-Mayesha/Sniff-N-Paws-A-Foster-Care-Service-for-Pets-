import React, { useState } from "react";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";

const SearchBar = ({ suggestions, onSearch }) => {
  const [value, setValue] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([]);

  // Autosuggest input value change handler
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  // Autosuggest input focus handler
  const onFocus = () => {
    setSuggestionsList(suggestions);
  };

  // Autosuggest suggestion selection handler
  const onSuggestionSelected = (event, { suggestion }) => {
    onSearch(suggestion);
  };

  // Autosuggest suggestions update handler
  const onSuggestionsFetchRequested = async ({ value }) => {
    const response = await fetch(`http://localhost:3002/customer?q=${value}`);
    const data = await response.json();
    setSuggestionsList(data);
  };

  // Autosuggest suggestions clear handler
  const onSuggestionsClearRequested = () => {
    setSuggestionsList([]);
  };

  // Render method for suggestions
  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  // Autosuggest input properties
  const inputProps = {
    placeholder: "Search...",
    value,
    onChange,
    onFocus,
  };

  return (
    <Autosuggest
      suggestions={suggestionsList}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

SearchBar.propTypes = {
  suggestions: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
