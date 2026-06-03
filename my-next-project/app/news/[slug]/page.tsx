import {notFound} from "next/navigation";
import { getNewsDetail } from "../../_libs/microcms";
import Article from "../../components/Article";
import ButtonLink from "../../components/ButtonLink";
import styles from "./page.module.css";

type Props={
    params:{
        slug:string;
    };  
    searchParams: {
    dk?:string;
};
};

export const revalidate = 60;

export default async function Page({params,searchParams}: Props) {
   const data=await getNewsDetail(params.slug, {
   draftKey:searchParams.dk,
}).catch(notFound);
   return(
    <>
    <Article data={data}/>
    <div className={styles.footer}>
    <ButtonLink href="/news">ニュス一覧へ</ButtonLink></div>
    </>
   );
}