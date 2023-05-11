import { IProduct } from "@/models/Product";
import router from "next/router";

interface IProducts {
  data: IProduct[];
}

export default function Help({ data }: IProducts): JSX.Element {
  const renderItem = data.map((item, id) => {
    const handleDelete = async () => {
      try {
        await fetch(`/api/deleteProduct?id=${item._id}`, {
          method: "Delete",
        });
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <li key={id}>
        <div>{item.name}</div>
        <div>{item._id}</div>
        <button onClick={() => handleDelete()}>delete</button>
      </li>
    );
  });
  return <div>{renderItem}</div>;
}

export async function getServerSideProps() {
  const res = await fetch(`http://91.210.170.61/api/getAllProducts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data: data.product } };
}
