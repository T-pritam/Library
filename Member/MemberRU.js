async function fetchUserById(param1) {
    const response = await fetch(`${backendRoute}api/auth/getUser/${param1}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const user = await response.json();
    return user
}

async function updateUserById(id,data){
  await fetch(`${backendRoute}api/auth/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify( data )
  })
}

async function deleteUserById(id) {
  console.log("USer delete")
  await fetch(`${backendRoute}api/auth/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }})

  alert("User Deleted Successfully")
  logout()
  window.location.href = '../login.html';
} 