import { useEffect, useState } from "react";
import { getArticles } from "../services/apiService";
import ErrorModal from "../services/ErrorModal";
import { useParams } from "react-router-dom";
import DataList from "./DataList";


function News({ dataList, setDataList, setInfo, info }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);

  const { keyword } = useParams();

  useEffect(() => {
    getArticles({ 
          articlesPage: page, 
          ...(keyword ? { keyword } : {}),
        })
      .then(({ articles, info }) => {
        articles && setDataList([...(dataList || []), ...articles.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => setErrorMessage(error.toString()));
  }, [setDataList, setInfo, page, keyword]);

  return (
    <>
    <DataList info={info} dataList={dataList} page={page} setPage={setPage}/>
    <ErrorModal
          errorMessage={errorMessage}
          handleClose={() => setErrorMessage(null)}
        />
    </>
  );
}


export default News;