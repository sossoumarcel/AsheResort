export const LOGO_VARIANTS = ['color', 'monochrome'] as const;

export type LogoVariant = typeof LOGO_VARIANTS[number];

export interface LogoProps {
  href?: string;
  variant?: LogoVariant;
  className?: string;
}