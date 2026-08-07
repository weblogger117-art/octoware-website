<div
  className="
    mt-12

    flex
    items-center
    justify-between

    border-t
    border-slate-200

    pt-5
  "
>

  {/* Linke Seite */}

  <div>

    <p className="text-xs text-slate-400">
      © {new Date().getFullYear()} easy-soft GmbH
    </p>

    <div className="mt-3 flex gap-5 text-xs">

      <Link
        href="/impressum"
        className="text-slate-400 transition-colors hover:text-[#146ab1]"
      >
        Impressum
      </Link>

      <Link
        href="/datenschutz"
        className="text-slate-400 transition-colors hover:text-[#146ab1]"
      >
        Datenschutz
      </Link>

    </div>

  </div>

  {/* Rechte Seite */}

  <div className="flex items-center gap-5">

    <Image
      src="/images/certificates/kds-3.webp"
      alt="KDS 3.0 zertifiziert"
      width={56}
      height={56}
      draggable={false}
      className="h-14 w-auto select-none"
    />

    <Image
      src="/images/certificates/epa.webp"
      alt="ePA zertifiziert"
      width={56}
      height={56}
      draggable={false}
      className="h-14 w-auto select-none"
    />

  </div>

</div>
