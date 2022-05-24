import React from "react";

export default class Search extends React.Component {
   state = {
      search: "spider man",
      type: "all"
   };

   handleKey = (e) => {
      if (e.key === "Enter") {
         this.props.searchMovie(this.state.search);
      }
   };

   handleFilter = (e) => {
       this.setState( () => ({type: e.target.dataset.type}), () => {
          this.props.searchMovie(this.state.search, this.state.type)
       })
   }

   render() {
      return (
         <div className="row search-input">
            <div className="col s12">
               <div className="input-field">
                  <input
                     id="email_inline"
                     placeholder="Search"
                     type="search"
                     className="validate"
                     value={this.state.search}
                     onChange={(e) => this.setState({ search: e.target.value })}
                     onKeyDown={this.handleKey}
                  />
                  <button
                     className="btn search-btn"
                     onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
                  >
                     Search
                  </button>
               </div>
            </div>
            <div>
               <p className="categories">
                  <label>
                     <input
                        class="with-gap"
                        name="type"
                        type="radio"
                        checked={this.state.type === 'all'}
                        onChange={this.handleFilter}
                     />
                     <span>All</span>
                  </label>
                  <label>
                     <input
                        class="with-gap"
                        name="type"
                        type="radio"
                        checked={this.state.type === 'movie'}
                        data-type="movie"
                        onChange={this.handleFilter}
                     />
                     <span>Movies only</span>
                  </label>
                  <label>
                     <input
                        class="with-gap"
                        name="type"
                        type="radio"
                        checked={this.state.type === 'series'}
                        data-type="series"
                        onChange={this.handleFilter}
                     />
                     <span>Series only</span>
                  </label>
               </p>
            </div>
         </div>
      );
   }
}
