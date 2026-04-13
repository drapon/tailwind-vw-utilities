const vw = (value) => `calc(${value} / var(--vw-base) * 100vw)`;

const bareValue = (v) => {
  if (/^\d+(\.\d+)?$/.test(v.value)) return v.value;
  return undefined;
};

const opts = { values: { __BARE_VALUE__: bareValue }, type: ["number"] };
const negOpts = {
  values: { __BARE_VALUE__: bareValue },
  type: ["number"],
  supportsNegativeValues: true,
};

export default function ({ matchUtilities, addBase }) {
  // Default --vw-base
  addBase({ ":root": { "--vw-base": "375" } });

  // Base Width Override
  matchUtilities({ "vw-base": (v) => ({ "--vw-base": v }) }, opts);

  // ── Margin (supports negative) ──
  matchUtilities({ "vw-m": (v) => ({ margin: vw(v) }) }, negOpts);
  matchUtilities({ "vw-mx": (v) => ({ "margin-inline": vw(v) }) }, negOpts);
  matchUtilities({ "vw-my": (v) => ({ "margin-block": vw(v) }) }, negOpts);
  matchUtilities({ "vw-mt": (v) => ({ "margin-top": vw(v) }) }, negOpts);
  matchUtilities({ "vw-mr": (v) => ({ "margin-right": vw(v) }) }, negOpts);
  matchUtilities({ "vw-mb": (v) => ({ "margin-bottom": vw(v) }) }, negOpts);
  matchUtilities({ "vw-ml": (v) => ({ "margin-left": vw(v) }) }, negOpts);
  matchUtilities({ "vw-ms": (v) => ({ "margin-inline-start": vw(v) }) }, negOpts);
  matchUtilities({ "vw-me": (v) => ({ "margin-inline-end": vw(v) }) }, negOpts);

  // ── Padding ──
  matchUtilities({ "vw-p": (v) => ({ padding: vw(v) }) }, opts);
  matchUtilities({ "vw-px": (v) => ({ "padding-inline": vw(v) }) }, opts);
  matchUtilities({ "vw-py": (v) => ({ "padding-block": vw(v) }) }, opts);
  matchUtilities({ "vw-pt": (v) => ({ "padding-top": vw(v) }) }, opts);
  matchUtilities({ "vw-pr": (v) => ({ "padding-right": vw(v) }) }, opts);
  matchUtilities({ "vw-pb": (v) => ({ "padding-bottom": vw(v) }) }, opts);
  matchUtilities({ "vw-pl": (v) => ({ "padding-left": vw(v) }) }, opts);
  matchUtilities({ "vw-ps": (v) => ({ "padding-inline-start": vw(v) }) }, opts);
  matchUtilities({ "vw-pe": (v) => ({ "padding-inline-end": vw(v) }) }, opts);

  // ── Gap ──
  matchUtilities({ "vw-gap": (v) => ({ gap: vw(v) }) }, opts);
  matchUtilities({ "vw-gap-x": (v) => ({ "column-gap": vw(v) }) }, opts);
  matchUtilities({ "vw-gap-y": (v) => ({ "row-gap": vw(v) }) }, opts);

  // ── Width ──
  matchUtilities({ "vw-w": (v) => ({ width: vw(v) }) }, opts);
  matchUtilities({ "vw-min-w": (v) => ({ "min-width": vw(v) }) }, opts);
  matchUtilities({ "vw-max-w": (v) => ({ "max-width": vw(v) }) }, opts);

  // ── Height ──
  matchUtilities({ "vw-h": (v) => ({ height: vw(v) }) }, opts);
  matchUtilities({ "vw-min-h": (v) => ({ "min-height": vw(v) }) }, opts);
  matchUtilities({ "vw-max-h": (v) => ({ "max-height": vw(v) }) }, opts);

  // ── Size ──
  matchUtilities(
    { "vw-size": (v) => ({ width: vw(v), height: vw(v) }) },
    opts,
  );

  // ── Font Size ──
  matchUtilities({ "vw-text": (v) => ({ "font-size": vw(v) }) }, opts);

  // ── Line Height ──
  matchUtilities({ "vw-leading": (v) => ({ "line-height": vw(v) }) }, opts);

  // ── Position (supports negative) ──
  matchUtilities({ "vw-inset": (v) => ({ inset: vw(v) }) }, negOpts);
  matchUtilities(
    { "vw-inset-x": (v) => ({ left: vw(v), right: vw(v) }) },
    negOpts,
  );
  matchUtilities(
    { "vw-inset-y": (v) => ({ top: vw(v), bottom: vw(v) }) },
    negOpts,
  );
  matchUtilities({ "vw-top": (v) => ({ top: vw(v) }) }, negOpts);
  matchUtilities({ "vw-right": (v) => ({ right: vw(v) }) }, negOpts);
  matchUtilities({ "vw-bottom": (v) => ({ bottom: vw(v) }) }, negOpts);
  matchUtilities({ "vw-left": (v) => ({ left: vw(v) }) }, negOpts);
  matchUtilities(
    { "vw-start": (v) => ({ "inset-inline-start": vw(v) }) },
    negOpts,
  );
  matchUtilities(
    { "vw-end": (v) => ({ "inset-inline-end": vw(v) }) },
    negOpts,
  );

  // ── Border Radius ──
  matchUtilities(
    { "vw-rounded": (v) => ({ "border-radius": vw(v) }) },
    opts,
  );
  matchUtilities(
    {
      "vw-rounded-t": (v) => ({
        "border-top-left-radius": vw(v),
        "border-top-right-radius": vw(v),
      }),
    },
    opts,
  );
  matchUtilities(
    {
      "vw-rounded-r": (v) => ({
        "border-top-right-radius": vw(v),
        "border-bottom-right-radius": vw(v),
      }),
    },
    opts,
  );
  matchUtilities(
    {
      "vw-rounded-b": (v) => ({
        "border-bottom-left-radius": vw(v),
        "border-bottom-right-radius": vw(v),
      }),
    },
    opts,
  );
  matchUtilities(
    {
      "vw-rounded-l": (v) => ({
        "border-top-left-radius": vw(v),
        "border-bottom-left-radius": vw(v),
      }),
    },
    opts,
  );
  matchUtilities(
    { "vw-rounded-tl": (v) => ({ "border-top-left-radius": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-rounded-tr": (v) => ({ "border-top-right-radius": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-rounded-br": (v) => ({ "border-bottom-right-radius": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-rounded-bl": (v) => ({ "border-bottom-left-radius": vw(v) }) },
    opts,
  );
  matchUtilities(
    {
      "vw-rounded-s": (v) => ({
        "border-start-start-radius": vw(v),
        "border-end-start-radius": vw(v),
      }),
    },
    opts,
  );
  matchUtilities(
    {
      "vw-rounded-e": (v) => ({
        "border-start-end-radius": vw(v),
        "border-end-end-radius": vw(v),
      }),
    },
    opts,
  );
  matchUtilities(
    { "vw-rounded-ss": (v) => ({ "border-start-start-radius": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-rounded-se": (v) => ({ "border-start-end-radius": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-rounded-ee": (v) => ({ "border-end-end-radius": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-rounded-es": (v) => ({ "border-end-start-radius": vw(v) }) },
    opts,
  );

  // ── Border Width ──
  matchUtilities(
    { "vw-border": (v) => ({ "border-width": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-border-t": (v) => ({ "border-top-width": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-border-r": (v) => ({ "border-right-width": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-border-b": (v) => ({ "border-bottom-width": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-border-l": (v) => ({ "border-left-width": vw(v) }) },
    opts,
  );

  // ── Translate (supports negative) ──
  matchUtilities(
    {
      "vw-translate-x": (v) => ({
        "--tw-translate-x": vw(v),
        translate: "var(--tw-translate-x) var(--tw-translate-y)",
      }),
    },
    negOpts,
  );
  matchUtilities(
    {
      "vw-translate-y": (v) => ({
        "--tw-translate-y": vw(v),
        translate: "var(--tw-translate-x) var(--tw-translate-y)",
      }),
    },
    negOpts,
  );

  // ── Scroll Margin ──
  matchUtilities(
    { "vw-scroll-m": (v) => ({ "scroll-margin": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-mx": (v) => ({ "scroll-margin-inline": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-my": (v) => ({ "scroll-margin-block": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-mt": (v) => ({ "scroll-margin-top": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-mr": (v) => ({ "scroll-margin-right": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-mb": (v) => ({ "scroll-margin-bottom": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-ml": (v) => ({ "scroll-margin-left": vw(v) }) },
    opts,
  );

  // ── Scroll Padding ──
  matchUtilities(
    { "vw-scroll-p": (v) => ({ "scroll-padding": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-px": (v) => ({ "scroll-padding-inline": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-py": (v) => ({ "scroll-padding-block": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-pt": (v) => ({ "scroll-padding-top": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-pr": (v) => ({ "scroll-padding-right": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-pb": (v) => ({ "scroll-padding-bottom": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-scroll-pl": (v) => ({ "scroll-padding-left": vw(v) }) },
    opts,
  );

  // ── Space Between ──
  matchUtilities(
    {
      "vw-space-x": (v) => ({
        "& > :not(:last-child)": { "margin-right": vw(v) },
      }),
    },
    opts,
  );
  matchUtilities(
    {
      "vw-space-y": (v) => ({
        "& > :not(:last-child)": { "margin-bottom": vw(v) },
      }),
    },
    opts,
  );

  // ── Divide Width ──
  matchUtilities(
    {
      "vw-divide-x": (v) => ({
        "& > :not(:first-child)": { "border-left-width": vw(v) },
      }),
    },
    opts,
  );
  matchUtilities(
    {
      "vw-divide-y": (v) => ({
        "& > :not(:first-child)": { "border-top-width": vw(v) },
      }),
    },
    opts,
  );

  // ── Flex Basis ──
  matchUtilities(
    { "vw-basis": (v) => ({ "flex-basis": vw(v) }) },
    opts,
  );

  // ── Letter Spacing (supports negative) ──
  matchUtilities(
    { "vw-tracking": (v) => ({ "letter-spacing": vw(v) }) },
    negOpts,
  );

  // ── Text Indent (supports negative) ──
  matchUtilities(
    { "vw-indent": (v) => ({ "text-indent": vw(v) }) },
    negOpts,
  );

  // ── Outline ──
  matchUtilities(
    { "vw-outline": (v) => ({ "outline-width": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-outline-offset": (v) => ({ "outline-offset": vw(v) }) },
    negOpts,
  );

  // ── SVG Stroke Width ──
  matchUtilities(
    { "vw-stroke": (v) => ({ "stroke-width": vw(v) }) },
    opts,
  );

  // ── Text Decoration ──
  matchUtilities(
    { "vw-decoration": (v) => ({ "text-decoration-thickness": vw(v) }) },
    opts,
  );
  matchUtilities(
    { "vw-underline-offset": (v) => ({ "text-underline-offset": vw(v) }) },
    opts,
  );

  // ── Ring ──
  matchUtilities(
    {
      "vw-ring": (v) => ({
        "--tw-ring-offset-shadow":
          "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width, 0px) var(--tw-ring-offset-color, #fff)",
        "--tw-ring-shadow": `var(--tw-ring-inset,) 0 0 0 calc(${vw(v)} + var(--tw-ring-offset-width, 0px)) var(--tw-ring-color, currentColor)`,
        "box-shadow":
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      }),
    },
    opts,
  );
  matchUtilities(
    { "vw-ring-offset": (v) => ({ "--tw-ring-offset-width": vw(v) }) },
    opts,
  );

  // ── Border Spacing ──
  matchUtilities(
    { "vw-border-spacing": (v) => ({ "border-spacing": vw(v) }) },
    opts,
  );
  matchUtilities(
    {
      "vw-border-spacing-x": (v) => ({
        "--tw-border-spacing-x": vw(v),
        "border-spacing":
          "var(--tw-border-spacing-x) var(--tw-border-spacing-y, 0)",
      }),
    },
    opts,
  );
  matchUtilities(
    {
      "vw-border-spacing-y": (v) => ({
        "--tw-border-spacing-y": vw(v),
        "border-spacing":
          "var(--tw-border-spacing-x, 0) var(--tw-border-spacing-y)",
      }),
    },
    opts,
  );
}
