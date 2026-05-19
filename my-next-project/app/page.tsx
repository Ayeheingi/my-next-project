import styles from "./page.module.css"
import Image from "next/image";
import {getNewsList} from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/components/_constants";
import NewsList from "@/app/components/NewsList";
import ButtonLink from "@/app/components/ButtonLink";
// import { News } from "@/app/_libs/microcms";
// type News ={
//   id:string;
//   title:string;
//   category:{
//     name:string;
//   };
//   publishedAt:string;
//   createdAt:string;
// };
// const data:{
//   contents:News[]} = {
//     contents:[
//       {
//         id:"1",
//         title:
//         "渋谷にオフィスを移転しました",
//         category:{
//           name:"更新情報"
//         },
//         publishedAt:"2023/05/19",
//         createdAt:"2023/05/19",
//     },
//     {
//       id:"2",
//       title:"当社CEOが業界リーダーTOP30に選出されました",
//       category:{
//         name:"更新情報"
//     },    
//     publishedAt:"2023/05/19",
//     createdAt:"2023/05/19",
//     },
//     {
//       id:"3",
//       title:"テストの記事です",
//       category:{
//         name:"更新情報"
//     },    
//     publishedAt:"2023/04/19",
//     createdAt:"2023/04/19",
//     },
//     ],
// };
// const events = [
//   { id: "e1", date: "4月 15日", title: "花見" },
//   { id: "e2", date: "5月 5日", title: "ゴールデンウィークピクニック" },
//   { id: "e3", date: "8月 20日", title: "バーベキュー" },
//   { id: "e4", date: "10月 31日", title: "ハロウィン" },
// ];


export default async function Home() {
  // const sliceData = data.contents.slice(0,2);
  // const sliceData: News = [];
  const data = await getNewsList({
    limit:TOP_NEWS_LIMIT,
  });
  const name ="世界";
  return (
    <>
    <section className={styles.top}>
    <div>
      <h1 className={styles.title}>テクノロジーの力{name}を変える</h1>
      <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
    </div>
    <Image
     className={styles.bgimg}
    src="/img-mv.jpg" 
    alt="" 
    width={4000}
    height={1200}
    />
</section>
<section className={styles.news}>
  <h2 className={styles.newsTitle}>News</h2>
  <NewsList news={data.contents} />
  <div className={styles.newsLink}>
    <ButtonLink href="/news">もっとみる</ButtonLink>
  </div>
</section>
  </>
  );
};