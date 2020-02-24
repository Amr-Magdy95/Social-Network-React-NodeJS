export const read = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`,{
    method: "GET",
    headers:{
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
}

export const list = () =>{
  return fetch(`${process.env.REACT_APP_API_URL}/users`,{
    method: "GET",
  })
}

export const remove = (userId, token) =>{
  return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`,{
    method: "DELETE",
    headers:{
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
}

export const update = (userId, token, user) =>{
  console.log("apiUser update methods", user)
  return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`,{
    method: "PUT",
    headers:{
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: user
  })
}

export const updateUser = (user, next) =>{
  if(typeof window !== 'undefined'){
    if(localStorage.getItem('jwt')){
      let auth = JSON.parse(localStorage.getItem('jwt'))
      auth.user = user
      localStorage.setItem('jwt', JSON.stringify(auth))
      next()
    }
  }
}