type FreeTag = {
    tag?: string
}
export default function FreeTag({tag = "Free"}:FreeTag) {
  return (
    <>
        <span className="rounded bg-green-600 text-white py-2 px-6 text-sm ">
            {tag}
        </span>
    </>
  );
}