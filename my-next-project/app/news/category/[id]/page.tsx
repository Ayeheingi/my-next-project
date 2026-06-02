import { getCategoryDetail, getNewsList } from "../../../_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "../../../components/NewsList";
import Pagination from "../../../components/Pagination";
import Category from "../../../components/Category";
import { NEWS_LIST_LIMIT } from "../../../components/_constants";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news,totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category category={category} /> の一覧
      </p>
      <NewsList news={news} />
      <Pagination 
        totalCount={totalCount} 
        basePath={`/news/category/${category.id}`} />
    </>
  );
}