import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="flex items-center  justify-between ">
                <Link
                    className="text-blue-700  font-semibold text-3xl   p-4"
                    href={""}
                >
                    SkillSphere
                </Link>
                <nav className="flex gap-8  items-aligned  text-gray-600 font-semibold">
                    <Link href={""} className="p-4">
                        Home
                    </Link>
                    <Link href={""} className="p-4">
                        About
                    </Link>
                    <Link href={""} className="p-4">
                        Contact Us
                    </Link>
                    <Link
                        className="bg-blue-700   rounded-full text-white px-7 py-4 "
                        href={""}
                    >
                        Sign In
                    </Link>
                    <Link
                        href={""}
                        className="bg-blue-700   rounded-full text-white px-6 py-4"
                    >
                        Sign Up
                    </Link>
                </nav>
            </header>
        </>
    );
}
