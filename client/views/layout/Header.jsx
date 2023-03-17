import React from "react";

export default function Header() {

  function logout() {
    fetch("/logout.json", {
      method: "POST",
      // body: JSON.stringify({ 'user_id': user_id, 'password': password }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
    }).then((response) => response.json()).then((data) => {
      console.log('logout() /logout.json result : ', data);
      alert(data.message);
      if (data.isSuccess == true) {
        window.location.href = '/login.html';
      } else { }
      // alert('등록이 완료되었습니다');
      // navigate('/');
    }).catch((error) => {
      console.log('logout() /logout.json error : ', error);
    });
  }


  return (
    <header>
        <h1 className='logo'>펫 케어</h1>
        <button id="btn1" onClick={() => logout()}>로그아웃</button>
    </header>
  )
}