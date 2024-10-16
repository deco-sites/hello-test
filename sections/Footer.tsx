import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function Footer({
  href = "http://bohradevelopers.com/",
  text = "Developed By Bohradevelopers",
  alt = "Developed By Bohradevelopers",
  height = 20,
  width = 50,
}: Props) {
  return (
    <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      <a
        href={href}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text}</p>}
      </a>
    </div>
  );
}

export default Footer;
