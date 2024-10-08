function bar(){
    const statusbar = document.getElementById('statusbar');
statusbar.innerHTML = `<div style="width: 100vw;height: 8vh;position: fixed;background-color: #263034; display: flex;justify-content: space-between;">
        <h4 style="color: white;margin: 8px 30px 10px; cursor: pointer;" onclick="window.location.href = 'booksadmin.html';">Library Management System</h4>
        <div style="display: flex;justify-content: space-between;">
            <h4 style="color: white;margin: 8px 30px 10px; margin-right: 15vw;" id ="username"> </h4>
            
              <h5 style="color: aliceblue;margin-top: 10px;cursor: pointer;margin-right: 3vw;" onclick="window.location.href = 'userProfile.html?userid=${localStorage.getItem('id')}';">Profile</h5>
              <h5 style="color: aliceblue;margin-top: 10px;cursor: pointer;margin-right: 3vw;" onclick="window.location.href = 'addBook.html';">Add Book</h5>
              <h5 style="color: aliceblue;margin-top: 10px;cursor: pointer;margin-right: 3vw;" onclick="window.location.href = 'adminpanel.html';">Members</h5>
              <h5 style="color: aliceblue;margin-top: 10px;cursor: pointer;margin-right: 3vw;" onclick="logout()">Logout</h5>
            
        </div>
    </div>`
}

async function fetchUserData() {
    const user = await fetchUser()
    const username = document.getElementById('username');
    username.innerHTML = `Hi, ${user.username}`
}

bar()