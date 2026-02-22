'use client';

import RegularCard from '@/components/RegularCard';
import CopyBtn from '@/components/CopyBtn';
import GitHubIcon from '@/assets/icons/github-icon';
import WhatsAppIcon from '@/assets/icons/whatsapp-icon';
import { IconBrandLinkedin } from '@tabler/icons-react';
import TelegramIcon from '@/assets/icons/telegram-icon';
import WeChatIcon from '@/assets/icons/wechat-icon';

const EMAIL = 'louiscch314@gmail.com';

export default function ContactCard() {
  const SOCIALS = [
    {
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
    { icon: <WeChatIcon className="fill-[#07C160] size-5" />, href: 'https://wa.me/13682998117', label: 'WeChat' },
  ];

  const content = (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
        Let&apos;s connect and build
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">To change the world.</p>
      {/* Divider */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 mb-4" />

      {/* Email row */}
      <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 mb-6">
        <span className="flex-1 text-sm font-mono text-neutral-700 dark:text-neutral-300 select-all">{EMAIL}</span>
        <CopyBtn email={EMAIL} />
      </div>

      {/* Social links */}
      <div className="flex items-center gap-3">
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
      </div>
    </>
  );

  return <RegularCard content={content} className="p-6" />;
}
