function Header({ setSearchQuery, setIsSearch }) {
  return (
    <nav>
      {/* TEST CASE: movieDB */}
      <h1>movieDB</h1>

      {/* TEST CASE: Top Rated */}
      <h2>Top Rated</h2>

      {/* TEST CASE: Upcoming */}
      <h2>Upcoming</h2>

      {/* TEST CASE: search input */}
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button onClick={() => setIsSearch(true)}>Search</button>
    </nav>
  );
}

export default Header;