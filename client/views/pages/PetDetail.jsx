import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/ui/Button.jsx";

const PetDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    console.log('location.state : ', location.state);

    //careRequest 상세 정보 변수 선언(초기화)
    const [careRequest, setCareRequest] = useState({
        care_request_number: 0,
        care_request_title: '',
        care_request_content: '',
        pet_name: '',
        pet_age: 0,
        pet_animal_type: '',
        pet_animal_kind: '',
        pet_sex: '',
        care_request_insert_datetime: '',
        care_request_insert_user_id: '',
        matching_datetime: null,
        matching_status: null,
        care_provide_user_id: null
    });


    const careRequestSelectOne = () => {
        console.log('careRequestSelectOne 실행!!');
        let httpRequestUrl = `/careRequestSelectOne.json?care_request_number=${location.state['care_request_number']}`;
        console.log('httpRequestUrl : ', httpRequestUrl);

        fetch(httpRequestUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        }).then((response) => response.json()).then((data) => {
            console.log("careRequestSelectOne() /careRequestSelectOne data : ", data);
            setCareRequest(data[0]);
        }).catch((error) => {
            console.log('careRequestSelectOne() /careRequestSelectOne error : ', error);
        });
    }

    React.useEffect(() => {
        careRequestSelectOne();
    }, [])

    //목록으로 이동하는 함수 정의
    const goPetListPage = () => {
        navigate('/');
    }

    //수정페이지로 이동하는 함수 정의
    const goPetUpdatePage = () => {
        navigate('/pages/petUpdate', { state: { care_request_number: location.state['care_request_number']}});
    }

    //careRequest 정보 삭제 함수 정의
    const careRequestDelete = () => {
        //사용자가 '예'를 누르면 true, '아니오'를 누르면 false
        let confirm = window.confirm('삭제하시겠습니까?');
        if(confirm == true){
            let httpRequestUrl = `/careRequestDelete.json?care_request_number=${location.state['care_request_number']}`;
            console.log('httpRequestUrl : ', httpRequestUrl);
            fetch(httpRequestUrl, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
            }).then(function (result) {
                console.log('careRequestDelete() /careRequestDelete.json result : ', result);
                alert('삭제되었습니다!')
                goPetListPage();
            }).catch(function (error) {
                console.log('careRequestDelete() /careRequestDelete.json error : ', result);
            });
        } else {
            return;
        }
    }

    return (
        <>
            <FormStyled>
                <div>
                    <label>제목</label> :
                    <span>{careRequest.care_request_title}</span>
                </div>
                <div>
                    <label>내용</label> :
                    <span>{careRequest.care_request_content}</span>
                </div>
                <div>
                    <label>이름</label> :
                    <span>{careRequest.pet_name}</span>
                </div>
                <div>
                    <label>나이</label> :
                    <span>{careRequest.pet_age}</span>
                </div>
                <div>
                    <label>성별</label> :
                    <span>{careRequest.pet_sex}</span>
                </div>
                <div>
                    <label>동물종</label> :
                    <span>{careRequest.pet_animal_type}</span>
                </div>
                <div>
                    <label>품종</label> :
                    <span>{careRequest.pet_animal_kind}</span>
                </div>
                <div>
                    <label>등록일</label> :
                    <span>{careRequest.care_request_insert_datetime}</span>
                </div>
                <div>
                    <label>등록자</label> :
                    <span>{careRequest.care_request_insert_user_id}</span>
                </div>

                <Button color={"#dddd"} title={"목록으로"} onClick={goPetListPage} />
                <Button color={"#dddd"} title={"수정"} onClick={goPetUpdatePage} />
                <Button color={"#dddd"} title={"삭제"} onClick={careRequestDelete} />

            </FormStyled>
        </>
    );
}
const FormStyled = styled.div`
    width:100%;
    padding: 2rem;
    background-color: white;
    position: relative;
`;
export default PetDetail;

