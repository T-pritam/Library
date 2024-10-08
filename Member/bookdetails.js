async function fetchBookById(param1) {
    console.log("param11 : ", param1);
    if (param1!=null) {
        const response = await fetch(`http://localhost:5000/api/books/${param1}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const getBook = await response.json();
        return getBook
    }
    else {
        alert("No book found")
    }
    
}