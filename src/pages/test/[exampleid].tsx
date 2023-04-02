import { useRouter } from "next/router";

const example = () => {
    const router = useRouter()
    const { exampleid } = router.query as { exampleid: string }
    return (
        <>
            <h1>Hello World !! {exampleid}</h1>
            <button className="btn" onClick={() => router.push("/test")}>Test Button =)</button>
        </>
    )
}
export default example;
