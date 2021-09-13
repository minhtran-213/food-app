import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMess] = useResults();

  const filteringResult = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMess ? <Text>{errorMess}</Text> : null}

      <ScrollView>
        <ResultsList results={filteringResult("$")} title="Cost Effective" />
        <ResultsList results={filteringResult("$$")} title="Bit Pricier" />
        <ResultsList results={filteringResult("$$$")} title="Big Spender!" />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
