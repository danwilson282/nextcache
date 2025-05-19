// app/components/TimestampDisplay.tsx

export default async function TimestampDisplay() {
    // const res = await fetch("http://localhost:3000/api/timestamp", {
    //   next: { revalidate: 5 }, // revalidate cache every 5 seconds
    // });
    const now = new Date();
    const timestamp = now.toISOString();
    // if (!res.ok) {
    //   throw new Error("Failed to fetch timestamp");
    // }
  
    // const data = await res.json();
  
    return (
      <div className="p-4 border rounded shadow">
        {/* <p className="text-sm font-mono text-gray-700">
          Server timestamp: <strong>{data.timestamp}</strong>
        </p> */}
        <p className="text-sm font-mono text-gray-700">
          Client timestamp: <strong>{timestamp}</strong>
        </p>
      </div>
    );
  }
  