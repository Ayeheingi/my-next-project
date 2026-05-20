import {notFound} from "next/navigation";
import { getNewsDetail } from "../../_libs/microcms";
import Article from "../../components/Article";
import ButtonLink from "../../components/ButtonLink";
import styles from "./page.module.css";

type Props={
    params:{
        slug:string;
    };  
};

export default async function Page({params}: Props) {
   const data=await getNewsDetail(params.slug).catch(notFound);
   return(
    <>
    <Article data={data}/>
    <div className={styles.footer}>
    <ButtonLink href="/news">ニュス一覧へ</ButtonLink></div>
    </>
   );
}