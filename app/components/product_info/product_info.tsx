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
}

export default async function productPage({
  title,
  imageUrl,
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
          className="w-full"
        >
          <Button className="w-full max-w-xs mx-auto bg-white text-black hover:bg-gray-200 text-lg py-6">
            Buy Now
          </Button>
        </Link>
        <ul className="space-y-2 text-left max-w-md mx-auto">
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
            <span>High-resolution OLED display for crisp visuals</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
            <span>24/7 heart rate monitoring with health insights</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
            <span>Water-resistant up to 50 meters for worry-free use</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
            <span>Impressive 7-day battery life on a single charge</span>
          </li>
        </ul>
        <p className="text-gray-300 max-w-prose mx-auto ">
          Experience the future on your wrist with our {title}. This
          cutting-edge device combines style with advanced technology, offering
          seamless smartphone integration and a range of health-tracking
          features. Whether you're monitoring your fitness goals or staying
          connected on the go, our smartwatch is the perfect companion for your
          active lifestyle. With its sleek design and powerful capabilities,
          you'll always be one step ahead.
        </p>
      </div>
    </div>
  );
}
