import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { constants } from "@/constants";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

interface ProductPageProps {
  title?: string;
  imageUrl?: string;
  ft1?: string;
  ft2?: string;
  ft3?: string;
  ft4?: string;
  description?: string;
}

export default async function productPage({
  title,
  imageUrl,
  description,
  ft1,
  ft2,
  ft3,
  ft4,
}: ProductPageProps) {
  const session = await getServerSession(options);
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl space-y-6 text-center">
        <div className="relative w-full max-w-sm mx-auto aspect-square rounded-lg overflow-hidden">
          <Image
            src={imageUrl as string}
            alt={`${title} Image`}
            width={400}
            height={400}
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-4">
          {title}
        </h1>
        <Link
          href={
            constants[0].TestLink + "?prefilled_email=" + session?.user?.email
          }
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full max-w-xs mx-auto bg-indigo-600 text-white hover:bg-indigo-400 text-lg py-6">
            Buy Now
          </Button>
        </Link>
        <ul className="space-y-2 text-left max-w-md mx-auto">
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-indigo-600 flex-shrink-0" />
            <span>{ft1}</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-indigo-600 flex-shrink-0" />
            <span>{ft2}</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-indigo-600 flex-shrink-0" />
            <span>{ft3}</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-indigo-600 flex-shrink-0" />
            <span>{ft4}</span>
          </li>
        </ul>
        <p className="text-gray-300 max-w-prose mx-auto ">{description}</p>
      </div>
    </div>
  );
}
