import GitHubIcon from '@/assets/icons/github-icon';
import WhatsAppIcon from '@/assets/icons/whatsapp-icon';
import TelegramIcon from '@/assets/icons/telegram-icon';
import WeChatIcon from '@/assets/icons/wechat-icon';
import { Modal } from '@/components/Modal';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function SocialBtns({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  const wechatModal = (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100 transition-colors cursor-pointer">
        <WeChatIcon className="fill-[#07C160] size-5" />
      </button>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)} title="Scan to add me on WeChat" className="text-center">
        <div className="flex justify-center items-center">
          <Image src="/wechat.webp" alt="WeChat" width={325} height={100} />
        </div>
      </Modal>
    </>
  );

  const SOCIALS = [
    {
      // eslint-disable-next-line @next/next/no-img-element -- Preserving existing img tag for minimal changes
      icon: <img src="/linkedin-icon.svg" alt="My Logo" className="size-5" />,
      href: 'https://www.linkedin.com/in/lcch/',
      label: 'LinkedIn',
    },
    {
      icon: <GitHubIcon className="fill-[#181717] dark:fill-white size-5" />,
      href: 'https://github.com/LouisDev314',
      label: 'GitHub',
    },
    { icon: <WhatsAppIcon className="fill-[#25D366] size-5" />, href: 'https://wa.me/13682998117', label: 'Whatsapp' },
    {
      icon: <TelegramIcon className="fill-[#26A5E4] size-5" />,
      href: 'https://t.me/louisdev314',
      label: 'Telegram',
    },
  ];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {SOCIALS.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100 transition-colors">
          {icon}
        </a>
      ))}
      {wechatModal}
    </div>
  );
}
