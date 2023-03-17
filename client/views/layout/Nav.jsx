import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from "react-router-dom";
import "../../resources/main.css"

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><HomeRoundedIcon className="icon" /><span className="menu"></span></Link>
        </li>
        <li>
          <Link to="/pages/register">회원가입</Link>
        </li>
        <li>
          <Link to="/pages/petregister">게시물등록</Link>
        </li>
        <li>
          <Link to="#">서비스매칭</Link>
        </li>
        <li>
          <Link to="/pages/video">소개영상</Link>
        </li>
      </ul>
    </nav>
  );
}
