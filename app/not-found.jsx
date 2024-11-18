import Image from "next/image";
const notFound = '/404.jpg'
export default function Custom404() {
    return (
        <div className="flex flex-grow flex-col gap-4 items-center justify-center px-14">
            <h1 className="text-3xl text-red-400 font-bold">404 - Page Not Found</h1>
            <Image
                src={notFound}
                width={200}
                height={300}
                alt="a picture of penguin lost in greenery"
            />
        </div>
    )
}