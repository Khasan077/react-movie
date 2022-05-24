import React from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Loading from "./../components/Loading";
import '../index.css'

const url = "http://www.omdbapi.com/?apikey=37fae4f2&s=spider man";

export default class Main extends React.Component {
   state = {
      movies: [],
      loading: true
   };
   componentDidMount() {
      fetch(url)
         .then((response) => response.json())
         .then((data) => this.setState({ movies: data.Search, loading: false }));
   }

   searchMovies = (str, type = 'all') => {
      this.setState({loading: true})
      fetch(`http://www.omdbapi.com/?apikey=37fae4f2&s=${str}${type !== 'all' ? `&type=${type}` : "" }`)
         .then((response) => response.json())
         .then((data) => this.setState({ movies: data.Search, loading: false }));
   }

   render() {
      return (
         <div className="container content">
            <Search searchMovie={this.searchMovies} />
            {this.state.loading  ? (
               <Loading />
            ) : (
               <Movies movies={this.state.movies} />
            )}
         </div>
      );
   }
}
