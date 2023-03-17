import React from 'react'
import { Link, useNavigate } from "react-router-dom";

import Table from '../components/ui/Table.jsx'
import Button from '../components/ui/Button.jsx';


export default function PetList() {
  //동적으로 URL(페이지)를 변경할 때 사용
  const navigate = useNavigate();

  const [petListData, setPetListData] = React.useState([]);

  const careRequestSelectList = () => {
    console.log('careRequestSelectList 실행!!');
    fetch("/careRequestSelectList.json", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
    }).then((response) => response.json()).then((data) => {
      console.log(data);
      setPetListData(data);
    }).catch((error) => {
      console.log('getData() /getData error : ', error);
    });
  }

  React.useEffect(() => {
    careRequestSelectList();
  }, [])

  //상세 조회 페이지 이동
  const goPetDetailPage = (item) => {
    console.log('goPetDetailPage item : ', item);
    let urlParam = {
      state: {
        care_request_number: item['care_request_number']
      }
    }
    //navigate('/pages/petDetail', {state:{care_request_number: item['care_request_number']}});
    navigate('/pages/petDetail', urlParam);
  }
  const petHeaderList = [
    "no", "제목", "등록일", "등록자"
  ];
  return (
    <div>
      <Table data={petListData} header={petHeaderList} onClick={goPetDetailPage} />
      <Link to="/pages/petregister">
        <Button title={'게시물 등록'}></Button>
      </Link>
    </div>
  )
}
