import React, { useState, useMemo, useRef, useEffect } from "react";
import ContactBanner from "./ContactBanner";
import styles from "./contact.module.scss";
import axios from "axios";
import "formdata-polyfill";

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ko } from "date-fns/esm/locale";
import DatePicker from "react-datepicker";

const CustomInput = React.forwardRef((props, ref) => (
  <input
      ref={ref}
      id="date"
      name="date"
      className={`${styles.commonFormInput} ${styles.telFormInput}`}
      onClick={props.onClick}
      value={props.value}
      type="text"
      readOnly={true}
  />
));

async function saveDbData(data){

  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();

  var key = year * month * date + (year + month + date);

  var param = {
    COMP_CD: "C0002",                                                                                  //회사코드(C0002 고정값)
    STOR_CD: "",                                                                                       //매장코드(FNB코드와 동일)
    REG_DT: year + ((month >= 10) ? month : '0'+month) + ((date >= 10) ? date : '0'+date),             //등록일자
    REG_TP: "0",                                                                                       //접수처(0: 홈페이지, 1: 매장)
    BRAND_CD: "",                                                                                      //브랜드코드(FNB코드와 동일)
    VISIT_DT: "",                                                                                      //방문일자
    CUST_NM: "",                                                                                       //고객명
    EMAIL: "",                                                                                         //이메일
    HP: "",                                                                                            //전화
    TITLE: "",                                                                                         //제목
    CONTENT: "",                                                                                       //내용
    CLAIM_TP: "",                                                                                      //유형(0: 서비스, 1:메뉴, 2:위생, 3: 기타)
    ANSWER_TP: ""                                                                                      //답변수단(EMAIL, HP)
  };

  data.forEach((value, key) => {
    switch (key) {
      case "brand":
        param.BRAND_CD = value;
        break;
      case "store":
        param.STOR_CD = value;
        break;
      case "date":
        param.VISIT_DT = value.split('-')[0] + value.split('-')[1] + value.split('-')[2];
        break;
      case "name":
        param.CUST_NM = value;
        break;
      case "email":
        param.EMAIL = value;
        break;
      case "tel":
        param.HP = value;
        break;
      case "title":
        param.TITLE = value;
        break;
      case "content":
        param.CONTENT = value;
        break;
      case "sub_type":
        switch(value) {
          case "서비스":
            param.CLAIM_TP = "0";
            break;
          case "메뉴":
            param.CLAIM_TP = "1";
            break;
          case "위생":
            param.CLAIM_TP = "2";
            break;
          case "기타":
            param.CLAIM_TP = "3";
            break;
          default:
            break;
        }
        break;
      case "ANSWER_TP":
        param.ANSWER_TP = value;
        break;
      default:
        break;
    }
  });

  const apiUrl = 
    "https://api.kalisco.co.kr/OuterApi?KEY="+key+"&GUBUN=01&ISJSONPARA=Y";
    //"http://outerpos-test.imtsoft.me/OuterApi?KEY="+key+"&GUBUN=01&ISJSONPARA=Y";

  const json = {list:[param]};
  
  console.log(json);

  var result = await axios
      .post(apiUrl, json, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

  return result.data.RETURN;

}

const get_brands = async () => {

  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();

  var key = year * month * date + (year + month + date);

  var url = 'https://api.kalisco.co.kr/OuterApi/getMaster?KEY='+key+'&GUBUN=BRAND&ISJSONPARA=Y';
  //var url = 'http://outerpos-test.imtsoft.me/OuterApi/getMaster?KEY='+key+'&GUBUN=BRAND&ISJSONPARA=Y';

  try {
    const result = await axios.get(url);
    if(result.status === 200){
      if(result.data.LIST.length > 0){
        return result.data.LIST;
      }
      return null;
    }else{
      return null;
    }
  } catch (error) {
    return null;
  }

}

const get_stores = async (brand) => {

  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();

  var key = year * month * date + (year + month + date);

  var url = 'https://api.kalisco.co.kr/OuterApi/getMaster?KEY='+key+'&GUBUN=STORE&BRAND='+brand+'&ISJSONPARA=Y';
  //var url = 'http://outerpos-test.imtsoft.me/OuterApi/getMaster?KEY='+key+'&GUBUN=STORE&BRAND='+brand+'&ISJSONPARA=Y';

  try {
    const result = await axios.get(url);
    if(result.status === 200){
      if(result.data.LIST.length > 0){
        return result.data.LIST;
      }
      return null;
    }else{
      return null;
    }
  } catch (error) {
    return null;
  }

}

function Contact() {

  const ref= React.createRef();
  const [startDate, setStartDate] = useState(new Date());

  const [description, setDescription] = useState("");
  const textLength = useMemo(() => description.length, [description]);
  const [brands, setBrands] = useState(null);
  const [brand, setBrand] = useState("");
  const [stores, setStores] = useState(null);
  const [store, setStore] = useState("");
  const formRef = useRef(null);
  const [countryNumber, setCountryNumber] = useState("+82");
  const [telNumber, setTelNumber] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    async function fetchBrand() {
      var result = await get_brands();
      setBrands(result);
    }
    fetchBrand();
  }, []);

  function change_brand(brand){
    setBrand(brand);
    async function fetchStore() {
      var result = await get_stores(brand);
      setStores(result);
    }
    fetchStore();
  }

  function get_brand(code){
    if(code !== undefined){
      for(var i=0; i<brands.length; i++){
        if(code === brands[i].BRAND_CD){
          return brands[i].BRAND_NM;
        }
      }
    }
  }

  function get_store(code){
    if(code !== undefined){
      for(var i=0; i<stores.length; i++){
        if(code === stores[i].STOR_CD){
          return stores[i].STOR_NM;
        }
      }
    }
  }

  useEffect(() => {
    const authData = sessionStorage.getItem("tempAuthData");
    if (!authData) {
      window.location.assign("/contact");
    }
    axios
      .post(
        "https://qlog2z6ai2.execute-api.ap-northeast-2.amazonaws.com/kalisco/v1/id/check/decode",
        {
          encodingData: authData,
        }
      )
      .then((res) => {
        const data = JSON.parse(res.data);
        const sName = data["sName"];
        if (!sName) {
          sessionStorage.removeItem("tempAuthData");
          window.location.assign("/contact");
        } else {
          setName(sName);
          setTelNumber(data["sMobileNo"]);
        }
      });
  }, []);

  async function handleSubmit(event) {

    event.preventDefault();
    const data = new FormData(formRef.current);
    
    data.append("phone", countryNumber + telNumber);
    const term = window.parseInt(data.get("term"));
    if (term === 2) {
      window.alert("개인정보 수집 이용에 동의하셔야 합니다.");
      return false;
    }
    let dataObject = {};
    data.forEach((value, key) => {
      switch (key) {
        case "code":
          dataObject[key] = window.parseInt(value);
          break;
        case "brand":
          dataObject[key] = get_brand(value);
          break;
        case "store":
          dataObject[key] = get_store(value);
          break;
        case "content":
          dataObject[key] = value.replace(/\n/g, "\r\n");
          break;
        default:
          dataObject[key] = value;
          break;
      }
    });

    //IMT DB 저장
    if(await saveDbData(data) !== "1"){
      window.alert("메일 발송에 실패했습니다, 관리자에게 문의해주세요.");
      return false;
    }

    const json = JSON.stringify(dataObject);
    const apiUrl =
      //"https://c66ph3esdh.execute-api.ap-northeast-2.amazonaws.com/v1/test/sns";
      // "https://3nbky7tmc7.execute-api.ap-northeast-2.amazonaws.com/kalisco/api/v1";
      "https://8i95jcc1yf.execute-api.ap-northeast-2.amazonaws.com/v1/kalisco/voc";
    axios
      .post(apiUrl, json, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        window.alert("메일 발송에 성공했습니다!");
        sessionStorage.removeItem("tempAuthData");
        document.location.reload();
      })
      .catch(() => {
        window.alert("메일 발송에 실패했습니다, 관리자에게 문의해주세요.");
        return false;
      });
  }

  const handleContentLimit = (value) => {
    var pattern=/[\']/gi
    if(pattern.test(value)){
      return alert("작은 따옴표는 입력하실 수 없습니다.");
    }else{
      setDescription(value);
    }
  }

  return (
    <>
      <ContactBanner subject="contact" />
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactTitle}>문의 작성</div>
          <div className={styles.contactFormPanel}>
            <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="name" className={styles.commonFormLabel}>
                    성명
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className={`${styles.commonFormInput} ${styles.writerFormInput}`}
                  defaultValue={name}
                  readOnly={Boolean(name)}
                />
              </div>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="email" className={styles.commonFormLabel}>
                    이메일
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className={`${styles.commonFormInput} ${styles.writerFormInput}`}
                />
              </div>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="mobile" className={styles.commonFormLabel}>
                    휴대폰 번호
                  </label>
                </div>
                <div className="d-flex">
                  <div>
                    <select
                      name="mobile"
                      id="mobile"
                      className={`${styles.commonSelectInput} ${styles.telSelectInput}`}
                      defaultValue="+82"
                      required
                      onChange={(e) => setCountryNumber(e.target.value)}
                    >
                      <option value="+82">+82</option>
                    </select>
                  </div>
                  <div className="position-relative">
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="휴대폰 번호 입력"
                      required
                      onInput={(e) => setTelNumber(e.target.value)}
                      className={`${styles.commonFormInput} ${styles.telFormInput}`}
                      defaultValue={telNumber}
                      readOnly={Boolean(telNumber)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div className="d-flex">
                  <div style={{marginRight: '10px'}}>
                    <div>
                      <label
                        htmlFor="sub_type"
                        className={styles.commonFormLabel}
                      >
                        방문일자
                      </label>
                    </div>
                    <div className="position-relative">
                      <DatePicker
                        locale = {ko}
                        selected={startDate}
                        onChange={date => setStartDate(date)} 
                        dateFormat="yyyy-MM-dd"
                        customInput = {
                          <CustomInput ref={ref} />
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="sub_type"
                        className={styles.commonFormLabel}
                      >
                        유형
                      </label>
                    </div>
                    <div className="position-relative">
                      <select
                        name="sub_type"
                        id="sub_type"
                        className={`${styles.commonSelectInput} ${styles.categorySubInput}`}
                        defaultValue=""
                        required
                      >
                        <option value="" hidden disabled>
                          선택
                        </option>
                        <option value="서비스">서비스</option>
                        <option value="메뉴">메뉴</option>
                        <option value="위생">위생</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div>
                  <div>
                    <label
                      htmlFor="answer"
                      className={styles.commonFormLabel}
                    >
                      답변수단
                    </label>
                  </div>
                  <div className="position-relative d-flex">
                    <input id="email_answer" name="ANSWER_TP" className={styles.checkbox} type="radio" value="EMAIL" />
                    <label htmlFor="email_answer" className={styles.label}>Mail</label>
                    <input id="phone_answer" name="ANSWER_TP" className={styles.checkbox} type="radio" value="HP" />
                    <label htmlFor="phone_answer" className={styles.label}>전화</label>
                  </div>
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div className="d-flex">
                  <div>
                    <div>
                      <label htmlFor="code" className={styles.commonFormLabel}>
                        브랜드
                      </label>
                    </div>
                    <div>
                    <select
                        name="brand"
                        id="brand"
                        className={`${styles.commonSelectInput} ${styles.categorySelectInput}`}
                        defaultValue={brand}
                        onChange={(e) => change_brand(e.target.value)}
                        required
                      >
                        <option value="" hidden disabled>
                          선택
                        </option>
                        {brands &&
                            brands.map((d, i) => (
                              <option value={d.BRAND_CD} key={i}>
                                {d.BRAND_NM}
                              </option>
                            ))}
                      </select>
                    </div>
                  </div>
                  {stores && (
                    <div>
                      <div>
                        <label
                          htmlFor="store"
                          className={styles.commonFormLabel}
                        >
                          매장
                        </label>
                      </div>
                      <div className="position-relative">
                        <select
                          name="store"
                          id="store"
                          className={`${styles.commonSelectInput} ${styles.categorySubInput}`}
                          defaultValue=""
                          onChange={(e) => setStore(e.target.value)}
                          required
                        >
                          <option value="" hidden disabled>
                            선택
                          </option>
                          {stores &&
                            stores.map((d, i) => (
                              <option value={d.STOR_CD} key={i}>
                                {d.STOR_NM}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="title" className={styles.commonFormLabel}>
                    제목
                  </label>
                </div>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={`${styles.titleInput}`}
                  placeholder="제목을 입력해주세요."
                  required
                />
              </div>
              <div className={styles.formWrapper}>
                <div>
                  <label htmlFor="content" className={styles.commonFormLabel}>
                    내용
                  </label>
                </div>
                <div className={styles.descriptionPanel}>
                  <div>
                    <textarea
                      name="content"
                      id="content"
                      placeholder="600자 이내로 내용을 입력해주세요."
                      value={description}
                      onInput={(e) => handleContentLimit(e.target.value)}
                      // onClick={handleContentLimit}
                      maxLength={600}
                      className={styles.description}
                      required
                    />
                  </div>
                  <div className={styles.countText}>{textLength} / 600</div>
                </div>
              </div>
              <div className={styles.formWrapper}>
                <div className={styles.commonFormLabel}>
                  [개인정보 수집·이용 안내]
                </div>
                <div>
                  <table className={styles.termTable}>
                    <tbody>
                      <tr>
                        <td className={styles.tdTitle}>
                          수집 목적 및 이용목적
                        </td>
                        <td>
                          서비스이용에 따른 본인인증 확인, 고객 문의에 대한
                          상담내용 접수 및 상담결과 회신
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.tdTitle}>수집항목</td>
                        <td>성명, 이메일, 휴대폰 번호</td>
                      </tr>
                      <tr>
                        <td className={styles.tdTitle}>보유 및 이용기간</td>
                        <td>
                          <span style={{ paddingLeft: "16px" }}>
                            회원정보만을 추출하여 별도로 축적하지는 않으며,
                            고객문의 사항과 함께 보존됩니다.
                          </span>
                          <ul>
                            <li>
                              계약 또는 청약철회 등에 관한 기록 :
                              5년 (전자상거래등에서의 소비자보호에 관한 법률)
                            </li>
                            <li>
                              대금결제 및 재화 등의 공급에 관한 기록:
                              5년 (전자상거래등에서의 소비자보호에 관한 법률)
                            </li>
                            <li>
                              소비자의 불만 또는 분쟁처리에 관한 기록 :
                              3년 (전자상거래등에서의 소비자보호에 관한 법률)
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className={styles.termDescription}
                  style={{ margin: "4px 0" }}
                >
                  *나이스평가정보에서 인증 받은 휴대폰 번호를 사용하고 있습니다.
                  <br />
                  *수집항목에 동의를 거부할 수 있으며, 동의를 거부 시
                  문의서비스를 등록하실 수 없습니다.
                </div>
                <div className={styles.checkboxInlineGroup}>
                  <div className={styles.checkboxInline}>
                    <input
                      type="radio"
                      name="term"
                      value="1"
                      id="term-agree"
                      required="required"
                      className={styles.checkboxInlineRadio}
                    />
                    <label htmlFor="term-agree">동의합니다.</label>
                  </div>
                  <div className={styles.checkboxInline}>
                    <input
                      type="radio"
                      name="term"
                      value="2"
                      id="term-disagree"
                      className={styles.checkboxInlineRadio}
                      required="required"
                    />
                    <label htmlFor="term-disagree">동의하지 않습니다.</label>
                  </div>
                </div>
              </div>
              <div className={styles.formSubitButtonWrapper}>
                <div>
                  <button type="reset" className={styles.resetButton}>
                    취소
                  </button>
                </div>
                <div>
                  <button type="submit" className={styles.submitButton}>
                    완료
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
