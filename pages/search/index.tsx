import { GetServerSideProps } from "next";
import styles from "./Search.module.css";
import connectMongo from "../../libs/mongodb";
import Product, { IProduct } from "../../models/Product";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query.q;
  console.log(query);
  try {
    await connectMongo();
    const data = await Product.find({
      name: { $regex: query, $options: "i" },
    });
    return {
      props: {
        data: JSON.parse(JSON.stringify(data)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default function Search({ data }: { data: IProduct[] }): JSX.Element {
  console.log(data);
  return (
    <div className={styles.wrapper}>
      {data.length == 0 ? <div>Ничего не найдено</div> : null}
    </div>
  );
}
