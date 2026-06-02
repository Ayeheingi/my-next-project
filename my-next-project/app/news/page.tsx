import { getNewsList } from "../_libs/microcms";    
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";
import SearchField from "../components/SearchField";
import { NEWS_LIST_LIMIT } from "../components/_constants";
export default async function News() {
    const {contents:news,totalCount}=await getNewsList({
        limit:NEWS_LIST_LIMIT,
    });

return (
    <>
    <SearchField />
    <NewsList news={news}/>
    <Pagination totalCount={totalCount}/>
    </>
);
}