function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    window.location.href = '../login.html';
}

async function fetchUser() {
    try {
        const response = await fetch(`${backendRoute}api/auth/getUser/${localStorage.getItem('id')}`)
        const user = await response.json()
        return user
    } catch (error) {
        alert(error)
    }
}

const backendRoute = "https://library-api-iota.vercel.app/"