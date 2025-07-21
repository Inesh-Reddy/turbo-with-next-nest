const getData = async () => {
  const res = await fetch("http://localhost:3000");
  return res.json();
};

export default async function TodoPage() {
  let data = null;
  let error = null;

  try {
    data = await getData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any | unknown | undefined) {
    error = err.message;
  }

  return (
    <div>
      <h1>Data from NestJS Backend</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
