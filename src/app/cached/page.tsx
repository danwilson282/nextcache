import TimestampDisplay from "../components/TimeStamp"
export const revalidate = 30 // seconds

export default async function CachedPage() {
    return(
      <>
      <p>Page cache 30 secs page</p>
      <TimestampDisplay/>
      </>
    )
  }