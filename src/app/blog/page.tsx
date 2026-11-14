import { Suspense } from "react"
import Image from "next/image"

export default function Blog() {
  timeout(1000);

  return <>
    <h1>My Blog</h1>
    <Suspense fallback={<LoadingText />}>
      <BlogContents />
    </Suspense>
  </>
}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function BlogContents() {
  await timeout(1000);
  return <Image src="/funny-cat.png" width={500} height={300} alt="funny patrick image" />
}

function LoadingText() {
  return <p>Loading...</p>
}
