import Link from "next/link"

type Props = {}

const page = (props: Props) => {
  return (
    <>
        <h1>Wlcome!</h1>
        <p>Press the button to start.</p>
        <Link href="/dashboard">Start</Link>
    </>
  )
}

export default page