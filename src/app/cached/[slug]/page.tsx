
// import TimestampDisplay from "../../components/TimeStamp";

// export const revalidate = 30;

// type Props = {
//     params: {
//       slug: string;
//     };
//   };

// // ✅ Static generation for one slug
// export async function generateStaticParams() {
//   return [{ slug: "listed" }];
// }

// // ✅ Page component with correct props
// export default async function SlugPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;

//   return (
//     <>
//       <h1 className="text-2xl font-bold">Dynamic Slug Page</h1>
//       <p className="mt-4">
//         You are viewing:{" "}
//         <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code>
//       </p>
//       <p>Page cache 30 secs page</p>
//       <TimestampDisplay />
//     </>
//   );
// }
export default async function SlugPage() {
    return (
        <>Not working yet</>
    )
}

