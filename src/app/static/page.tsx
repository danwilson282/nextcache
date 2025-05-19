import TimestampDisplay from "../components/TimeStamp"
export const dynamic = "force-static"

export default async function CachedPage() {
    return(
      <>
      <p>Fully static page</p>
      <TimestampDisplay/>
      </>
    )
  }