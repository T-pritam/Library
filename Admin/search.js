function debounce(func, delay) {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
  }

  async function fetchResults(query) {
    try {
    const searchEmpty = document.getElementById('searchEmpty');
      const bookTable = document.querySelector('#data-table tbody');
      const response = await fetch(`${backendRoute}api/books/search/${query}`);
      const books = await response.json();

      bookTable.innerHTML = '';

      // Display the new results
      if (books  && books.length > 0) {
        searchEmpty.innerHTML = '';
        console.log("book");
        books.forEach((book, index) => {
      const bookTableRow = document.createElement('tr');
      bookTableRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.available ? 'Yes' : 'No'}</td>
        <td>
          <button class="btn btn-secondary" onclick="window.location.href = 'bookdetails.html?id=${book._id}';">
            View
          </button>
        </td>
        <td>
          <button class="btn btn-secondary" onclick="window.location.href = 'updatebook.html?id=${book._id}';">
            Update
          </button>
        </td>
        <td>
          <button class="btn btn-secondary" onclick="deleteBook('${book._id}')">
            Delete
          </button>
        </td>
      `;
      bookTable.appendChild(bookTableRow);
    });
      } else {
        searchEmpty.innerHTML = '<p>No results found</p>';
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
}