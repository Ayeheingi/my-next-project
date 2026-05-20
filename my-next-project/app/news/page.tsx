import { getNewsList } from "../_libs/microcms";    
import NewsList from "../components/NewsList";
export default async function News() {
    const {contents:news} = await getNewsList();

    return <NewsList news={news} />;
}