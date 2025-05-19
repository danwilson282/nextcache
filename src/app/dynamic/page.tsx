import TimestampDisplay from "../components/TimeStamp"
export const dynamic = "force-dynamic"

export default async function CachedPage() {
    return(
      <>
      <p>Fully dynamic page</p>
      <TimestampDisplay/>
      </>
    )
  }